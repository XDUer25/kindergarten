import {
  Apple,
  Baby,
  BookOpen,
  Brain,
  Camera,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "园所介绍", href: "#about" },
  { label: "园所环境", href: "#environment" },
  { label: "特色课程", href: "#courses" },
  { label: "招生信息", href: "#admission" },
  { label: "联系我们", href: "#contact" }
];

export const images = {
  logo: "/images/132f25100a19406d0b8d228682182657_高清.jpg",
  wordmark: "/images/2fa5a1f34ca73a51d748dd6892bcff2e_高清.jpg",
  hero: "/images/69bc74f12522aa3bfd6ae08c389dc876_高清.jpg",
  building: "/images/69bc74f12522aa3bfd6ae08c389dc876_高清.jpg",
  classroom: "/images/958f8b3ba36e207c284d2780415ec5f9_高清.jpg",
  activityClassroom: "/images/7a14f8a4d4ef24cd6b2a0908b11f150a_高清.jpg",
  corridor: "/images/57033064e0ca32c0507aa58dccd5e3a5_高清.jpg",
  stage: "/images/14a7da3fc94dc457398a10db8e8b2489_高清.jpg",
  playground: "/images/f42a0c5c24faf3c0c39aabbdf7e9d26d_高清.jpg",
  art: "/images/95ac42f2458b878a2f642b79068428ba_高清.jpg",
  meal: "/images/97163d69d59b3f554ab13624fdcb3e3b_高清.jpg",
  breakfast: "/images/7cbf4a5da4a2c575f3fedfe844a05859_高清.jpg",
  hygiene: "/images/9c1d05c84902112ed978949f52a3c480_高清.jpg",
  healthRoom: "/images/561c578435cf4a9d70c3d38efcb218a1_高清.jpg",
  honorWall: "/images/91cddf532e398712d4d5a725a59cfdad_高清.jpg",
  steamKits: "/images/b58722246434d65e74125e32f045689a_高清.jpg"
};

export const stats = [
  { value: "2018", label: "正式开园" },
  { value: "2000m²", label: "建筑面积" },
  { value: "600m²+", label: "户外活动场地" },
  { value: "2h+", label: "每日户外活动" }
];

export const values = [
  { title: "爱心", text: "以尊重与陪伴回应孩子每一次表达。" },
  { title: "专注", text: "把关键期培养落实在一日生活细节里。" },
  { title: "倾听", text: "理解行为背后的情绪与成长需求。" },
  { title: "和谐", text: "家园共育，构建安全、稳定、有秩序的成长环境。" }
];

export const features = [
  {
    title: "倡导生活即教育思想",
    desc: "以主题活动形式融合健康、语言、社会、科学、艺术五大领域，鼓励探索，促进幼儿身心健康、和谐、全面发展。",
    icon: Sparkles
  },
  {
    title: "科学与艺术同行",
    desc: "让孩子在观察、实验、表达、创作中建立好奇心与审美力，既保持天性，也获得面向未来的能力。",
    icon: Palette
  },
  {
    title: "家长参与与家园共育",
    desc: "以正确的教育理念和方法引领家长走进课堂、参与活动，共同培养自信、友善、会思考的儿童。",
    icon: HeartHandshake
  }
];

export const environments = [
  { title: "明亮教室", desc: "开放区角、低龄友好家具、充足采光，让孩子安心探索。", image: images.classroom },
  { title: "户外运动场", desc: "彩色跑道与丰富器械，支持奔跑、攀爬与协作。", image: images.playground },
  { title: "科学探索教室", desc: "主题材料与操作教具齐备，鼓励观察、提问和动手尝试。", image: images.activityClassroom },
  { title: "童趣走廊", desc: "孩子作品与主题墙共同构成每日可见的成长记录。", image: images.corridor },
  { title: "多功能活动厅", desc: "承载节庆、展示、集体课程与家园活动。", image: images.stage },
  { title: "卫生保健空间", desc: "洗手、如厕、保健照护分区清晰，方便日常卫生管理。", image: images.hygiene }
];

export const courses = [
  { name: "快乐玩科学", icon: Brain, bg: "from-[#e7f8ff] via-white to-[#fff8d8]", iconBg: "bg-[#d9f3ff] text-[#209bd0]" },
  { name: "创意美术", icon: Palette, bg: "from-[#fff2dc] via-white to-[#eaf8e8]", iconBg: "bg-[#fff1c7] text-[#d39a00]" },
  { name: "益智乐高", icon: Baby, bg: "from-[#eaf8e8] via-white to-[#e8f8ff]", iconBg: "bg-[#dff3d7] text-[#65a850]" },
  { name: "花样篮球", icon: Sun, bg: "from-[#fff8d8] via-white to-[#ffe9ec]", iconBg: "bg-[#ffed9d] text-[#d39a00]" },
  { name: "军体拓展", icon: ShieldCheck, bg: "from-[#e8f8ff] via-white to-[#edf3ff]", iconBg: "bg-[#d8eeff] text-[#2b93bd]" },
  { name: "快乐体智能", icon: Sparkles, bg: "from-[#f3ecff] via-white to-[#e8f8ff]", iconBg: "bg-[#ebe1ff] text-[#7a61d1]" },
  { name: "逻辑思维", icon: BookOpen, bg: "from-[#f2fbec] via-white to-[#fff8d8]", iconBg: "bg-[#e5f5d9] text-[#65a850]" },
  { name: "奇趣口才", icon: UsersRound, bg: "from-[#ffeef5] via-white to-[#e8f8ff]", iconBg: "bg-[#ffe0ec] text-[#cf5c83]" }
];

export const safeguards = [
  { title: "全园监控覆盖", text: "公共区域监控无死角，日常管理更透明。" },
  { title: "三餐两点", text: "采用带量食谱，家长可了解餐点制作过程。" },
  { title: "恒温舒适", text: "配备中央空调、恒温饮水机、洗漱消毒柜、钢琴等。" },
  { title: "定期消毒", text: "建构区积木、生活用品与活动材料定期清洁消毒。" }
];

export const admission = [
  { label: "每学期学费", value: "5200元" },
  { label: "生活费", value: "2600元" },
  { label: "保教费", value: "2600元" },
  { label: "新生礼包", value: "材料包、生活用品、被子7件套、书包、冬季校服、校园险、学平险" }
];

export const schedule = [
  { label: "入园时段", value: "07:30-08:00" },
  { label: "离园时段（夏）", value: "17:30-18:00" },
  { label: "离园时段（冬）", value: "17:10-17:40" },
  { label: "静园时段", value: "18:00" }
];

export const contacts = [
  { label: "园所地址", value: "天湖大道欣荣花园西侧" },
  { label: "赵园长", value: "18336253113" },
  { label: "黄园长", value: "19713020958" }
];

export const trustBadges = [
  { icon: ShieldCheck, label: "市级示范园" },
  { icon: Apple, label: "带量食谱" },
  { icon: Camera, label: "透明守护" }
];
