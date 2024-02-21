alert('Aplikasi Tiketing')

// input
const nama = prompt('Masukkan Nama : ');
const umur = prompt('Masukkan Usia : ');

// kriteria umur
if (umur >= 13 ) {
    alert(`Selamat ${nama}, Boleh memasuki studio \nSilahkan pilih studio anda \n(Pilihan studio :A,B,C) `);
    let studio=prompt(`pilihan studio`)
    if (studio === "A") {
        alert("Tiket " + nama + ", Studio A, Umur " + umur + " tahun.");
    } else if (studio === "B") {
        alert("Tiket " + nama + ", Studio B, Umur " + umur + " tahun.");
    } else if (studio === "C") {
        alert("Tiket " + nama + ", Studio C, Umur " + umur + " tahun.");
    } else {
        // Jika pilihan tidak valid
        alert("Pilihan studio tidak valid.");
    }
} else {
    alert(`Maaf ${nama},Tidak Boleh memasuki studio `);
} 

