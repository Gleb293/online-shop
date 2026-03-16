// Данные о товарах
let products = JSON.parse(localStorage.getItem('products')) || [
    // КОМПЬЮТЕРЫ (15 шт)
    { id: 1, category: 'pc', name: "Starter Gaming", price: 45000, description: "Бюджетный игровой ПК для онлайн-игр.", specs: ["GTX 1650", "i3-12100F", "16GB RAM", "512GB SSD"], image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 2, category: 'pc', name: "Medium Power", price: 75000, description: "Сбалансированная сборка для Full HD гейминга.", specs: ["RTX 3060", "i5-12400F", "16GB RAM", "1TB SSD"], image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 3, category: 'pc', name: "Streamer Pro", price: 145000, description: "Идеально подходит для стриминга и монтажа.", specs: ["RTX 4070", "i7-13700K", "32GB RAM", "2TB SSD"], image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 4, category: 'pc', name: "White Minimalist", price: 95000, description: "Стильная белая сборка с отличной производительностью.", specs: ["RTX 3070 White", "Ryzen 7 5800X", "16GB White RAM"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 5, category: 'pc', name: "Compact Beast", price: 110000, description: "Маленький корпус, огромная мощь.", specs: ["RTX 4060", "i5-13600K", "ITX Case", "32GB RAM"], image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 6, category: 'pc', name: "RGB Overload", price: 130000, description: "Максимум подсветки и производительности.", specs: ["RTX 4070 Super", "i7-12700", "9x RGB Fans"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 7, category: 'pc', name: "Budget King", price: 35000, description: "Лучшее решение для экономного геймера.", specs: ["GTX 1650 Super", "Ryzen 5 3600", "16GB RAM"], image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 8, category: 'pc', name: "Office Master", price: 25000, description: "Надежный ПК для офисных задач.", specs: ["i3-10100", "8GB RAM", "256GB SSD"], image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 9, category: 'pc', name: "Liquid Cool", price: 210000, description: "ПК с кастомным водяным охлаждением.", specs: ["RTX 4080", "i7-14700K", "Custom Loop"], image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 10, category: 'pc', name: "Retro Build", price: 40000, description: "Стиль старой школы, современная начинка.", specs: ["RTX 3050", "i5-11400", "Retro Case"], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 11, category: 'pc', name: "Silent Night", price: 125000, description: "Полностью бесшумная работа.", specs: ["RTX 4060 Ti", "Noctua Cooling", "Silent Case"], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 12, category: 'pc', name: "AI Developer", price: 350000, description: "Для обучения нейросетей.", specs: ["2x RTX 4090", "Threadripper", "128GB RAM"], image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", reviews: [] },

    // НОУТБУКИ (15 шт)
   
    { id: 13, category: 'laptop', name: "ROG Strix G16", price: 160000, description: "Игровой монстр в портативном корпусе.", specs: ["RTX 4070", "i9-13980HX", "16GB RAM"], image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 14, category: 'laptop', name: "ThinkPad X1", price: 180000, description: "Легендарная надежность для бизнеса.", specs: ["i7-1355U", "32GB RAM", "1TB SSD"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 15, category: 'laptop', name: "Razer Blade 14", price: 230000, description: "Самый мощный 14-дюймовый ноутбук.", specs: ["RTX 4080", "Ryzen 9 7940HS", "QHD 240Hz"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 16, category: 'laptop', name: "Vivobook Pro", price: 85000, description: "Отличный экран для дизайнеров.", specs: ["OLED 2.8K", "RTX 3050", "Ryzen 7"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 17, category: 'laptop', name: "MSI Katana", price: 95000, description: "Доступный игровой ноутбук.", specs: ["RTX 3050 Ti", "i5-12500H", "144Hz"], image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 18, category: 'laptop', name: "Dell XPS 15", price: 210000, description: "Премиальный ноутбук на Windows.", specs: ["i9-13900H", "RTX 4060", "4K Touch"], image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80", reviews: [] },
   
    
    { id: 19, category: 'laptop', name: "Lenovo Legion 5", price: 135000, description: "Лучшее охлаждение в классе.", specs: ["RTX 4060", "Ryzen 7 7735H", "165Hz"], image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 20, category: 'laptop', name: "Gigabyte G5", price: 88000, description: "Мощность без переплат.", specs: ["RTX 4050", "i5-12500H", "16GB RAM"], image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 21, category: 'laptop', name: "Alienware m16", price: 290000, description: "Футуристичный дизайн и мощь.", specs: ["RTX 4080", "i9-13900HX", "QHD+"], image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 22, category: 'laptop', name: "Huawei MateBook", price: 65000, description: "Идеален для учебы и работы.", specs: ["i5-1240P", "16GB RAM", "2K Screen"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 23, category: 'laptop', name: "Surface Laptop 5", price: 140000, description: "Элегантность от Microsoft.", specs: ["i7-1255U", "16GB RAM", "PixelSense"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 24, category: 'laptop', name: "TUF Gaming F15", price: 105000, description: "Надежность военного стандарта.", specs: ["RTX 4050", "i7-12700H", "144Hz"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },

    // ПЕРИФЕРИЯ (30 шт)
    { id: 25, category: 'peripherals', name: "Logitech G Pro X Superlight", price: 14500, description: "Беспроводная игровая мышь, выбор про-игроков.", specs: ["HERO 25K", "63g", "Wireless"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 26, category: 'peripherals', name: "Razer DeathAdder V3 Pro", price: 13000, description: "Эргономичная мышь с топовым сенсором.", specs: ["Focus Pro 30K", "64g", "Wireless"], image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 27, category: 'peripherals', name: "SteelSeries Prime Wireless", price: 9500, description: "Мышь с оптико-магнитными переключателями.", specs: ["Prestige OM", "80g", "Wireless"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 28, category: 'peripherals', name: "Zowie EC2-C", price: 7500, description: "Классика киберспорта, идеальная форма.", specs: ["3360 Sensor", "Ergonomic", "Wired"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 29, category: 'peripherals', name: "Glorious Model O-", price: 6000, description: "Ультралегкая мышь с сотами.", specs: ["67g", "RGB", "Flexible Cable"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 30, category: 'peripherals', name: "Varmilo VA87M Summit", price: 16500, description: "Премиальная механическая клавиатура.", specs: ["Cherry MX Blue", "PBT Keycaps", "TKL"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 31, category: 'peripherals', name: "Leopold FC750R", price: 14000, description: "Лучшее качество сборки среди механик.", specs: ["Cherry MX Red", "Sound Dampening Pad"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 32, category: 'peripherals', name: "Keychron Q1", price: 18000, description: "Кастомная клавиатура в алюминиевом корпусе.", specs: ["Gasket Mount", "Hot-swappable", "QMK/VIA"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 33, category: 'peripherals', name: "Anne Pro 2", price: 8500, description: "Компактная 60% клавиатура с Bluetooth.", specs: ["Gateron Brown", "RGB", "Wireless"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 34, category: 'peripherals', name: "Ducky One 3 Mini", price: 12500, description: "Яркая и надежная механика.", specs: ["Quack Mechanics", "Hot-swap", "RGB"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 35, category: 'peripherals', name: "Logitech G915 TKL", price: 21000, description: "Низкопрофильная беспроводная механика.", specs: ["GL Tactile", "Lightspeed", "Aluminum"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 36, category: 'peripherals', name: "HyperX Alloy Origins", price: 10000, description: "Надежная клавиатура в стальном корпусе.", specs: ["HyperX Red Switches", "Full RGB"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 37, category: 'peripherals', name: "Corsair K70 RGB PRO", price: 17000, description: "Клавиатура с частотой опроса 8000Гц.", specs: ["Cherry MX Speed", "AXON Technology"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 38, category: 'peripherals', name: "Dark Project KD87A", price: 9000, description: "Смазанные стабилизаторы и отличный звук.", specs: ["Gateron Cap Teal", "PBT Keycaps"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 39, category: 'peripherals', name: "Akko 3068B Plus", price: 7500, description: "Стильная механика с крутыми кейкапами.", specs: ["Jelly Pink Switches", "Multi-mode"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 40, category: 'peripherals', name: "HyperX Cloud Alpha S", price: 11000, description: "Гарнитура с регулировкой баса.", specs: ["Dual Chamber", "7.1 Sound"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 41, category: 'peripherals', name: "Sennheiser GSP 600", price: 19000, description: "Профессиональный звук для игр.", specs: ["Closed Back", "Noise Cancelling Mic"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 42, category: 'peripherals', name: "Logitech G733", price: 15500, description: "Легкая беспроводная гарнитура.", specs: ["Lightspeed", "Blue VO!CE", "RGB"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 43, category: 'peripherals', name: "SteelSeries Arctis Nova 7", price: 18500, description: "Мультиплатформенная гарнитура.", specs: ["Nova Acoustic System", "Wireless"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 44, category: 'peripherals', name: "Razer BlackShark V2 Pro", price: 16000, description: "Киберспортивная гарнитура.", specs: ["Triforce 50mm", "HyperClear Mic"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 45, category: 'peripherals', name: "DXRacer Air", price: 35000, description: "Сетчатое игровое кресло.", specs: ["Breathable Mesh", "Lumbar Support"], image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 46, category: 'peripherals', name: "Secretlab Titan EVO", price: 52000, description: "Лучшее игровое кресло в мире.", specs: ["Hybrid Leatherette", "Magnetic Pillow"], image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 47, category: 'peripherals', name: "Cougar Armor One", price: 18000, description: "Надежное бюджетное кресло.", specs: ["PVC Leather", "180 Reclining"], image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 48, category: 'peripherals', name: "ASUS ROG Swift PG279QM", price: 85000, description: "Топовый монитор для киберспорта.", specs: ["240Hz", "QHD", "G-Sync"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 49, category: 'peripherals', name: "LG UltraGear 27GP850", price: 42000, description: "Народный выбор для 2K гейминга.", specs: ["Nano IPS", "180Hz", "1ms"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 50, category: 'peripherals', name: "Zowie XL2546K", price: 55000, description: "Монитор для CS:GO и Valorant.", specs: ["240Hz", "DyAc+ Technology"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 51, category: 'peripherals', name: "Blue Yeti X", price: 16000, description: "Профессиональный USB микрофон.", specs: ["Four-Capsule", "LED Metering"], image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 52, category: 'peripherals', name: "Elgato Stream Deck MK.2", price: 14500, description: "Контроллер для стримов.", specs: ["15 LCD Keys", "Customizable"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 53, category: 'peripherals', name: "Logitech C922 Pro", price: 9500, description: "Веб-камера для стриминга.", specs: ["1080p 30fps", "Background Removal"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] },
    { id: 54, category: 'peripherals', name: "SteelSeries QcK Heavy", price: 2500, description: "Толстый и надежный коврик.", specs: ["Micro-woven Cloth", "Extra Thick"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60", reviews: [] }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let authMode = 'login';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const filtered = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openProductDetails(${product.id})">
            ${currentUser && currentUser.email === 'admin@admin.com' ? `<button class="admin-btn" onclick="event.stopPropagation(); openAdminPanel(${product.id})">Редактировать</button>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <p class="product-price">${product.price.toLocaleString()} руб.</p>
                <button class="btn" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category === 'pc' ? 'комп' : category === 'laptop' ? 'ноут' : category === 'peripherals' ? 'периф' : 'все')) {
            btn.classList.add('active');
        }
    });
    renderProducts();
}

function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-desc').innerText = product.description;
    document.getElementById('detail-price').innerText = product.price.toLocaleString();
    const specsList = document.getElementById('detail-specs');
    specsList.innerHTML = (product.specs || []).map(s => `<li>${s}</li>`).join('');
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = (product.reviews || []).length > 0 
        ? product.reviews.map(r => `<div class="review-item"><div class="review-user">${r.user}</div><div class="review-text">${r.text}</div></div>`).join('')
        : '<p>Отзывов пока нет.</p>';
    document.getElementById('detail-add-btn').onclick = () => addToCart(product.id);
    modal.style.display = 'block';
}

function openAdminPanel(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('admin-modal');
    document.getElementById('admin-product-id').value = product.id;
    document.getElementById('admin-name').value = product.name;
    document.getElementById('admin-price').value = product.price;
    document.getElementById('admin-desc').value = product.description;
    document.getElementById('admin-image').value = product.image;
    modal.style.display = 'block';
}

document.getElementById('admin-form').onsubmit = function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('admin-product-id').value);
    const productIndex = products.findIndex(p => p.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name: document.getElementById('admin-name').value,
        price: parseInt(document.getElementById('admin-price').value),
        description: document.getElementById('admin-desc').value,
        image: document.getElementById('admin-image').value
    };
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
    document.getElementById('admin-modal').style.display = 'none';
    showNotification('Товар обновлен!');
};

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    showNotification(`${product.name} добавлен в корзину!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = count;
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        totalPrice.innerText = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()} x ${item.quantity} руб.</p>
                </div>
                <button class="btn" style="background: var(--accent-color); padding: 0.4rem 0.8rem;" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.innerText = total.toLocaleString();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }, 100);
}

function setupEventListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close');
    const authBtn = document.getElementById('auth-btn');
    const authModal = document.getElementById('auth-modal');
    const closeAuth = document.querySelector('.close-auth');
    const closeProduct = document.querySelector('.close-product');
    const closeAdmin = document.querySelector('.close-admin');

    cartBtn.onclick = () => cartModal.style.display = 'block';
    closeBtn.onclick = () => cartModal.style.display = 'none';
    authBtn.onclick = () => currentUser ? logout() : authModal.style.display = 'block';
    closeAuth.onclick = () => authModal.style.display = 'none';
    closeProduct.onclick = () => document.getElementById('product-modal').style.display = 'none';
    closeAdmin.onclick = () => document.getElementById('admin-modal').style.display = 'none';

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) event.target.style.display = 'none';
    };

    document.getElementById('auth-form').onsubmit = handleAuth;
    if (currentUser) document.getElementById('auth-btn').innerText = `Выйти (${currentUser.email})`;
}

function switchAuth(mode) {
    authMode = mode;
    const tabs = document.querySelectorAll('.tab-btn');
    const submitBtn = document.getElementById('auth-submit-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (mode === 'login') {
        tabs[0].classList.add('active');
        submitBtn.innerText = 'Войти';
    } else {
        tabs[1].classList.add('active');
        submitBtn.innerText = 'Зарегистрироваться';
    }
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (authMode === 'register') {
        if (users.find(u => u.email === email)) return alert('Пользователь уже существует!');
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Регистрация успешна!');
        switchAuth('login');
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            document.getElementById('auth-modal').style.display = 'none';
            document.getElementById('auth-btn').innerText = `Выйти (${user.email})`;
            renderProducts();
            showNotification('Вы успешно вошли!');
        } else alert('Неверный email или пароль!');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('auth-btn').innerText = 'Войти';
    renderProducts();
    showNotification('Вы вышли из системы');
}
