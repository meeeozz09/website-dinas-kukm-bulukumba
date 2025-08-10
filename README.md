# 💼 Website Dinas Koperasi, UKM, dan Tenaga Kerja Kabupaten Bulukumba

Selamat datang di repositori **Website Dinas Koperasi, Usaha Kecil Menengah, dan Tenaga Kerja (DISKOP UKMNAKER) Kabupaten Bulukumba**. Website ini dirancang sebagai **pusat informasi publik** yang **modern, responsif, dan mudah diperbarui**, khususnya dalam mendukung transparansi layanan dan penyebaran informasi dari tiga bidang utama: Koperasi, UKM, dan Ketenagakerjaan.

📌 Website ini **menggunakan data dinamis dari file JSON**, sehingga memungkinkan pembaruan konten (berita, statistik, struktur organisasi, layanan, dsb) **tanpa perlu menyentuh kode HTML**.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Agar semua data JSON termuat dengan benar, **gunakan ekstensi Live Server** di Visual Studio Code:

1. Buka folder proyek ini menggunakan **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** telah terpasang.
3. Klik kanan pada file `index.html` → pilih **Open with Live Server**.
4. Website akan terbuka otomatis di browser lokalmu.

---

## 🧩 Struktur & Panduan Pengelolaan Konten

Semua data dinamis berada dalam folder `data/`. Berikut panduan untuk mengelolanya:

### 📢 1. Berita (News)

File: `data/news.json`

**Menambah/Mengedit Berita:**

* Tambahkan objek berita baru di dalam array `[]`.
* Format objek:

  ```json
  {
    "id": 2,
    "title": "Judul Berita",
    "excerpt": "Ringkasan berita...",
    "date": "2025-07-30",
    "content": "<p>Isi lengkap berita...</p>",
    "image": "images/news/namafile.jpg"
  }
  ```

📝 Pastikan:

* Gambar berada di folder `images/news/`.
* Gunakan tag HTML dasar (misal `<p>`, `<br>`) di `content`.

---

### 🧑‍💼 2. Struktur Organisasi

File: `data/opd.json`

**Untuk Mengubah Data Pejabat:**

* Temukan elemen berdasarkan `"jabatan"`.
* Ubah `"nama"`, `"jabatan"`, `"keterangan"`, dan `"foto"` sesuai kebutuhan.
* Unggah foto baru ke `images/leaders/`.

---

### 📊 3. Data Bidang Koperasi, UKM, dan Tenaga Kerja

| Bidang       | File JSON                    |
| ------------ | ---------------------------- |
| Koperasi     | `data/cooperative-data.json` |
| UKM          | `data/smes-data.json`        |
| Tenaga Kerja | `data/labor-data.json`       |

Edit langsung teks, angka statistik, dan layanan di file tersebut sesuai hasil wawancara atau observasi lapangan.

---

### 🛠️ 4. Layanan Publik (di `services.html`)

* `data/service-list.json`: Menentukan kartu layanan (judul dan ikon).
* `data/services.json`: Menentukan konten detail saat kartu di-klik.

**Contoh perubahan:**

* Ingin ubah nama layanan? Edit `service-list.json`.
* Ingin ubah persyaratan atau prosedur? Edit `services.json`.

---

## 🧪 Teknologi yang Digunakan

Website ini dibuat dengan teknologi web murni (vanilla):

* ✅ **HTML5** — struktur halaman
* 🎨 **CSS3** — tata letak & tampilan
* ⚙️ **JavaScript (ES6)** — pengelolaan data dan interaktivitas
* 🎯 **Font Awesome** — ikon ilustratif
* ✍️ **Google Fonts (Poppins)** — tipografi modern

---

## 📂 Struktur Folder

```
📁 root/
├── 📁 assets/
│   └── 📁 css/
│       └── style.css
├── 📁 data/
│   └── *.json  ← Semua konten dinamis
├── 📁 images/
│   └── news/, leaders/, etc.
├── index.html
├── services.html
└── ... file HTML lainnya
```

---

## 🤝 Kontribusi

Website ini dirancang dan dikembangkan sebagai bagian dari Program Kerja **KKN Tematik Mahasiswa ITEB Bina Adinata Bulukumba** Angkatan IX tahun 2025. Jika Anda ingin mengembangkan lebih lanjut, silakan fork dan sesuaikan dengan kebutuhan instansi Anda.

---

### 👨‍💻 Tim Pengembang

Proyek website ini merupakan hasil kerja sama tim mahasiswa ITEB Bina Adinata dalam kegiatan **KKN Tematik Tahun 2025** yang dilaksanakan di **Dinas Koperasi, Usaha Kecil, Menengah dan Tenaga Kerja Kabupaten Bulukumba**. Setiap anggota memiliki peran masing-masing dalam mendukung keberhasilan proyek ini, antara lain:

* **Akhmad Adz Zikra** bertanggung jawab dalam **pengembangan teknis website**, mencakup desain tampilan, penulisan kode HTML, CSS, dan JavaScript, serta pengelolaan data dinamis menggunakan file JSON.
* Anggota tim lainnya, yaitu **Andi Anwar**, **\[Nama Anggota 2]**, **\[Nama Anggota 3]**, **\[Nama Anggota 4]**, **\[Nama Anggota 5]**, **\[Nama Anggota 6]**, **\[Nama Anggota 7]**, dan **\[Nama Anggota 8]**, turut berkontribusi dalam **pengumpulan data**, seperti dokumentasi foto, informasi struktur organisasi, data layanan dari masing-masing bidang (Koperasi, UKM, dan Tenaga Kerja), serta hasil wawancara dengan pihak dinas terkait.
* **\[Nama Dosen Pembimbing]** selaku **dosen pembimbing lapangan**, memberikan arahan, masukan, dan bimbingan selama proses pelaksanaan KKN berlangsung.

---

## 🧾 Lisensi

Proyek ini menggunakan lisensi bebas terbuka untuk keperluan edukatif dan non-komersial. Gunakan dan modifikasi sesuai kebutuhan dengan tetap mencantumkan atribusi.
tes


