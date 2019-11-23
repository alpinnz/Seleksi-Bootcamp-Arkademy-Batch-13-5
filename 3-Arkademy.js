// Buatlah sebuah fungsi yang menampilkan output dari 1 sampai n, dengan ketentuan untuk setiap angka berkelipatan 3 akan digantikan dengan kata“ Arka”, untuk setiap angka berkelipatan 7 akan digantikan dengan kata“ Demy”, dan untuk setiap angka berkelipatan 3 dan 7 akan digantikan dengan kata“ Arkademy”.Catatan: Input harus merupakan angka, jika bukan angka akan menampilkan error“ Input harus angka!”
//     Contoh:
//     Input: arkademy(21)
// Output: 1, 2, Arka, 4, 5, Arka, Demy, 8, ..(berlanjut), 20, Arkademy

const arkademy = (number) => {
    // valid angka
    let pola = /[0-9]/g;
    // array penyimpan data
    let temp = [];
    // eksekusi valid
    if (number.toString().match(pola) && typeof (number) === 'number') {
        // perulangan
        for (let i = 1; i <= number; i++) {
            let num = i;
            // jika angka kelipatan 3 menjadi Arka
            if (i % 3 === 0) {
                num = 'Arka';
            }
            // jika angka kelipatan 7 menjadi Arka
            if (i % 7 === 0) {
                num = 'Demy';
            }
            // jika angka kelipatan 3 dan 7 menganti menjadi Arkademy
            if ((i % 3 === 0 && i % 7 === 0)) {
                num = 'Arkademy';
            }
            // menyimpan data ke array
            temp.push(num);
        }
        // output
        console.log('number akhir ' + number);
        // menampilkan data array(penyimpantan data)
        console.log(temp)
    } else {
        console.error('Input harus angka!');
    }

}

arkademy(21);

// number akhir 21
//     [
//         1, 2, 'Arka',
//         4, 5, 'Arka',
//         'Demy', 8, 'Arka',
//         10, 11, 'Arka',
//         13, 'Demy', 'Arka',
//         16, 17, 'Arka',
//         19, 20, 'Arkademy'
//     ]

arkademy(22);

// number akhir 22
//     [
//         1, 2, 'Arka',
//         4, 5, 'Arka',
//         'Demy', 8, 'Arka',
//         10, 11, 'Arka',
//         13, 'Demy', 'Arka',
//         16, 17, 'Arka',
//         19, 20, 'Arkademy',
//         22
//     ]