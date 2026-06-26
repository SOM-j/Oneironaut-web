"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { damp3 } from "maath/easing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DreamParticles({ intensity = 0.42, bias = 0.5 }) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const targetRotation = useRef(new THREE.Vector3());
  const count = 2000;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 0.6 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const i3 = index * 3;
      const spiral = index / count;

      values[i3] = radius * Math.sin(phi) * Math.cos(theta + spiral * 3.2);
      values[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
      values[i3 + 2] = radius * Math.cos(phi) + Math.sin(spiral * 22) * 0.22;
    }

    return values;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const { pointer, clock } = state;
    const time = clock.getElapsedTime();
    const scorePull = THREE.MathUtils.clamp(intensity, 0.12, 1);
    const shadowTilt = (bias - 0.5) * 0.9;

    targetRotation.current.set(
      pointer.y * 0.18 + shadowTilt * 0.2,
      pointer.x * 0.22 + time * 0.035,
      Math.sin(time * 0.18) * 0.045
    );

    damp3(pointsRef.current.rotation, targetRotation.current, 0.38, delta);
    pointsRef.current.position.x = pointer.x * 0.18;
    pointsRef.current.position.y = pointer.y * 0.1 + Math.sin(time * 0.55) * 0.035;
    pointsRef.current.scale.setScalar(1 + Math.sin(time * 0.75) * 0.018 + scorePull * 0.05);

    if (materialRef.current) {
      materialRef.current.opacity = 0.52 + scorePull * 0.28 + Math.sin(time) * 0.025;
      materialRef.current.size = 0.014 + scorePull * 0.006;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        color="#ffffff"
        size={0.016}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticleScene({ intensity, bias }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5.7], fov: 46 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.35} />
        <DreamParticles intensity={intensity} bias={bias} />
      </Canvas>
    </div>
  );
}
