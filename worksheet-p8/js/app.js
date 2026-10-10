const profil = {
  nama: "Keysha Indira Satya Putri",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  proyek: 4
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal. Saya telah menyelesaikan sebanyak ${profil.proyek} proyek.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Musikal Aladdin", tahun: 2023, selesai: true },
  { judul: "Pembuatan Kostum Navia", tahun: 2024, selesai: true },
  { judul: "Agrikita - E-Commerce Bahan Pangan", tahun: 2025, selesai: true },
  { judul: "SIMBAC - Sistem Booking Costume", tahun: 2026, selesai: true }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Musikal Aladdin");
console.log(katalog);

const daftarJudulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudulProyek);

const proyekDisusun = [...daftarProyek].sort((a,b) => b.tahun - a.tahun);
console.table(proyekDisusun);

