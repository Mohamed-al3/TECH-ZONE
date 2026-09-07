/* Generate embedded images (work offline + file://) */
function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSvgDataUri(title, color1, color2, subtitle) {
  const sub = subtitle || "Tech Zone - Zarqa, Jordan";
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">' +
    '<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="' + color1 + '"/>' +
    '<stop offset="100%" stop-color="' + color2 + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="600" height="400" fill="url(#g)"/>' +
    '<circle cx="300" cy="155" r="52" fill="rgba(255,255,255,0.12)"/>' +
    '<text x="300" y="165" text-anchor="middle" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="36">TZ</text>' +
    '<text x="300" y="230" text-anchor="middle" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="bold">' + escapeXml(title) + '</text>' +
    '<text x="300" y="265" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="Arial,Helvetica,sans-serif" font-size="14">' + escapeXml(sub) + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const CATEGORY_COLORS = {
  phones: ["#0d47a1", "#00bcd4"],
  appliances: ["#1565c0", "#42a5f5"],
  education: ["#2e7d32", "#66bb6a"],
  laptops: ["#37474f", "#78909c"],
  tablets: ["#6a1b9a", "#ab47bc"],
  accessories: ["#e65100", "#ffb74d"]
};

function getCategoryImage(name, category) {
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.phones;
  return buildSvgDataUri(name, colors[0], colors[1]);
}

const HERO_IMAGE = buildSvgDataUri("Tech Zone", "#0a1628", "#0277bd", "Zarqa, Jordan");
