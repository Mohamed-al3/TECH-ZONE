/* Tech Zone - Product Catalog (الأردن - الدينار الأردني) */

const PRODUCTS = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    nameEn: "Samsung Galaxy S24 Ultra",
    category: "phones",
    categoryLabel: "الهواتف الخلوية",
    price: 815,
    oldPrice: 870,
    shape: "شاشة مسطحة 6.8 بوصة، حواف منحنية خفيفة، هيكل مستطيل أنيق",
    design: "تصميم تيتانيوم فاخر مع قلم S Pen مدمج وألوان متدرجة عصرية",
    image: "images/products/1.svg",
    featured: true
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    nameEn: "iPhone 15 Pro Max",
    category: "phones",
    categoryLabel: "الهواتف الخلوية",
    price: 985,
    oldPrice: null,
    shape: "شاشة 6.7 بوصة بحواف رفيعة جداً، زوايا مستديرة ناعمة",
    design: "إطار تيتانيوم مع زجاج خلفي مطفي وتصميم Apple الأيقوني",
    image: "images/products/2.svg",
    featured: true
  },
  {
    id: 3,
    name: "Xiaomi 14 Pro",
    nameEn: "Xiaomi 14 Pro",
    category: "phones",
    categoryLabel: "الهواتف الخلوية",
    price: 545,
    oldPrice: 599,
    shape: "هيكل انسيابي بشاشة 6.73 بوصة منحنية من الجانبين",
    design: "ظهر جلد فاخر مع شعار Leica وتدرج لوني أنيق",
    image: "images/products/3.svg",
    featured: false
  },
  {
    id: 4,
    name: "شاشة Samsung Smart TV 65 بوصة",
    nameEn: "Samsung Smart TV 65\"",
    category: "appliances",
    categoryLabel: "الأجهزة الكهربائية",
    price: 660,
    oldPrice: 720,
    shape: "شاشة مسطحة رفيعة جداً بإطار شبه معدوم، قاعدة معدنية أنيقة",
    design: "تصميم Neo QLED مع إضاءة محيطية Ambient Mode",
    image: "images/products/4.svg",
    featured: true
  },
  {
    id: 5,
    name: "ميكروويف LG Smart Inverter",
    nameEn: "LG Smart Microwave",
    category: "appliances",
    categoryLabel: "الأجهزة الكهربائية",
    price: 125,
    oldPrice: null,
    shape: "صندوق مستطيل مدمج بباب زجاجي شفاف مستطيل",
    design: "واجهة لمس سوداء لامعة مع شاشة LED رقمية",
    image: "images/products/5.svg",
    featured: false
  },
  {
    id: 6,
    name: "مكنسة Dyson V15 اللاسلكية",
    nameEn: "Dyson V15 Vacuum",
    category: "appliances",
    categoryLabel: "الأجهزة الكهربائية",
    price: 530,
    oldPrice: 565,
    shape: "عصا رفيعة مع رأس دائري مدمج، تصميم عمودي خفيف",
    design: "هيكل بلاستيكي شفاف يُظهر التقنية الداخلية باللون البنفسجي",
    image: "images/products/6.svg",
    featured: true
  },
  {
    id: 7,
    name: "سبورة تفاعلية SMART Board",
    nameEn: "SMART Interactive Board",
    category: "education",
    categoryLabel: "الأجهزة التعليمية",
    price: 1680,
    oldPrice: null,
    shape: "لوح مستطيل كبير 75 بوصة بإطار أبيض رفيع",
    design: "سطح لمس متعدد النقاط مع إطار معدني احترافي للفصول",
    image: "images/products/7.svg",
    featured: false
  },
  {
    id: 8,
    name: "جهاز عرض Epson EB-X49",
    nameEn: "Epson EB-X49 Projector",
    category: "education",
    categoryLabel: "الأجهزة التعليمية",
    price: 360,
    oldPrice: 395,
    shape: "صندوق مستطيل مدمج مع عدسة بارزة في المقدمة",
    design: "هيكل أبيض عملي مع فتحات تهوية منظمة للمكاتب والمدارس",
    image: "images/products/8.svg",
    featured: false
  },
  {
    id: 9,
    name: "آلة حاسبة Casio FX-991EX",
    nameEn: "Casio FX-991EX Calculator",
    category: "education",
    categoryLabel: "الأجهزة التعليمية",
    price: 28,
    oldPrice: null,
    shape: "جهاز لوحي رفيع بلوحة مفاتيح كاملة وشاشة عريضة",
    design: "تصميم رمادي علمي مع لوحة شمسية مزدوجة للطاقة",
    image: "images/products/9.svg",
    featured: false
  },
  {
    id: 10,
    name: "MacBook Pro 14 M3",
    nameEn: "MacBook Pro 14 M3",
    category: "laptops",
    categoryLabel: "الحواسيب المحمولة",
    price: 1700,
    oldPrice: null,
    shape: "غطاء مستطيل من الألمنيوم بزوايا ناعمة، سماكة 1.55 سم",
    design: "تصميم Space Gray مع شعار Apple مضيء ولوحة مفاتيح سوداء",
    image: "images/products/10.svg",
    featured: true
  },
  {
    id: 11,
    name: "Dell XPS 15 للعمل",
    nameEn: "Dell XPS 15",
    category: "laptops",
    categoryLabel: "الحواسيب المحمولة",
    price: 1230,
    oldPrice: 1320,
    shape: "شاشة InfinityEdge بحواف رفيعة 4K، هيكل من الكربون",
    design: "لوحة مفاتيح بإضاءة بيضاء مع تتبع بلاتيني فاخر",
    image: "images/products/11.svg",
    featured: true
  },
  {
    id: 12,
    name: "Lenovo IdeaPad للدراسة",
    nameEn: "Lenovo IdeaPad",
    category: "laptops",
    categoryLabel: "الحواسيب المحمولة",
    price: 470,
    oldPrice: null,
    shape: "تصميم كلاسيكي قابل للطي بشاشة 15.6 بوصة مضادة للوهج",
    design: "غطاء فضي بسيط مناسب للطلاب مع مظهر عملي",
    image: "images/products/12.svg",
    featured: false
  },
  {
    id: 13,
    name: "iPad Pro 12.9 M2",
    nameEn: "iPad Pro 12.9",
    category: "tablets",
    categoryLabel: "الأجهزة اللوحية",
    price: 870,
    oldPrice: null,
    shape: "لوح رفيع جداً بزوايا مستديرة وحواف مسطحة",
    design: "جسم ألمنيوم واحد مع كاميرات مربعة في الزاوية",
    image: "images/products/13.svg",
    featured: true
  },
  {
    id: 14,
    name: "Samsung Galaxy Tab S9",
    nameEn: "Galaxy Tab S9",
    category: "tablets",
    categoryLabel: "الأجهزة اللوحية",
    price: 625,
    oldPrice: 680,
    shape: "لوح مستطيل بحواف رفيعة وشاشة AMOLED كبيرة",
    design: "ظهر معدني مع قلم S Pen وشعار Samsung أنيق",
    image: "images/products/14.svg",
    featured: false
  },
  {
    id: 15,
    name: "Huawei MatePad Pro",
    nameEn: "Huawei MatePad Pro",
    category: "tablets",
    categoryLabel: "الأجهزة اللوحية",
    price: 415,
    oldPrice: null,
    shape: "نسبة شاشة 90% مع حواف متساوية من جميع الجوانب",
    design: "تصميم رمادي معدني مع لوحة مفاتيح مغناطيسية اختيارية",
    image: "images/products/15.svg",
    featured: false
  },
  {
    id: 16,
    name: "سماعات Sony WH-1000XM5",
    nameEn: "Sony WH-1000XM5",
    category: "accessories",
    categoryLabel: "الإكسسوارات الإلكترونية",
    price: 245,
    oldPrice: 280,
    shape: "عقلة رأس دائرية ناعمة مع سوار قابل للتعديل",
    design: "تصميم أسود مطفي مع وسائد جلدية فاخرة",
    image: "images/products/16.svg",
    featured: true
  },
  {
    id: 17,
    name: "ساعة Apple Watch Series 9",
    nameEn: "Apple Watch Series 9",
    category: "accessories",
    categoryLabel: "الإكسسوارات الإلكترونية",
    price: 340,
    oldPrice: null,
    shape: "وجه مربع مستدير الزوايا مع سوار قابل للتبديل",
    design: "شاشة Retina دائمة مع إطار ألمنيوم وخيارات ألوان متعددة",
    image: "images/products/17.svg",
    featured: true
  },
  {
    id: 18,
    name: "شاحن Anker 65W سريع",
    nameEn: "Anker 65W Charger",
    category: "accessories",
    categoryLabel: "الإكسسوارات الإلكترونية",
    price: 36,
    oldPrice: null,
    shape: "مكعب صغير مدمج مع مقبس قابل للطي",
    design: "تصميم أبيض بسيط مع مؤشر LED أزرق ومنفذ USB-C",
    image: "images/products/18.svg",
    featured: false
  },
  {
    id: 19,
    name: "غطاء iPhone جلد فاخر",
    nameEn: "Premium iPhone Case",
    category: "accessories",
    categoryLabel: "الإكسسوارات الإلكترونية",
    price: 24,
    oldPrice: 30,
    shape: "غلاف يلتف حول الهاتف بحواف مرتفعة لحماية الشاشة",
    design: "جلد طبيعي بني مع خياطة يدوية وتصميم كلاسيكي",
    image: "images/products/19.svg",
    featured: false
  }
];

const CATEGORIES = [
  { id: "all", label: "الكل", icon: "📦" },
  { id: "phones", label: "الهواتف الخلوية", icon: "📱" },
  { id: "appliances", label: "الأجهزة الكهربائية", icon: "📺" },
  { id: "education", label: "الأجهزة التعليمية", icon: "📚" },
  { id: "laptops", label: "الحواسيب المحمولة", icon: "💻" },
  { id: "tablets", label: "الأجهزة اللوحية", icon: "📲" },
  { id: "accessories", label: "الإكسسوارات", icon: "🎧" }
];

const PRODUCT_ICONS = {
  phones: "📱",
  appliances: "📺",
  education: "📚",
  laptops: "💻",
  tablets: "📲",
  accessories: "🎧"
};

const PRODUCT_COLORS = {
  phones: ["#0d47a1", "#00bcd4"],
  appliances: ["#1565c0", "#42a5f5"],
  education: ["#2e7d32", "#66bb6a"],
  laptops: ["#37474f", "#78909c"],
  tablets: ["#6a1b9a", "#ab47bc"],
  accessories: ["#e65100", "#ffb74d"]
};

function formatPrice(price) {
  const cfg = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : { locale: "ar-JO", currencySymbol: "د.أ" };
  return price.toLocaleString(cfg.locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " " + cfg.currencySymbol;
}

function getProductFallback(product) {
  return product.imageFallback || getCategoryImage(product.nameEn, product.category);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

/* صور محلية — بعض المنتجات بصور مخصصة (png) */
const CUSTOM_PRODUCT_IMAGES = {
  5: "images/products/5.png",
  7: "images/products/7.png",
  9: "images/products/9.png",
  15: "images/products/15.png",
  19: "images/products/19.png"
};

PRODUCTS.forEach(function(p) {
  p.image = CUSTOM_PRODUCT_IMAGES[p.id] || ("images/products/" + p.id + ".jpg");
  p.imageFallback = getCategoryImage(p.nameEn, p.category);
});
