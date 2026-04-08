
let products = JSON.parse(localStorage.getItem('products')) || [
    
    { id: 1, category: 'pc', isNew: true, name: "Starter Gaming", price: 45000, description: { ru: "Бюджетный игровой ПК для онлайн-игр.", en: "Budget gaming PC for online games." }, specs: ["GTX 1650", "i3-12100F", "16GB RAM", "512GB SSD"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 2, category: 'pc', isSale: true, name: "Medium Power", price: 67000, oldPrice: 75000, description: { ru: "Сбалансированная сборка для Full HD гейминга.", en: "Balanced build for Full HD gaming." }, specs: ["RTX 3060", "i5-12400F", "16GB RAM", "1TB SSD"], image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 3, category: 'pc', isNew: true, name: "Cyberpunk Edition", price: 115000, description: { ru: "Мощный ПК для современных игр на высоких настройках.", en: "Powerful PC for modern games at high settings." }, specs: ["RTX 4060 Ti", "Ryzen 5 7600", "32GB DDR5", "1TB NVMe"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 5, category: 'pc', isNew: true, name: "Ultimate 4K", price: 280000, description: { ru: "Бескомпромиссная мощность для 4K гейминга.", en: "Uncompromising power for 4K gaming." }, specs: ["RTX 4090", "i9-14900K", "64GB RAM", "4TB SSD"], image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 6, category: 'pc', isNew: true, name: "White Minimalist", price: 95000, description: { ru: "Стильная белая сборка с отличной производительностью.", en: "Stylish white build with great performance." }, specs: ["RTX 3070 White", "Ryzen 7 5800X", "16GB White RAM"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 9, category: 'pc', isNew: true, name: "RGB Overload", price: 130000, description: { ru: "Максимум подсветки и производительности.", en: "Maximum lighting and performance." }, specs: ["RTX 4070 Super", "i7-12700", "9x RGB Fans"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },

    { id: 10, category: 'pc', name: "Budget King", price: 35000, description: { ru: "Лучшее решение для экономного геймера.", en: "The best solution for a budget gamer." }, specs: ["GTX 1650 Super", "Ryzen 5 3600", "16GB RAM"], image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 11, category: 'pc', name: "Office Master", price: 25000, description: { ru: "Надежный ПК для офисных задач.", en: "Reliable PC for office tasks." }, specs: ["i3-10100", "8GB RAM", "256GB SSD"], image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 12, category: 'pc', name: "Liquid Cool", price: 210000, description: { ru: "ПК с кастомным водяным охлаждением.", en: "PC with custom liquid cooling." }, specs: ["RTX 4080", "i7-14700K", "Custom Loop"], image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 13, category: 'pc', name: "Retro Build", price: 40000, description: { ru: "Стиль старой школы, современная начинка.", en: "Old school style, modern hardware." }, specs: ["RTX 3050", "i5-11400", "Retro Case"], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 14, category: 'pc', name: "Silent Night", price: 125000, description: { ru: "Полностью бесшумная работа.", en: "Completely silent operation." }, specs: ["RTX 4060 Ti", "Noctua Cooling", "Silent Case"], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 15, category: 'pc', name: "AI Developer", price: 350000, description: { ru: "Для обучения нейросетей.", en: "For neural network training." }, specs: ["2x RTX 4090", "Threadripper", "128GB RAM"], image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 101, category: 'pc',isSale: true, name: "Neon Striker", price: 80000,oldPrice:89000, description: { ru: "Яркий дизайн и высокая скорость.", en: "Bright design and high speed." }, specs: ["RTX 4060", "i5-13400F", "32GB RAM"], image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 103, category: 'pc', name: "Frost Byte", price: 62000, description: { ru: "Холодный и стабильный под нагрузкой.", en: "Cool and stable under load." }, specs: ["RTX 3050", "i5-12400", "16GB RAM"], image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", reviews: [] },    { id: 104, category: 'pc', name: "Titan Forge", price: 420000, description: { ru: "Максимальная мощь для рендеринга.", en: "Maximum power for rendering." }, specs: ["RTX 6000 Ada", "Threadripper 7000", "256GB RAM"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 105, category: 'pc', name: "Eco Stream", price: 48000, description: { ru: "Энергоэффективный ПК для стриминга.", en: "Energy efficient PC for streaming." }, specs: ["GTX 1660 Super", "i5-11400", "16GB RAM"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 106, category: 'pc',isSale:true,isNew:true, name: "Dragon Breath" ,price: 149999,oldPrice : 195000, description: { ru: "Агрессивный дизайн, топовое железо.", en: "Aggressive design, top hardware." }, specs: ["RTX 4080 Super", "i7-14700K", "32GB RAM"], image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 107, category: 'pc', name: "Mini Beast", price: 110000, description: { ru: "Мощность в компактном ITX корпусе.", en: "Power in a compact ITX case." }, specs: ["RTX 4070", "i5-13600K", "32GB RAM"], image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 108, category: 'pc', name: "Workstation Pro", price: 230000, description: { ru: "Для профессиональной работы с видео.", en: "For professional video work." }, specs: ["RTX 4090", "Ryzen 9 7950X", "64GB RAM"], image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 109, category: 'pc', name: "Retro Wave", price: 55000, description: { ru: "Винтажный вид, современная мощь.", en: "Vintage look, modern power." }, specs: ["RTX 3060", "i5-12400", "16GB RAM"], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 110, category: 'pc', name: "Apex Predator", price: 310000, description: { ru: "Для тех, кто не привык проигрывать.", en: "For those not used to losing." }, specs: ["RTX 4090", "i9-14900KS", "64GB RAM"], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 201, category: 'pc', name: "Storm Breaker", price: 125000, description: { ru: "Мощный ПК для киберспорта.", en: "Powerful PC for esports." }, specs: ["RTX 4070", "i7-13700F", "32GB RAM"], image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 203, category: 'pc', name: "Ice Wall", price: 78000, description: { ru: "Стабильность и тишина.", en: "Stability and silence." }, specs: ["RTX 4060", "i5-13400", "16GB RAM"], image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", reviews: [] },    { id: 204, category: 'pc', name: "Nebula One", price: 210000, description: { ru: "Космическая скорость работы.", en: "Space speed of work." }, specs: ["RTX 4080 Super", "i9-13900K", "32GB RAM"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 205, category: 'pc', name: "Ghost Shell", price: 92000, description: { ru: "Минималистичный белый дизайн.", en: "Minimalist white design." }, specs: ["RTX 4060 Ti", "Ryzen 5 7600", "16GB RAM"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 206, category: 'pc', name: "Vortex Pro", price: 138000, description: { ru: "Идеален для стриминга и игр.", en: "Ideal for streaming and gaming." }, specs: ["RTX 4070", "i7-12700K", "32GB RAM"], image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 207, category: 'pc', name: "Zenith X", price: 275000, description: { ru: "Вершина технологического прогресса.", en: "The pinnacle of technological progress." }, specs: ["RTX 4090", "Ryzen 9 7950X3D", "64GB RAM"], image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 208, category: 'pc', name: "Rogue One", price: 65000, description: { ru: "Бюджетный король Full HD.", en: "Budget king of Full HD." }, specs: ["RTX 3060", "i5-12400F", "16GB RAM"], image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 209, category: 'pc', name: "Obsidian", price: 185000, description: { ru: "Черный как ночь, мощный как шторм.", en: "Black as night, powerful as a storm." }, specs: ["RTX 4080", "i7-14700K", "32GB RAM"], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 210, category: 'pc', name: "Solaris", price: 115000, description: { ru: "Яркая производительность.", en: "Bright performance." }, specs: ["RTX 4060 Ti", "i5-13600K", "32GB RAM"], image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 211, category: 'pc', name: "Titan Mini", price: 142000, description: { ru: "Маленький корпус, огромная мощь.", en: "Small case, huge power." }, specs: ["RTX 4070", "i7-13700", "ITX Build"], image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 213, category: 'pc', name: "Quantum", price: 380000, description: { ru: "Для сложнейших вычислений.", en: "For the most complex calculations." }, specs: ["RTX 6000 Ada", "i9-14900K", "128GB RAM"], image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80", reviews: [] },    { id: 214, category: 'pc', name: "Velocity", price: 84000, description: { ru: "Скорость в каждом кадре.", en: "Speed in every frame." }, specs: ["RTX 3060 Ti", "i5-13400F", "16GB RAM"], image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 215, category: 'pc', name: "Overlord", price: 450000, description: { ru: "Властелин игрового мира.", en: "Lord of the gaming world." }, specs: ["2x RTX 4090", "Threadripper", "256GB RAM"], image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", reviews: [] },

    
    { id: 18, category: 'laptop', name: "ThinkPad X1", price: 180000, description: { ru: "Легендарная надежность для бизнеса.", en: "Legendary reliability for business." }, specs: ["i7-1355U", "32GB RAM", "1TB SSD"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 19, category: 'laptop', name: "Razer Blade 14", price: 230000, description: { ru: "Самый мощный 14-дюймовый ноутбук.", en: "The most powerful 14-inch laptop." }, specs: ["RTX 4080", "Ryzen 9 7940HS", "QHD 240Hz"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 20, category: 'laptop', name: "Vivobook Pro", price: 85000, description: { ru: "Отличный экран для дизайнеров.", en: "Excellent screen for designers." }, specs: ["OLED 2.8K", "RTX 3050", "Ryzen 7"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 21, category: 'laptop',isSale:true, name: "MSI Katana", price:83999,oldPrice: 95000, description: { ru: "Доступный игровой ноутбук.", en: "Affordable gaming laptop." }, specs: ["RTX 3050 Ti", "i5-12500H", "144Hz"], image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 22, category: 'laptop', name: "Dell XPS 15", price: 210000, description: { ru: "Премиальный ноутбук на Windows.", en: "Premium Windows laptop." }, specs: ["i9-13900H", "RTX 4060", "4K Touch"], image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 25, category: 'laptop', name: "Lenovo Legion 5", price: 135000, description: { ru: "Лучшее охлаждение в классе.", en: "Best cooling in its class." }, specs: ["RTX 4060", "Ryzen 7 7735H", "165Hz"], image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 26, category: 'laptop', name: "Gigabyte G5", price: 88000, description: { ru: "Мощность без переплат.", en: "Power without overpaying." }, specs: ["RTX 4050", "i5-12500H", "16GB RAM"], image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 27, category: 'laptop', name: "Alienware m16", price: 290000, description: { ru: "Футуристичный дизайн и мощь.", en: "Futuristic design and power." }, specs: ["RTX 4080", "i9-13900HX", "QHD+"], image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 28, category: 'laptop', name: "Huawei MateBook", price: 65000, description: { ru: "Идеален для учебы и работы.", en: "Ideal for study and work." }, specs: ["i5-1240P", "16GB RAM", "2K Screen"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 29, category: 'laptop', name: "Surface Laptop 5", price: 140000, description: { ru: "Элегантность от Microsoft.", en: "Elegance from Microsoft." }, specs: ["i7-1255U", "16GB RAM", "PixelSense"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 30, category: 'laptop', name: "TUF Gaming F15", price: 105000, description: { ru: "Надежность военного стандарта.", en: "Military-grade reliability." }, specs: ["RTX 4050", "i7-12700H", "144Hz"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 111, category: 'laptop', name: "MacBook Pro 14", price: 195000, description: { ru: "Эталон для работы с графикой.", en: "The standard for graphics work." }, specs: ["M3 Pro", "18GB RAM", "512GB SSD"], image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 112, category: 'laptop', name: "Zenbook Duo", price: 215000, description: { ru: "Два экрана для двойной продуктивности.", en: "Two screens for double productivity." }, specs: ["i9-13900H", "32GB RAM", "RTX 4050"], image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 113, category: 'laptop', name: "HP Omen 17", price: 175000, description: { ru: "Большой экран, большая мощность.", en: "Big screen, big power." }, specs: ["RTX 4070", "i7-13700H", "17.3 inch"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 114, category: 'laptop', name: "Acer Predator", price: 155000, description: { ru: "Хищник в мире игровых ноутбуков.", en: "Predator in the world of gaming laptops." }, specs: ["RTX 4060 Ti", "i7-13700HX", "165Hz"], image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 115, category: 'laptop', name: "Galaxy Book 3", price: 125000, description: { ru: "Тонкий, легкий, мощный.", en: "Thin, light, powerful." }, specs: ["i7-1360P", "16GB RAM", "AMOLED"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 216, category: 'laptop', name: "MSI Stealth 16", price: 245000, description: { ru: "Тонкий игровой ноутбук премиум-класса.", en: "Premium thin gaming laptop." }, specs: ["RTX 4080", "i9-13900H", "32GB RAM"], image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 217, category: 'laptop', name: "Gigabyte Aero 16", price: 185000, description: { ru: "Для создателей контента.", en: "For content creators." }, specs: ["RTX 4070", "i7-13700H", "4K OLED"], image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 218, category: 'laptop', name: "ASUS Flow X16", price: 225000, description: { ru: "Трансформер с мощной графикой.", en: "Convertible with powerful graphics." }, specs: ["RTX 4070", "Ryzen 9", "Mini LED"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 219, category: 'laptop', name: "Razer Blade 16", price: 340000, description: { ru: "Самый мощный экран в мире.", en: "The most powerful screen in the world." }, specs: ["RTX 4090", "i9-13950HX", "Dual Mode Mini-LED"], image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 220, category: 'laptop', name: "Alienware x14", price: 165000, description: { ru: "Самый тонкий 14-дюймовый Alienware.", en: "The thinnest 14-inch Alienware." }, specs: ["RTX 4060", "i7-13620H", "165Hz"], image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 221, category: 'laptop', name: "Lenovo Yoga Pro 9i", price: 155000, description: { ru: "Мощь и стиль в одном флаконе.", en: "Power and style in one bottle." }, specs: ["RTX 4050", "i9-13905H", "3.2K Screen"], image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 222, category: 'laptop', name: "HP Victus 16", price: 98000, description: { ru: "Доступный гейминг для каждого.", en: "Affordable gaming for everyone." }, specs: ["RTX 4050", "Ryzen 5 7640HS", "144Hz"], image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 223, category: 'laptop', name: "Acer Swift X", price: 112000, description: { ru: "Легкий ноутбук с дискретной графикой.", en: "Lightweight laptop with discrete graphics." }, specs: ["RTX 3050 Ti", "Ryzen 7", "1.4kg"], image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 224, category: 'laptop', name: "Dell G15", price: 108000, description: { ru: "Надежный игровой ноутбук.", en: "Reliable gaming laptop." }, specs: ["RTX 4050", "i5-13450HX", "120Hz"], image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 225, category: 'laptop',isNew:true, name: "MacBook Air 15", price: 145000, description: { ru: "Большой экран, невероятная автономность.", en: "Large screen, incredible battery life." }, specs: ["M2 Chip", "8GB RAM", "Liquid Retina"], image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80", reviews: [] },

    
    { id: 32, category: 'peripherals',isNew:true, name: "Razer DeathAdder V3 Pro", price: 13000, description: { ru: "Эргономичная мышь с топовым сенсором.", en: "Ergonomic mouse with top sensor." }, specs: ["Focus Pro 30K", "64g", "Wireless"], image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 33, category: 'peripherals', name: "SteelSeries Prime Wireless", price: 9500, description: { ru: "Мышь с оптико-магнитными переключателями.", en: "Mouse with optical-magnetic switches." }, specs: ["Prestige OM", "80g", "Wireless"], image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 34, category: 'peripherals', name: "Zowie EC2-C", price: 7500, description: { ru: "Классика киберспорта, идеальная форма.", en: "Esports classic, perfect shape." }, specs: ["3360 Sensor", "Ergonomic", "Wired"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 35, category: 'peripherals', name: "Glorious Model O-", price: 6000, description: { ru: "Ультралегкая мышь с сотами.", en: "Ultra-light honeycomb mouse." }, specs: ["67g", "RGB", "Flexible Cable"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 36, category: 'peripherals', name: "Varmilo VA87M Summit", price: 16500, description: { ru: "Премиальная механическая клавиатура.", en: "Premium mechanical keyboard." }, specs: ["Cherry MX Blue", "PBT Keycaps", "TKL"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 37, category: 'peripherals', name: "Leopold FC750R", price: 14000, description: { ru: "Лучшее качество сборки среди механик.", en: "Best build quality among mechanicals." }, specs: ["Cherry MX Red", "Sound Dampening Pad"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 39, category: 'peripherals', name: "Anne Pro 2", price: 8500, description: { ru: "Компактная 60% клавиатура с Bluetooth.", en: "Compact 60% keyboard with Bluetooth." }, specs: ["Gateron Brown", "RGB", "Wireless"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 41, category: 'peripherals', name: "Logitech G915 TKL", price: 21000, description: { ru: "Низкопрофильная беспроводная механика.", en: "Low-profile wireless mechanical." }, specs: ["GL Tactile", "Lightspeed", "Aluminum"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 42, category: 'peripherals', name: "HyperX Alloy Origins", price: 10000, description: { ru: "Надежная клавиатура в стальном корпусе.", en: "Reliable keyboard in steel case." }, specs: ["HyperX Red Switches", "Full RGB"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 44, category: 'peripherals',isSale: true,name: "Dark Project KD87A", price: 5999,oldPrice:9000, description: { ru: "Смазанные стабилизаторы и отличный звук.", en: "Lubed stabilizers and great sound." }, specs: ["Gateron Cap Teal", "PBT Keycaps"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 45, category: 'peripherals', name: "Akko 3068B Plus", price: 7500, description: { ru: "Стильная механика с крутыми кейкапами.", en: "Stylish mechanical with cool keycaps." }, specs: ["Jelly Pink Switches", "Multi-mode"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 46, category: 'peripherals', name: "HyperX Cloud Alpha S", price: 11000, description: { ru: "Гарнитура с регулировкой баса.", en: "Headset with bass adjustment." }, specs: ["Dual Chamber", "7.1 Sound"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 47, category: 'peripherals', name: "Sennheiser GSP 600", price: 19000, description: { ru: "Профессиональный звук для игр.", en: "Professional sound for gaming." }, specs: ["Closed Back", "Noise Cancelling Mic"], image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 48, category: 'peripherals', name: "Logitech G733", price: 15500, description: { ru: "Легкая беспроводная гарнитура.", en: "Lightweight wireless headset." }, specs: ["Lightspeed", "Blue VO!CE", "RGB"], image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 49, category: 'peripherals', name: "SteelSeries Arctis Nova 7", price: 18500, description: { ru: "Мультиплатформенная гарнитура.", en: "Multi-platform headset." }, specs: ["Nova Acoustic System", "Wireless"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 50, category: 'peripherals', name: "Razer BlackShark V2 Pro", price: 16000, description: { ru: "Киберспортивная гарнитура.", en: "Esports headset." }, specs: ["Triforce 50mm", "HyperClear Mic"], image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 52, category: 'peripherals', name: "Secretlab Titan EVO", price: 52000, description: { ru: "Лучшее игровое кресло в мире.", en: "Best gaming chair in the world." }, specs: ["Hybrid Leatherette", "Magnetic Pillow"], image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 55, category: 'peripherals', name: "LG UltraGear 27GP850", price: 42000, description: { ru: "Народный выбор для 2K гейминга.", en: "People's choice for 2K gaming." }, specs: ["Nano IPS", "180Hz", "1ms"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 56, category: 'peripherals', name: "Zowie XL2546K", price: 55000, description: { ru: "Монитор для CS:GO и Valorant.", en: "Monitor for CS:GO and Valorant." }, specs: ["240Hz", "DyAc+ Technology"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 57, category: 'peripherals', name: "Blue Yeti X", price: 16000, description: { ru: "Профессиональный USB микрофон.", en: "Professional USB microphone." }, specs: ["Four-Capsule", "LED Metering"], image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 58, category: 'peripherals', name: "Elgato Stream Deck MK.2", price: 14500, description: { ru: "Контроллер для стримов.", en: "Stream controller." }, specs: ["15 LCD Keys", "Customizable"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 59, category: 'peripherals', name: "Logitech C922 Pro", price: 9500, description: { ru: "Веб-камера для стриминга.", en: "Streaming webcam." }, specs: ["1080p 30fps", "Background Removal"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 60, category: 'peripherals', name: "SteelSeries QcK Heavy", price: 2500, description: { ru: "Толстый и надежный коврик.", en: "Thick and reliable mousepad." }, specs: ["Micro-woven Cloth", "Extra Thick"], image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 116, category: 'peripherals', name: "Razer Huntsman V3 Pro", price: 24000, description: { ru: "Аналоговая оптическая клавиатура.", en: "Analog optical keyboard." }, specs: ["Rapid Trigger", "Gen-2 Switches"], image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 117, category: 'peripherals', name: "Logitech G502 X Plus", price: 15000, description: { ru: "Легендарная мышь в новом исполнении.", en: "Legendary mouse in a new version." }, specs: ["LIGHTFORCE", "LIGHTSPEED", "RGB"], image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 118, category: 'peripherals', name: "SteelSeries Apex Pro", price: 19000, description: { ru: "Самая быстрая клавиатура в мире.", en: "The fastest keyboard in the world." }, specs: ["OmniPoint 2.0", "OLED Display"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 119, category: 'peripherals', name: "HyperX QuadCast S", price: 14000, description: { ru: "Стильный микрофон с RGB подсветкой.", en: "Stylish microphone with RGB lighting." }, specs: ["Anti-Vibration", "Tap-to-Mute"], image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80", reviews: [] },
    { id: 120, category: 'peripherals', name: "Sony WH-1000XM5", price: 32000, description: { ru: "Лучшее шумоподавление для работы.", en: "Best noise cancellation for work." }, specs: ["ANC", "30h Battery", "Hi-Res Audio"], image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", reviews: [] }
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let authMode = 'login';
let currentCategory = 'all';
let activeFilters = {
    ram: 'all',
    ssd: 'all',
    gpu: 'all'
};

let currentLang = localStorage.getItem('lang') || 'ru';

const translations = {
    ru: {
        nav_home: "Главная",
        nav_products: "Товары",
        nav_login: "Войти",
        user_settings: "Настройки",
        user_logout: "Выйти",
        hero_title: "Лучшие товары для вас",
        hero_subtitle: "Качество, стиль и доступные цены в одном месте.",
        hero_btn: "Купить сейчас",
        cart_title: "Корзина",
        cart_total: "Итого:",
        checkout_btn: "Оформить заказ",
        checkout_title: "Оформление заказа",
        checkout_submit: "Оформить",
        settings_title: "Настройки аккаунта",
        settings_save: "Сохранить",
        auth_login: "Вход",
        auth_register: "Регистрация",
        auth_submit_login: "Войти",
        auth_submit_register: "Зарегистрироваться",
        filter_all: "Все",
        filter_pc: "Компьютеры",
        filter_laptop: "Ноутбуки",
        filter_peripherals: "Периферия",
        filter_ram: "ОЗУ:",
        filter_ssd: "SSD:",
        filter_gpu: "Видеокарта:",
        chat_header: "Поддержка CompShop",
        chat_welcome: "Здравствуйте! Чем я могу вам помочь?",
        chat_placeholder: "Введите сообщение...",
        chat_bot_reply: "Спасибо за обращение! Наш оператор ответит вам в ближайшее время.",
        checkout_first_name: "Имя",
        checkout_last_name: "Фамилия",
        checkout_phone: "Номер телефона",
        checkout_country: "Страна",
        checkout_region: "Регион",
        checkout_address: "Адрес",
        checkout_city: "Город",
        checkout_postal: "Почтовый индекс",
        settings_name: "Имя",
        settings_password: "Новый пароль",
        notification_added: "добавлен в корзину!",
        notification_updated: "Товар обновлен!",
        notification_logout: "Вы вышли из системы",
        notification_login: "Вы успешно вошли!",
        notification_order: "Заказ успешно оформлен!",
        notification_settings: "Настройки сохранены!",
        empty_cart: "Корзина пуста",
        reviews_title: "Отзывы",
        no_reviews: "Отзывов пока нет.",
        specs_title: "Характеристики:",
        add_to_cart: "В корзину",
        edit_product: "Редактировать",
        save_changes: "Сохранить изменения",
        footer_desc: "Ваш надежный партнер в мире игровых ПК и периферии. Мы собираем лучшие решения для геймеров и профессионалов.",
        footer_links_title: "Навигация",
        footer_contact_title: "Контакты"
    },
    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_login: "Login",
        user_settings: "Settings",
        user_logout: "Logout",
        hero_title: "Best Products for You",
        hero_subtitle: "Quality, style, and affordable prices in one place.",
        hero_btn: "Buy Now",
        cart_title: "Cart",
        cart_total: "Total:",
        checkout_btn: "Checkout",
        checkout_title: "Checkout",
        checkout_submit: "Place Order",
        settings_title: "Account Settings",
        settings_save: "Save",
        auth_login: "Login",
        auth_register: "Register",
        auth_submit_login: "Login",
        auth_submit_register: "Register",
        filter_all: "All",
        filter_pc: "Computers",
        filter_laptop: "Laptops",
        filter_peripherals: "Peripherals",
        filter_ram: "RAM:",
        filter_ssd: "SSD:",
        filter_gpu: "GPU:",
        chat_header: "CompShop Support",
        chat_welcome: "Hello! How can I help you?",
        chat_placeholder: "Type a message...",
        chat_bot_reply: "Thank you for contacting us! Our operator will reply to you shortly.",
        checkout_first_name: "First Name",
        checkout_last_name: "Last Name",
        checkout_phone: "Phone Number",
        checkout_country: "Country",
        checkout_region: "State/Region",
        checkout_address: "Address",
        checkout_city: "City",
        checkout_postal: "Postal Code",
        settings_name: "Name",
        settings_password: "New Password",
        notification_added: "added to cart!",
        notification_updated: "Product updated!",
        notification_logout: "You have logged out",
        notification_login: "Login successful!",
        notification_order: "Order placed successfully!",
        notification_settings: "Settings saved!",
        empty_cart: "Cart is empty",
        reviews_title: "Reviews",
        no_reviews: "No reviews yet.",
        specs_title: "Specifications:",
        add_to_cart: "Add to Cart",
        edit_product: "Edit",
        save_changes: "Save Changes",
        footer_desc: "Your reliable partner in the world of gaming PCs and peripherals. We build the best solutions for gamers and professionals.",
        footer_links_title: "Navigation",
        footer_contact_title: "Contacts"
    }
};
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
    document.getElementById('lang-switch').innerText = currentLang === 'ru' ? 'EN' : 'RU';
    
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) heroH1.innerText = translations[currentLang].hero_title;
    const heroP = document.querySelector('.hero-content p');
    if (heroP) heroP.innerText = translations[currentLang].hero_subtitle;
    const heroBtn = document.querySelector('.hero-content .btn');
    if (heroBtn) heroBtn.innerText = translations[currentLang].hero_btn;
    
    const cartH2 = document.querySelector('.cart-header h2');
    if (cartH2) cartH2.innerText = translations[currentLang].cart_title;
    const cartTotalSpan = document.querySelector('.cart-total span:first-child');
    if (cartTotalSpan) cartTotalSpan.innerText = translations[currentLang].cart_total;
    
    renderProducts();
    updateCartUI();
}

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
    updateLanguage();
});

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const currentProducts = JSON.parse(localStorage.getItem('products')) || products;
    
    let filtered = currentCategory === 'all' 
        ? currentProducts 
        : currentProducts.filter(p => p.category === currentCategory);

    if (activeFilters.ram !== 'all') {
        filtered = filtered.filter(p => p.specs && p.specs.some(s => s.includes(activeFilters.ram)));
    }
    if (activeFilters.ssd !== 'all') {
        filtered = filtered.filter(p => p.specs && p.specs.some(s => s.includes(activeFilters.ssd)));
    }
    if (activeFilters.gpu !== 'all') {
        filtered = filtered.filter(p => p.specs && p.specs.some(s => s.toLowerCase().includes(activeFilters.gpu.toLowerCase())));
    }
    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" onclick="openProductDetails(${product.id})">
            ${product.isNew ? '<div class="badge">Новинка</div>' : ''}
            ${product.isSale ? '<div class="badge sale">Скидка!</div>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${typeof product.description === 'object' ? product.description[currentLang] : product.description}</p>
                <p class="product-price">
                
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()}</span>` : ''}
                    ${product.newPrice ? `<span class="new-price">${product.newPrice.toLocaleString()}</span>` : ''}
                    ${product.price.toLocaleString()} ${currentLang === 'ru' ? 'руб.' : 'RUB'}
                </p>
                <button class="btn" onclick="event.stopPropagation(); addToCart(${product.id})" data-i18n="add_to_cart">${translations[currentLang].add_to_cart}</button>
            </div>
        </div>
    `).join('');
  
    


const allPrices = document.querySelectorAll('.product-price');
allPrices.forEach(priceElement => {
  const hasDiscount = priceElement.parentElement.querySelector('.old-price')
  if (hasDiscount) {
    priceElement.classList.add('sale-price');
  }
});
}

function filterCategory(category) {
    currentCategory = category;
    activeFilters = { ram: 'all', ssd: 'all', gpu: 'all' };
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.innerText.toLowerCase();
        if(category === 'all' && (btnText.includes('все') || btnText.includes('all'))) btn.classList.add('active');
        if(category === 'pc' && (btnText.includes('комп') || btnText.includes('comp'))) btn.classList.add('active');
        if(category === 'laptop' && (btnText.includes('ноут') || btnText.includes('laptop'))) btn.classList.add('active');
        if(category === 'peripherals' && (btnText.includes('периф') || btnText.includes('periph'))) btn.classList.add('active');
    });

    renderSubFilters();
    renderProducts();
}

function renderSubFilters() {
    const container = document.getElementById('sub-filters');
    if (currentCategory === 'peripherals' || currentCategory === 'all') {
        container.innerHTML = '';
        return;
    }

    const ramOptions = ['8GB', '16GB', '32GB', '64GB'];
    const ssdOptions = ['256GB', '512GB', '1TB', '2TB'];
    const gpuOptions = currentCategory === 'pc' ? ['RTX 4090', 'RTX 4080', 'RTX 4070', 'RTX 4060', 'RTX 3060', 'GTX 1650'] : ['RTX 4080', 'RTX 4070', 'RTX 4060', 'RTX 3050', 'Apple M2'];

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; align-items: center;">
            <div class="filter-group" style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; justify-content: center;">
                <span style="font-weight: 600; font-size: 0.9rem;" data-i18n="filter_ram">${translations[currentLang].filter_ram}</span>
                <button class="filter-btn ${activeFilters.ram === 'all' ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('ram', 'all')" data-i18n="filter_all">${translations[currentLang].filter_all}</button>
                ${ramOptions.map(opt => `<button class="filter-btn ${activeFilters.ram === opt ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('ram', '${opt}')">${opt}</button>`).join('')}
            </div>
            <div class="filter-group" style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; justify-content: center;">
                <span style="font-weight: 600; font-size: 0.9rem;" data-i18n="filter_ssd">${translations[currentLang].filter_ssd}</span>
                <button class="filter-btn ${activeFilters.ssd === 'all' ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('ssd', 'all')" data-i18n="filter_all">${translations[currentLang].filter_all}</button>
                ${ssdOptions.map(opt => `<button class="filter-btn ${activeFilters.ssd === opt ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('ssd', '${opt}')">${opt}</button>`).join('')}
            </div>
            <div class="filter-group" style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; justify-content: center;">
                <span style="font-weight: 600; font-size: 0.9rem;" data-i18n="filter_gpu">${translations[currentLang].filter_gpu}</span>
                <button class="filter-btn ${activeFilters.gpu === 'all' ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('gpu', 'all')" data-i18n="filter_all">${translations[currentLang].filter_all}</button>
                ${gpuOptions.map(opt => `<button class="filter-btn ${activeFilters.gpu === opt ? 'active' : ''}" style="font-size: 0.7rem; padding: 0.4rem 0.8rem;" onclick="setTechFilter('gpu', '${opt}')">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function setTechFilter(type, value) {
    activeFilters[type] = value;
    renderSubFilters();
    renderProducts();
}

function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-desc').innerText = typeof product.description === 'object' ? product.description[currentLang] : product.description;
    const specsList = document.getElementById('detail-specs');
    specsList.innerHTML = (product.specs || []).map(s => `<li>${s}</li>`).join('');
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = (product.reviews || []).length > 0 
        ? product.reviews.map(r => `<div class="review-item"><div class="review-user">${r.user}</div><div class="review-text">${r.text}</div></div>`).join('')
        : `<p data-i18n="no_reviews">${translations[currentLang].no_reviews}</p>`;
    document.getElementById('detail-add-btn').onclick = () => addToCart(product.id);
    const priceLabel = document.querySelector('.detail-price');
    if (priceLabel) {
        priceLabel.innerHTML = `<span id="detail-price">${product.price.toLocaleString()}</span> ${currentLang === 'ru' ? 'руб.' : 'RUB'}`;
    }
    modal.style.display = 'block';
}


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
    showNotification(`${product.name} ${translations[currentLang].notification_added}`);
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
        cartItems.innerHTML = `<p style="text-align:center; color: #666; margin-top: 2rem;" data-i18n="empty_cart">${translations[currentLang].empty_cart}</p>`;
        totalPrice.innerText = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: center; border-bottom: 1px solid #f5f5f5; padding-bottom: 1rem;">
                <img src="${item.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 0.9rem; margin-bottom: 0.2rem;">${item.name}</h4>
                    <p style="font-size: 0.8rem; color: var(--accent-color); font-weight: 700;">${item.price.toLocaleString()} ${currentLang === 'ru' ? 'руб.' : 'RUB'}</p>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                        <button onclick="changeQty(${item.id}, -1)" style="border: 1px solid #ddd; background: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${item.id}, 1)" style="border: 1px solid #ddd; background: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 1.1rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.innerText = total.toLocaleString();
    }
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function updateAuthUI() {
    const authBtn = document.getElementById('auth-btn');
    if (currentUser) {
        authBtn.innerText = `${currentUser.email}`;
        authBtn.onclick = (e) => {
            e.preventDefault();
            if(confirm(currentLang === 'ru' ? 'Выйти из аккаунта?' : 'Logout?')) {
                logout();
            }
        };
    } else {
        authBtn.innerText = translations[currentLang].nav_login;
        authBtn.onclick = () => document.getElementById('auth-modal').style.display = 'block';
    }
}

function setupEventListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const authBtn = document.getElementById('auth-btn');
    const authModal = document.getElementById('auth-modal');
    const closeAuth = document.querySelector('.close-auth');
    const closeProduct = document.querySelector('.close-product');
    const closeCheckout = document.querySelector('.close-checkout');
    const langSwitch = document.getElementById('lang-switch');

    langSwitch.onclick = toggleLanguage;

    document.getElementById('open-checkout').onclick = () => {
        if (cart.length === 0) return showNotification('Корзина пуста!');
        document.getElementById('checkout-modal').style.display = 'block';
    };

    closeCheckout.onclick = () => {
        document.getElementById('checkout-modal').style.display = 'none';
    };
    document.getElementById('checkout-form').onsubmit = (e) => {
        e.preventDefault();
        const orderData = {
            firstName: document.getElementById('checkout-first-name').value,
            lastName: document.getElementById('checkout-last-name').value,
            email: document.getElementById('checkout-email').value,
            phone: document.getElementById('checkout-phone').value,
            country: document.getElementById('checkout-country').value,
            region: document.getElementById('checkout-state').value,
            address: document.getElementById('checkout-address').value,
            city: document.getElementById('checkout-city').value,
            postal: document.getElementById('checkout-postal').value,
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
        console.log('Order placed:', orderData);
        cart = [];
        saveCart();
        updateCartUI();
        document.getElementById('checkout-modal').style.display = 'none';
        showNotification(translations[currentLang].notification_order);
    };

    cartBtn.onclick = () => cartSidebar.classList.add('active');
    closeCart.onclick = () => cartSidebar.classList.remove('active');
    
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');

    chatToggle.onclick = () => chatWindow.classList.toggle('active');
    
    chatForm.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('chat-input');
        const msg = input.value;
        if(!msg) return;

        chatMessages.innerHTML += `<div style="background: var(--primary-color); color: white; padding: 0.8rem; border-radius: 8px; margin-bottom: 0.5rem; align-self: flex-end; margin-left: 2rem;">${msg}</div>`;
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            chatMessages.innerHTML += `<div style="background: #f0f0f0; padding: 0.8rem; border-radius: 8px; margin-bottom: 0.5rem; align-self: flex-start; margin-right: 2rem;">${translations[currentLang].chat_bot_reply}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    };

    authBtn.onclick = () => currentUser ? null : authModal.style.display = 'block';
    updateAuthUI();
    closeAuth.onclick = () => authModal.style.display = 'none';
    closeProduct.onclick = () => document.getElementById('product-modal').style.display = 'none';
    

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) event.target.style.display = 'none';
    };

   
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
            cartSidebar.classList.remove('active');
        }
    });

    document.getElementById('auth-form').onsubmit = handleAuth;
}

function switchAuth(mode) {
    authMode = mode;
    const tabs = document.querySelectorAll('.tab-btn');
    const submitBtn = document.getElementById('auth-submit-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (mode === 'login') {
        tabs[0].classList.add('active');
        submitBtn.innerText = translations[currentLang].auth_submit_login;
    } else {
        tabs[1].classList.add('active');
        submitBtn.innerText = translations[currentLang].auth_submit_register;
    }
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (authMode === 'register') {
        if (users.find(u => u.email === email)) return;
        users.push({ email, password, name: '' });
        localStorage.setItem('users', JSON.stringify(users));
        switchAuth('login');
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            document.getElementById('auth-modal').style.display = 'none';
            updateAuthUI();
            renderProducts();
            showNotification(translations[currentLang].notification_login);
        }
    }
}
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    renderProducts();
    showNotification(translations[currentLang].notification_logout);
}

function showNotification(msg) {
    const note = document.createElement('div');
    note.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 30px;
        z-index: 3000;
        box-shadow: var(--shadow);
        animation: slideUp 0.3s ease;
    `;
    note.innerText = msg;
    document.body.appendChild(note);
    setTimeout(() => {
        note.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => note.remove(), 300);
    }, 3000);
}


const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideUp {
        from { bottom: -50px; opacity: 0; }
        to { bottom: 20px; opacity: 1; }
    }
    @keyframes slideDown {
        from { bottom: 20px; opacity: 1; }
        to { bottom: -50px; opacity: 0; }
    }
`;
document.head.appendChild(style);



