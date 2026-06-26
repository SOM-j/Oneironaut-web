import "./globals.css";
import BackgroundAudio from "@/components/BackgroundAudio";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Oneironaut. | JMC Matrix",
  description: "Dream management and shadow-personality analysis interface."
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <BackgroundAudio />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
