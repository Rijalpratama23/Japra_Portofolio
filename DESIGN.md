# DESIGN.md — Portofolio Rijal Pratama

> **Untuk agen coding:** baca seluruh file ini sebelum mengubah apa pun. Keputusan di sini mengalahkan kebiasaan bawaanmu. Jika sebuah permintaan bertentangan dengan file ini, tanyakan dulu. Jangan menambah warna, font, efek, atau section yang tidak tertulis di sini.
> **Untuk Rijal:** file ini sengaja memakai istilah teknis dalam bahasa Inggris (nama token, kelas Tailwind) supaya mudah dicari di kode. Penjelasannya dalam bahasa Indonesia.

Dibuat dari pembacaan `index.html`, `js/script.js`, `js/translations.js`, `output.css`, dan folder `asset/` pada versi saat ini.

---

## 1. Konteks

| | |
|---|---|
| **Subjek** | Portofolio pribadi Rijal Pratama, frontend developer (Sukabumi, Jawa Barat) |
| **Stack situs** | HTML statis, Tailwind CSS v4 (CLI), JavaScript vanilla, dua bahasa (ID default, EN), mode terang/gelap |
| **Pengunjung** | Recruiter/HRD dan hiring manager di Indonesia, calon klien freelance, sesama developer |
| **Tugas utama** | Dalam 10 detik pengunjung tahu: (1) siapa Rijal dan apa keahliannya, (2) bukti kerja nyata, (3) cara menghubunginya |
| **Kesan** | Rapi, tenang, tepercaya, hangat. Bukan "pamer efek" |
| **Satu hal yang diingat** | Proyek nyata yang tampil besar dan jelas. Warna dan tipografi pendukung, bukan pusat perhatian |

Aset yang sudah ada dan menentukan arah: logo perisai "RJ" berwarna biru `#1B56CC` (`asset/biru.png`) dan 12+ tangkapan layar proyek yang sudah berwarna-warni. **Karena proyek sudah berwarna, antarmuka di sekitarnya harus netral dan tenang.**

## 2. Prinsip

1. **UI tenang, proyek berwarna.** Palet situs netral dingin dengan satu aksen biru dari logo. Warna datang dari tangkapan layar proyek.
2. **Satu aksen, satu tugas.** Biru hanya untuk hal yang bisa diklik atau sedang aktif.
3. **Hierarki dari ukuran, bobot, dan jarak.** Bukan dari warna tambahan, ikon, atau bayangan.
4. **Rata kiri, bacaan pendek.** Maksimum 65 karakter per baris. Rata tengah hanya untuk elemen kecil.
5. **Satu section, satu tugas, satu judul.**
6. **Gerak hanya jika memberi informasi.** Respons terhadap klik/hover boleh; hiasan yang bergerak sendiri tidak.
7. **Terang dan gelap sama-sama dirancang.** Satu identitas merek di kedua mode, bukan dua.

---

## 3. Warna

### 3.1 Token

Semua warna dipakai lewat token, tidak pernah hex langsung di HTML. Token berganti otomatis saat kelas `.dark` aktif, jadi **tidak perlu menulis `dark:` untuk warna**.

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `canvas` | `#F5F7FA` | `#0C1424` | Latar halaman |
| `surface` | `#FFFFFF` | `#131D31` | Kartu, input, header |
| `surface-2` | `#EBEFF5` | `#1A2640` | Chip, area latar kedua, hover lembut |
| `line` | `#D9DFE8` | `#27344F` | Garis pemisah dekoratif 1px |
| `ink` | `#0F1A2E` | `#EEF2F9` | Judul dan teks utama |
| `ink-2` | `#39455B` | `#C3CCDB` | Paragraf |
| `ink-3` | `#5A667C` | `#8F9BB1` | Teks sekunder, meta, border input |
| `brand` | `#1B56CC` | `#7AA2FF` | Aksen: tombol primer, tautan, state aktif, focus ring |
| `brand-hover` | `#1546A8` | `#A0BDFF` | Hover untuk `brand` |
| `brand-tint` | `#E6EEFC` | `#1B2C52` | Latar halus untuk item aktif |
| `on-brand` | `#FFFFFF` | `#0C1424` | Teks di atas `brand` |
| `signal` | `#12805C` | `#3DD6A0` | Hanya status (mis. titik "tersedia"), tidak untuk dekorasi |
| `danger` | `#C43D3D` | `#FF8A8A` | Pesan error form |

Band penutup (section Kontak), sama di kedua mode:

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `deep` | `#0F1A2E` | `#070D19` | Latar band Kontak |
| `on-deep` | `#EEF2F9` | `#EEF2F9` | Teks di band |
| `on-deep-muted` | `#B4BED1` | `#B4BED1` | Teks sekunder di band |
| `brand-on-deep` | `#7AA2FF` | `#7AA2FF` | Tautan, tombol, focus ring di band |

### 3.2 Kontras (sudah dihitung, standar WCAG)

| Pasangan | Terang | Gelap |
|---|---|---|
| `ink` di `canvas` | 16,2 : 1 | 16,4 : 1 |
| `ink-2` di `canvas` | 9,0 : 1 | 11,4 : 1 |
| `ink-3` di `canvas` | 5,4 : 1 | 6,6 : 1 |
| `brand` di `canvas` | 6,0 : 1 | 7,4 : 1 |
| `on-brand` di `brand` | 6,5 : 1 | 7,4 : 1 |
| `signal` di `canvas` | 4,6 : 1 | 9,9 : 1 |

Semua lolos 4,5 : 1 untuk teks biasa. **`line` hanya 1,25–1,5 : 1, jadi hanya boleh untuk garis dekoratif.** Border input dan elemen form memakai `ink-3` agar terlihat jelas.

### 3.3 Aturan pemakaian

- **Komposisi:** sekitar 90% netral (`canvas`, `surface`, `ink*`), maksimum 10% `brand`. `signal` hanya untuk status.
- **`brand` dipakai untuk:** tombol primer, tautan, indikator nav aktif, focus ring, judul proyek saat hover.
- **`brand` tidak dipakai untuk:** latar section, dekorasi, ikon sosial, atau mewarnai satu kata di dalam judul.
- Pemisah antar-section memakai **jarak dan garis 1px `line`**, bukan blok warna yang berselang-seling.
- **Tidak ada gradient. Tidak ada bayangan berwarna.** Bayangan hanya satu level, netral dan halus (lihat §5.4).
- Satu identitas di kedua mode: biru. **Hapus aksen kuning/amber (`#fbbf24`) di mode gelap.**
- Ikon sosial memakai `ink-3`, hover `ink`. **Hapus warna merek** (biru Facebook, gradient Instagram) dan pertimbangkan membuang Facebook/Instagram dari hero; recruiter mencari GitHub dan LinkedIn.
- Kartu proyek memakai `surface`, **bukan `bg-gray-300`** seperti sekarang.

---

## 4. Tipografi

### 4.1 Font

| Peran | Font | Bobot | Catatan |
|---|---|---|---|
| Judul (`font-display`) | **Bricolage Grotesque** | 600, 700 | Grotesque dengan karakter, cocok dengan bentuk huruf blok pada logo RJ. Aktifkan optical size otomatis |
| Isi dan UI (`font-sans`) | **Hanken Grotesk** | 400, 500, 600 | Netral dan sangat terbaca di ukuran kecil, mendukung teks Indonesia penuh |

- Dua font dengan peran jelas: Bricolage hanya untuk judul besar, Hanken untuk semua sisanya (nav, tombol, paragraf, form).
- Tanpa font monospace. Tag teknologi memakai Hanken biasa.
- **Alternatif yang lebih konservatif** (jika ingin satu font saja): Plus Jakarta Sans 500/600/700 untuk semuanya.
- Tidak memakai Inter, Poppins, atau font bawaan sistem sebagai pilihan utama. Fallback sistem tetap dipasang agar teks tampil saat font belum termuat.

### 4.2 Skala

| Level | Kelas | Ukuran | Line-height | Bobot | Letter-spacing | Dipakai untuk |
|---|---|---|---|---|---|---|
| L1 | `text-display` | 40 → 68 px (fluid) | 1,05 | 700 | −0,03em | Headline hero (satu per halaman) |
| L2 | `text-title` | 30 → 44 px (fluid) | 1,1 | 700 | −0,025em | Judul section |
| L3 | `text-heading` | 22 px | 1,3 | 600 | −0,01em | Judul kartu proyek, sub-judul |
| L4 | `text-lead` | 18 → 21 px | 1,6 | 400 | 0 | Kalimat pembuka hero dan section |
| L5 | `text-base` | 16 px | 1,7 | 400 | 0 | Paragraf |
| L6 | `text-sm` | 14 px | 1,5 | 400/500 | 0 | Meta, chip, deskripsi kartu |
| L7 | `text-caption` | 13 px | 1,45 | 500 | 0 | Keterangan kecil. **Tidak ada teks di bawah 13 px** |

### 4.3 Aturan

- **Judul memakai satu warna (`ink`).** Tidak ada satu kata berwarna aksen (hapus pola "My **Skill**", "My **Portofolio**", "**About**").
- **Sentence case.** Tidak ada ALL CAPS, tidak ada tulisan dengan awalan `~...~`, tidak ada label kecil di atas judul (eyebrow) kecuali benar-benar membawa informasi.
- Panjang baris paragraf maksimum `65ch` (`max-w-[65ch]`). Paragraf "About" saat ini selebar ±800 px pada 20 px, terlalu panjang.
- Bobot tebal hanya untuk judul dan tombol. **Link nav tidak perlu `font-bold`**: pakai 500, ukuran 15 px.
- Angka (tahun, nomor telepon) memakai `tabular-nums`.
- Label kecil bahasa (`.lang-label` 9–10 px) naik ke minimum 13 px, atau diganti segmented control "ID | EN".

---

## 5. Layout dan hierarki

### 5.1 Grid dan jarak

- Wadah: `max-w-6xl` (1152 px), `mx-auto`, padding horizontal `px-5 sm:px-8`.
- Desktop memakai grid 12 kolom, `gap-8`. Mobile satu kolom.
- Kelipatan 8 px untuk semua jarak. Jarak vertikal antar-section: `py-20 md:py-28`.
- **Hapus `min-h-screen` di section About, Skill, Portofolio.** Itu membuat ruang kosong besar saat kontennya pendek dan terasa monoton. Hero boleh `min-h-[calc(100dvh-4rem)]`.
- Rata kiri untuk semua judul dan paragraf, termasuk di mobile (hapus `text-center md:text-left`).
- `scroll-margin-top` section = tinggi header + 16 px.

### 5.2 Urutan halaman

Bukti kerja naik ke atas karena pengunjung punya waktu singkat. Lima section menjadi empat.

```
HEADER   logo · Proyek · Tentang · Kontak · [ID|EN] [tema]
HERO     headline + kalimat pembuka + 2 tombol     |  tumpukan 2 tangkapan layar proyek
PROYEK   judul + 1 kalimat
         [kartu besar] [kartu besar]
         [kartu besar] [kartu besar]
         [kartu besar] [kartu besar]
         Latihan dan eksperimen (daftar kompak, tanpa gambar)
TENTANG  foto 4:5   |  paragraf (≤65ch) + Unduh CV + Lihat sertifikat
                       keahlian dikelompokkan (Frontend · Backend dan database · Tools)
KONTAK   band gelap: judul + email besar (klik untuk salin)  |  form
FOOTER   satu baris
```

ID section tetap `home`, `about`, `portofolio`, `contact` agar tautan lama dan sitemap tidak rusak. Section `skill` digabung ke `about`.

### 5.3 Hierarki per section

**Hero** (L1 → L4 → tombol; hanya tiga tingkat terlihat)
- Judul: kalimat spesifik tentang apa yang Rijal kerjakan, bukan sapaan. Tanpa efek mengetik. Informasi harus langsung terbaca.
- Tombol primer "Lihat proyek" (`brand`), sekunder "Unduh CV" (garis `ink-3`, teks `ink`).
- Sisi kanan: dua tangkapan layar proyek terbaik dalam bingkai browser sederhana (`surface`, border `line`, radius 16 px), saling tumpang sedikit. Klik membuka proyeknya. Ini menggantikan foto lingkaran bergaris aksen yang sering dipakai template.
- Mobile: teks dulu, satu tangkapan layar di bawah tombol.
- Titik hijau "Terbuka untuk magang/kerja" (`signal`) **hanya jika memang benar** `[konfirmasi Rijal]`.

**Proyek**
- Judul section (L2) + satu kalimat. Tanpa tagline `~Latest Project~`.
- Dua tingkat, agar proyek terbaik tidak tenggelam di antara latihan:
  - **Proyek utama** (grid 2 kolom di desktop): kartu besar dengan tangkapan layar.
  - **Latihan dan eksperimen**: daftar kompak satu baris per item (judul, satu kalimat, stack, tautan), tanpa gambar.
- Usulan awal (ubah sesuai penilaianmu; kriterianya: kerja nyata dulu, lalu kompleksitas, lalu keunikan):

| Proyek utama | Latihan dan eksperimen |
|---|---|
| Sistem manajemen SukaRobot, LMS SukaRobot, Nutrifit, Veggiezz, Flood-Prone, StudyFlow | Employa, E-commerce Coffee, Money Tracker, Portofolio React, Kalkulator, Cloning UI |

- Filter "Dinamis / Statis" adalah istilah developer yang tidak bermakna bagi recruiter. Ganti dengan pemisahan tingkat di atas, atau filter berdasarkan teknologi (Semua · Laravel · React/Next.js · JavaScript).

**Tentang + Keahlian**
- Foto 4:5 berradius 16 px (bukan lingkaran), paragraf `ink-2` maksimum 65ch, dua tombol (Unduh CV, Lihat sertifikat).
- Keahlian dikelompokkan, bukan 15 logo berukuran sama (96–120 px) yang sekarang. Setiap grup: nama grup (L3), lalu chip berisi ikon 20 px + nama teknologi (`text-sm`, `surface-2`, radius penuh). Teknologi utama (HTML, CSS, JavaScript, React, Next.js, Tailwind) di baris pertama; sisanya di bawahnya.
- Ikon Devicon memakai versi `-plain` satu warna (`ink-3`), bukan `-original` yang multiwarna, agar tidak bertabrakan dengan palet.

**Kontak**
- Band `deep` dengan teks `on-deep`. Judul L2, satu kalimat, lalu alamat email besar (L3) yang bisa diklik untuk menyalin.
- Form di `surface` berdampingan dengan info kontak. Peta Google dihapus atau dijadikan satu baris teks "Sukabumi, Jawa Barat" (mengurangi beban muat dan tidak menambah informasi).
- Judul "Contact Us" diganti, karena ini situs pribadi (lihat §8).

### 5.4 Radius dan elevasi

| Elemen | Radius | Elevasi |
|---|---|---|
| Tombol, input | `rounded-control` = 8 px | Tidak ada |
| Kartu proyek, bingkai browser | `rounded-card` = 16 px | Border 1px `line`; bayangan hanya saat hover: `0 8px 24px rgb(15 26 46 / 0.08)` (terang), tanpa bayangan di gelap, border berubah ke `ink-3` |
| Chip, avatar, tombol ikon | `rounded-full` | Tidak ada |

Gambar di dalam kartu menempel penuh ke tepi atas kartu (tanpa padding) dengan `overflow-hidden`, sehingga tidak ada radius bertingkat yang janggal.

---

## 6. Komponen

**Header.** Sticky, tinggi 64 px, latar `canvas` 85% + `backdrop-blur`, tanpa border di atas halaman; border bawah 1px `line` muncul setelah scroll. Logo 36–40 px. Link nav 15 px/500; state aktif = teks `ink` + garis bawah 2 px `brand` (bukan hanya ganti warna). Tombol bahasa dan tema 36 px, wajib `aria-label`. Mobile: panel penuh lebar di bawah header, target sentuh 48 px (ganti drawer samping 220 px).

**Tombol.** Primer: `bg-brand text-on-brand hover:bg-brand-hover`, tinggi 44 px, `px-5`, teks 16 px/600, radius 8 px. Sekunder: transparan, border 1px `ink-3`, teks `ink`. Tombol sejenis memakai kata kerja spesifik ("Lihat proyek", "Unduh CV", "Kirim pesan"). Tidak ada ikon kaca pembesar di semua tombol.

**Kartu proyek.** Urutan: gambar 16:10 → judul (L3) → satu kalimat peran dan hasil (`text-sm ink-2`, maksimum 3 baris) → chip teknologi (`text-caption`) → tautan "Lihat situs" (`brand`, ikon panah-keluar kecil karena membuka tab baru). Seluruh kartu bisa diklik. Teks rata kiri. Tinggi kartu sejajar lewat grid, bukan `min-h-14` pada judul.

**Baris latihan.** `border-b line`, judul 16/600, satu kalimat `ink-3`, chip stack, tautan.

**Form.** Label di atas input, tanpa titik dua. Input 44 px, border `ink-3`, fokus: ring 2 px `brand` + offset 2 px. Error: teks `danger` di bawah field yang menjelaskan cara memperbaiki. Pesan berhasil memakai warna tema (hapus `confirmButtonColor: '#FBBF24'` pada SweetAlert2, ganti ke `brand`).

**Tombol WhatsApp mengambang.** Boleh dipertahankan (hijau WhatsApp sudah dikenali orang). **Hapus animasi denyut.** Pastikan tidak menutupi tombol kirim di mobile.

**Footer.** Satu baris `text-sm ink-3`, rata tengah boleh. Tahun dihitung otomatis (`new Date().getFullYear()`). Bukan lagi bilah penuh berwarna aksen.

---

## 7. Gerak dan interaksi

Prinsip: gerak yang **menjawab aksi pengguna** itu bagus. Gerak yang berjalan sendiri hanya satu kali, untuk menarik perhatian.

**Dipertahankan atau ditambah**
- **Satu urutan saat halaman dimuat:** elemen hero muncul bertahap (judul → kalimat → tombol → tangkapan layar), jeda 60 ms, total ±500 ms, **sekali saja**.
- Hover kartu proyek: gambar `scale(1.03)` (500 ms ease-out), judul berubah ke `brand`, border ke `ink-3`. Tanpa loncat vertikal.
- Filter/tingkat proyek: kartu yang muncul diberi transisi opacity 200 ms.
- Header mendapat border saat scroll; nav aktif mengikuti section (logika `IntersectionObserver` yang sudah ada dipertahankan).
- Tombol "salin email" dengan toast kecil "Email disalin".
- Ganti tema: transisi warna 200 ms, diaktifkan **setelah** halaman termuat agar tidak berkedip.
- Focus ring terlihat untuk keyboard (`:focus-visible`, 2 px `brand`, offset 2 px).
- `prefers-reduced-motion: reduce` mematikan semua animasi di atas kecuali perubahan warna.

**Dihapus**
- Efek mengetik pada hero (menunda informasi inti).
- AOS (`data-aos`) pada setiap section: pola fade-and-slide-up di semua tempat adalah tanda umum buatan AI. Setelah dihapus, pustaka AOS bisa dilepas.
- `hover:-translate-y-4` pada kartu (loncatan 16 px terlalu besar), `scale-120` pada ikon, denyut tombol WhatsApp.

**Durasi:** hover 150–250 ms `ease-out`; masuk halaman 400–500 ms; tidak ada yang lebih dari 600 ms.

**Tahap lanjutan (setelah tampilan beres):** untuk 2–3 proyek utama, tambahkan panel detail "Masalah → Peran saya → Hasil" yang terbuka saat kartu diklik. Ini yang paling membuat recruiter bertahan lama, karena menunjukkan cara berpikir, bukan hanya tampilan.

---

## 8. Copy

Suara: orang pertama, jelas, spesifik, tanpa tanda seru. Setiap tombol menyebut apa yang terjadi saat diklik. **Ubah di `index.html` dan di `js/translations.js` (kedua bahasa, key yang sama).**

| Sekarang | Ganti dengan (ID / EN) |
|---|---|
| "Hallo I'm Rijal Pratama" + efek mengetik | Headline spesifik, contoh: "Saya membangun antarmuka web yang rapi dan mudah dipakai." / "I build clean, easy-to-use web interfaces." |
| "My Skill" + `~skills and tools...~` | "Keahlian" / "Skills" |
| "My Portofolio" + `~Latest Project~` | "Proyek" / "Projects" |
| "About" | "Tentang saya" / "About me" |
| "Contact Us" / "Get In Touch" | "Hubungi saya" / "Contact me" |
| "Download CV!" | "Unduh CV" / "Download CV" |
| "Sertifications!" | "Lihat sertifikat" / "View certificates" |
| "Read More!" | "Lihat situs" / "View site" |
| "Dinamis" / "Statis" | "Proyek utama" / "Latihan" (atau filter teknologi) |
| "Send Message" | "Kirim pesan" / "Send message" |
| "© 2024 ... All rights reserved." | "© [tahun otomatis] Rijal Pratama" |

Pastikan klaim di paragraf About (misalnya "3 years of experience") akurat sebelum dipublikasikan. Kalimat deskripsi proyek ditulis ulang dalam pola "apa yang dibuat + peran Rijal + teknologi", maksimum dua kalimat.

---

## 9. Daftar pantangan (anti-slop untuk repo ini)

- Gradient di mana pun, termasuk ikon sosial.
- Latar section berselang-seling dengan beda warna nyaris tak terlihat (`bg-a` / `bg-b`).
- Satu kata berwarna aksen di dalam judul.
- Tagline berbentuk `~teks~`, label ALL CAPS, atau nomor `01 / 02 / 03` pada konten yang bukan urutan.
- Grid logo teknologi berukuran sama dan besar.
- Kartu identik dengan tombol "Read More!" yang sama di setiap kartu.
- Foto lingkaran dengan border aksen dan bayangan berwarna.
- Efek mengetik, fade-and-slide-up di setiap section, hover yang membuat elemen melompat.
- Teks Inggris/Indonesia bercampur dalam satu elemen tanpa alasan.
- Emoji atau ikon dekoratif di depan setiap judul.
- Warna hex langsung di HTML. Selalu pakai token.

---

## 10. Implementasi (Tailwind v4)

### 10.1 `<head>`: font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..700&family=Hanken+Grotesk:wght@400..600&display=swap"
  rel="stylesheet"
/>
```

Hapus blok `<style>` bergaya `--accent`, `.bg-a`, `.bg-b`, `.accent-*` di `index.html`; tugasnya diganti token di bawah.

### 10.2 `input.css`

```css
@import "tailwindcss";

/* Penting: tanpa baris ini, dark: mengikuti pengaturan OS, bukan tombol tema */
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --canvas: #F5F7FA;   --surface: #FFFFFF;   --surface-2: #EBEFF5;
  --line: #D9DFE8;
  --ink: #0F1A2E;      --ink-2: #39455B;     --ink-3: #5A667C;
  --brand: #1B56CC;    --brand-hover: #1546A8; --brand-tint: #E6EEFC;
  --on-brand: #FFFFFF;
  --signal: #12805C;   --danger: #C43D3D;
  --deep: #0F1A2E;
}
.dark {
  --canvas: #0C1424;   --surface: #131D31;   --surface-2: #1A2640;
  --line: #27344F;
  --ink: #EEF2F9;      --ink-2: #C3CCDB;     --ink-3: #8F9BB1;
  --brand: #7AA2FF;    --brand-hover: #A0BDFF; --brand-tint: #1B2C52;
  --on-brand: #0C1424;
  --signal: #3DD6A0;   --danger: #FF8A8A;
  --deep: #070D19;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-line: var(--line);
  --color-ink: var(--ink);
  --color-ink-2: var(--ink-2);
  --color-ink-3: var(--ink-3);
  --color-brand: var(--brand);
  --color-brand-hover: var(--brand-hover);
  --color-brand-tint: var(--brand-tint);
  --color-on-brand: var(--on-brand);
  --color-signal: var(--signal);
  --color-danger: var(--danger);
  --color-deep: var(--deep);
  --color-on-deep: #EEF2F9;
  --color-on-deep-muted: #B4BED1;
  --color-brand-on-deep: #7AA2FF;
}

@theme {
  --font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;

  --radius-control: 0.5rem;
  --radius-card: 1rem;

  --text-display: clamp(2.5rem, 1.6rem + 4vw, 4.25rem);
  --text-display--line-height: 1.05;
  --text-display--letter-spacing: -0.03em;
  --text-display--font-weight: 700;

  --text-title: clamp(1.875rem, 1.4rem + 1.8vw, 2.75rem);
  --text-title--line-height: 1.1;
  --text-title--letter-spacing: -0.025em;
  --text-title--font-weight: 700;

  --text-heading: 1.375rem;
  --text-heading--line-height: 1.3;
  --text-heading--letter-spacing: -0.01em;
  --text-heading--font-weight: 600;

  --text-lead: clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem);
  --text-lead--line-height: 1.6;

  --text-caption: 0.8125rem;
  --text-caption--line-height: 1.45;
}

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-canvas font-sans text-base leading-[1.7] text-ink-2 antialiased; }
  h1, h2, h3 { @apply font-display text-ink; }
  :focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

Dengan token ini, `<h2 class="text-title">`, `<section class="bg-surface-2">`, dan `<a class="text-brand hover:text-brand-hover">` otomatis benar di mode terang dan gelap.

### 10.3 Build CSS

`package.json` saat ini tidak punya skrip. Tambahkan:

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./input.css -o ./output.css --watch",
    "build": "tailwindcss -i ./input.css -o ./output.css --minify"
  }
}
```

`output.css` hasil kompilasi, jadi **setiap kelas baru butuh build ulang**. Jalankan `npm run dev` selama mengedit.

### 10.4 Pemetaan lama → baru

| Lama | Baru |
|---|---|
| `bg-a` / `bg-b` | `bg-canvas` (halaman), `bg-surface` (kartu/header), `bg-surface-2` (area latar kedua) |
| `accent-text` | `text-brand` (hanya untuk tautan/aktif) |
| `accent-bg` | `bg-brand text-on-brand hover:bg-brand-hover` |
| `accent-border` | `border-brand` (jarang; umumnya `border-line`) |
| `text-neutral-900 dark:text-white` | `text-ink` |
| `text-neutral-700 dark:text-white` | `text-ink-2` |
| `text-neutral-600 dark:text-gray-300` | `text-ink-3` |
| `bg-gray-300` (kartu) | `bg-surface border border-line rounded-card` |
| `logo-light` / `logo-dark` (dua `<img>`) | Satu SVG berwarna `currentColor` jika memungkinkan |

### 10.5 Aset

- Foto `asli1.jpg` / `asli2.jpg` hanya **300×300 px**. Jangan ditampilkan lebih besar dari itu. Untuk foto 4:5 di bagian Tentang, ekspor ulang dari foto asli minimal **800×1000 px** (format WebP, <150 KB).
- `logo.png` berukuran 3264×3264 px (564 KB) tapi tampil ±80 px. Perkecil ke 160×160 px, atau buat SVG.
- `flood.png` 2,3 MB; `lms.png` dan `subotManajemen.png` ±500 KB. Ubah ke WebP lebar 1200 px (target <150 KB). Beri atribut `width`, `height`, `loading="lazy"`, dan `alt` yang deskriptif.
- Tangkapan layar berukuran 300×170 px (`kopi`, `moneytracker`, `kalkulator`, `pzn_cloning`, `todoApp`) terlalu kecil untuk kartu besar. Ambil ulang dengan lebar ≥1200 px, atau tampilkan hanya di daftar kompak tanpa gambar.
- Tujuh file tidak dipakai di `index.html` (`gambar 1.jpg`, `gambar 2 - Copy.jpg`, `rect.png`, `todoApp.png`, tiga gambar sertifikat). Hapus, atau pindahkan jika sertifikat akan ditampilkan.

### 10.6 Masalah di kode saat ini yang ikut dirapikan

1. `og:image` dan `og:url` rusak (`japra-portofolio-dlmj.vercel.appasset/asli2.jpg`, tanpa `https://` dan tanpa `/`); `canonical` juga tanpa `https://`. Pratinjau tautan di WhatsApp/LinkedIn tidak akan tampil.
2. Kartu "(cloningUI) Web Programer" menautkan ke `money-trancker.vercel.app` (salah salin).
3. Ikon skill dibungkus `<a href="">` tanpa tujuan dan `<img>` tanpa `alt`. Klik memuat ulang halaman, dan pembaca layar tidak tahu itu apa.
4. Tag `<span class="accent-text" ...>About</h2>` di bagian About tidak ditutup.
5. Atribut `data-aos-duratios` salah ketik (seharusnya `duration`).
6. Footer menulis 2024 dan sapaan "Hallo".
7. `input.css` hanya berisi `@import "tailwindcss";`, sementara `output.css` yang ada memakai varian `dark` berbasis class. Jika `output.css` dibangun ulang tanpa baris `@custom-variant` di §10.2, mode gelap bisa berhenti mengikuti tombol tema.

---

## 11. Urutan pengerjaan yang disarankan

1. **Fondasi:** `input.css` (token, font, `@custom-variant`), skrip build, hapus blok `<style>` lama. Cek terang dan gelap.
2. **Header dan hero:** struktur §5.3, hapus efek mengetik, tambahkan urutan muncul saat dimuat.
3. **Proyek:** kartu baru, dua tingkat, optimasi gambar.
4. **Tentang + Keahlian:** foto 4:5, chip berkelompok.
5. **Kontak dan footer:** band `deep`, salin email, form baru, hapus peta.
6. **Gerak:** hover, filter, toast, `prefers-reduced-motion`; lepas AOS.
7. **Copy dan perbaikan §10.6** di kedua bahasa.

## 12. Cek akhir sebelum publikasi

- [ ] Mode terang dan gelap sama-sama rapi; tidak ada sisa warna kuning.
- [ ] Lebar 360 px (HP kecil) tidak ada scroll horizontal; teks Indonesia yang lebih panjang tidak merusak tata letak.
- [ ] Bisa dinavigasi hanya dengan keyboard; focus ring terlihat di semua elemen interaktif.
- [ ] Tidak ada teks di bawah 13 px dan tidak ada pasangan warna di bawah 4,5 : 1.
- [ ] Animasi mati saat sistem mengaktifkan "reduce motion".
- [ ] Skor Lighthouse (Performance, Accessibility, SEO) ≥ 90 di mobile.
- [ ] Pratinjau tautan (WhatsApp/LinkedIn) menampilkan judul dan gambar yang benar.
- [ ] Semua tautan proyek mengarah ke proyek yang tepat.
- [ ] Buka halaman dengan mata disipitkan: yang paling menonjol adalah headline dan proyek, bukan dekorasi.
