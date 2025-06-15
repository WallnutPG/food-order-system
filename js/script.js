// Simulasi database dengan gambar spesifik
let users = [
    { id: 1, nama: "Budi", email: "customer1@gmail.com", password: "password123", role: "customer" },
    { id: 4, nama: "Ani", email: "customer2@gmail.com", password: "pass456", role: "customer" },
    { id: 5, nama: "Candra", email: "customer3@gmail.com", password: "pass789", role: "customer" },
    { id: 2, nama: "Warung Pak Joko", email: "seller1@gmail.com", password: "password123", role: "seller" },
    { id: 6, nama: "Warung Bu Tini", email: "seller2@gmail.com", password: "sell456", role: "seller" },
    { id: 7, nama: "Warung Mas Budi", email: "seller3@gmail.com", password: "sell789", role: "seller" },
    { id: 3, nama: "Admin Kampus", email: "admin@gmail.com", password: "password123", role: "admin" },
    { id: 8, nama: "Admin Utama", email: "admin2@gmail.com", password: "adm456", role: "admin" },
    { id: 9, nama: "Admin Cadangan", email: "admin3@gmail.com", password: "adm789", role: "admin" }
];

let warung = [
    { id: 1, nama_warung: "Warung Makan Pak Joko", id_seller: 2, status: "aktif", profile_img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
    { id: 2, nama_warung: "Warung Bu Tini", id_seller: 6, status: "aktif", profile_img: "https://images.unsplash.com/photo-1552566626-52f8b828add9" },
    { id: 3, nama_warung: "Warung Mas Budi", id_seller: 7, status: "nonaktif", profile_img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0" }
];

let menu = [
    {
        id: 1, id_warung: 1, nama_menu: "Nasi Goreng", harga: 15000, deskripsi: "Nasi goreng spesial",
        img: "assets/image/nasigoreng.avif",
        gallery: [
            "assets/image/nasigoreng.avif",
            "assets/image/nasigoreng2.jpeg",
            "assets/image/nasigoreng3.webp"
        ]
    },
    {
        id: 2, id_warung: 1, nama_menu: "Ayam Geprek", harga: 20000, deskripsi: "Ayam pedas dengan sambal",
        img: "assets/image/ayamgeprek.jpg",
        gallery: [
            "assets/image/ayamgeprek.jpg",
            "assets/image/ayamgeprek2.jpg",
            "assets/image/ayamgeprek3.jpeg"
        ]
    },
    {
        id: 3, id_warung: 1, nama_menu: "Mie Goreng", harga: 18000, deskripsi: "Mie goreng pedas",
        img: "assets/image/mie_goreng.jpeg",
        gallery: [
            "assets/image/mie_goreng.jpeg",
            "assets/image/mie_goreng2.jpg",
            "assets/image/mie_goreng3.jpeg"
        ]
    },
    {
        id: 4, id_warung: 2, nama_menu: "Soto Ayam", harga: 12000, deskripsi: "Soto ayam kuah bening",
        img: "assets/image/sotoayam.jpeg",
        gallery: [
            "assets/image/sotoayam.jpeg",
            "assets/image/sotoayam2.jpg",
            "assets/image/sotoayam3.jpeg"
        ]
    },
    {
        id: 5, id_warung: 2, nama_menu: "Bakso", harga: 15000, deskripsi: "Bakso sapi spesial",
        img: "assets/image/bakso.avif",
        gallery: [
            "assets/image/bakso.avif",
            "assets/image/bakso2.jpg",
            "assets/image/bakso3.jpeg"
        ]
    },
    {
        id: 6, id_warung: 3, nama_menu: "Pecel Lele", harga: 17000, deskripsi: "Lele goreng dengan sambal",
        img: "assets/image/pecellele.jpeg",
        gallery: [
            "assets/image/pecellele.jpeg",
            "assets/image/pecellele2.jpg",
            "assets/image/pecellele3.jpeg"
        ]
    },
    {
        id: 7, id_warung: 3, nama_menu: "Nasi Uduk", harga: 10000, deskripsi: "Nasi uduk dengan ayam suwir",
        img: "assets/image/nasiuduk.jpg",
        gallery: [
            "assets/image/nasiuduk.jpg",
            "assets/image/nasiuduk2.webp",
            "assets/image/nasiuduk3.jpg"
        ]
    }
];

let orders = [
    { id: 1, id_customer: 1, id_menu: 1, jumlah: 2, status: "pending", tanggal: "2025-06-15 10:00:00" },
    { id: 2, id_customer: 1, id_menu: 2, jumlah: 1, status: "diproses", tanggal: "2025-06-15 12:00:00" },
    { id: 3, id_customer: 4, id_menu: 4, jumlah: 3, status: "selesai", tanggal: "2025-06-15 13:00:00" },
    { id: 4, id_customer: 5, id_menu: 5, jumlah: 1, status: "pending", tanggal: "2025-06-15 14:00:00" }
];

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Load theme
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') document.body.classList.add('dark');
}

// Sidebar toggle
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// Simulasi loading
function showLoading() {
    const spinner = document.querySelector('.spinner');
    if (spinner) spinner.style.display = 'block';
    setTimeout(() => spinner.style.display = 'none', 500);
}

// Simulasi autentikasi
function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = `${user.role}_dashboard.html`;
    } else {
        alert("Email atau password salah!");
    }
}

// Cek login
function checkAuth(role) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || (role && user.role !== role)) {
        window.location.href = 'login.html';
    }
    return user;
}

// Logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Customer: Buka galeri menu
function openGalleryModal(menuId) {
    const menuItem = menu.find(m => m.id === menuId);
    const galleryModal = document.getElementById('galleryModal');
    const carouselInner = galleryModal.querySelector('.carousel-inner');
    carouselInner.innerHTML = menuItem.gallery.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" alt="${menuItem.nama_menu}">
        </div>
    `).join('');
    const modal = new bootstrap.Modal(galleryModal);
    modal.show();
}

// Customer: Pesan makanan via modal
function openOrderModal(menuId) {
    const menuItem = menu.find(m => m.id === menuId);
    document.getElementById('orderMenuName').textContent = menuItem.nama_menu;
    document.getElementById('orderMenuId').value = menuId;
    const modal = new bootstrap.Modal(document.getElementById('orderModal'));
    modal.show();
}

function placeOrder(menuId, jumlah) {
    const user = checkAuth('customer');
    const order = {
        id: orders.length + 1,
        id_customer: user.id,
        id_menu: menuId,
        jumlah: parseInt(jumlah),
        status: "pending",
        tanggal: new Date().toISOString()
    };
    orders.push(order);
    showLoading();
    alert("Pesanan berhasil!");
    filterMenus();
    bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
}

// Customer: Filter menu
function filterMenus() {
    showLoading();
    const search = document.getElementById('search').value.toLowerCase();
    const priceRange = document.getElementById('price-range').value;
    const warungId = document.getElementById('warung-filter').value;
    let filteredMenus = menu.filter(m => {
        const warungAktif = warung.find(w => w.id === m.id_warung && w.status === 'aktif');
        return warungAktif && m.nama_menu.toLowerCase().includes(search);
    });

    if (warungId !== 'all') {
        filteredMenus = filteredMenus.filter(m => m.id_warung === parseInt(warungId));
    }

    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredMenus = filteredMenus.filter(m => m.harga >= min && (max ? m.harga <= max : true));
    }

    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    filteredMenus.forEach(m => {
        const warungInfo = warung.find(w => w.id === m.id_warung);
        menuList.innerHTML += `
            <div class="col-12 col-md-4 fade-in">
                <div class="card mb-4">
                    <img src="${m.img}" class="card-img-top" alt="${m.nama_menu}">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="${warungInfo.profile_img}" class="profile-img me-2">
                            <small>${warungInfo.nama_warung}</small>
                        </div>
                        <h5 class="card-title">${m.nama_menu}</h5>
                        <p class="card-text">Rp ${m.harga.toLocaleString()}</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary" onclick="openOrderModal(${m.id})">Pesan</button>
                            <button class="btn btn-secondary" onclick="openGalleryModal(${m.id})">Lihat Galeri</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Customer: Tampilkan riwayat pesanan
function displayOrderHistory() {
    const user = checkAuth('customer');
    const historyList = document.getElementById('history-list');
    if (historyList) {
        historyList.innerHTML = '';
        orders.filter(o => o.id_customer === user.id).forEach(o => {
            const menuItem = menu.find(m => m.id === o.id_menu);
            historyList.innerHTML += `
                <tr class="fade-in">
                    <td>${menuItem.nama_menu}</td>
                    <td>${o.jumlah}</td>
                    <td><span class="badge ${o.status === 'pending' ? 'bg-warning' : o.status === 'diproses' ? 'bg-info' : 'bg-success'}">${o.status}</span></td>
                    <td>${new Date(o.tanggal).toLocaleString()}</td>
                </tr>`;
        });
    }
}

// Seller: Tambah menu via modal
function openAddMenuModal() {
    const modal = new bootstrap.Modal(document.getElementById('addMenuModal'));
    modal.show();
}

function addMenu(nama_menu, harga, deskripsi) {
    const user = checkAuth('seller');
    const warungSeller = warung.find(w => w.id_seller === user.id);
    const menuItem = {
        id: menu.length + 1,
        id_warung: warungSeller.id,
        nama_menu,
        harga: parseFloat(harga),
        deskripsi,
        img: "https://th.bing.com/th/id/OIP.z9suPf5LIaxSXx12DFv7wAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3",
        gallery: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561d73",
            "https://images.unsplash.com/photo-1645177628172-a2a3e9087c1b",
            "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
        ]
    };
    menu.push(menuItem);
    showLoading();
    alert("Menu ditambahkan!");
    displaySellerMenus();
    bootstrap.Modal.getInstance(document.getElementById('addMenuModal')).hide();
}

// Seller: Hapus menu
function deleteMenu(menuId) {
    menu = menu.filter(m => m.id !== menuId);
    showLoading();
    alert("Menu dihapus!");
    displaySellerMenus();
}

// Seller: Update status pesanan
function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    order.status = status;
    showLoading();
    alert("Status pesanan diperbarui!");
    displayOrders();
}

// Admin: Update status warung via modal
function openWarungStatusModal(warungId, currentStatus) {
    document.getElementById('warungId').value = warungId;
    document.getElementById('warungStatus').value = currentStatus === 'aktif' ? 'nonaktif' : 'aktif';
    const modal = new bootstrap.Modal(document.getElementById('warungStatusModal'));
    modal.show();
}

function updateWarungStatus(warungId, status) {
    const w = warung.find(w => w.id === warungId);
    w.status = status;
    showLoading();
    alert("Status warung diperbarui!");
    displayWarung();
    filterMenus();
    bootstrap.Modal.getInstance(document.getElementById('warungStatusModal')).hide();
}

// Tampilkan menu Seller
function displaySellerMenus() {
    const user = checkAuth('seller');
    const warungSeller = warung.find(w => w.id_seller === user.id);
    const sellerMenuList = document.getElementById('seller-menu-list');
    if (sellerMenuList) {
        sellerMenuList.innerHTML = '';
        menu.filter(m => m.id_warung === warungSeller.id).forEach(m => {
            sellerMenuList.innerHTML += `
                <li class="list-group-item fade-in d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="${m.img}" class="profile-img me-2">
                        ${m.nama_menu} - Rp ${m.harga.toLocaleString()}
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteMenu(${m.id})">Hapus</button>
                </li>`;
        });
    }
}

// Tampilkan pesanan Seller
function displayOrders() {
    const user = checkAuth('seller');
    const warungSeller = warung.find(w => w.id_seller === user.id);
    const orderList = document.getElementById('order-list');
    if (orderList) {
        orderList.innerHTML = '';
        orders.filter(o => menu.find(m => m.id === o.id_menu && m.id_warung === warungSeller.id)).forEach(o => {
            orderList.innerHTML += `
                <li class="list-group-item fade-in d-flex justify-content-between align-items-center">
                    ${menu.find(m => m.id === o.id_menu).nama_menu} (${o.jumlah}) - ${o.status}
                    <select onchange="updateOrderStatus(${o.id}, this.value)">
                        <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="diproses" ${o.status === 'diproses' ? 'selected' : ''}>Diproses</option>
                        <option value="selesai" ${o.status === 'selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                </li>`;
        });
    }
}

// Tampilkan warung dan laporan Admin
function displayWarung() {
    const warungList = document.getElementById('warung-list');
    if (warungList) {
        warungList.innerHTML = '';
        warung.forEach(w => {
            warungList.innerHTML += `
                <li class="list-group-item fade-in d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="${w.profile_img}" class="profile-img me-2">
                        ${w.nama_warung} - ${w.status}
                    </div>
                    <button class="btn btn-warning btn-sm" onclick="openWarungStatusModal(${w.id}, '${w.status}')">
                        ${w.status === 'aktif' ? 'Nonaktifkan' : 'Aktifkan'}
                    </button>
                </li>`;
        });
    }
}

function displayReports() {
    const reportList = document.getElementById('report-list');
    if (reportList) {
        reportList.innerHTML = '';
        warung.forEach(w => {
            const totalOrders = orders.filter(o => menu.find(m => m.id === o.id_menu && m.id_warung === w.id)).length;
            reportList.innerHTML += `
                <tr class="fade-in">
                    <td>${w.nama_warung}</td>
                    <td>${totalOrders}</td>
                </tr>`;
        });
    }
}