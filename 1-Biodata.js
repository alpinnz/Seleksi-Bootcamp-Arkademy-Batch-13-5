// Buatlah sebuah method / function yang menerima dua parameter yakni String(untuk nama) dan angka(untuk umur) lalu me -
//     return biodata asli Anda(harus asli / sebenar - benarnya!), dengan ketentuan sebagai berikut:
//         name(String, diambil dari parameter pertama)
// age(Number, diambil dari parameter ke dua)
// address(String)
// hobbies(Array)
// is_married(Boolean)
// list_school(Array of Object) with key name, year_in, year_out, and major(
//     if any,
//     if no set“ null”)
// skills(Array of Obj) with key skill_name and level(beginner, advanced, expert)
// interest_in_coding(Boolean)

const Biodata = (name, age) => {
    return {
        name: name,
        age: age,
        address: 'Jl. Raya Losawi No 15 RT 03 RW 08 Kec.Singosari Kab.Malang 65153 ',
        hobbies: [
            'Playing Basket Ball',
            'Playing Dota 2',
            'Coding'
        ],
        is_married: false,
        list_school: [{
                name: 'SDN Ampeldento 2',
                year_in: 2004,
                year_out: 2010,
                major: null
            },
            {
                name: 'Paket B PKBM Kartini',
                year_in: 2011,
                year_out: 2014,
                major: null
            },
            {
                name: 'Paket C PKBM Kartini',
                year_in: 2014,
                year_out: 2017,
                major: null
            },
            {
                name: 'INSTITUT TEKNLOGI DAN BISNIS ASIA Malang',
                year_in: 2017,
                year_out: 0,
                major: 'Teknik Informatika'
            }
        ],
        skills: [{
                skill_name: 'Web Developer Full Stack',
                level: 'beginner'
            },
            {
                skill_name: 'Data Science',
                level: 'beginner'
            }
        ],
        interest_in_coding: true
    }
}

const getMyBiodata = Biodata('Alfin NoviAji', 22)
console.log(getMyBiodata);