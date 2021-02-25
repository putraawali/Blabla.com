let products = [
    {img: "img/1.jpg", name: "Cardigan pink", harga: "Rp 100.000"},
    {img: "img/2.png", name: "Kemeja Strip merah", harga: "Rp 150.000"},
    {img: "img/1.jfif", name: "Bomber Hitam Panda", harga: "Rp 120.000"},
    {img: "img/3.jfif", name: "Sweater Coklat Biru", harga: "Rp 200.000"},
    {img: "img/4.jpg", name: "Sneakers Hitam", harga: "Rp 400.000"},
    {img: "img/5.jpg", name: "Sweater Abu NY", harga: "Rp 300.000"},
    {img: "img/6.jfif", name: "Cardigan Merah Wanita", harga: "Rp 200.000"},
    {img: "img/7.jpg", name: "Jaket Anak", harga: "Rp 50.000"},
]

// akses produk
let buttonSearch = document.getElementById("btn-search")
buttonSearch.addEventListener("click", search)

function search () {
    event.preventDefault()
    let input = document.getElementById("input").value
    let output = []
    for (let i = 0; i < products.length; i++) {
        let tmp = ""
        products[i].name += " "
        for (let j = 0; j < products[i].name.length; j++) {
            if (products[i].name[j] === " ") {
                if (input.toLocaleLowerCase() === tmp.toLocaleLowerCase()) {
                    output.push(products[i])
                }
                tmp = ""
            } else {
                tmp += products[i].name[j]
            }
        }
    }
    if (input.length !== 0) {
        render(output)
    } else {
        alert ('Please input your word!')
    }
}

function render (list) {
    let listProduct = document.getElementById("listProduct")
    listProduct.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        // buat element productnya
        let product = document.createElement("div")
        product.className = "product"
        product.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${list[i].img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${list[i].name}</h5>
            <p class="card-text">${list[i].harga}</p>
            <a href="#" class="btn btn-primary">add to cart</a>
          </div>`
        // masukin productnya kedalam product list di html
        listProduct.append(product)
    }
}
render(products)