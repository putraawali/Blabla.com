// algoritme
/**
 * 1. function ini ketrigger oleh tombol add to cart
 * 2. ketika tombol di klik, maka akan menjalankan proses :
 *  2.a menambahkan form ketika produk itu belum dipilih
 *  2.b menambahkan jumlah dan harga ketika produk itu sdh dipilih sblmnya (count > 1)
 * 3. buat kalkulasi untuk jumlah harga yang akan ditampilkan pada total harga
 * 
 * let products = [
    {img: "img/1.jpg", name: "Cardigan pink", harga: "Rp 100.000"},
    {img: "img/2.png", name: "Kemeja Strip merah", harga: "Rp 150.000"},
    {img: "img/1.jfif", name: "Bomber Hitam Panda", harga: "Rp 120.000"},
    {img: "img/3.jfif", name: "Sweater Coklat Biru", harga: "Rp 200.000"},
    {img: "img/4.jpg", name: "Sneakers Hitam", harga: "Rp 400.000"},
    {img: "img/5.jpg", name: "Sweater Abu NY", harga: "Rp 300.000"},
    {img: "img/6.jfif", name: "Cardigan Merah Wanita", harga: "Rp 200.000"},
    {img: "img/7.jpg", name: "Jaket Anak", harga: "Rp 50.000"},
]   Rp -> number -> dikali -> Rp
 */

 let berapaKaliDiKlik = 0;
//  untuk di function checkout (array harga doang)
 let priceArrayData = []
//  untuk di function delete (array of obj)
 let arrOfObjData = []

function addToCart() {
    event.preventDefault();
    const divParent = event.target.parentNode
    const cardTitle = divParent.querySelector('.card-title').textContent
    const cardText = divParent.querySelector('.card-text').textContent
    let currentObj = {}

    for (const obj of products) {
        if(obj.name === cardTitle) {
            currentObj = obj
        }
    }

    if(currentObj.counter === 1) {
        const toAppend = document.querySelector('#toAppend')
        let form = document.createElement("form")
        form.className = 'form-checkout'
        const inner = `
        <div class="form-row">
          <div class="col">
            <input type="text" id="form-nama-barang" class="form-control" placeholder="${cardTitle}" value="${cardTitle}" disabled>
          </div>
          <div class="col">
            <input type="number" id="form-value" class="form-control" placeholder='1' min="1">
          </div>
          <div class="col">
            <input type="text" id="form-harga" class="form-control" placeholder="${cardText}" value="${cardText}" disabled>
          </div>
          <a href="#" class="btn btn-danger" onclick="deleteForm()">Delete<a></a>
        </div>
      `
    
      form.innerHTML = inner
      toAppend.append(form)
      currentObj.counter ++
        // untuk import data ke checkout 
      priceArrayData.push(cardText)
       // untuk import data ke checkout 
       arrOfObjData.push({
           namaBarang: cardTitle,
           harga: cardText
       })
      console.log(priceArrayData,'dari addToCart');
      console.log(arrOfObjData,'dari add to Cart');
    }
}
// form => 1
// IDE UNTUK PERHITUNGAN DAN SPLIT SPLIT NAON LAH CONVERT
// 1. setiap ada inputan di form itu akan dilisten eventnya pke 'keyUp'
// 2. setiap event akan menjalankan beberapa fungsi berikut
//  2.a fungsi split untuk nyplit dan convert harga original jadi number 
//  2.b fungsi calucalte untuk menghitung harga yang telah di split dg value dr form
//  2.c fungsi join untuk menjoin hasil dari calculate dan covert jadi rupiah


