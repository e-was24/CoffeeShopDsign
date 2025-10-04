// Helper: format harga ke IDR
const formatIDR = (value) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(value);

// Ambil elemen
const produkEl = document.getElementById("product");

// Fetch data.json dari lokasi yang sama
fetch("data.json")
    .then((response) => {
        if (!response.ok) throw new Error("Gagal memuat data: " + response.status);
        return response.json();
    })
    .then((data) => {
        const list = data.products || [];
        if (list.length === 0) {
            produkEl.innerHTML = "<p>Tidak ada produk.</p>";
            return;
        }

        // Render kartu produk
        produkEl.innerHTML = list
            .map(
                (p) => `
        <div class="card">
            <div class="card-content">
            <div class="left">
                <img class="thumb" src="${p.image}" alt="${p.name}" 
                    onerror="this.style.opacity=0.65; this.style.objectFit='contain'">
                <div class="detail">
                <div class="title">${p.name}</div>
                <div class="desc">${p.description}</div>
                <div class="meta">
                    <div class="price">${formatIDR(p.price)}</div>
                    <div class="badge">Stok: ${p.stock}</div>
                </div>
                </div>
            </div>
            <button class="btn" onclick="addToCart(${p.id})">Tambah</button>
            </div>
        </div>
        `
            )
            .join("");

        // Jalankan animasi setelah elemen dirender
        requestAnimationFrame(() => {
            gsap.from("#product .card", {
                opacity: 0,
                y: 40,
                duration: 2,
                stagger: .3,
                ease: "power2.out",
            });
        });
    })
    .catch((err) => {
        console.error(err);
        produkEl.innerHTML =
            "<p>Terjadi kesalahan saat memuat produk. Cek console untuk detail.</p>";
    });

// contoh fungsi tambah ke keranjang (sederhana)
function addToCart(id) {
    alert("Menambahkan produk id " + id + " ke keranjang (contoh)");
}
