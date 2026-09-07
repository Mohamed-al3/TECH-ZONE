const fs = require("fs");
const path = require("path");

const products = [
  { id: 1, name: "Samsung Galaxy S24", icon: "📱", c1: "#0d47a1", c2: "#00bcd4" },
  { id: 2, name: "iPhone 15 Pro Max", icon: "📱", c1: "#1a237e", c2: "#5c6bc0" },
  { id: 3, name: "Xiaomi 14 Pro", icon: "📱", c1: "#004d40", c2: "#00897b" },
  { id: 4, name: "Samsung Smart TV 65", icon: "📺", c1: "#1565c0", c2: "#42a5f5" },
  { id: 5, name: "LG Microwave", icon: "🍳", c1: "#455a64", c2: "#90a4ae" },
  { id: 6, name: "Dyson V15", icon: "🧹", c1: "#6a1b9a", c2: "#ba68c8" },
  { id: 7, name: "SMART Board", icon: "📋", c1: "#2e7d32", c2: "#66bb6a" },
  { id: 8, name: "Epson Projector", icon: "📽️", c1: "#558b2f", c2: "#9ccc65" },
  { id: 9, name: "Casio Calculator", icon: "🔢", c1: "#33691e", c2: "#7cb342" },
  { id: 10, name: "MacBook Pro M3", icon: "💻", c1: "#37474f", c2: "#78909c" },
  { id: 11, name: "Dell XPS 15", icon: "💻", c1: "#263238", c2: "#607d8b" },
  { id: 12, name: "Lenovo IdeaPad", icon: "💻", c1: "#01579b", c2: "#4fc3f7" },
  { id: 13, name: "iPad Pro 12.9", icon: "📲", c1: "#4a148c", c2: "#ab47bc" },
  { id: 14, name: "Galaxy Tab S9", icon: "📲", c1: "#311b92", c2: "#7e57c2" },
  { id: 15, name: "Huawei MatePad", icon: "📲", c1: "#880e4f", c2: "#f06292" },
  { id: 16, name: "Sony WH-1000XM5", icon: "🎧", c1: "#e65100", c2: "#ffb74d" },
  { id: 17, name: "Apple Watch 9", icon: "⌚", c1: "#bf360c", c2: "#ff8a65" },
  { id: 18, name: "Anker Charger 65W", icon: "🔌", c1: "#f57f17", c2: "#ffca28" },
  { id: 19, name: "iPhone Leather Case", icon: "📱", c1: "#4e342e", c2: "#a1887f" }
];

const dir = path.join(__dirname, "..", "images", "products");
fs.mkdirSync(dir, { recursive: true });

products.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" style="stop-color:${p.c1}"/><stop offset="100%" style="stop-color:${p.c2}"/>
  </linearGradient></defs>
  <rect width="600" height="400" fill="url(#g)"/>
  <text x="300" y="155" text-anchor="middle" font-size="80">${p.icon}</text>
  <text x="300" y="230" text-anchor="middle" fill="white" font-family="Segoe UI,Tahoma,sans-serif" font-size="20" font-weight="bold">${p.name}</text>
  <text x="300" y="270" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="Segoe UI,Tahoma,sans-serif" font-size="15">ويب نت — الزرقاء، الأردن</text>
  </svg>`;
  fs.writeFileSync(path.join(dir, `${p.id}.svg`), svg);
});

console.log("Created", products.length, "product images");
