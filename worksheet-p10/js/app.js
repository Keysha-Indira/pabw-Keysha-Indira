import { load } from "./api.js";

const profil = {
  nama: "Keysha Indira Satya Putri",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  proyek: 4
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal. Saya telah menyelesaikan sebanyak ${profil.proyek} proyek.`;
console.log(kalimat);

let pilihanAktif = "semua";
pilihanAktif = "proyek terbaru";
console.log(`Pilihan aktif: ${pilihanAktif}`);

const kota = profil.alamat?.kota ?? "Alamat belum tersedia";
console.log(kota);

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

console.log("Daftar keahlian:");
console.table(profil.keahlian);

console.log("Daftar seluruh proyek:");
console.table(daftarProyek);

const proyekTerbaru = daftarProyek.filter(
  (proyek) => proyek.tahun >= 2025
);

console.log("Proyek tahun 2025 ke atas:");
console.table(proyekTerbaru);

const proyekDitemukan = daftarProyek.find(
  (proyek) => proyek.judul === "Musikal Aladdin"
);

console.log("Hasil find:");
console.log(proyekDitemukan);

const daftarJudulProyek = daftarProyek.map(
  (proyek) => proyek.judul
);

console.log("Hasil map:");
console.table(daftarJudulProyek);

const salinanProfil = { ...profil };
console.log(salinanProfil);

console.log("Profil asli:");
console.log(profil);

console.log("Salinan profil:");
console.log(salinanProfil);

const proyekDisusun = [...daftarProyek].sort(
  (a, b) => b.tahun - a.tahun
);

console.log("Proyek setelah diurutkan:");
console.table(proyekDisusun);

console.log("Data proyek asli:");
console.table(daftarProyek);

export const daftarPlayer = [
  {
    nickname: "jabbi",
    nama: "Jakob Nygaard",
    tanggalLahir: "23-07-2003",
    role: "Closer"
  },
  {
    nickname: "HooXi",
    nama: "Rasmus Nielsen",
    tanggalLahir: "21-05-1995",
    role: "In-Game Leader"
  },
  {
    nickname: "Staehr",
    nama: "Victor Hansen",
    tanggalLahir: "19-07-2004",
    role: "Opener"
  },
  {
    nickname: "ryu",
    nama: "Gytis Glušauskas",
    tanggalLahir: "25-07-2004",
    role: "Anchor"
  },
  {
    nickname: "phzy",
    nama: "Love Smidebrant",
    tanggalLahir: "24-09-2002",
    role: "AWPer"
  },
  {
    nickname: "Magisk",
    nama: "Emil Reif",
    tanggalLahir: "05-03-1998",
    role: "Closer"
  },
  {
    nickname: "dev1ce",
    nama: "Nicolai Reedtz",
    tanggalLahir: "08-09-1995",
    role: "AWPer"
  },
  {
    nickname: "dupreeh",
    nama: "Peter Rasmussen",
    tanggalLahir: "26-03-1993",
    role: "Opener"
  },
  {
    nickname: "Xy9px",
    nama: "Andreas Højsleth",
    tanggalLahir: "11-09-1995",
    role: "Anchor"
  },
  {
    nickname: "gla1ve",
    nama: "Lukas Rossander",
    tanggalLahir: "07-06-1995",
    role: "In-Game Leader"
  }
];

load()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });