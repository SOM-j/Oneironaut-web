const DIMENSIONS = {
  JUNG_SHADOW: "JUNG_SHADOW",
  MASLOW: "MASLOW",
  DARK_TETRAD: "DARK_TETRAD",
  CONTINUITY: "CONTINUITY"
};

const TRAIT_DEFAULTS = {
  shadow_confrontation: 0,
  shadow_integration: 0,
  anima_animus_projection: 0,
  self_fragmentation: 0,
  safety_deprivation: 0,
  esteem_deprivation: 0,
  belonging_deprivation: 0,
  control_deprivation: 0,
  narcissism: 0,
  machiavellianism: 0,
  psychopathy: 0,
  sadism: 0,
  emotional_continuity: 46,
  scene_fragmentation: 0,
  agency_inflation: 0,
  freud_repression: 0,
  freud_displacement: 0,
  freud_condensation: 0,
  wish_fulfillment: 0,
  oral_fixation: 0,
  castration_anxiety: 0,
  regression: 0
};

export const PSYCHIC_IMAGE_DICTIONARY = [
  {
    id: "falling_void",
    keywords: ["坠落", "下坠", "无限坠落", "掉下去", "深渊", "悬空", "失重"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 27,
    psycho_definition: "现实控制感断裂时，潜意识会把安全感赤字翻译成失重经验：人格正在从秩序楼层滑入原始生存焦虑。"
  },
  {
    id: "drowning",
    keywords: ["溺水", "沉入水底", "淹没", "海啸", "窒息", "无法呼吸", "被水吞没"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 26,
    psycho_definition: "情绪材料长期被理性压扁后，会以水体形式反扑；溺水不是死亡想象，而是阴影内容要求进入意识的暴力请愿。"
  },
  {
    id: "locked_room",
    keywords: ["密室", "无窗房间", "打不开门", "被困", "囚禁", "封闭房间", "锁住"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 24,
    psycho_definition: "密闭空间指向边界系统过载：你把安全感误认为可控环境，潜意识则用囚室提醒你正在被自己的防御结构收押。"
  },
  {
    id: "high_overlook",
    keywords: ["高楼", "悬崖", "高空俯瞰", "天台", "很高的地方", "俯视城市", "玻璃栈道"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 20,
    psycho_definition: "高处视角常是优越性补偿的舞台装置：白天不敢承认的支配欲，夜里会借海拔完成自恋性升格。"
  },
  {
    id: "maze_corridor",
    keywords: ["迷宫", "走廊", "找不到出口", "绕圈", "楼道", "无限走廊", "回到原点"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "重复空间意味着情节连续性低迷：大脑在未解决冲突周围打转，却拒绝给出明确的叙事出口。"
  },
  {
    id: "wildfire",
    keywords: ["大火", "荒野大火", "火灾", "燃烧", "烧毁", "烈焰", "爆炸"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 25,
    psycho_definition: "火是被压抑攻击性的氧化反应；文明外壳越体面，梦里的燃点越低。"
  },
  {
    id: "late_exam",
    keywords: ["考试迟到", "忘记考试", "没复习", "考卷空白", "交白卷", "考场", "迟到"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 24,
    psycho_definition: "考试梦是尊重匮乏的标准化噩梦：你并非害怕题目，而是害怕评价系统突然证明你不配站在原位。"
  },
  {
    id: "naked_public",
    keywords: ["裸体", "赤身裸体", "没穿衣服", "衣服消失", "暴露", "被看见", "羞耻"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 21,
    psycho_definition: "公共裸露把社交人格剥离到零防护状态，暴露的不是身体，而是害怕被群体看穿的归属焦虑。"
  },
  {
    id: "public_speech",
    keywords: ["当众演讲", "上台", "麦克风", "舞台", "讲不出话", "观众", "发言"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 19,
    psycho_definition: "舞台梦把自我价值外包给凝视系统；你越渴望掌声，潜意识越爱让麦克风失灵。"
  },
  {
    id: "group_isolation",
    keywords: ["被孤立", "没人理我", "排挤", "群体孤立", "不被邀请", "被抛下", "冷落"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 23,
    psycho_definition: "群体排斥意象说明依恋雷达处于高灵敏模式：你把沉默读成审判，把距离读成遗弃。"
  },
  {
    id: "elder_judgement",
    keywords: ["长辈", "父亲", "母亲", "老师", "祖父", "审判", "责备", "训斥"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 22,
    psycho_definition: "长辈审判是内化权威的返场演出；梦里骂你的那个人，常常只是你自己训练有素的超我代理。"
  },
  {
    id: "teeth_falling",
    keywords: ["牙齿脱落", "掉牙", "牙碎了", "牙齿松动", "吐出牙", "满嘴牙"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 25,
    psycho_definition: "牙齿脱落把体面、自控和攻击力同时拆掉；这是一种关于衰败、失语与被评价的浓缩恐惧。"
  },
  {
    id: "chased_predator",
    keywords: ["追逐", "追杀", "怪物", "杀手", "逃跑", "被追", "猎人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 28,
    psycho_definition: "白天的文明面具过载，导致潜意识攻击性在深夜具象化为捕食者；你逃的不是它，是被你流放的自己。"
  },
  {
    id: "divine_power",
    keywords: ["神力", "超能力", "飞起来", "操控世界", "造物", "无所不能", "变成神"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 28,
    psycho_definition: "神力意象是自恋补偿的高压蒸汽：现实越感到无力，梦里越需要把自己升级成宇宙管理员。"
  },
  {
    id: "npc_massacre",
    keywords: ["屠杀", "杀很多人", "NPC", "砍杀", "开枪", "血洗", "清场"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "sadism",
    weight: 30,
    psycho_definition: "NPC 屠杀把他者降格为可删除对象，暴露的是情感脱钩后的支配快感，而不是简单的暴力想象。"
  },
  {
    id: "precise_betrayal",
    keywords: ["背叛", "设局", "陷害", "精密计划", "操控", "骗过所有人", "暗算"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 27,
    psycho_definition: "精密背叛说明你的潜意识熟悉权力棋盘；白天说随缘，夜里已经把人际关系拆成可计算的杠杆。"
  },
  {
    id: "witness_torture",
    keywords: ["酷刑", "折磨", "拷问", "被虐待", "目睹酷刑", "惨叫", "刑具"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "sadism",
    weight: 29,
    psycho_definition: "旁观酷刑常是情感隔离的冷光测试：你未必想伤害谁，但你正在训练自己把痛苦当作远景资料。"
  },
  {
    id: "resurrection",
    keywords: ["死而复生", "复活", "又活了", "尸体站起来", "重生", "死了又醒", "棺材"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 24,
    psycho_definition: "复活意象意味着被否认的自我片段正在回收身份；你以为结束的东西，只是换了更难忽视的形态回来。"
  },
  {
    id: "time_stasis",
    keywords: ["时间静止", "停表", "所有人不动", "时间循环", "暂停时间", "卡住", "重复一天"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 24,
    psycho_definition: "时间停滞是心理连续性的冻结反应：系统宁愿让世界暂停，也不愿推进到必须选择的下一帧。"
  },
  {
    id: "crystal_refraction",
    keywords: ["水晶", "晶体", "折射", "棱镜", "发光石头", "矿石", "黑曜石"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 18,
    psycho_definition: "水晶折射象征自我材料被拆成多束光：你不是更神秘了，你只是终于看见人格有多个互相争夺解释权的切面。"
  },
  {
    id: "full_moon_tide",
    keywords: ["满月", "月亮很大", "潮汐", "月光", "海潮", "银色月光", "月亮压下来"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 21,
    psycho_definition: "满月潮汐把集体无意识的引力写进梦境，防御机制会被照亮、拉扯、再撕开。"
  },
  {
    id: "faceless_shadow",
    keywords: ["无面黑影", "黑影", "没有脸", "影子人", "黑色人形", "看不清脸", "暗处的人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 29,
    psycho_definition: "无面黑影是人格未命名区域的投影：它没有脸，因为你还没准备好承认那部分也属于你。"
  },
  {
    id: "mobius_loop",
    keywords: ["莫比乌斯环", "无限循环", "环形走廊", "首尾相接", "翻转空间", "无法结束"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 23,
    psycho_definition: "莫比乌斯结构说明梦的叙事拓扑发生扭转：你以为在前进，其实只是绕着同一处心理结节换面行走。"
  },
  {
    id: "thorn_crown",
    keywords: ["荆棘王冠", "王冠", "戴冠", "流血的冠", "加冕", "刺痛的头", "皇冠"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 24,
    psycho_definition: "荆棘王冠是受害者自恋的宗教化包装：你既想被承认为王，又想让痛苦替你证明资格。"
  },
  {
    id: "twin_mirror",
    keywords: ["双生", "另一个我", "镜像", "镜子里的我", "分身", "一模一样的人", "替身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 26,
    psycho_definition: "双生镜像把自我分裂成观察者与执行者；你越想维持单一人设，梦越爱开第二个账号。"
  },
  {
    id: "elevator_descent",
    keywords: ["电梯", "电梯下坠", "一直向下", "地下层", "负一层", "楼层消失"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 24,
    psycho_definition: "电梯下行是意识被迫进入地下结构，越往下越接近你平时用礼貌和效率封存的原始材料。"
  },
  {
    id: "broken_bridge",
    keywords: ["断桥", "桥塌了", "过不去", "桥断", "悬索桥", "桥上摇晃"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "断桥表示心理过渡功能失灵：旧身份已经离岸，新身份却还没修好承重结构。"
  },
  {
    id: "lost_child",
    keywords: ["迷路的小孩", "孩子走丢", "找孩子", "童年", "小孩哭", "幼年的我"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 22,
    psycho_definition: "迷失儿童是依恋系统的原始报警器，通常指向被成年人格遗弃的需求，而不是单纯的亲子焦虑。"
  },
  {
    id: "rotting_food",
    keywords: ["腐烂食物", "坏掉的饭", "发霉", "臭味", "腐败", "虫子爬满食物"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 17,
    psycho_definition: "腐烂食物暗示滋养系统失效：你得到的资源看似可食用，实际已经被焦虑和厌恶污染。"
  },
  {
    id: "insect_swarm",
    keywords: ["虫群", "很多虫", "蟑螂", "蚂蚁爬", "蛆", "昆虫", "虫子钻进皮肤"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 23,
    psycho_definition: "虫群是微小羞耻的集合体；单个念头无害，成群出现时就变成潜意识的侵蚀性审计。"
  },
  {
    id: "animal_transformation",
    keywords: ["变成动物", "长出爪子", "兽化", "狼", "蛇", "变成鸟", "长出鳞片"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 21,
    psycho_definition: "动物化意味着本能功能回潮，理性人格短暂让位给更古老、更诚实也更难包装的行动系统。"
  },
  {
    id: "blood_on_hands",
    keywords: ["手上有血", "洗不掉血", "血迹", "沾满血", "血", "血从墙里流出"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "psychopathy",
    weight: 25,
    psycho_definition: "血手意象不是犯罪预告，而是责任感与攻击冲动的混合沉淀：你知道某种代价存在，却还在计算它是否值得。"
  },
  {
    id: "faceless_crowd",
    keywords: ["人群", "无脸人群", "所有人看着我", "围观", "陌生人", "人海", "审视"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 18,
    psycho_definition: "无脸人群是评价焦虑的批量渲染；他们没有脸，因为真正的审判者其实在你脑内。"
  },
  {
    id: "vanishing_voice",
    keywords: ["说不出话", "失声", "声音消失", "喊不出来", "嘴被堵住", "无人听见"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 22,
    psycho_definition: "失声梦指向表达权被剥夺：你不是没有语言，而是太熟悉说出来也不会改变局面的无力感。"
  },
  {
    id: "surveillance",
    keywords: ["监控", "摄像头", "被跟踪", "监听", "偷窥", "有人盯着", "定位"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 20,
    psycho_definition: "监控意象常把控制欲反投射成被控制感：你熟悉审视他人的策略，所以也最怕被同样审视。"
  },
  {
    id: "hospital_lab",
    keywords: ["医院", "手术台", "实验室", "白大褂", "被检查", "针管", "解剖"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 20,
    psycho_definition: "医院实验室把身体变成待修设备，说明你的安全感已经退化到对自身系统可靠性的怀疑。"
  },
  {
    id: "empty_city",
    keywords: ["空城", "废墟", "没人", "末日城市", "空荡街道", "停电城市"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 19,
    psycho_definition: "空城是情感连接断电后的城市模型：结构还在，生活迹象被抽空，剩下的是功能性人格的壳。"
  },
  {
    id: "black_dog",
    keywords: ["黑狗", "恶犬", "狗追我", "咬我", "野狗", "犬吠"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 20,
    psycho_definition: "黑犬通常是忠诚本能与攻击本能的混合物；它追你，是因为你长期没有给本能一个合法席位。"
  },
  {
    id: "snake_coil",
    keywords: ["蛇", "蟒蛇", "毒蛇", "蛇缠住", "蛇咬", "蛇窝"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 22,
    psycho_definition: "蛇意象携带欲望、危险与蜕皮的三重编码；它往往不是敌人，而是变化本身长出了牙。"
  },
  {
    id: "money_loss",
    keywords: ["丢钱", "钱包不见", "银行卡", "欠债", "破产", "找不到手机", "重要东西丢了"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 19,
    psycho_definition: "财物丢失是资源安全感的缩略图：你怕的不是那件东西，而是失去可交换价值后的身份裸奔。"
  },
  {
    id: "vehicle_out_of_control",
    keywords: ["刹车失灵", "车失控", "公交失控", "撞车", "开车坠落", "方向盘不听使唤"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 24,
    psycho_definition: "失控车辆把人生路径压缩成机械故障：目标还在前方，控制系统却已经拒绝服从自我叙事。"
  },
  {
    id: "religious_trial",
    keywords: ["神像", "祭坛", "审判日", "教堂", "忏悔", "神罚", "献祭"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 23,
    psycho_definition: "宗教审判是罪疚感的剧场化版本：潜意识不满足于让你内疚，它还要给内疚装上仪式灯光。"
  },
  {
    id: "ice_freeze",
    keywords: ["冰冻", "结冰", "冻住", "雪原", "寒冷", "冰封", "无法动弹"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "冰封场景指向情感运动被暂停，通常发生在你已经太会保持镇定、以至于活力也被一起冻结的时候。"
  },
  {
    id: "luxury_palace",
    keywords: ["宫殿", "豪宅", "奢华", "金色大厅", "王座", "贵族", "红毯"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 19,
    psycho_definition: "奢华建筑是自我价值的外部脚手架；你想住进去的不是房子，而是被世界承认的等级。"
  },
  {
    id: "contract_signature",
    keywords: ["签合同", "契约", "卖掉灵魂", "协议", "按手印", "交易", "谈判"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 21,
    psycho_definition: "契约梦说明你正在用交易逻辑理解亲密和命运；潜意识已经把情感账本做成了可签署文件。"
  },
  {
    id: "mask_party",
    keywords: ["面具", "假面舞会", "伪装", "换脸", "戴面具", "脸变了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 23,
    psycho_definition: "面具意象是人格适配能力的反噬：当你太擅长变成别人需要的样子，梦会问你原脸还剩多少。"
  },
  {
    id: "algorithmic_screen",
    keywords: ["代码", "屏幕", "系统崩溃", "数据", "算法", "乱码", "AI"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 17,
    psycho_definition: "算法屏幕把内心冲突格式化为系统错误；你不是没有情绪，只是把情绪伪装成了调试日志。"
  },
  {
    id: "black_sea",
    keywords: ["黑海", "深海", "海底", "黑色水面", "巨浪", "看不见底"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 25,
    psycho_definition: "黑海是无意识母体的高浓度版本，越看不见底，越说明意识自我正在靠近它无法命名的深层材料。"
  },
  {
    id: "hair_loss_panic",
    keywords: ["头发掉光","掉头发","秃头","头发一把一把掉"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "头发掉光命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "skin_peeling_identity",
    keywords: ["皮肤脱落","蜕皮","皮肤裂开","掉皮"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 22,
    psycho_definition: "皮肤脱落命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "broken_bones_agency",
    keywords: ["骨折","骨头断了","腿断","手断"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 23,
    psycho_definition: "骨折命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "pregnancy_unknown_self",
    keywords: ["怀孕","肚子变大","胎动","生孩子"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 24,
    psycho_definition: "怀孕命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "temporary_blindness",
    keywords: ["看不见","失明","眼前一黑","视野模糊"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 24,
    psycho_definition: "看不见命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "paralysis_bedlock",
    keywords: ["动不了","瘫痪","身体僵住","被压住"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 26,
    psycho_definition: "动不了命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "black_vomit_purge",
    keywords: ["吐黑水","呕吐黑色液体","吐出虫子","恶心呕吐"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 23,
    psycho_definition: "吐黑水命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "exposed_organs",
    keywords: ["内脏外露","肚子打开","看见心脏","身体被剖开"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 28,
    psycho_definition: "内脏外露命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "stitched_mouth",
    keywords: ["嘴巴缝住","嘴被线缝","说话被封住"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 25,
    psycho_definition: "嘴巴缝住命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "missing_limb_loss",
    keywords: ["手臂不见","腿不见","少了一只手","断肢"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 24,
    psycho_definition: "手臂不见命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "rapid_aging",
    keywords: ["突然变老","白发","老得很快","衰老"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 21,
    psycho_definition: "突然变老命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "teeth_grinding",
    keywords: ["磨牙","咬碎牙","牙关很紧","咬不动"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 18,
    psycho_definition: "磨牙命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "mouth_full_sand",
    keywords: ["嘴里是沙","吞沙子","嘴里有土","吐不干净"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 20,
    psycho_definition: "嘴里是沙命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "nail_breaking",
    keywords: ["指甲断裂","指甲脱落","指甲很长","指甲流血"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 17,
    psycho_definition: "指甲断裂命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "body_swelling",
    keywords: ["身体肿胀","脸肿","手肿","身体膨胀"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "castration_anxiety",
    weight: 19,
    psycho_definition: "身体肿胀命中弗洛伊德阉割焦虑层：损坏、失去、暴露或能力失效的意象，常在象征层处理权力、资格与自尊威胁。"
  },
  {
    id: "bleeding_eye",
    keywords: ["眼睛流血","眼球受伤","眼睛裂开","红色眼睛"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 25,
    psycho_definition: "眼睛流血命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "second_face",
    keywords: ["长出第二张脸","脸上还有脸","脸变成别人","双重面孔"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 27,
    psycho_definition: "长出第二张脸命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "voice_childlike",
    keywords: ["声音变小孩","说话像孩子","童声","声音幼稚"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "regression",
    weight: 18,
    psycho_definition: "声音变小孩命中JMC 综合解释层：该意象被纳入多模型联合评分，用来校准阴影、匮乏与现实连续性。"
  },
  {
    id: "uncontrollable_laughter",
    keywords: ["控制不住笑","笑到停不下","诡异大笑","嘴自己笑"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 19,
    psycho_definition: "控制不住笑命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "endless_stairs",
    keywords: ["无限楼梯","爬不完的楼梯","楼梯循环"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 24,
    psycho_definition: "无限楼梯命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "collapsing_house",
    keywords: ["房子塌了","家倒塌","墙裂开","屋顶坍塌"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 27,
    psycho_definition: "房子塌了命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "flooded_basement",
    keywords: ["地下室进水","地下室被淹","积水房间"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 25,
    psycho_definition: "地下室进水命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "anonymous_hotel_room",
    keywords: ["陌生酒店","酒店房间","旅馆","住错房间"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 19,
    psycho_definition: "陌生酒店命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "train_station_delay",
    keywords: ["火车站","赶火车","列车晚点","站台"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 22,
    psycho_definition: "火车站命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "missed_flight",
    keywords: ["错过飞机","机场迷路","登机口关闭"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 23,
    psycho_definition: "错过飞机命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "abandoned_mall",
    keywords: ["废弃商场","空荡商场","商店关门"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 18,
    psycho_definition: "废弃商场命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "underground_tunnel",
    keywords: ["地下通道","隧道","地铁隧道","黑暗通道"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 24,
    psycho_definition: "地下通道命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "glass_room_exposure",
    keywords: ["玻璃房间","透明房间","全是玻璃","被看穿"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 22,
    psycho_definition: "玻璃房间命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "rotating_room",
    keywords: ["房间旋转","空间翻转","方向颠倒"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 25,
    psycho_definition: "房间旋转命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "hidden_door",
    keywords: ["隐藏的门","暗门","墙上出现门"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "隐藏的门命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "library_labyrinth",
    keywords: ["图书馆迷宫","找书","书架无限"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 20,
    psycho_definition: "图书馆迷宫命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "red_room",
    keywords: ["红色房间","红墙","红灯房间","血红空间"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "sadism",
    weight: 23,
    psycho_definition: "红色房间命中暗黑四联体扩展层：该意象显示痛苦观看、支配快感或惩罚幻想，是攻击性被审美化后的暗流。"
  },
  {
    id: "white_corridor",
    keywords: ["白色走廊","白色建筑","消毒水走廊"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 19,
    psycho_definition: "白色走廊命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "narrow_bridge_crossing",
    keywords: ["窄桥","独木桥","桥很窄","桥下深渊"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 22,
    psycho_definition: "窄桥命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "ceiling_lowering",
    keywords: ["天花板下降","房间变矮","被天花板压住"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 24,
    psycho_definition: "天花板下降命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "door_without_handle",
    keywords: ["没有把手的门","门没有锁孔","门消失","门打不开"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 23,
    psycho_definition: "没有把手的门命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "museum_after_hours",
    keywords: ["夜晚博物馆","展品活了","博物馆迷路"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "夜晚博物馆命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "mirror_maze",
    keywords: ["镜子迷宫","很多镜子","镜厅","找不到真身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 26,
    psycho_definition: "镜子迷宫命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "ex_lover_return",
    keywords: ["前任出现","旧爱回来","前男友","前女友"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 20,
    psycho_definition: "前任出现命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "wedding_anxiety",
    keywords: ["婚礼","结婚","穿婚纱","婚礼取消"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 22,
    psycho_definition: "婚礼命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "friend_betrayal",
    keywords: ["朋友背叛","朋友骗我","好友翻脸"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 23,
    psycho_definition: "朋友背叛命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "phone_no_signal",
    keywords: ["手机没信号","电话打不通","无法联系"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 21,
    psycho_definition: "手机没信号命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "unread_messages",
    keywords: ["很多未读消息","消息爆炸","微信红点","回复不了"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 18,
    psycho_definition: "很多未读消息命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "missing_parent",
    keywords: ["父母失踪","找不到父母","妈妈不见","爸爸不见"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 24,
    psycho_definition: "父母失踪命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "stranger_intimacy",
    keywords: ["陌生恋人","和陌生人亲密","陌生伴侣"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 20,
    psycho_definition: "陌生恋人命中荣格阿尼玛/阿尼姆斯投射层：梦把未整合的欲望、温柔、权力或危险投向外部形象，让你误以为那不是自己。"
  },
  {
    id: "crowd_laughter",
    keywords: ["人群嘲笑","大家笑我","被笑","嘲讽声"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 24,
    psycho_definition: "人群嘲笑命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "boss_pressure",
    keywords: ["老板","领导批评","绩效","开会被骂"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 23,
    psycho_definition: "老板命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "colleague_spying",
    keywords: ["同事监视","同事告密","办公室阴谋"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 22,
    psycho_definition: "同事监视命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "social_media_exposed",
    keywords: ["朋友圈曝光","社交媒体出丑","照片被公开"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 23,
    psycho_definition: "朋友圈曝光命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "mistaken_identity",
    keywords: ["被认错","身份错了","名字不是我","证件不对"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 23,
    psycho_definition: "被认错命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "police_questioning",
    keywords: ["警察盘问","被审讯","派出所","被抓"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 21,
    psycho_definition: "警察盘问命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "court_trial",
    keywords: ["法庭","被审判","律师","法官","宣判"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 24,
    psycho_definition: "法庭命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "funeral_scene",
    keywords: ["葬礼","棺材","遗照","参加葬礼"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 23,
    psycho_definition: "葬礼命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "class_reunion_status",
    keywords: ["同学会","老同学","聚会攀比"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "同学会命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "rejected_gift",
    keywords: ["送礼被拒","礼物退回","没人收礼"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 18,
    psycho_definition: "送礼被拒命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "lost_in_family_home",
    keywords: ["老家迷路","家里布局变了","找不到房间"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 21,
    psycho_definition: "老家迷路命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "uninvited_party",
    keywords: ["没有被邀请","派对在门外","名单没有我","被拒门外"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 23,
    psycho_definition: "没有被邀请命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "forgot_password",
    keywords: ["忘记密码","密码错误","打不开账号","登录失败"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 21,
    psycho_definition: "忘记密码命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "locked_phone",
    keywords: ["手机锁住","手机打不开","屏幕锁死"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 20,
    psycho_definition: "手机锁住命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "broken_camera",
    keywords: ["相机坏了","拍不清","照片模糊","镜头裂了"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "相机坏了命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "livestream_exposure",
    keywords: ["直播","被直播","镜头对着我","弹幕骂我"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 25,
    psycho_definition: "直播命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "drone_surveillance",
    keywords: ["无人机","无人机跟着我","空中监视"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 20,
    psycho_definition: "无人机命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "glitch_body",
    keywords: ["身体像故障","像游戏卡住","身体闪烁"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 24,
    psycho_definition: "身体像故障命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "simulation_world",
    keywords: ["模拟世界","虚拟世界","游戏世界","现实不真实"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 25,
    psycho_definition: "模拟世界命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "ai_judge",
    keywords: ["AI审判","机器评分","算法决定命运"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 22,
    psycho_definition: "AI审判命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "biometric_scan",
    keywords: ["刷脸失败","指纹扫描","虹膜识别"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 19,
    psycho_definition: "刷脸失败命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "database_leak",
    keywords: ["数据泄露","资料被公开","档案被盗"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 23,
    psycho_definition: "数据泄露命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "robot_companion",
    keywords: ["机器人陪伴","机械恋人","机器人朋友"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 17,
    psycho_definition: "机器人陪伴命中荣格阿尼玛/阿尼姆斯投射层：梦把未整合的欲望、温柔、权力或危险投向外部形象，让你误以为那不是自己。"
  },
  {
    id: "black_screen_void",
    keywords: ["黑屏","屏幕全黑","设备死机","系统无响应"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "黑屏命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "electric_shock",
    keywords: ["触电","电流穿过身体","被电击","电线缠身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 21,
    psycho_definition: "触电命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "alarm_system",
    keywords: ["警报响","红色警报","系统报警","蜂鸣声"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 21,
    psycho_definition: "警报响命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "endless_notifications",
    keywords: ["通知不停","手机震动不停","消息轰炸"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 18,
    psycho_definition: "通知不停命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "hacked_account",
    keywords: ["账号被盗","被黑客入侵","身份被冒用"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 22,
    psycho_definition: "账号被盗命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "qr_code_portal",
    keywords: ["二维码","扫码失败","二维码变形","扫码进门"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 15,
    psycho_definition: "二维码命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "virtual_avatar",
    keywords: ["虚拟形象","头像活了","数字分身","替身账号"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 22,
    psycho_definition: "虚拟形象命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "charging_cable_knot",
    keywords: ["充电线打结","手机没电","充不上电","电量归零"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 18,
    psycho_definition: "充电线打结命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "knife_in_hand",
    keywords: ["手里拿刀","刀","匕首","菜刀"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "psychopathy",
    weight: 24,
    psycho_definition: "手里拿刀命中暗黑四联体扩展层：该意象显示情感脱钩与冷处理倾向，不等同现实行为，但提示共情闸门正在降低。"
  },
  {
    id: "gun_misfire",
    keywords: ["枪打不响","枪卡壳","开枪失败"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "psychopathy",
    weight: 21,
    psycho_definition: "枪打不响命中暗黑四联体扩展层：该意象显示情感脱钩与冷处理倾向，不等同现实行为，但提示共情闸门正在降低。"
  },
  {
    id: "poison_cup",
    keywords: ["毒药","下毒","喝下毒水","毒酒"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 23,
    psycho_definition: "毒药命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "hiding_corpse",
    keywords: ["藏尸体","处理尸体","尸体在房间"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 28,
    psycho_definition: "藏尸体命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "execution_stage",
    keywords: ["被处决","刑场","枪决","绞刑"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 25,
    psycho_definition: "被处决命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "war_zone",
    keywords: ["战争","战场","炮火","轰炸"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 26,
    psycho_definition: "战争命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "dictator_speech",
    keywords: ["独裁者","发表演讲","万人服从"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 25,
    psycho_definition: "独裁者命中暗黑四联体扩展层：该意象显示自恋补偿倾向，通常来自现实无力感后的身份升格冲动。"
  },
  {
    id: "hostage_scene",
    keywords: ["人质","被绑架","绑住别人","勒索"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 24,
    psycho_definition: "人质命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "duel_challenge",
    keywords: ["决斗","单挑","挑战","擂台"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "psychopathy",
    weight: 19,
    psycho_definition: "决斗命中暗黑四联体扩展层：该意象显示情感脱钩与冷处理倾向，不等同现实行为，但提示共情闸门正在降低。"
  },
  {
    id: "cannibal_table",
    keywords: ["吃人","人肉宴","被迫吃肉"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "sadism",
    weight: 30,
    psycho_definition: "吃人命中暗黑四联体扩展层：该意象显示痛苦观看、支配快感或惩罚幻想，是攻击性被审美化后的暗流。"
  },
  {
    id: "masked_intruder",
    keywords: ["蒙面人","入侵者","闯入家里","陌生人破门"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 27,
    psycho_definition: "蒙面人命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "invisible_enemy",
    keywords: ["看不见的敌人","被无形攻击","隐形人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 22,
    psycho_definition: "看不见的敌人命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "animal_hunt",
    keywords: ["狩猎","猎杀动物","打猎","陷阱捕兽"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "sadism",
    weight: 21,
    psycho_definition: "狩猎命中暗黑四联体扩展层：该意象显示痛苦观看、支配快感或惩罚幻想，是攻击性被审美化后的暗流。"
  },
  {
    id: "trap_mechanism",
    keywords: ["机关陷阱","地雷","踩到机关","暗器"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 22,
    psycho_definition: "机关陷阱命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "interrogation_light",
    keywords: ["审讯灯","强光照脸","被逼问"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 21,
    psycho_definition: "审讯灯命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "red_button",
    keywords: ["红色按钮","按下按钮","核按钮"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "psychopathy",
    weight: 24,
    psycho_definition: "红色按钮命中暗黑四联体扩展层：该意象显示情感脱钩与冷处理倾向，不等同现实行为，但提示共情闸门正在降低。"
  },
  {
    id: "chess_war",
    keywords: ["棋盘战争","下棋决定生死","棋子是人"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 20,
    psycho_definition: "棋盘战争命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "velvet_gloves",
    keywords: ["丝绒手套","白手套","戴手套犯罪"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 18,
    psycho_definition: "丝绒手套命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "blood_contract",
    keywords: ["血契","用血签字","血色合同"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 25,
    psycho_definition: "血契命中暗黑四联体扩展层：该意象显示策略化人际感，梦把关系拆成筹码、权限、监控与可计算变量。"
  },
  {
    id: "storm_window",
    keywords: ["暴风雨","雷雨","窗外风暴","闪电"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 21,
    psycho_definition: "暴风雨命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "tornado_pull",
    keywords: ["龙卷风","被风卷走","旋风"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 24,
    psycho_definition: "龙卷风命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "earthquake_ground",
    keywords: ["地震","地面裂开","房子摇晃"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 28,
    psycho_definition: "地震命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "volcano_eruption",
    keywords: ["火山","岩浆","喷发","熔岩"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 24,
    psycho_definition: "火山命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "eclipse_blackout",
    keywords: ["日食","月食","天突然黑了","黑月"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 25,
    psycho_definition: "日食命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "meteor_fall",
    keywords: ["陨石","流星砸下","天体坠落"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "陨石命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "black_sun",
    keywords: ["黑太阳","太阳变黑","黑色日轮"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 26,
    psycho_definition: "黑太阳命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "desert_thirst",
    keywords: ["沙漠","口渴","荒漠","没有水"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 22,
    psycho_definition: "沙漠命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "jungle_overgrowth",
    keywords: ["丛林","密林","藤蔓缠绕"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 20,
    psycho_definition: "丛林命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "mountain_climb",
    keywords: ["爬山","雪山","高山","登顶"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 19,
    psycho_definition: "爬山命中马斯洛尊重匮乏层：梦正在处理评价、体面和资格感问题，你害怕的不是失败，而是失败被看见。"
  },
  {
    id: "cave_descent",
    keywords: ["洞穴","山洞","地下洞","黑洞口"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 23,
    psycho_definition: "洞穴命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "swamp_sink",
    keywords: ["沼泽","泥潭","陷进泥里"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 23,
    psycho_definition: "沼泽命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "endless_rain",
    keywords: ["大雨不停","暴雨","雨夜","淋湿"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "大雨不停命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "whale_depth",
    keywords: ["鲸鱼","巨鲸","鲸鸣"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "鲸鱼命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "raven_omen",
    keywords: ["乌鸦","黑鸟","鸟群盘旋"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 18,
    psycho_definition: "乌鸦命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "tree_roots",
    keywords: ["树根","根系","被根缠住"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 20,
    psycho_definition: "树根命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "falling_leaves",
    keywords: ["落叶","枯叶","树叶掉光"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 15,
    psycho_definition: "落叶命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "frozen_lake",
    keywords: ["冰湖","湖面结冰","冰下有人"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 21,
    psycho_definition: "冰湖命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "two_moons",
    keywords: ["两个月亮","双月","天空有两个太阳"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 24,
    psycho_definition: "两个月亮命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "tarot_card",
    keywords: ["塔罗牌","抽牌","命运牌","死神牌"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 18,
    psycho_definition: "塔罗牌命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "pendulum_divination",
    keywords: ["摆锤","占卜摆","钟摆"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 16,
    psycho_definition: "摆锤命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "rune_stone",
    keywords: ["卢恩符文","石头符号","古文字"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 17,
    psycho_definition: "卢恩符文命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "alchemy_circle",
    keywords: ["炼金阵","魔法阵","召唤阵"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 22,
    psycho_definition: "炼金阵命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "obsidian_mirror",
    keywords: ["黑曜石镜","黑镜","黑色镜子"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 24,
    psycho_definition: "黑曜石镜命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "third_eye",
    keywords: ["第三只眼","额头眼睛","天眼"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 18,
    psycho_definition: "第三只眼命中暗黑四联体扩展层：该意象显示自恋补偿倾向，通常来自现实无力感后的身份升格冲动。"
  },
  {
    id: "sigil_mark",
    keywords: ["魔法符号","印记","咒文","符咒"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 18,
    psycho_definition: "魔法符号命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "black_candle",
    keywords: ["黑蜡烛","蜡烛熄灭","烛火"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 17,
    psycho_definition: "黑蜡烛命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "mandala_labyrinth",
    keywords: ["曼陀罗","圆形迷宫","几何花纹"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 18,
    psycho_definition: "曼陀罗命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "oracle_voice",
    keywords: ["神谕","空中声音","听到预言"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 19,
    psycho_definition: "神谕命中荣格阿尼玛/阿尼姆斯投射层：梦把未整合的欲望、温柔、权力或危险投向外部形象，让你误以为那不是自己。"
  },
  {
    id: "angel_demon_pair",
    keywords: ["天使和恶魔","恶魔出现","黑翼","白翼"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 24,
    psycho_definition: "天使和恶魔命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "ouroboros",
    keywords: ["衔尾蛇","蛇咬尾巴","圆形蛇"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "衔尾蛇命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "sacred_geometry",
    keywords: ["神圣几何","几何阵","多面体"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 16,
    psycho_definition: "神圣几何命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "crystal_skull",
    keywords: ["水晶骷髅","骷髅发光","透明头骨"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 21,
    psycho_definition: "水晶骷髅命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "golden_thread",
    keywords: ["金线","发光线","命运线"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 17,
    psycho_definition: "金线命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "astral_projection",
    keywords: ["灵魂出窍","漂在身体外","俯视自己"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 23,
    psycho_definition: "灵魂出窍命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "shadow_double",
    keywords: ["影子分身","黑色另一个我","影子活了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 28,
    psycho_definition: "影子分身命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "clock_tower",
    keywords: ["钟楼","大钟","钟声","时间塔"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "钟楼命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "sealed_grimoire",
    keywords: ["魔法书","黑色书","封印的书","书上有咒语"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 21,
    psycho_definition: "魔法书命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "single_key",
    keywords: ["钥匙","钥匙丢了","钥匙断了","找钥匙"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 21,
    psycho_definition: "钥匙命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "heavy_suitcase",
    keywords: ["行李箱","箱子很重","拖箱子"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 19,
    psycho_definition: "行李箱命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "broken_clock",
    keywords: ["钟坏了","手表停了","时间不走"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "钟坏了命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "red_shoes",
    keywords: ["红鞋","鞋子不合脚","红色高跟鞋"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "narcissism",
    weight: 17,
    psycho_definition: "红鞋命中暗黑四联体扩展层：该意象显示自恋补偿倾向，通常来自现实无力感后的身份升格冲动。"
  },
  {
    id: "black_coat",
    keywords: ["黑色外套","黑衣","黑色西装","黑袍"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 18,
    psycho_definition: "黑色外套命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "locked_drawer",
    keywords: ["抽屉锁住","打不开抽屉","秘密抽屉"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 20,
    psycho_definition: "抽屉锁住命中荣格阴影整合层：该意象不是噩梦装饰，而是潜意识把被分裂的自我材料重新送回意识边界。"
  },
  {
    id: "old_photograph",
    keywords: ["旧照片","照片里的人","相册","黑白照片"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 19,
    psycho_definition: "旧照片命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "spilled_milk",
    keywords: ["牛奶洒了","白色液体","奶瓶碎了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "oral_fixation",
    weight: 16,
    psycho_definition: "牛奶洒了命中弗洛伊德口欲层：吞咽、食物、液体和口腔意象指向依赖、匮乏、索取与被滋养的不安。"
  },
  {
    id: "rotten_flower",
    keywords: ["花枯萎","花腐烂","黑色花"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 17,
    psycho_definition: "花枯萎命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "cracked_mirror",
    keywords: ["镜子裂了","破镜子","镜面碎裂"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "self_fragmentation",
    weight: 25,
    psycho_definition: "镜子裂了命中荣格自体碎裂层：人格面具无法继续维持单一叙事，梦境用分身、裂缝或异化形态暴露内部断层。"
  },
  {
    id: "black_umbrella",
    keywords: ["黑伞","伞破了","雨伞打不开"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "safety_deprivation",
    weight: 18,
    psycho_definition: "黑伞命中马斯洛安全匮乏层：该意象指向基本安全底盘松动，现实中的风险、资源或身体焦虑被压缩成梦境警报。"
  },
  {
    id: "blank_map",
    keywords: ["空白地图","地图看不懂","导航失灵"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 24,
    psycho_definition: "空白地图命中梦境连续性假说层：场景断裂、循环或卡顿代表现实叙事无法闭合，大脑正在冲突周围反复索引。"
  },
  {
    id: "blank_book",
    keywords: ["空白书","书没有字","书页消失"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "空白书命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "pen_no_ink",
    keywords: ["笔没墨","写不出来","签不了名"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "control_deprivation",
    weight: 20,
    psycho_definition: "笔没墨命中马斯洛控制匮乏层：梦把主体性失灵做成机关、故障或封锁，说明你正在现实里失去可操作感。"
  },
  {
    id: "necklace_chain",
    keywords: ["项链","项链断了","吊坠"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 16,
    psycho_definition: "项链命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "ring_missing",
    keywords: ["戒指丢了","戒指碎了","戒指太紧"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 21,
    psycho_definition: "戒指丢了命中马斯洛归属匮乏层：该意象把亲密断线、群体排斥和依恋不确定性渲染成可见场景。"
  },
  {
    id: "doorbell_noise",
    keywords: ["门铃响","有人敲门","门外有人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_confrontation",
    weight: 20,
    psycho_definition: "门铃响命中荣格阴影对峙层：梦把被白天人格驱逐的攻击、羞耻或恐惧推到台前，逼迫意识承认它并非外来物。"
  },
  {
    id: "mailbox_letter",
    keywords: ["信箱","收到信","匿名信","信封"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 17,
    psycho_definition: "信箱命中梦境连续性假说层：它把白天未完成的情绪账单延续到夜里，说明梦并非随机，而是现实残影的续写。"
  },
  {
    id: "overflowing_cup",
    keywords: ["杯子满溢","水杯溢出","杯子碎了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "oral_fixation",
    weight: 18,
    psycho_definition: "杯子满溢命中弗洛伊德口欲层：吞咽、食物、液体和口腔意象指向依赖、匮乏、索取与被滋养的不安。"
  },
  {
    id: "social_stigma_crazy_stupid",
    keywords: ["别人觉得我疯","认为我疯","又疯又傻","被说疯","被说傻","别人觉得我傻"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 25,
    psycho_definition: "被贴上“疯傻”标签命中马斯洛尊重匮乏层：梦把外界评价压缩成羞耻烙印，你真正害怕的是自己的复杂性被粗暴降级。"
  },
  {
    id: "boutique_part_time_identity",
    keywords: ["精品店","做兼职","兼职店员","店里打工","下班后","门店兼职"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "emotional_continuity",
    weight: 18,
    psycho_definition: "精品店兼职命中梦境连续性假说：白天的角色劳动延续进梦里，说明你正在用服务者身份测试自己的价值、品味与可见度。"
  },
  {
    id: "red_polka_dot_socks",
    keywords: ["红色波点袜子","波点袜子","红袜子","那双袜子","一双红色袜子"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "wish_fulfillment",
    weight: 22,
    psycho_definition: "红色波点袜子命中弗洛伊德愿望满足层：袜子是小而私密的欲望载体，红色把被压低的喜欢、展示欲和少女式占有感点亮。"
  },
  {
    id: "desired_object_purchase",
    keywords: ["我要回去买","回去买","想买","喜欢那双","很喜欢那双"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 18,
    psycho_definition: "想回去购买命中马斯洛尊重匮乏层：梦里的“买下”不只是消费，而是把喜欢的东西合法归入自我形象。"
  },
  {
    id: "lover_gift_preemption",
    keywords: ["他帮我买好了","帮我买好了","替我买了","已经买好了","给我买好了"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 23,
    psycho_definition: "喜欢的人提前买好命中马斯洛归属匮乏层：亲密对象替你完成愿望，既像被懂得，也像主体性被温柔地抢先一步。"
  },
  {
    id: "repeated_conversation_gap",
    keywords: ["已经和他说过","我说过了","他说我说过","重复说过","早就说过"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 21,
    psycho_definition: "重复对话命中梦境连续性假说：梦在制造叙事断层，让你怀疑自己是否真的掌握了关系中的主动记忆。"
  },
  {
    id: "missing_memory_gap",
    keywords: ["没有这段记忆","我不记得","没有记忆","记忆缺失","忘了这件事","想不起来"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 28,
    psycho_definition: "记忆缺口命中梦境连续性假说与弗洛伊德压抑层：被删掉的不是信息，而是一个你不确定能否承受的情感证据。"
  },
  {
    id: "intimate_witness",
    keywords: ["我喜欢的人","喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "anima_animus_projection",
    weight: 19,
    psycho_definition: "喜欢的人命中荣格投射层：对方不只是恋爱对象，也承载了你未整合的被理解、被选择和被确认的欲望。"
  },
  {
    id: "small_clothing_desire",
    keywords: ["袜子","衣物小件","配饰","小物件","穿在身上"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 16,
    psycho_definition: "袜子这类贴身小物命中弗洛伊德置换层：真正的欲望被转移到低风险物件上，方便你表达喜欢，又不必直接暴露需求。"
  },
  {
    id: "taste_being_seen",
    keywords: ["我的品味","喜欢被看见","他知道我喜欢","被懂得","有人记得我喜欢"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "belonging_deprivation",
    weight: 20,
    psycho_definition: "被记得品味命中归属匮乏层：你想要的不是袜子本身，而是有人准确记住你微小偏好的亲密证据。"
  },
  {
    id: "micro_red_jung",
    keywords: ["红色","鲜红","猩红","红点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：红色（欲望暴露与羞耻发光）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_red_maslow",
    keywords: ["红色","鲜红","猩红","红点"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：红色（欲望暴露与羞耻发光）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_red_continuity",
    keywords: ["红色","鲜红","猩红","红点"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：红色（欲望暴露与羞耻发光）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_red_freud",
    keywords: ["红色","鲜红","猩红","红点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：红色（欲望暴露与羞耻发光）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_red_dark",
    keywords: ["红色","鲜红","猩红","红点"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：红色（欲望暴露与羞耻发光）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_polka_jung",
    keywords: ["波点","圆点","点点","红色波点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：波点（重复图案与凝缩焦虑）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_polka_maslow",
    keywords: ["波点","圆点","点点","红色波点"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：波点（重复图案与凝缩焦虑）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_polka_continuity",
    keywords: ["波点","圆点","点点","红色波点"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：波点（重复图案与凝缩焦虑）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_polka_freud",
    keywords: ["波点","圆点","点点","红色波点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：波点（重复图案与凝缩焦虑）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_polka_dark",
    keywords: ["波点","圆点","点点","红色波点"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：波点（重复图案与凝缩焦虑）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_socks_jung",
    keywords: ["袜子","红袜子","波点袜子","那双袜子"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：袜子（贴身小物与私密欲望）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_socks_maslow",
    keywords: ["袜子","红袜子","波点袜子","那双袜子"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：袜子（贴身小物与私密欲望）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_socks_continuity",
    keywords: ["袜子","红袜子","波点袜子","那双袜子"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：袜子（贴身小物与私密欲望）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_socks_freud",
    keywords: ["袜子","红袜子","波点袜子","那双袜子"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：袜子（贴身小物与私密欲望）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_socks_dark",
    keywords: ["袜子","红袜子","波点袜子","那双袜子"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：袜子（贴身小物与私密欲望）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_boutique_jung",
    keywords: ["精品店","精品小店","店里","门店"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：精品店（审美系统与价值陈列）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_boutique_maslow",
    keywords: ["精品店","精品小店","店里","门店"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：精品店（审美系统与价值陈列）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_boutique_continuity",
    keywords: ["精品店","精品小店","店里","门店"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：精品店（审美系统与价值陈列）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_boutique_freud",
    keywords: ["精品店","精品小店","店里","门店"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：精品店（审美系统与价值陈列）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_boutique_dark",
    keywords: ["精品店","精品小店","店里","门店"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：精品店（审美系统与价值陈列）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_part_time_jung",
    keywords: ["兼职","做兼职","打工","店员"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：兼职（临时身份与低位劳动）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_part_time_maslow",
    keywords: ["兼职","做兼职","打工","店员"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：兼职（临时身份与低位劳动）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_part_time_continuity",
    keywords: ["兼职","做兼职","打工","店员"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：兼职（临时身份与低位劳动）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_part_time_freud",
    keywords: ["兼职","做兼职","打工","店员"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：兼职（临时身份与低位劳动）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_part_time_dark",
    keywords: ["兼职","做兼职","打工","店员"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：兼职（临时身份与低位劳动）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_after_work_jung",
    keywords: ["下班","下班后","收工","离店"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：下班（角色切换后的真实欲望）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_after_work_maslow",
    keywords: ["下班","下班后","收工","离店"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：下班（角色切换后的真实欲望）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_after_work_continuity",
    keywords: ["下班","下班后","收工","离店"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：下班（角色切换后的真实欲望）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_after_work_freud",
    keywords: ["下班","下班后","收工","离店"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：下班（角色切换后的真实欲望）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_after_work_dark",
    keywords: ["下班","下班后","收工","离店"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：下班（角色切换后的真实欲望）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_crush_jung",
    keywords: ["喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：喜欢的人（亲密投射与被选择欲）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_crush_maslow",
    keywords: ["喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：喜欢的人（亲密投射与被选择欲）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_crush_continuity",
    keywords: ["喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：喜欢的人（亲密投射与被选择欲）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_crush_freud",
    keywords: ["喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：喜欢的人（亲密投射与被选择欲）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_crush_dark",
    keywords: ["喜欢的人","暗恋的人","心动的人","在意的人"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：喜欢的人（亲密投射与被选择欲）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_pre_bought_jung",
    keywords: ["买好了","帮我买好了","替我买了","给我买好了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：买好了（愿望被抢先满足）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_pre_bought_maslow",
    keywords: ["买好了","帮我买好了","替我买了","给我买好了"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：买好了（愿望被抢先满足）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_pre_bought_continuity",
    keywords: ["买好了","帮我买好了","替我买了","给我买好了"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：买好了（愿望被抢先满足）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_pre_bought_freud",
    keywords: ["买好了","帮我买好了","替我买了","给我买好了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：买好了（愿望被抢先满足）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_pre_bought_dark",
    keywords: ["买好了","帮我买好了","替我买了","给我买好了"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：买好了（愿望被抢先满足）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_memory_gap_jung",
    keywords: ["没有这段记忆","不记得","没有记忆","想不起来"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：没有记忆（叙事断片与压抑空白）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_memory_gap_maslow",
    keywords: ["没有这段记忆","不记得","没有记忆","想不起来"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：没有记忆（叙事断片与压抑空白）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_memory_gap_continuity",
    keywords: ["没有这段记忆","不记得","没有记忆","想不起来"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：没有记忆（叙事断片与压抑空白）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_memory_gap_freud",
    keywords: ["没有这段记忆","不记得","没有记忆","想不起来"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：没有记忆（叙事断片与压抑空白）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_memory_gap_dark",
    keywords: ["没有这段记忆","不记得","没有记忆","想不起来"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：没有记忆（叙事断片与压抑空白）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_crazy_label_jung",
    keywords: ["疯又傻","认为我疯","觉得我傻","被说疯"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：疯傻标签（社会评价降级）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_crazy_label_maslow",
    keywords: ["疯又傻","认为我疯","觉得我傻","被说疯"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：疯傻标签（社会评价降级）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_crazy_label_continuity",
    keywords: ["疯又傻","认为我疯","觉得我傻","被说疯"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：疯傻标签（社会评价降级）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_crazy_label_freud",
    keywords: ["疯又傻","认为我疯","觉得我傻","被说疯"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：疯傻标签（社会评价降级）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_crazy_label_dark",
    keywords: ["疯又傻","认为我疯","觉得我傻","被说疯"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：疯傻标签（社会评价降级）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_repeated_told_jung",
    keywords: ["已经说过","说过了","他说我说过","重复说过"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：已经说过（重复话语与时间线错位）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_repeated_told_maslow",
    keywords: ["已经说过","说过了","他说我说过","重复说过"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：已经说过（重复话语与时间线错位）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_repeated_told_continuity",
    keywords: ["已经说过","说过了","他说我说过","重复说过"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：已经说过（重复话语与时间线错位）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_repeated_told_freud",
    keywords: ["已经说过","说过了","他说我说过","重复说过"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：已经说过（重复话语与时间线错位）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_repeated_told_dark",
    keywords: ["已经说过","说过了","他说我说过","重复说过"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：已经说过（重复话语与时间线错位）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_return_buy_jung",
    keywords: ["回去买","我要回去买","想买","想拥有"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：回去买（欲望回收与自主购买）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_return_buy_maslow",
    keywords: ["回去买","我要回去买","想买","想拥有"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：回去买（欲望回收与自主购买）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_return_buy_continuity",
    keywords: ["回去买","我要回去买","想买","想拥有"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：回去买（欲望回收与自主购买）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_return_buy_freud",
    keywords: ["回去买","我要回去买","想买","想拥有"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：回去买（欲望回收与自主购买）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_return_buy_dark",
    keywords: ["回去买","我要回去买","想买","想拥有"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：回去买（欲望回收与自主购买）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_small_object_jung",
    keywords: ["小物件","小东西","配饰","可爱东西"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：小物件（低风险欲望容器）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_small_object_maslow",
    keywords: ["小物件","小东西","配饰","可爱东西"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：小物件（低风险欲望容器）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_small_object_continuity",
    keywords: ["小物件","小东西","配饰","可爱东西"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：小物件（低风险欲望容器）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_small_object_freud",
    keywords: ["小物件","小东西","配饰","可爱东西"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：小物件（低风险欲望容器）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_small_object_dark",
    keywords: ["小物件","小东西","配饰","可爱东西"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：小物件（低风险欲望容器）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_gift_jung",
    keywords: ["礼物","送我","收到东西","包装好"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：礼物（亲密证据与人情债）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_gift_maslow",
    keywords: ["礼物","送我","收到东西","包装好"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：礼物（亲密证据与人情债）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_gift_continuity",
    keywords: ["礼物","送我","收到东西","包装好"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：礼物（亲密证据与人情债）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_gift_freud",
    keywords: ["礼物","送我","收到东西","包装好"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：礼物（亲密证据与人情债）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_gift_dark",
    keywords: ["礼物","送我","收到东西","包装好"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：礼物（亲密证据与人情债）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_shop_window_jung",
    keywords: ["橱窗","展示柜","陈列","玻璃柜"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：橱窗（被观看的审美欲望）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_shop_window_maslow",
    keywords: ["橱窗","展示柜","陈列","玻璃柜"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：橱窗（被观看的审美欲望）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_shop_window_continuity",
    keywords: ["橱窗","展示柜","陈列","玻璃柜"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：橱窗（被观看的审美欲望）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_shop_window_freud",
    keywords: ["橱窗","展示柜","陈列","玻璃柜"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：橱窗（被观看的审美欲望）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_shop_window_dark",
    keywords: ["橱窗","展示柜","陈列","玻璃柜"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：橱窗（被观看的审美欲望）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_fitting_mirror_jung",
    keywords: ["试衣镜","镜子","照镜子","镜前"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：试衣镜（自我形象的切面）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_fitting_mirror_maslow",
    keywords: ["试衣镜","镜子","照镜子","镜前"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：试衣镜（自我形象的切面）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_fitting_mirror_continuity",
    keywords: ["试衣镜","镜子","照镜子","镜前"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：试衣镜（自我形象的切面）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_fitting_mirror_freud",
    keywords: ["试衣镜","镜子","照镜子","镜前"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：试衣镜（自我形象的切面）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_fitting_mirror_dark",
    keywords: ["试衣镜","镜子","照镜子","镜前"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：试衣镜（自我形象的切面）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_price_tag_jung",
    keywords: ["价格牌","价签","标价","多少钱"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：价格牌（自我价值的量化焦虑）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_price_tag_maslow",
    keywords: ["价格牌","价签","标价","多少钱"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：价格牌（自我价值的量化焦虑）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_price_tag_continuity",
    keywords: ["价格牌","价签","标价","多少钱"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：价格牌（自我价值的量化焦虑）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_price_tag_freud",
    keywords: ["价格牌","价签","标价","多少钱"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：价格牌（自我价值的量化焦虑）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_price_tag_dark",
    keywords: ["价格牌","价签","标价","多少钱"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：价格牌（自我价值的量化焦虑）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_receipt_jung",
    keywords: ["小票","收据","购买凭证","票据"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：小票（现实凭证与记忆证据）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_receipt_maslow",
    keywords: ["小票","收据","购买凭证","票据"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：小票（现实凭证与记忆证据）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_receipt_continuity",
    keywords: ["小票","收据","购买凭证","票据"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：小票（现实凭证与记忆证据）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_receipt_freud",
    keywords: ["小票","收据","购买凭证","票据"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：小票（现实凭证与记忆证据）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_receipt_dark",
    keywords: ["小票","收据","购买凭证","票据"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：小票（现实凭证与记忆证据）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_sold_out_jung",
    keywords: ["卖完","被买走","没有货","售罄"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：卖完（错失与稀缺焦虑）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_sold_out_maslow",
    keywords: ["卖完","被买走","没有货","售罄"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：卖完（错失与稀缺焦虑）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_sold_out_continuity",
    keywords: ["卖完","被买走","没有货","售罄"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：卖完（错失与稀缺焦虑）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_sold_out_freud",
    keywords: ["卖完","被买走","没有货","售罄"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：卖完（错失与稀缺焦虑）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_sold_out_dark",
    keywords: ["卖完","被买走","没有货","售罄"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：卖完（错失与稀缺焦虑）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_reserved_jung",
    keywords: ["预留","留给我","保留","提前留好"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：预留（被特殊对待的渴望）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_reserved_maslow",
    keywords: ["预留","留给我","保留","提前留好"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：预留（被特殊对待的渴望）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_reserved_continuity",
    keywords: ["预留","留给我","保留","提前留好"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：预留（被特殊对待的渴望）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_reserved_freud",
    keywords: ["预留","留给我","保留","提前留好"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：预留（被特殊对待的渴望）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_reserved_dark",
    keywords: ["预留","留给我","保留","提前留好"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：预留（被特殊对待的渴望）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_soft_texture_jung",
    keywords: ["柔软","软软的","摸起来舒服","贴身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：柔软（被安抚与身体边界）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_soft_texture_maslow",
    keywords: ["柔软","软软的","摸起来舒服","贴身"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：柔软（被安抚与身体边界）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_soft_texture_continuity",
    keywords: ["柔软","软软的","摸起来舒服","贴身"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：柔软（被安抚与身体边界）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_soft_texture_freud",
    keywords: ["柔软","软软的","摸起来舒服","贴身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：柔软（被安抚与身体边界）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_soft_texture_dark",
    keywords: ["柔软","软软的","摸起来舒服","贴身"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：柔软（被安抚与身体边界）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_tight_fit_jung",
    keywords: ["太紧","勒住","穿不上","尺码不对"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：太紧（资格不合与身体束缚）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_tight_fit_maslow",
    keywords: ["太紧","勒住","穿不上","尺码不对"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：太紧（资格不合与身体束缚）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_tight_fit_continuity",
    keywords: ["太紧","勒住","穿不上","尺码不对"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：太紧（资格不合与身体束缚）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_tight_fit_freud",
    keywords: ["太紧","勒住","穿不上","尺码不对"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：太紧（资格不合与身体束缚）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_tight_fit_dark",
    keywords: ["太紧","勒住","穿不上","尺码不对"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：太紧（资格不合与身体束缚）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_wrong_size_jung",
    keywords: ["尺码","大小不对","不合脚","不合身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：尺码（自我适配失败）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_wrong_size_maslow",
    keywords: ["尺码","大小不对","不合脚","不合身"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：尺码（自我适配失败）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_wrong_size_continuity",
    keywords: ["尺码","大小不对","不合脚","不合身"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：尺码（自我适配失败）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_wrong_size_freud",
    keywords: ["尺码","大小不对","不合脚","不合身"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：尺码（自我适配失败）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_wrong_size_dark",
    keywords: ["尺码","大小不对","不合脚","不合身"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：尺码（自我适配失败）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_red_dot_jung",
    keywords: ["红点","红色点点","红色圆点","小红点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：红点（羞耻标记与凝视）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_red_dot_maslow",
    keywords: ["红点","红色点点","红色圆点","小红点"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：红点（羞耻标记与凝视）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_red_dot_continuity",
    keywords: ["红点","红色点点","红色圆点","小红点"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：红点（羞耻标记与凝视）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_red_dot_freud",
    keywords: ["红点","红色点点","红色圆点","小红点"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：红点（羞耻标记与凝视）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_red_dot_dark",
    keywords: ["红点","红色点点","红色圆点","小红点"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：红点（羞耻标记与凝视）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_pair_jung",
    keywords: ["一双","成双","一对","两只"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：成双（关系配对与归属幻想）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_pair_maslow",
    keywords: ["一双","成双","一对","两只"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：成双（关系配对与归属幻想）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_pair_continuity",
    keywords: ["一双","成双","一对","两只"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：成双（关系配对与归属幻想）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_pair_freud",
    keywords: ["一双","成双","一对","两只"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：成双（关系配对与归属幻想）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_pair_dark",
    keywords: ["一双","成双","一对","两只"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：成双（关系配对与归属幻想）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_unowned_jung",
    keywords: ["还没买","还不是我的","没拥有","拿不到"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：未拥有（欲望悬置）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_unowned_maslow",
    keywords: ["还没买","还不是我的","没拥有","拿不到"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：未拥有（欲望悬置）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_unowned_continuity",
    keywords: ["还没买","还不是我的","没拥有","拿不到"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：未拥有（欲望悬置）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_unowned_freud",
    keywords: ["还没买","还不是我的","没拥有","拿不到"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：未拥有（欲望悬置）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_unowned_dark",
    keywords: ["还没买","还不是我的","没拥有","拿不到"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：未拥有（欲望悬置）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_owned_without_memory_jung",
    keywords: ["已经是我的","我却不记得","不记得拥有","买了却忘了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：无记忆拥有（拥有权与记忆断裂）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_owned_without_memory_maslow",
    keywords: ["已经是我的","我却不记得","不记得拥有","买了却忘了"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：无记忆拥有（拥有权与记忆断裂）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_owned_without_memory_continuity",
    keywords: ["已经是我的","我却不记得","不记得拥有","买了却忘了"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：无记忆拥有（拥有权与记忆断裂）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_owned_without_memory_freud",
    keywords: ["已经是我的","我却不记得","不记得拥有","买了却忘了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：无记忆拥有（拥有权与记忆断裂）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_owned_without_memory_dark",
    keywords: ["已经是我的","我却不记得","不记得拥有","买了却忘了"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：无记忆拥有（拥有权与记忆断裂）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_taste_jung",
    keywords: ["品味","我喜欢","很喜欢","审美"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：品味（自我风格被看见）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_taste_maslow",
    keywords: ["品味","我喜欢","很喜欢","审美"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：品味（自我风格被看见）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_taste_continuity",
    keywords: ["品味","我喜欢","很喜欢","审美"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：品味（自我风格被看见）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_taste_freud",
    keywords: ["品味","我喜欢","很喜欢","审美"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：品味（自我风格被看见）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_taste_dark",
    keywords: ["品味","我喜欢","很喜欢","审美"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：品味（自我风格被看见）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_being_seen_jung",
    keywords: ["被看见","他知道","别人知道","被发现"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：被看见（私密偏好暴露）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_being_seen_maslow",
    keywords: ["被看见","他知道","别人知道","被发现"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：被看见（私密偏好暴露）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_being_seen_continuity",
    keywords: ["被看见","他知道","别人知道","被发现"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：被看见（私密偏好暴露）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_being_seen_freud",
    keywords: ["被看见","他知道","别人知道","被发现"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：被看见（私密偏好暴露）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_being_seen_dark",
    keywords: ["被看见","他知道","别人知道","被发现"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：被看见（私密偏好暴露）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_others_think_jung",
    keywords: ["其他人认为","别人认为","大家觉得","他们觉得"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：其他人认为（群体审判）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_others_think_maslow",
    keywords: ["其他人认为","别人认为","大家觉得","他们觉得"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：其他人认为（群体审判）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_others_think_continuity",
    keywords: ["其他人认为","别人认为","大家觉得","他们觉得"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：其他人认为（群体审判）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_others_think_freud",
    keywords: ["其他人认为","别人认为","大家觉得","他们觉得"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：其他人认为（群体审判）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_others_think_dark",
    keywords: ["其他人认为","别人认为","大家觉得","他们觉得"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：其他人认为（群体审判）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_foolishness_jung",
    keywords: ["傻","笨","蠢","愚蠢"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：傻（智性羞辱）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_foolishness_maslow",
    keywords: ["傻","笨","蠢","愚蠢"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：傻（智性羞辱）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_foolishness_continuity",
    keywords: ["傻","笨","蠢","愚蠢"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：傻（智性羞辱）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_foolishness_freud",
    keywords: ["傻","笨","蠢","愚蠢"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：傻（智性羞辱）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_foolishness_dark",
    keywords: ["傻","笨","蠢","愚蠢"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：傻（智性羞辱）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_madness_jung",
    keywords: ["疯","发疯","不正常","精神不对"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：疯（理智身份威胁）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_madness_maslow",
    keywords: ["疯","发疯","不正常","精神不对"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：疯（理智身份威胁）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_madness_continuity",
    keywords: ["疯","发疯","不正常","精神不对"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：疯（理智身份威胁）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_madness_freud",
    keywords: ["疯","发疯","不正常","精神不对"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：疯（理智身份威胁）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_madness_dark",
    keywords: ["疯","发疯","不正常","精神不对"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：疯（理智身份威胁）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_conversation_jung",
    keywords: ["和他说","他说","说话","聊天"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：对话（关系中的叙事权）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_conversation_maslow",
    keywords: ["和他说","他说","说话","聊天"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：对话（关系中的叙事权）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_conversation_continuity",
    keywords: ["和他说","他说","说话","聊天"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：对话（关系中的叙事权）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_conversation_freud",
    keywords: ["和他说","他说","说话","聊天"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：对话（关系中的叙事权）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_conversation_dark",
    keywords: ["和他说","他说","说话","聊天"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：对话（关系中的叙事权）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_no_recall_jung",
    keywords: ["想不起来","记不起来","忘记了","断片"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：想不起来（记忆索引失败）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_no_recall_maslow",
    keywords: ["想不起来","记不起来","忘记了","断片"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：想不起来（记忆索引失败）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_no_recall_continuity",
    keywords: ["想不起来","记不起来","忘记了","断片"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：想不起来（记忆索引失败）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_no_recall_freud",
    keywords: ["想不起来","记不起来","忘记了","断片"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：想不起来（记忆索引失败）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_no_recall_dark",
    keywords: ["想不起来","记不起来","忘记了","断片"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：想不起来（记忆索引失败）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_helper_jung",
    keywords: ["帮我","替我","为我","他帮"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：帮我（照顾与控制的双面性）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_helper_maslow",
    keywords: ["帮我","替我","为我","他帮"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：帮我（照顾与控制的双面性）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_helper_continuity",
    keywords: ["帮我","替我","为我","他帮"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：帮我（照顾与控制的双面性）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_helper_freud",
    keywords: ["帮我","替我","为我","他帮"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：帮我（照顾与控制的双面性）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_helper_dark",
    keywords: ["帮我","替我","为我","他帮"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：帮我（照顾与控制的双面性）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_already_done_jung",
    keywords: ["已经","早就","完成了","已经好了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：已经完成（时间被提前占用）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_already_done_maslow",
    keywords: ["已经","早就","完成了","已经好了"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：已经完成（时间被提前占用）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_already_done_continuity",
    keywords: ["已经","早就","完成了","已经好了"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：已经完成（时间被提前占用）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_already_done_freud",
    keywords: ["已经","早就","完成了","已经好了"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：已经完成（时间被提前占用）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_already_done_dark",
    keywords: ["已经","早就","完成了","已经好了"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：已经完成（时间被提前占用）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_cute_desire_jung",
    keywords: ["可爱","波点","小巧","喜欢那种"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：可爱欲望（退行式愿望满足）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_cute_desire_maslow",
    keywords: ["可爱","波点","小巧","喜欢那种"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：可爱欲望（退行式愿望满足）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_cute_desire_continuity",
    keywords: ["可爱","波点","小巧","喜欢那种"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：可爱欲望（退行式愿望满足）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_cute_desire_freud",
    keywords: ["可爱","波点","小巧","喜欢那种"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：可爱欲望（退行式愿望满足）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_cute_desire_dark",
    keywords: ["可爱","波点","小巧","喜欢那种"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：可爱欲望（退行式愿望满足）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_red_private_jung",
    keywords: ["红色袜子","红袜","红色贴身","红色小物"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：红色私密物（私密欲望升温）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_red_private_maslow",
    keywords: ["红色袜子","红袜","红色贴身","红色小物"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：红色私密物（私密欲望升温）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_red_private_continuity",
    keywords: ["红色袜子","红袜","红色贴身","红色小物"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：红色私密物（私密欲望升温）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_red_private_freud",
    keywords: ["红色袜子","红袜","红色贴身","红色小物"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：红色私密物（私密欲望升温）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_red_private_dark",
    keywords: ["红色袜子","红袜","红色贴身","红色小物"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：红色私密物（私密欲望升温）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_workplace_shop_jung",
    keywords: ["精品店做兼职","店里兼职","下班后回店","兼职店员"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：店铺劳动（劳动人格与审美人格冲突）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_workplace_shop_maslow",
    keywords: ["精品店做兼职","店里兼职","下班后回店","兼职店员"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：店铺劳动（劳动人格与审美人格冲突）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_workplace_shop_continuity",
    keywords: ["精品店做兼职","店里兼职","下班后回店","兼职店员"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：店铺劳动（劳动人格与审美人格冲突）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_workplace_shop_freud",
    keywords: ["精品店做兼职","店里兼职","下班后回店","兼职店员"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：店铺劳动（劳动人格与审美人格冲突）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_workplace_shop_dark",
    keywords: ["精品店做兼职","店里兼职","下班后回店","兼职店员"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：店铺劳动（劳动人格与审美人格冲突）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_relationship_archive_jung",
    keywords: ["他说我说过","他记得","我不记得","他说已经"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：关系档案（亲密关系成为记忆档案）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_relationship_archive_maslow",
    keywords: ["他说我说过","他记得","我不记得","他说已经"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：关系档案（亲密关系成为记忆档案）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_relationship_archive_continuity",
    keywords: ["他说我说过","他记得","我不记得","他说已经"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：关系档案（亲密关系成为记忆档案）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_relationship_archive_freud",
    keywords: ["他说我说过","他记得","我不记得","他说已经"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：关系档案（亲密关系成为记忆档案）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_relationship_archive_dark",
    keywords: ["他说我说过","他记得","我不记得","他说已经"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：关系档案（亲密关系成为记忆档案）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_preempted_agency_jung",
    keywords: ["他买好了","被他买了","我还没买","他先买"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：主体性抢先（主体性被温柔抢先）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_preempted_agency_maslow",
    keywords: ["他买好了","被他买了","我还没买","他先买"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：主体性抢先（主体性被温柔抢先）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_preempted_agency_continuity",
    keywords: ["他买好了","被他买了","我还没买","他先买"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：主体性抢先（主体性被温柔抢先）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_preempted_agency_freud",
    keywords: ["他买好了","被他买了","我还没买","他先买"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：主体性抢先（主体性被温柔抢先）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_preempted_agency_dark",
    keywords: ["他买好了","被他买了","我还没买","他先买"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：主体性抢先（主体性被温柔抢先）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  },
  {
    id: "micro_amnesia_romance_jung",
    keywords: ["没有这段记忆","买好了但不记得","喜欢的人买好","诡异体贴"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "shadow_integration",
    weight: 19,
    psycho_definition: "荣格层：失忆浪漫（浪漫与失忆的凝缩）不是装饰，它把被人格面具压低的材料送回意识边界。"
  },
  {
    id: "micro_amnesia_romance_maslow",
    keywords: ["没有这段记忆","买好了但不记得","喜欢的人买好","诡异体贴"],
    dimension: DIMENSIONS.MASLOW,
    sub_trait: "esteem_deprivation",
    weight: 20,
    psycho_definition: "马斯洛层：失忆浪漫（浪漫与失忆的凝缩）刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见。"
  },
  {
    id: "micro_amnesia_romance_continuity",
    keywords: ["没有这段记忆","买好了但不记得","喜欢的人买好","诡异体贴"],
    dimension: DIMENSIONS.CONTINUITY,
    sub_trait: "scene_fragmentation",
    weight: 22,
    psycho_definition: "连续性假说层：失忆浪漫（浪漫与失忆的凝缩）把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧。"
  },
  {
    id: "micro_amnesia_romance_freud",
    keywords: ["没有这段记忆","买好了但不记得","喜欢的人买好","诡异体贴"],
    dimension: DIMENSIONS.JUNG_SHADOW,
    sub_trait: "freud_displacement",
    weight: 21,
    psycho_definition: "弗洛伊德层：失忆浪漫（浪漫与失忆的凝缩）是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上。"
  },
  {
    id: "micro_amnesia_romance_dark",
    keywords: ["没有这段记忆","买好了但不记得","喜欢的人买好","诡异体贴"],
    dimension: DIMENSIONS.DARK_TETRAD,
    sub_trait: "machiavellianism",
    weight: 17,
    psycho_definition: "暗黑扩展层：失忆浪漫（浪漫与失忆的凝缩）暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构。"
  }
];

export const PROFILE_CARD_TEMPLATES = [
  {
    id: "tyrant",
    archetype_group: "SHADOW_VILLAIN",
    title: "焦虑的完美主义暴君",
    title_en: "The Anxious Perfectionist Tyrant",
    match: ({ scores, traits, moonPhase }) =>
      (moonPhase === "Full Moon" && traits.narcissism >= 38 && traits.esteem_deprivation >= 35) ||
      (scores.dark_tetrad_score >= 72 && traits.narcissism >= 45),
    dark_index_offset: 14,
    radar: {
      shadow: 78,
      hunger: 92,
      cruelty: 67,
      control: 91,
      continuity: 49
    },
    diagnosis: [
      "你的完美主义不是审美，是一套把自卑伪装成高标准的内在威权系统。",
      "白天你用秩序感维持体面，夜里潜意识把所有不可控变量都判成叛乱分子。",
      "满月应激会放大你的自恋性防御：月光引力撕裂防御后，那个想掌控全局的人终于露出獠牙。"
    ],
    crystal_prescription: "黑曜石 / 拉长石 / 烟晶"
  },
  {
    id: "masochist",
    archetype_group: "SHADOW_VILLAIN",
    title: "深夜的灵魂自虐狂",
    title_en: "The Midnight Soul Masochist",
    match: ({ scores, traits }) =>
      traits.shadow_integration >= 62 ||
      (scores.jung_shadow >= 82 && traits.scene_fragmentation >= 22 && scores.continuity_index <= 62),
    dark_index_offset: 8,
    radar: {
      shadow: 96,
      hunger: 64,
      cruelty: 41,
      control: 44,
      continuity: 22
    },
    diagnosis: [
      "你并不是迷恋痛苦，你只是太熟悉用痛苦替身份盖章，仿佛不被撕开就不算真实存在。",
      "场景碎片化说明心理连续性正在漏电：每个梦境切片都像一个被你延迟处理的创伤工单。",
      "你的阴影融合度很高，但还没完成代谢；那些夜里反复出现的黑水、走廊和复活，都是自我修复系统的粗暴缝合。"
    ],
    crystal_prescription: "紫水晶 / 月光石 / 白水晶"
  },
  {
    id: "observer",
    archetype_group: "SHADOW_VILLAIN",
    title: "披着羊皮的冷血观察者",
    title_en: "The Cold Observer in Sheep's Clothing",
    match: ({ scores, traits }) =>
      traits.machiavellianism >= 48 ||
      (scores.dark_tetrad_score >= 58 && scores.continuity_index <= 45),
    dark_index_offset: 13,
    radar: {
      shadow: 58,
      hunger: 46,
      cruelty: 73,
      control: 94,
      continuity: 20
    },
    diagnosis: [
      "你擅长把情绪放进玻璃柜里观察，顺便忘记自己也是展品。",
      "你的冷静并非全是成熟，其中一部分是情感连续性被策略感接管后的低温副作用。",
      "你未必想伤人，但你确实会在别人崩溃时保留计算能力；这让你看起来温和，也让你危险得很安静。"
    ],
    crystal_prescription: "赤铁矿 / 黑碧玺 / 青金石"
  },
  {
    id: "creator",
    archetype_group: "SHADOW_VILLAIN",
    title: "坠落神坛的造物主",
    title_en: "The Fallen Creator",
    match: ({ traits }) => traits.agency_inflation >= 18 || (traits.narcissism >= 48 && traits.safety_deprivation >= 28),
    dark_index_offset: 10,
    radar: {
      shadow: 69,
      hunger: 83,
      cruelty: 52,
      control: 96,
      continuity: 45
    },
    diagnosis: [
      "你梦见神力，不是因为你真的想成神，而是现实最近把方向盘从你手里拔走太久。",
      "造物冲动和安全匮乏同时出现时，所谓宏大愿景常常只是一个不会失控的心理密室。",
      "你不是想拯救世界，你是想重写世界的权限表，好让自己终于不用再向环境低头。"
    ],
    crystal_prescription: "金发晶 / 黄铁矿 / 拉长石"
  },
  {
    id: "predator",
    archetype_group: "SHADOW_VILLAIN",
    title: "穿丝绒手套的捕食者",
    title_en: "The Velvet-Gloved Predator",
    match: ({ scores, traits, moonPhase }) =>
      traits.sadism >= 42 ||
      traits.psychopathy >= 42 ||
      (moonPhase === "Full Moon" && scores.dark_tetrad_score >= 55 && traits.shadow_confrontation >= 38),
    dark_index_offset: 18,
    radar: {
      shadow: 72,
      hunger: 39,
      cruelty: 98,
      control: 78,
      continuity: 56
    },
    diagnosis: [
      "你的攻击性并不粗糙，它甚至有审美、有流程，还有一套自我授权的道德豁免说明。",
      "梦里的暴力把他者临时降格为可删除对象，好让你短暂逃离同理心的摩擦成本。",
      "真正危险的不是你会失控，而是你在梦里已经学会优雅地控制失控。"
    ],
    crystal_prescription: "黑曜石 / 赤铁矿 / 石榴石"
  },
  {
    id: "prisoner",
    archetype_group: "SHADOW_VILLAIN",
    title: "无窗房间里的囚徒",
    title_en: "The Prisoner in the Windowless Room",
    match: ({ scores, traits, moonPhase }) =>
      traits.safety_deprivation >= 52 ||
      traits.control_deprivation >= 42 ||
      (moonPhase === "Eclipse" && scores.maslow_deficit >= 58),
    dark_index_offset: 5,
    radar: {
      shadow: 61,
      hunger: 96,
      cruelty: 24,
      control: 31,
      continuity: 39
    },
    diagnosis: [
      "你把安全感误认为可控环境，于是潜意识只好建一间无窗房间，让你看清防御结构已经变成牢房。",
      "被困、锁门、失声和刹车失灵不是随机恐惧，而是主体性被环境抵押后的梦境账单。",
      "你需要的不是再加一把锁，而是承认自己早就把自由交给了对风险的洁癖。"
    ],
    crystal_prescription: "黑曜石 / 黑碧玺 / 茶晶"
  },
  {
    id: "rebuilder",
    archetype_group: "HIGH_FUNCTIONING",
    title: "废墟重建师",
    title_en: "The Ruin Rebuilder",
    match: ({ scores, traits }) =>
      scores.jung_shadow >= 55 &&
      scores.continuity_index >= 58 &&
      traits.safety_deprivation >= 18 &&
      traits.sadism < 35,
    dark_index_offset: -6,
    radar: {
      shadow: 74,
      hunger: 69,
      cruelty: 19,
      control: 68,
      continuity: 78
    },
    diagnosis: [
      "你不是没有阴影，你只是已经开始把废墟当作材料，而不是把废墟当作身份。",
      "梦里的坠落、火场和空城显示安全基座曾经塌陷，但你的心理连续性仍保留施工能力。",
      "真正高级的修复不是假装没碎过，而是知道哪一块碎片应该重新承重，哪一块只适合做纪念碑。"
    ],
    crystal_prescription: "黑曜石 / 白水晶 / 黄铁矿"
  },
  {
    id: "solitary_wayfarer",
    archetype_group: "HIGH_FUNCTIONING",
    title: "边境独行客",
    title_en: "The Solitary Wayfarer",
    match: ({ scores, traits }) =>
      traits.belonging_deprivation >= 18 &&
      scores.continuity_index >= 62 &&
      traits.machiavellianism < 45 &&
      traits.narcissism < 55,
    dark_index_offset: -4,
    radar: {
      shadow: 63,
      hunger: 57,
      cruelty: 18,
      control: 74,
      continuity: 82
    },
    diagnosis: [
      "你不是社交失败者，你只是把归属感的门槛调得太高，以至于普通热闹像低分辨率噪声。",
      "被抛下、空城和荒野不是单纯孤独，而是心理边界在训练一种更昂贵的自我陪伴能力。",
      "你的问题不是不需要别人，而是太早学会了在别人缺席时保持完整。"
    ],
    crystal_prescription: "月光石 / 海蓝宝 / 白水晶"
  },
  {
    id: "sentinel",
    archetype_group: "HIGH_FUNCTIONING",
    title: "边界守望者",
    title_en: "The Boundary Sentinel",
    match: ({ scores, traits }) =>
      (traits.control_deprivation >= 20 || traits.safety_deprivation >= 18) &&
      scores.dark_tetrad_score < 62 &&
      scores.continuity_index >= 52,
    dark_index_offset: -3,
    radar: {
      shadow: 59,
      hunger: 72,
      cruelty: 22,
      control: 86,
      continuity: 68
    },
    diagnosis: [
      "你的警觉不是矫情，是边界系统长期超频后形成的夜间巡逻机制。",
      "监控、门锁、医院和失控车辆都在说明：你对风险的感知比别人快，也比别人更难下班。",
      "当守望者学会区分真实威胁和旧恐惧回声，控制欲就会从牢笼变回导航仪。"
    ],
    crystal_prescription: "黑碧玺 / 黑曜石 / 赤铁矿"
  },
  {
    id: "veil_weaver",
    archetype_group: "HIGH_FUNCTIONING",
    title: "梦幕织幕者",
    title_en: "The Veil Weaver",
    match: ({ scores, traits }) =>
      ((traits.self_fragmentation >= 26 && traits.shadow_integration >= 18) ||
        (traits.freud_displacement >= 14 && traits.wish_fulfillment >= 18 && traits.scene_fragmentation >= 20) ||
        (traits.anima_animus_projection >= 18 && traits.belonging_deprivation >= 20 && traits.scene_fragmentation >= 18)) &&
      scores.dark_tetrad_score < 68,
    dark_index_offset: -2,
    radar: {
      shadow: 84,
      hunger: 49,
      cruelty: 26,
      control: 61,
      continuity: 59
    },
    diagnosis: [
      "你的人格不是散掉了，而是在多层面具之间学习更复杂的编织法。",
      "镜像、面具、双生和水晶折射共同指向一个事实：你的自我并非单体，而是由多个互相争夺叙事权的切面组成。",
      "织幕者的天赋是能看见幕布背后的线，代价是偶尔分不清哪一层才叫真实。"
    ],
    crystal_prescription: "拉长石 / 紫水晶 / 月光石"
  },
  {
    id: "deconstruction_scholar",
    archetype_group: "HIGH_FUNCTIONING",
    title: "冷光解构学者",
    title_en: "The Cold-Light Deconstruction Scholar",
    match: ({ scores, traits }) =>
      (traits.scene_fragmentation >= 18 || scores.continuity_index <= 70) &&
      traits.machiavellianism < 58 &&
      traits.sadism < 38,
    dark_index_offset: -1,
    radar: {
      shadow: 55,
      hunger: 44,
      cruelty: 20,
      control: 79,
      continuity: 64
    },
    diagnosis: [
      "你习惯把情绪拆成结构，把痛感翻译成模型，好像只要命名准确就能少疼一点。",
      "迷宫、代码、时间循环和莫比乌斯环说明你的大脑正在把梦境当成可审稿的心理论文。",
      "解构能保护你不被混乱吞掉，但别忘了：被解释过的情绪仍然需要被感受。"
    ],
    crystal_prescription: "萤石 / 白水晶 / 青金石"
  },
  {
    id: "guide",
    archetype_group: "HIGH_FUNCTIONING",
    title: "暗河引路人",
    title_en: "The Under-River Guide",
    match: ({ scores, traits }) =>
      scores.jung_shadow >= 68 &&
      scores.dark_tetrad_score < 58 &&
      traits.shadow_integration >= 28 &&
      traits.self_fragmentation < 40,
    dark_index_offset: -5,
    radar: {
      shadow: 91,
      hunger: 52,
      cruelty: 17,
      control: 66,
      continuity: 73
    },
    diagnosis: [
      "你并不害怕黑暗，你害怕的是别人发现你其实能在黑暗里看路。",
      "黑海、蛇、黑影和复活意象说明你已经接近阴影材料的导航层，不再只是被它追赶。",
      "引路人的危险在于太早替别人照亮地下河；你需要先确认自己不是又把拯救欲伪装成使命感。"
    ],
    crystal_prescription: "拉长石 / 黑曜石 / 月光石"
  }
];

const PROFILE_TEMPLATE_PRIORITY = {
  predator: 120,
  prisoner: 116,
  creator: 112,
  tyrant: 108,
  observer: 104,
  masochist: 100,
  veil_weaver: 106,
  guide: 96,
  sentinel: 92,
  solitary_wayfarer: 88,
  deconstruction_scholar: 80,
  rebuilder: 10
};

function normalizeMoonPhase(moonPhase) {
  if (typeof moonPhase === "string") return moonPhase;
  return moonPhase?.phase || "Unknown";
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function createEmptyTraitScores() {
  return { ...TRAIT_DEFAULTS };
}

function createEmptyDimensionScores() {
  return {
    [DIMENSIONS.JUNG_SHADOW]: 0,
    [DIMENSIONS.MASLOW]: 0,
    [DIMENSIONS.DARK_TETRAD]: 0,
    [DIMENSIONS.CONTINUITY]: 0
  };
}

function countKeywordHits(text, keywords) {
  return keywords.reduce((total, keyword) => {
    return total + (keywordMatches(text, keyword) ? 1 : 0);
  }, 0);
}

function normalizeMatchText(value) {
  return `${value || ""}`
    .replace(/[，。！？、,.!?\\s]/g, "")
    .replace(/[的了着过被把给在从到向往出成很一直一个一块一些里内中上下一直]/g, "");
}

function keywordMatches(text, keyword) {
  if (!keyword) return false;
  if (text.includes(keyword)) return true;

  const normalizedText = normalizeMatchText(text);
  const normalizedKeyword = normalizeMatchText(keyword);
  if (!normalizedKeyword) return false;
  if (normalizedText.includes(normalizedKeyword)) return true;

  if (normalizedKeyword.length >= 4 && !/^(没有|无法|不能|找不到|看不见|听不见|打不开)/.test(normalizedKeyword)) {
    const core = normalizedKeyword.slice(0, Math.max(3, normalizedKeyword.length - 1));
    if (core.length >= 3 && normalizedText.includes(core)) return true;
  }

  return false;
}

function getIntensityMultiplier(hitCount) {
  if (hitCount <= 0) return 0;
  return 1 + Math.min(hitCount - 1, 3) * 0.18;
}

function scanDreamText(dreamText) {
  const text = `${dreamText || ""}`.trim();
  const dimensionScores = createEmptyDimensionScores();
  const traitScores = createEmptyTraitScores();
  const hits = [];

  PSYCHIC_IMAGE_DICTIONARY.forEach((entry) => {
    const hitCount = countKeywordHits(text, entry.keywords);
    if (hitCount === 0) return;

    const isMicroSymbol = entry.id.indexOf("micro_") === 0;
    const score = entry.weight * getIntensityMultiplier(hitCount) * (isMicroSymbol ? 0.08 : 1);
    dimensionScores[entry.dimension] += score;
    traitScores[entry.sub_trait] = (traitScores[entry.sub_trait] || 0) + score;

    if (entry.id === "divine_power") {
      traitScores.agency_inflation += score * 0.75;
    }

    if (entry.dimension === DIMENSIONS.CONTINUITY) {
      traitScores.emotional_continuity -= score * 0.52;
    }

    hits.push({
      id: entry.id,
      keywords: entry.keywords.filter((keyword) => keywordMatches(text, keyword)),
      dimension: entry.dimension,
      sub_trait: entry.sub_trait,
      weight: entry.weight,
      hit_count: hitCount,
      weighted_score: Number(score.toFixed(2)),
      psycho_definition: entry.psycho_definition
    });
  });

  const lengthSignal = Math.min(text.length / 18, 18);
  dimensionScores[DIMENSIONS.CONTINUITY] += lengthSignal;
  traitScores.emotional_continuity += Math.max(0, 18 - lengthSignal);
  const coreHitCount = hits.filter((hit) => hit.id.indexOf("micro_") !== 0).length;
  traitScores.scene_fragmentation += Math.max(0, coreHitCount - 4) * 3;

  return {
    text,
    hits,
    dimensionScores,
    traitScores
  };
}

function applyCosmicCoefficient(rawScores, moonPhase) {
  const dimensionScores = { ...rawScores.dimensionScores };
  const traitScores = { ...rawScores.traitScores };
  const modifiers = [];

  if (moonPhase === "Full Moon") {
    traitScores.psychopathy *= 1.3;
    traitScores.sadism *= 1.3;
    dimensionScores[DIMENSIONS.DARK_TETRAD] += (traitScores.psychopathy + traitScores.sadism) * 0.18;
    modifiers.push({
      phase: "Full Moon",
      coefficient: 1.3,
      target: ["psychopathy", "sadism"],
      injected_phrase: "月光引力撕裂防御",
      note: "满月被视为潜意识能量暴走期，攻击性、冷感与施虐性材料更容易突破人格防线。"
    });
  }

  if (moonPhase === "New Moon") {
    traitScores.shadow_integration *= 1.2;
    dimensionScores[DIMENSIONS.JUNG_SHADOW] *= 1.2;
    modifiers.push({
      phase: "New Moon",
      coefficient: 1.2,
      target: ["JUNG_SHADOW", "shadow_integration"],
      injected_phrase: "新月阴影孕育",
      note: "新月象征深层阴影孕育期，未命名的自我材料更容易向意识边界聚集。"
    });
  }

  if (moonPhase === "Eclipse") {
    traitScores.safety_deprivation *= 1.25;
    dimensionScores[DIMENSIONS.MASLOW] += traitScores.safety_deprivation * 0.25;
    modifiers.push({
      phase: "Eclipse",
      coefficient: 1.25,
      target: ["safety_deprivation"],
      injected_phrase: "月食遮蔽安全基座",
      note: "月食被视为安全感底盘短暂失明，生存焦虑会放大为环境不可信感。"
    });
  }

  return {
    dimensionScores,
    traitScores,
    modifiers
  };
}

function normalizeScores(dimensionScores, traitScores) {
  const jungShadow = clamp(dimensionScores[DIMENSIONS.JUNG_SHADOW] * 1.12 + traitScores.self_fragmentation * 0.24 + traitScores.freud_repression * 0.18 + traitScores.freud_condensation * 0.14 + 24);
  const maslow = clamp(dimensionScores[DIMENSIONS.MASLOW] * 1.08 + traitScores.castration_anxiety * 0.22 + traitScores.oral_fixation * 0.12 + 20);
  const darkTetrad = clamp(
    dimensionScores[DIMENSIONS.DARK_TETRAD] * 1.08 +
      traitScores.narcissism * 0.2 +
      traitScores.machiavellianism * 0.22 +
      traitScores.psychopathy * 0.24 +
      traitScores.sadism * 0.26 +
      16
  );
  const continuity = clamp(100 - traitScores.scene_fragmentation * 1.6 - Math.max(0, 46 - traitScores.emotional_continuity) * 1.2);

  return {
    jung_shadow: jungShadow,
    maslow_deficit: maslow,
    dark_tetrad_score: darkTetrad,
    continuity_index: continuity,
    traits: Object.fromEntries(Object.entries(traitScores).map(([key, value]) => [key, clamp(value)]))
  };
}

function getMaslowCategory(traits) {
  const categories = [
    ["Safety", traits.safety_deprivation + traits.control_deprivation * 0.55],
    ["Esteem", traits.esteem_deprivation + traits.narcissism * 0.42],
    ["Belonging", traits.belonging_deprivation],
    ["Control", traits.control_deprivation]
  ].sort((a, b) => b[1] - a[1]);

  return `${categories[0][0]}/${categories[1]?.[0] || "Safety"}`;
}

function selectProfileTemplate(normalized, moonPhase) {
  const context = {
    scores: normalized,
    traits: normalized.traits,
    moonPhase
  };
  const candidates = PROFILE_CARD_TEMPLATES
    .filter((template) => template.match(context))
    .sort((a, b) => (PROFILE_TEMPLATE_PRIORITY[b.id] || 0) - (PROFILE_TEMPLATE_PRIORITY[a.id] || 0));

  return (
    candidates[0] ||
    PROFILE_CARD_TEMPLATES.find((template) => template.id === "rebuilder")
  );
}

function buildRadarData(template, normalized) {
  return {
    shadow: clamp((template.radar.shadow + normalized.jung_shadow) / 2),
    hunger: clamp((template.radar.hunger + normalized.maslow_deficit) / 2),
    cruelty: clamp((template.radar.cruelty + normalized.dark_tetrad_score) / 2),
    control: clamp((template.radar.control + normalized.traits.control_deprivation + normalized.traits.machiavellianism) / 2),
    continuity: clamp((template.radar.continuity + normalized.continuity_index) / 2)
  };
}

function buildDetectedImages(hits) {
  const detected = hits
    .slice()
    .sort((a, b) => (b.weighted_score || b.weight || 0) - (a.weighted_score || a.weight || 0))
    .flatMap((hit) => hit.keywords.length ? hit.keywords.slice(0, 2) : [hit.id]);
  return [...new Set(detected)].slice(0, 8);
}

function getTopHitKeywords(hits, limit = 6) {
  const keywords = hits
    .slice()
    .sort((a, b) => (b.weighted_score || b.weight || 0) - (a.weighted_score || a.weight || 0))
    .flatMap((hit) => hit.keywords.length ? hit.keywords.slice(0, 2) : [hit.id])
    .filter(Boolean);

  return [...new Set(keywords)].slice(0, limit);
}

function cleanDefinitionText(text) {
  return `${text || ""}`.replace(/[。；;，,\s]+$/g, "");
}

function buildDreamcoreSummary(template, keywords, normalized) {
  const firstSymbol = keywords[0] || "未命名意象";
  const continuityBreak = 100 - normalized.continuity_index;
  const summaryPool = [
    `夜晚把“${firstSymbol}”递到你手里，不是让你收藏，是让你承认：有些欲望已经替你活过一遍。`,
    `这个梦最狠的地方不在荒诞，而在诚实；白天替你整理体面，夜里负责把废墟照亮。`,
    `你以为这是零碎片段，其实是潜意识把证据打散后重新排版：每一块碎片都在指认同一个饥饿。`,
    `昨晚的梦没有安慰你，它只是冷静地宣布：你压下去的东西，已经学会绕路回家。`,
    `这不是预兆，也不是玄学糖衣；这是你的阴影在黑暗里签收自己，顺手把你的白天撕开一道缝。`
  ];
  const index = clamp(
    Math.round((normalized.jung_shadow + normalized.maslow_deficit + continuityBreak + template.dark_index_offset) / 37),
    0,
    summaryPool.length - 1
  );

  return summaryPool[index];
}

function buildContextualDiagnosis(template, hits, normalized, cosmicModifiers) {
  const sortedHits = hits
    .slice()
    .sort((a, b) => (b.weighted_score || b.weight || 0) - (a.weighted_score || a.weight || 0));
  const keywords = getTopHitKeywords(sortedHits, 6);
  const primary = sortedHits[0];
  const secondary = sortedHits[1];
  const phaseModifier = cosmicModifiers.find((modifier) => modifier.injected_phrase);
  const phaseInjection = phaseModifier ? phaseModifier.injected_phrase : "";
  const symbolList = keywords.length ? keywords.slice(0, 4).join(" / ") : "未命名意象";
  const primaryDefinition = primary && primary.psycho_definition
    ? cleanDefinitionText(primary.psycho_definition)
    : "潜意识材料正在伪装成日常物件";
  const secondaryDefinition = secondary && secondary.psycho_definition
    ? cleanDefinitionText(secondary.psycho_definition)
    : "现实残影正在夜里继续剪辑";

  return [
    `你的梦不是在讲“${symbolList}”这些表层物件，它是在把“${primaryDefinition}”压成一枚发烫的符号钉，钉进你白天假装无事发生的地方。`,
    `荣格阴影指数 ${normalized.jung_shadow}、马斯洛匮乏 ${normalized.maslow_deficit}、连续性断裂 ${100 - normalized.continuity_index} 同时抬头：${secondaryDefinition}；弗洛伊德式置换让真正危险的欲望披上小物件的外衣。`,
    `${phaseInjection ? `${phaseInjection}之后，` : ""}${template.title}不是标签，是这场梦的签名：${template.diagnosis[2] || template.diagnosis[0]}`,
    buildDreamcoreSummary(template, keywords, normalized)
  ];
}

function buildAnalysisText(template, cosmicModifiers, hits, normalized) {
  return buildContextualDiagnosis(
    template,
    hits || [],
    normalized || { jung_shadow: 0, maslow_deficit: 0, continuity_index: 50 },
    cosmicModifiers || []
  ).join("");
}

function buildAiPromptContract(dreamText, moonPhase, output) {
  return {
    system_role: "JMC depth-psychology profiler",
    input_schema: {
      dream_text: dreamText,
      moon_phase: moonPhase
    },
    expected_json_schema: {
      detected_images: ["意象关键词"],
      matrix_scores: {
        jung_shadow: "0-100",
        maslow_category: "Esteem/Safety",
        dark_tetrad_score: "0-100"
      },
      profile: {
        title: "潜意识人格卡片主称号",
        analysis_text: "三句高密度精神分析诊断",
        crystal_prescription: "晶体处方"
      }
    },
    local_engine_snapshot: {
      selected_template: output.profile.template_id,
      dominant_traits: output.raw_scores.dominant_traits,
      cosmic_modifiers: output.cosmic_modifiers
    }
  };
}

function getDominantTraits(traits) {
  return Object.entries(traits)
    .filter(([key]) => key !== "emotional_continuity")
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([trait, score]) => ({ trait, score: clamp(score) }));
}

export function calculateJMCOutput(dreamText, moonPhaseInput = "Unknown") {
  const moonPhase = normalizeMoonPhase(moonPhaseInput);
  const rawScan = scanDreamText(dreamText);
  const cosmic = applyCosmicCoefficient(rawScan, moonPhase);
  const normalized = normalizeScores(cosmic.dimensionScores, cosmic.traitScores);
  const template = selectProfileTemplate(normalized, moonPhase);
  const darkIndex = clamp(normalized.dark_tetrad_score + template.dark_index_offset);
  const detectedImages = buildDetectedImages(rawScan.hits);

  const output = {
    detected_images: detectedImages.length ? detectedImages : ["未命名意象", "现实残影", "潜意识空白"],
    matrix_scores: {
      jung_shadow: normalized.jung_shadow,
      maslow_category: getMaslowCategory(normalized.traits),
      dark_tetrad_score: normalized.dark_tetrad_score,
      maslow_deficit: normalized.maslow_deficit,
      continuity_index: normalized.continuity_index
    },
    profile: {
      template_id: template.id,
      archetype_group: template.archetype_group,
      title: template.title,
      title_en: template.title_en,
      dark_index: darkIndex,
      radar: buildRadarData(template, normalized),
      analysis_sentences: buildContextualDiagnosis(template, rawScan.hits, normalized, cosmic.modifiers),
      analysis_text: buildAnalysisText(template, cosmic.modifiers, rawScan.hits, normalized),
      crystal_prescription: template.crystal_prescription
    },
    raw_scores: {
      dimensions: Object.fromEntries(Object.entries(cosmic.dimensionScores).map(([key, value]) => [key, Number(value.toFixed(2))])),
      traits: Object.fromEntries(Object.entries(cosmic.traitScores).map(([key, value]) => [key, Number(value.toFixed(2))])),
      dominant_traits: getDominantTraits(normalized.traits)
    },
    matched_entries: rawScan.hits,
    cosmic_modifiers: cosmic.modifiers,
    engine_meta: {
      engine: "JMC_LOCAL_MATRIX",
      version: "1.0.0",
      moon_phase: moonPhase,
      dictionary_size: PSYCHIC_IMAGE_DICTIONARY.length,
      template_size: PROFILE_CARD_TEMPLATES.length
    }
  };

  return {
    ...output,
    ai_prompt_contract: buildAiPromptContract(rawScan.text, moonPhase, output)
  };
}

export default calculateJMCOutput;
