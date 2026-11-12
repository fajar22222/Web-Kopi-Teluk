/* ==========================================================================
   1. PENGATURAN (ubah bagian ini sesuai kebutuhan)
   ========================================================================== */

// Nomor WhatsApp dalam format internasional, tanpa "+" dan tanpa 0 di depan
const NOMOR_WA = "6281234567890";
const PESAN_WA = "Halo Kopi Teluk, saya ingin memesan.";


/* ==========================================================================
   2. ELEMEN HALAMAN
   ========================================================================== */

const linkWA = document.getElementById("wa-link");
const teksTahun = document.getElementById("tahun");
const linkNavigasi = document.querySelectorAll("nav a");
const daftarSection = document.querySelectorAll("section[id]");


/* ==========================================================================
   3. FUNGSI
   ========================================================================== */

// Mengisi link WhatsApp beserta pesan awalnya
function aturLinkWhatsApp() {
  linkWA.href = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(PESAN_WA)}`;
}

// Mengisi tahun di footer secara otomatis
function aturTahunFooter() {
  teksTahun.textContent = new Date().getFullYear();
}

// Menandai menu navigasi sesuai bagian yang sedang dilihat
function tandaiMenuAktif() {
  const pengamat = new IntersectionObserver(
    (daftarEntri) => {
      daftarEntri.forEach((entri) => {
        if (!entri.isIntersecting) return;

        linkNavigasi.forEach((link) => {
          const aktif = link.getAttribute("href") === `#${entri.target.id}`;
          link.classList.toggle("aktif", aktif);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  daftarSection.forEach((section) => pengamat.observe(section));
}


/* ==========================================================================
   4. JALANKAN
   ========================================================================== */

aturLinkWhatsApp();
aturTahunFooter();
tandaiMenuAktif();