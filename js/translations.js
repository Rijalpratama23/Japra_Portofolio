// Kumpulan teks untuk fitur ganti bahasa (EN <-> ID)
// Setiap key harus sama persis dengan atribut data-i18n / data-i18n-placeholder di index.html
const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_skill: 'Skill',
    nav_portofolio: 'Portofolio',
    nav_contact: 'Contact',

    // Hero
    hero_greeting: "Hallo I'm Rijal Pratama",
    hero_role_prefix: "I'm a",
    hero_desc: 'I am a Software Engineering (FrontEnd development). Welcome to my website. all about me/my history can be seen here!',

    // About
    about_title_accent: 'About',
    about_title_rest: 'Me',
    about_desc:
      'Hello I am Rijal Pratama, I am a FrontEnd developer with 2 years of experience. I have a strong ability to create attractive and functional interfaces. With basic skills in HTML, CSS, and JavaScript, I am also ready to work in a team. Besides that, I have a strong desire to continue learning web development in the future.',
    about_download_cv: 'Download CV!',
    sertifications: 'Sertifications!',

    // Skill
    skill_tagline: '~skills and tools that I have mastered~',
    skill_title_prefix: 'My',
    skill_title_accent: 'Skill',
    skill_desc: 'the tools I use to build a professional website and deliver an interactive experience.',

    // Portofolio
    portofolio_tagline: '~Latest Project~',
    portofolio_title_prefix: 'My',
    portofolio_title_accent: 'Portofolio',
    filter_all: 'All',
    filter_dinamis: 'Dinamis',
    filter_statis: 'Statis',
    read_more: 'Read More!',

    proj_moneytracker: 'This application is built using HTML, CSS, and JavaScript. Manage your money, from expenses to income.',
    proj_veggiezz: 'This website is an e-commerce website dedicated to vegetables. It was built using React + Tailwind CSS (frontend), Node/Express (backend), and MySQL (database).',
    proj_nutrifit: 'Nutrifit is an education- and consultation-based health website, built using Next.js, Supabase, and Tailwind CSS.',
    proj_flood:
      'This website is used to identify flood-prone areas in each sub-district in Sukabumi Regency, along with their vulnerability levels. The technologies used include HTML, CSS, JavaScript, and several libraries such as Open Streetmap and Leaflite.js.',
    proj_todo: "This application is built using HTML, CSS, and JavaScript. It's a todo list application.",
    proj_kalkulator: 'This application is built using HTML, CSS, JavaScript, and a little local storage implementation.',
    proj_cloning: 'This application was built using HTML and CSS, created solely for layout practice purposes.',
    proj_portofolioreact: 'This portfolio is built using React JS and TailwindCSS using the vite package. Suitable for formal portfolios.',
    proj_kopi: 'This application was built using React Js & TailwindCSS, equipped with payment features.',

    // Contact
    contact_title_accent: 'Contact',
    contact_title_rest: 'Us',
    contact_subtitle: 'Contact Us',
    contact_heading: 'Get In Touch',
    form_name_label: 'Name :',
    form_name_placeholder: 'Your Name...',
    form_email_label: 'Email :',
    form_subject_label: 'Subject :',
    form_subject_placeholder: 'Title...',
    form_message_label: 'Message :',
    form_message_placeholder: 'Your Message..',
    form_send: 'Send Message',
    contact_intro: 'I value communication and am committed to providing excellent service. Please feel free to contact me using the information provided below, and I will be happy to assist you.',
    contact_phone_label: 'Phone Number',
    contact_email_label: 'Email Address',
    contact_whatsapp_label: 'Whatsapp',
    contact_location_label: 'My Locations',

    // Footer
    footer_text: '© 2024 Rijal Pratama. All rights reserved.',
  },

  id: {
    // Navbar
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_skill: 'Keahlian',
    nav_portofolio: 'Portofolio',
    nav_contact: 'Kontak',

    // Hero
    hero_greeting: 'Halo, saya Rijal Pratama',
    hero_role_prefix: 'Saya seorang',
    hero_desc: 'Saya seorang Software Engineer (FrontEnd Development). Selamat datang di website saya. Semua tentang saya/riwayat saya bisa dilihat di sini!',

    // About
    about_title_accent: 'Tentang',
    about_title_rest: 'Saya',
    about_desc:
      'Halo, saya Rijal Pratama, seorang FrontEnd developer dengan pengalaman 2 tahun. Saya memiliki kemampuan yang baik dalam membuat tampilan yang menarik dan fungsional. Dengan keahlian dasar HTML, CSS, dan JavaScript, saya juga siap bekerja dalam tim. Selain itu, saya memiliki keinginan kuat untuk terus belajar pengembangan web di masa depan.',
    about_download_cv: 'Unduh CV!',
    sertifications: 'Sertifikat!',

    // Skill
    skill_tagline: '~keahlian dan tools yang telah saya kuasai~',
    skill_title_prefix: 'Keahlian',
    skill_title_accent: 'Saya',
    skill_desc: 'tools yang saya gunakan untuk membangun website profesional dan memberikan pengalaman yang interaktif.',

    // Portofolio
    portofolio_tagline: '~Proyek Terbaru~',
    portofolio_title_prefix: 'Portofolio',
    portofolio_title_accent: 'Saya',
    filter_all: 'Semua',
    filter_dinamis: 'Dinamis',
    filter_statis: 'Statis',
    read_more: 'Selengkapnya!',

    proj_moneytracker: 'Aplikasi ini dibuat menggunakan HTML, CSS, dan JavaScript. Kelola keuangan Anda, mulai dari pengeluaran hingga pemasukan.',
    proj_veggiezz: 'Website ini adalah website e-commerce khusus sayuran. Dibangun menggunakan React + Tailwind CSS (frontend), Node/Express (backend), dan MySQL (database).',
    proj_nutrifit: 'Nutrifit adalah website kesehatan berbasis edukasi dan konsultasi, dibangun menggunakan Next.js, Supabase, dan Tailwind CSS.',
    proj_flood:
      'Website ini digunakan untuk mengidentifikasi daerah rawan banjir di setiap kecamatan di Kabupaten Sukabumi, beserta tingkat kerentanannya. Teknologi yang digunakan meliputi HTML, CSS, JavaScript, dan beberapa library seperti Open Streetmap dan Leaflite.js.',
    proj_todo: 'Aplikasi ini dibuat menggunakan HTML, CSS, dan JavaScript. Ini adalah aplikasi daftar tugas (to-do list).',
    proj_emply: 'Employa,website ini di bangun untuk sebuah pengolahan data karyawan di peruhaaan. dan menggunakan php native, taillwindcss dan MySql sebagai database',
    proj_kalkulator: 'Aplikasi ini dibuat menggunakan HTML, CSS, JavaScript, dan sedikit implementasi local storage.',
    proj_cloning: 'Aplikasi ini dibuat menggunakan HTML dan CSS, dibuat khusus untuk latihan layout.',
    proj_portofolioreact: 'Portofolio ini dibuat menggunakan React JS dan TailwindCSS dengan package vite. Cocok untuk portofolio formal.',
    proj_kopi: 'Aplikasi ini dibuat menggunakan React Js & TailwindCSS, dilengkapi dengan fitur pembayaran.',

    // Contact
    contact_title_accent: 'Hubungi',
    contact_title_rest: 'Kami',
    contact_subtitle: 'Hubungi Kami',
    contact_heading: 'Mari Terhubung',
    form_name_label: 'Nama :',
    form_name_placeholder: 'Nama Anda...',
    form_email_label: 'Email :',
    form_subject_label: 'Subjek :',
    form_subject_placeholder: 'Judul...',
    form_message_label: 'Pesan :',
    form_message_placeholder: 'Pesan Anda..',
    form_send: 'Kirim Pesan',
    contact_intro: 'Saya menghargai komunikasi dan berkomitmen memberikan pelayanan terbaik. Jangan ragu untuk menghubungi saya menggunakan informasi di bawah ini, saya akan dengan senang hati membantu Anda.',
    contact_phone_label: 'Nomor Telepon',
    contact_email_label: 'Alamat Email',
    contact_whatsapp_label: 'Whatsapp',
    contact_location_label: 'Lokasi Saya',

    // Footer
    footer_text: '© 2024 Rijal Pratama. Seluruh hak cipta dilindungi.',
  },
};
