const STORAGE_KEY = "restaurant_products";

const starterProducts = [
  { id: 1, title: "Paneer Tikka",price: 220, category: "Starters",    image: "https://tse2.mm.bing.net/th/id/OIP.erIeuMGBTMhsSNJls7rBSgHaHa?r=0&pid=Api&h=220&P=0" },
  { id: 2, title: "Masala Papad",price: 250, category: "Starters",    image: "https://i.pinimg.com/originals/62/9e/51/629e515942c92ace0450a68a6ad79ab5.jpg" },
  { id: 3, title: "Kaju Kari",price: 320, category: "Main Course", image: "https://tse3.mm.bing.net/th/id/OIP.SZTXJntHV_QNUmTEEXoe4AHaFo?r=0&pid=Api&h=220&P=0" },
  { id: 4, title: "Veg Biryani",price: 260, category: "Main Course", image: "https://tse1.mm.bing.net/th/id/OIP.DfI00GX1B8qJiBZ8PCy8ZgHaJE?r=0&pid=Api&h=220&P=0" },
  { id: 5, title: "Dal Makhani",price: 210, category: "Main Course", image: "https://tse3.mm.bing.net/th/id/OIP.8u4Qw0F3yb9xZTCnIyr8xQHaHa?r=0&pid=Api&h=220&P=0" },
  { id: 6, title: "Pav Bhaji",price: 180, category: "Main Course", image: "https://tse1.mm.bing.net/th/id/OIP.F1HTDuq2A45CZbbBC-h9vwHaHa?r=0&pid=Api&h=220&P=0" },
  { id: 7, title: "Tandoori Roti",price: 40,  category: "Breads",      image: "https://tse4.mm.bing.net/th/id/OIP.x8n1wEjjff3eBjxLENJqYwHaHa?r=0&pid=Api&h=220&P=0" },
  { id: 8, title: "Masala Dosa",price: 150, category: "Main Course", image: "https://tse2.mm.bing.net/th/id/OIP.skicA__OnDk5OTFK-x1zkQHaE7?r=0&pid=Api&h=220&P=0" },
  { id: 9, title: "Gulab Jamun",price: 90,  category: "Desserts",    image: "https://tse1.mm.bing.net/th/id/OIP.G3PgBqy-X46fWxdaNVFE-QHaEK?r=0&pid=Api&h=220&P=0" },
  { id: 10, title: "Cold Coffee",price: 120, category: "Beverages",   image: "https://tse4.mm.bing.net/th/id/OIP.E9u0awkdPjfQlQ45j2DTUQHaHa?r=0&pid=Api&h=220&P=0" }
];


let products = [];
let editingId = null;

const productList     = document.getElementById("productList");
const overlay         = document.getElementById("overlay");
const openModalBtn    = document.getElementById("openModalBtn");
const cancelBtn       = document.getElementById("cancelBtn");
const productForm     = document.getElementById("productForm");
const modalTitle      = document.getElementById("modalTitle");
const saveBtn         = document.getElementById("saveBtn");
const formError       = document.getElementById("formError");

const titleInput      = document.getElementById("titleInput");
const priceInput      = document.getElementById("priceInput");
const imageInput      = document.getElementById("imageInput");
const categoryInput   = document.getElementById("categoryInput");
const productIdField  = document.getElementById("productId");

const searchInput     = document.getElementById("searchInput");
const categoryFilter  = document.getElementById("categoryFilter");
const sortSelect      = document.getElementById("sortSelect");

function loadProducts() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    products = JSON.parse(saved);
  } else {
    products = starterProducts;
    saveProducts();
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function openModal(mode = "add", product = null) {
  formError.style.display = "none";
  productForm.reset();

  if (mode === "edit" && product) {
    editingId = product.id;
    modalTitle.textContent = "Edit Menu Item";
    saveBtn.textContent = "Save Changes";
    productIdField.value = product.id;
    titleInput.value = product.title;
    priceInput.value = product.price;
    imageInput.value = product.image;
    categoryInput.value = product.category;
  } else {
    editingId = null;
    modalTitle.textContent = "Add Menu Item";
    saveBtn.textContent = "Add Item";
    productIdField.value = "";
  }

  overlay.classList.add("open");
  titleInput.focus();
}

function closeModal() {
  overlay.classList.remove("open");
  productForm.reset();
  formError.style.display = "none";
  editingId = null;
}

openModalBtn.addEventListener("click", () => openModal("add"));
cancelBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal(); 
});

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addProduct();
});

function addProduct() {
  const title = titleInput.value.trim();
  const price = parseFloat(priceInput.value);
  const image = imageInput.value.trim() || "https://source.unsplash.com/400x300/?indian-food";
  const category = categoryInput.value;

  if (!title || isNaN(price) || price <= 0) {
    formError.style.display = "block";
    return;
  }
  formError.style.display = "none";

  if (editingId) {
    const product = products.find(p => p.id === editingId);
    product.title = title;
    product.price = price;
    product.image = image;
    product.category = category;
  } else {
    const newProduct = {
      id: Date.now(),       
      title,
      price,
      image,
      category
    };
    products.push(newProduct);
  }

  saveProducts();
  renderProducts();
  closeModal();              
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderProducts();
}


function renderProducts() {
  productList.innerHTML = "";

  let list = [...products];

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    list = list.filter(p => p.title.toLowerCase().includes(query));
  }

  const cat = categoryFilter.value;
  if (cat !== "all") {
    list = list.filter(p => p.category === cat);
  }

  if (sortSelect.value === "lowhigh") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "highlow") {
    list.sort((a, b) => b.price - a.price);
  }

  if (list.length === 0) {
    productList.innerHTML = `<div class="empty-msg">No dishes match your search — try a different keyword or filter.</div>`;
    return;
  }

  list.forEach(addProductToList);
  refreshCategoryOptions();
}

function addProductToList(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="img-wrap">
      <img src="${product.image}" alt="${product.title}" onerror="this.src='https://source.unsplash.com/400x300/?food'">
      <div class="price-coin">₹${product.price}</div>
    </div>
    <div class="card-body">
      <span class="badge">${product.category}</span>
      <h3>${product.title}</h3>
      <div class="card-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  `;

  card.querySelector(".edit-btn").addEventListener("click", () => openModal("edit", product));
  card.querySelector(".delete-btn").addEventListener("click", () => deleteProduct(product.id));

  productList.appendChild(card);
}

function refreshCategoryOptions() {
  const current = categoryFilter.value;
  const categories = ["all", ...new Set(products.map(p => p.category))];
  categoryFilter.innerHTML = categories
    .map(c => `<option value="${c}">${c === "all" ? "All categories" : c}</option>`)
    .join("");
  categoryFilter.value = categories.includes(current) ? current : "all";
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);

loadProducts();
renderProducts();