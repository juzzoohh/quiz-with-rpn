// SOAL NOMOR 1

// Algoritma
/*
1. Cek apakah variabel nama kosong:
        Jika nama kosong, tampilkan pesan "nama wajib diisi".
2. Jika nama sudah diisi, cek apakah variabel peran kosong:
        Jika peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game".
3. Jika peran diisi dengan salah satu dari "Ksatria", "Tabib", atau "Penyihir":
        Jika peran adalah "Ksatria", tampilkan pesan "halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!".
        Jika peran adalah "Tabib", tampilkan pesan "halo Tabib ${nama}, kamu akan membantu temanmu yang terluka".
        Jika peran adalah "Penyihir", tampilkan pesan "halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!".
*/

let nama = "Davis";  // Ganti dengan nama pemain
let peran = "Tabib";  // Ganti dengan peran pemain: "Ksatria", "Tabib", atau "Penyihir"

if (nama === "") {
    console.log("Nama wajib diisi!");
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game!");
} else {
    if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`Peran ${peran} tidak dikenali. Pilih peran yang valid: Ksatria, Tabib, atau Penyihir.`);
    }
}

// SOAL NOMOR 2

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let namaBulan;

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid"; // Jika bulan di luar jangkauan 1-12
        break;
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);

