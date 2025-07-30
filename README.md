# Website Dinas Koperasi, Usaha Kecil, Menengah, dan Tenaga Kerja Kab. Bulukumba

Selamat datang di repositori resmi Website Dinas Koperasi, Usaha Kecil, Menengah, dan Tenaga Kerja Kabupaten Bulukumba. Website ini dirancang untuk menjadi pusat informasi publik yang modern, cepat, dan mudah dikelola.

Fitur utama dari website ini adalah penggunaan data dinamis dari file JSON, yang memungkinkan pembaruan konten seperti berita, statistik, dan struktur organisasi dapat dilakukan dengan mudah tanpa harus mengubah kode HTML.

## Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan dan melihat website ini di komputermu, sangat disarankan menggunakan **Live Server** agar semua data JSON dapat dimuat dengan benar.

1.  Buka folder proyek ini menggunakan **Visual Studio Code**.
2.  Pastikan kamu sudah menginstal ekstensi **"Live Server"** dari marketplace VS Code.
3.  Klik kanan pada file `index.html` di panel file.
4.  Pilih **"Open with Live Server"**. Browser akan otomatis terbuka dan menampilkan website.

-----

## 📝 Panduan Mengelola Konten

Semua konten dinamis website ini diatur melalui file **JSON** yang berada di folder `data/`.

### 1\. Menambah atau Mengubah Berita

Semua berita diatur dalam file `data/news.json`.

  * **Untuk menambah berita baru:**
    1.  Buka file `data/news.json`.
    2.  Salin (copy) salah satu objek berita yang sudah ada (dari `{` sampai `}`).
    3.  Tempel (paste) di bagian paling atas di dalam kurung siku `[...]`, jangan lupa tambahkan koma `,` setelahnya.
    4.  Ubah isinya:
          * `"id"`: Ganti dengan angka baru yang belum pernah dipakai.
          * `"title"`: Judul berita.
          * `"excerpt"`: Ringkasan singkat berita.
          * `"date"`: Tanggal berita (format YYYY-MM-DD).
          * `"content"`: Isi lengkap berita. Bisa menggunakan tag HTML seperti `<p>` untuk paragraf.
          * `"image"`: Path ke gambar berita. Unggah gambar baru ke `images/news/` dan sesuaikan nama filenya di sini.

### 2\. Mengubah Struktur Organisasi

Data pimpinan dan pejabat diatur dalam file `data/opd.json`.

  * **Untuk mengubah data pejabat:**
    1.  Buka file `data/opd.json`.
    2.  Cari pejabat yang ingin diubah datanya berdasarkan `jabatan`.
    3.  Ubah `"nama"`, `"jabatan"`, atau `"keterangan"`.
    4.  Untuk mengubah foto, unggah foto baru ke `images/leaders/` dan perbarui path di bagian `"foto"`.

### 3\. Mengubah Data di Halaman Detail Bidang

Setiap halaman detail bidang (Koperasi, UKM, Tenaga Kerja) memiliki file datanya sendiri.

  * **Bidang Koperasi:** Ubah statistik dan daftar layanan di `data/cooperative-data.json`.
  * **Bidang UKM:** Ubah statistik dan daftar layanan di `data/smes-data.json`.
  * **Bidang Tenaga Kerja:** Ubah statistik dan daftar layanan di `data/labor-data.json`.

Cukup buka file JSON yang sesuai dan ubah teks atau angka di dalamnya.

### 4\. Mengubah Daftar Layanan (di Halaman `services.html`)

Halaman ini menggunakan dua file:

1.  **`data/service-list.json`**: Mengatur kartu-kartu layanan yang tampil di halaman.
2.  **`data/services.json`**: Mengatur konten detail yang muncul saat kartu di-klik (modal/pop-up).

<!-- end list -->

  * **Untuk mengubah teks di kartu:** Buka `service-list.json`.
  * **Untuk mengubah detail persyaratan/prosedur:** Buka `services.json`.

-----

## Teknologi yang Digunakan

  * HTML5
  * CSS3
  * JavaScript (ES6)
  * [Font Awesome](https://fontawesome.com/) untuk ikon
  * [Google Fonts](https://fonts.google.com/) (Poppins) untuk tipografi