// Buatlah sebuah fungsi yang hanya menerima parameter berupa string, yang akan memberikan output berupa singkatan dari parameter tersebut berdasarkan huruf kapital yang ada dari parameter tersebut,
// Contoh:
//     Input: abbreviation(“Negara Kesatuan Republik Indonesia”)
// Output: “NKRI”

// Input: abbreviation(“JAwa TIMur”)
// Output: “JATIM”

const abbreviation = (content) => {
    // valid huruf besar saja
    let pola = /[A-Z]+/g;
    // variable penyimpanan sementara
    let temp = ''

    // valid value type string atau tidak
    if (typeof (content) === 'string') {
        // perulangan menyeleksi perkarakter
        for (let i = 0; i < content.length; i++) {
            // jika karakter[i] memenuhi syarat karakter tersebut menambahkan ke value temp
            if (content[i].match(pola)) {
                temp += content[i];
            }
        }
        // output
        console.log('output')
        console.log('content : ' + content)
        console.log(temp)
    } else {
        console.error('erorr')
    }

}

abbreviation('Negara Kesatuan Republik Indonesia')

abbreviation('JAwa TIMur')

abbreviation('Alfin NoviAji')