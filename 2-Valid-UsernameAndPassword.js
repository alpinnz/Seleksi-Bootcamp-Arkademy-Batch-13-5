// Pada sebuah form, terdapat 2 buah field yaitu: Username dan Password. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
// Disarankan menggunakan REGEX
// Format Username: antara 3-5 huruf dan harus huruf kecil semuanya, tidak boleh angka atau simbol
// Format Password: merupakan kombinasi dari 3 digit angka, simbol “-”, 3 digit angka lalu 4 huruf besar.
// Clue:
// Peserta hanya diminta membuat function validasi, tidak boleh membuat form/file HTML dan harus membuat contoh pemanggilan fungsi!
// Contoh:
// username(“tania”)
// 	return true
// username(“Eka”)
// 	return false
// password(“021-333BUDI”)
// 	return true
// password(“021*444DEA”)
// 	return false
// password(“987-654Oliv”)
// 	return false

const is_username_valid = (username) => {
    // pola huruf kecil semua
    let alfabet = /[a-z]/g;
    // pola number
    let number = /[0-9]/g;
    // pola simbol
    let simbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

    if (!(username.length < 3) && !(username.length > 5)) {
        // jika username sama dengan huruf dan TIDAK sama dengan number dan TIDAK sama dengan simbol
        if (username.match(alfabet) && !username.match(number) && !username.match(simbol)) {
            return true;
        }
    }
    return false;
}

// Format Password: merupakan kombinasi dari 3 digit angka, simbol “-”, 3 digit angka lalu 4 huruf besar.

const is_password_valid = (password) => {
    // pola angka
    let number = /[0-9]/g;
    // pola simbol
    let simbol = /[-]/g;
    // pola 3 angka sama
    let number3x = /([0-9])\1\1/g;
    // pola afabet
    let alfabet = /[A-Z]/g;

    if (password.length == 11) {
        // kenapa mulai dari 0,karena index dimulai dari angka nol
        // 0-2 valid angka
        if ((password[0] + password[1] + password[2]).match(number) &&
            // 3 valid simbol
            (password[3].match(simbol)) &&
            // 4-6 valid number3x sama
            ((password[4] + password[5] + password[6]).match(number3x)) &&
            // 7-10 valid huruf besar
            ((password[7] + password[8] + password[9] + password[10]).match(alfabet))) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}



// output username_valid
console.log('output username_valid')
console.log(is_username_valid('tania') ? 'benar' : 'salah') //benar
console.log(is_username_valid('eka') ? 'benar' : 'salah') //benar
console.log(is_username_valid('tani2') ? 'benar' : 'salah') //salah
console.log(is_username_valid('eka%') ? 'benar' : 'salah') //salah
// output password_valid
console.log('output password_valid')
console.log(is_password_valid('021-111ALFI') ? 'benar' : 'salah') //benar
console.log(is_password_valid('021-333BUDI') ? 'benar' : 'salah') //benar
console.log(is_password_valid('021*444DEA') ? 'benar' : 'salah') //salah
console.log(is_password_valid('987-654Oliv') ? 'benar' : 'salah') //salah