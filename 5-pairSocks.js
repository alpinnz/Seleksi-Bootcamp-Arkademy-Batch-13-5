// Alwi merupakan pegawai di toko pakaian.Ia diberikan tumpukan kaus kaki, lalu diminta untuk memasangkan kaus kaki tersebut berdasarkan warna yang sama untuk dijual.Biru dengan biru, hijau dengan hijau dan seterusnya.Diberikan parameter berupa array yang berisi deret angka, yang dimana angka tersebut merupakan simbol / representasi dari warna kaus kaki.Hitunglah berapa pasang kaus kaki berdasarkan parameter deret angka yang diberikan!
//     Contoh:
//     Input: pairSocks([5, 13, 7, 5, 9, 20, 9, 5, 14])
// Output: 2 pair

const pairSocks = (arr) => {
    let a = (arr.filter(i => arr.filter(inner => inner === i).length == 2).sort().length / 2)
    let b = (arr.filter(i => arr.filter(inner => inner === i).length == 4).sort().length / 4)
    let c = (arr.filter(i => arr.filter(inner => inner === i).length == 6).sort().length / 6)
    let d = (arr.filter(i => arr.filter(inner => inner === i).length == 8).sort().length / 8)

    console.log((a + b + c + d) + ' pair');
}



pairSocks([5, 1, 5, 9, 2, 2, 9, 5, 3, 7, 5, 9, 2, 9, 5, 1, 4, 2, 4, 5])
pairSocks([1, 1, 1, 2, 3, 1, 2, 1, 3, 7, 5, 9, 2, 9, 1, 5, 1, 2, 2, 4])
pairSocks([5, 1, 2, 3, 1, 3, 7, 5, 9, 2, 9, 5, 1, 4, 1, 4, 6, 7, 8, 2])