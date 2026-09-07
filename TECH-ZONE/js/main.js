/* Tech Zone - Main JavaScript */
const CART_KEY = "techzone_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }

  saveCart(cart);
  showToast("تمت إضافة " + product.name + " إلى السلة ✓");
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQuantity(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  if (qty <= 0) {
    removeFromCart(productId);
  } else {
    item.qty = qty;
    saveCart(cart);
  }
}

function clearCart() {
  saveCart([]);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getShippingCost(subtotal) {
  const min = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG.freeShippingMin : 95;
  const cost = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG.shippingCost : 5;
  return subtotal >= min ? 0 : cost;
}

function productImgTag(product, className) {
  const fallback = getProductFallback(product);
  const cls = className ? ' class="' + className + '"' : "";
  return '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy"' + cls +
    ' onerror="this.onerror=null;this.src=\'' + fallback + '\';">';
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function renderProductCard(product) {
  return `
    <article class="product-card" data-category="${product.category}">
      ${productImgTag(product)}
      <div class="product-card-body">
        <span class="product-category-tag">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <dl class="product-info">
          <dt>السعر</dt>
          <dd>${formatPrice(product.price)}</dd>
          <dt>الشكل</dt>
          <dd>${product.shape}</dd>
          <dt>التصميم</dt>
          <dd>${product.design}</dd>
        </dl>
        <div class="product-price">${formatPrice(product.price)}</div>
        <button class="btn btn-secondary" onclick="addToCart(${product.id})">
          🛒 أضف إلى السلة
        </button>
      </div>
    </article>
  `;
}

function renderOfferCard(product) {
  const oldPriceHtml = product.oldPrice
    ? `<span class="old">${formatPrice(product.oldPrice)}</span>`
    : "";
  return `
    <div class="offer-card">
      ${product.oldPrice ? '<span class="offer-badge">عرض خاص</span>' : ""}
      ${productImgTag(product)}
      <div class="offer-card-body">
        <h3>${product.name}</h3>
        <p class="offer-price">${formatPrice(product.price)} ${oldPriceHtml}</p>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">اشتري الآن</button>
      </div>
    </div>
  `;
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    nav.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", function(e) {
    e.stopPropagation();
    if (nav.classList.contains("open")) closeMenu();
    else openMenu();
  });

  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function(e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) closeMenu();
  });
}

function initProductFilters() {
  const grid = document.getElementById("products-grid");
  const tabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("product-search");
  if (!grid) return;

  function filterProducts() {
    const activeTab = document.querySelector(".filter-tab.active");
    const category = activeTab ? activeTab.dataset.category : "all";
    const search = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filtered = PRODUCTS.filter(p => {
      const matchCategory = category === "all" || p.category === category;
      const matchSearch = !search || p.name.toLowerCase().includes(search) ||
        p.nameEn.toLowerCase().includes(search);
      return matchCategory && matchSearch;
    });

    grid.innerHTML = filtered.length
      ? filtered.map(renderProductCard).join("")
      : '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#5a6a7e;">لا توجد منتجات مطابقة</p>';
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }
}

function renderCartPage() {
  const container = document.getElementById("cart-items");
  const summaryEl = document.getElementById("cart-summary");
  const emptyEl = document.getElementById("empty-cart");
  const layoutEl = document.getElementById("cart-layout");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (layoutEl) layoutEl.style.display = "none";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";
  if (layoutEl) layoutEl.style.display = "grid";

  container.innerHTML = cart.map(item => {
    const product = getProductById(item.id);
    const imgSrc = product ? product.image : item.image;
    const imgFallback = product ? getProductFallback(product) : "";
    return `
    <tr>
      <td data-label="المنتج">
        <div style="display:flex;align-items:center;gap:1rem;">
          <img class="cart-item-img" src="${imgSrc}" alt="${item.name}"${imgFallback ? ' onerror="this.onerror=null;this.src=\'' + imgFallback + '\';"' : ""}>
          <strong>${item.name}</strong>
        </div>
      </td>
      <td data-label="السعر">${formatPrice(item.price)}</td>
      <td data-label="الكمية">
        <div class="qty-control">
          <button onclick="updateQuantity(${item.id}, ${item.qty - 1}); renderCartPage();">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQuantity(${item.id}, ${item.qty + 1}); renderCartPage();">+</button>
        </div>
      </td>
      <td data-label="المجموع">${formatPrice(item.price * item.qty)}</td>
      <td data-label="إجراء">
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id}); renderCartPage();">حذف</button>
      </td>
    </tr>
  `;
  }).join("");

  const subtotal = getCartTotal();
  const shipping = getShippingCost(subtotal);
  const total = subtotal + shipping;

  if (summaryEl) {
    summaryEl.innerHTML = `
      <h3>ملخص الطلب</h3>
      <div class="summary-row"><span>المجموع الفرعي</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>الشحن</span><span>${shipping === 0 ? "مجاني" : formatPrice(shipping)}</span></div>
      <div class="summary-row total"><span>الإجمالي</span><span>${formatPrice(total)}</span></div>
      <a href="checkout.html" class="btn btn-primary" style="width:100%;margin-top:1.25rem;">إتمام الشراء</a>
    `;
  }
}

function initCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  const orderSummary = document.getElementById("checkout-summary");
  const cart = getCart();

  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  const subtotal = getCartTotal();
  const shipping = getShippingCost(subtotal);
  const total = subtotal + shipping;

  if (orderSummary) {
    orderSummary.innerHTML = cart.map(item => `
      <div class="summary-row">
        <span>${item.name} × ${item.qty}</span>
        <span>${formatPrice(item.price * item.qty)}</span>
      </div>
    `).join("") + `
      <div class="summary-row"><span>الشحن</span><span>${shipping === 0 ? "مجاني" : formatPrice(shipping)}</span></div>
      <div class="summary-row total"><span>الإجمالي</span><span>${formatPrice(total)}</span></div>
    `;
  }

  document.querySelectorAll(".payment-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".payment-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      opt.querySelector("input").checked = true;
    });
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const orderId = "TZ-" + Date.now().toString(36).toUpperCase();
    const orderData = {
      id: orderId,
      items: cart,
      total: total,
      date: new Date().toISOString(),
      customer: {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        city: form.city.value
      },
      payment: form.payment.value
    };
    localStorage.setItem("techzone_last_order", JSON.stringify(orderData));
    clearCart();
    window.location.href = "thank-you.html?order=" + orderId;
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    showToast("شكراً لتواصلك! سنرد عليك خلال 24 ساعة.");
    form.reset();
  });
}

function initThankYou() {
  const orderIdEl = document.getElementById("order-id");
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("order");
  if (orderIdEl && orderId) {
    orderIdEl.textContent = orderId;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  updateCartBadge();
  initMobileMenu();
  initProductFilters();
  renderCartPage();
  initCheckout();
  initContactForm();
  initThankYou();

  const offersGrid = document.getElementById("offers-grid");
  if (offersGrid) {
    offersGrid.innerHTML = getFeaturedProducts().slice(0, 3).map(renderOfferCard).join("");
  }

  const productsGrid = document.getElementById("products-grid");
  if (productsGrid && !productsGrid.innerHTML.trim()) {
    productsGrid.innerHTML = PRODUCTS.map(renderProductCard).join("");
  }
});
