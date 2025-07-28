// Mengambil elemen tombol dari HTML
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const mainContainer = document.getElementById("main-container");

// Variabel untuk menyimpan ukuran awal tombol "Iya"
let yesButtonSize = 1;

// Daftar kalimat penolakan yang lucu
const noPhrases = [
  "Yakin nih?",
  "Pikirin lagi coba...",
  "Beneran ngga mau?",
  "Kasih kesempatan dong",
  "Ayolaaah...",
  "Aku traktir deh",
  "Pleaseee 🙏",
];
let noPhraseIndex = 0;

// Menambahkan event listener saat tombol "Nggak" diklik
noButton.addEventListener("click", () => {
  // Memperbesar ukuran tombol "Iya"
  yesButtonSize += 0.5;
  yesButton.style.transform = `scale(${yesButtonSize})`;

  // Mengubah teks pada tombol "Nggak"
  noButton.textContent = noPhrases[noPhraseIndex];
  noPhraseIndex = (noPhraseIndex + 1) % noPhrases.length; // Pindah ke kalimat berikutnya
});

// Menambahkan event listener saat tombol "Iya" diklik
yesButton.addEventListener("click", () => {
  // Mengganti konten halaman menjadi pesan "berhasil"
  mainContainer.innerHTML = `
        <h1>Yeeeay! Makasiiih!</h1>
        <img src="https://media.tenor.com/_8_3_d5g_t4AAAAi/quby-pentol.gif" alt="Happy dance GIF" class="gif">
        <h2>Sampai jumpa Selasa besokkk!</h2>
    `;
});
