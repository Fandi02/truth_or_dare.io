function dare() {
  var data = [
    "Pinjam sesuatu ke mantan kamu!",
    "Teriak dan bilang kalimat apapun di tempat keramaian!",
    "Minta kontak/sosial media orang yang belum kamu kenal (wajib lawan jenis)!",
    "Nyatain perasaan kamu sekarang ke orang yang kamu suka!",
    "Minta foto bareng orang lain yang belum kamu kenal (wajib lawan jenis)!",
    "Nyanyikan lagu favorit teman kamu di luar rumah/tempat kamu berada dengan suara lantang!",
    "Post foto gebetan kamu di sosial media!",
    "Telpon mantan kamu dan bilang 'aku kangen kamu'!",
    "Perlihatkan pesan kamu dengan mantan pacar!",
    "Lakukan tarian ala-ala TikTok selama 1 menit!",
    "Nyanyikan lagu anak-anak favorit kamu sampai selesai dikeramaian!",
    "Lakukan tarian lucu selama 1 menit!",
    "Pura-pura kesurupan selama 45 detik!",
    "Buat story dengan filter yang paling tidak kamu sukai di Instagram!",
    "Promosikan barang disekitar kamu layaknya seorang artis terkenal!",
    "Perlihatkan foto paling konyol pacar kamu!",
    "Kirim pesan ke kedua orang tuamu, katakan bahwa kamu kangen mereka!",
    "Lakukan rap instan tentang apa pun selama 45 detik!",
    "Beri salam ke orang-orang selain pemain yang ada di sekitarmu!",
    "Berjalan sambil bertepuk tangan dan menyanyikan lagu 'Selamat Ulang Tahun' berkeliling ruangan!",
    "Perlihatkan pesan instagram kamu!",
    "Unggah foto pacar kamu di sosial media!",
    "berbicara selama 5 menit menggunakan bahasa daerah!",
    "Deskripsikan teman terdekat kamu?, siapa orangnya?",
    "Berbicara selama 5 menit menggunakan bahasa jepang/korea!",
  ];
  var judul = document.getElementById("Judul");
  judul.innerHTML = "<h1>Dare</h1>";
  var hasil;
  var acak;
  var i = 0;
  var interval = setInterval(function () {
    acak = Math.floor(Math.random(data) * data.length);
    hasil = document.getElementById("text");
    hasil.innerHTML = data[acak];
    if (i > 25) clearInterval(interval);
    i++;
  }, 50);
  document.getElementById("dare").style.visibility = "hidden";
  document.getElementById("truth").style.visibility = "hidden";
}

function truth() {
  var data = [
    "Apa hal terbodoh yang pernah kamu lakukan?",
    "Pernahkah suka sama teman sendiri? dan siapa orangnya?",
    "Pernah ditolak sama orang yang kamu suka? apa penyebabnya?",
    "Sekarang lagi suka sama siapa dan siapa orang yang kamu suka?",
    "Siapa mantan terindah kamu?",
    "Hal apa yang kamu rahasiakan sampai sekarang dan gak ada satu orangpun yang tahu?",
    "Apa kenangan terindah kamu bersama mantan kamu dulu?",
    "Sekarang lagi suka sama siapa dan siapa orang yang kamu suka?",
    "Siapa nama teman yang paling kamu benci?",
    "Pernah suka sama pacar teman? dan siapa orangnya?",
    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
    "Apa mimpi terkonyol yang pernah kamu ingat?",
    "Siapa cinta pertamamu?",
    "Hal terburuk apa yang pernah dilakukan orang terhadapmu?",
    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
    "Siapa mantan pacar yang brengsek?",
    "Kalau ada jin yang memberikan 3 permohonan, apa yang kamu inginkan?",
    "Siapa orang yang ingin kamu jadikan istri dan suami?",
    "Siapa orang yang paling sering kamu kirimi pesan?",
    "Siapa mantan pacar yang paling kamu sayang?",
    "Berapa jumlah mantan pacarmu?",
    "Kenapa kamu putus hubungan dengan mantan pacar kamu sebelumnya?",
    "Musik yang tidak paling kamu sukai?",
    "Jika punya kekuatan super, kekuatan super apa yang kamu inginkan? dan alasannya?",
    "Alasan kamu suka dengan pacarmu sekarang?",
  ];
  var judul = document.getElementById("Judul");
  judul.innerHTML = "<h1>Truth</h1>";
  var hasil;
  var acak;
  var i = 0;
  var interval = setInterval(function () {
    acak = Math.floor(Math.random(data) * data.length);
    hasil = document.getElementById("text");
    hasil.innerHTML = data[acak];
    if (i > 25) clearInterval(interval);
    i++;
  }, 50);
  document.getElementById("dare").style.visibility = "hidden";
  document.getElementById("truth").style.visibility = "hidden";
}
