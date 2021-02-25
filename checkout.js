
// button checkout kalo diklik ngapaen aja
// IDE UNTUK PERHITUNGAN DAN SPLIT SPLIT NAON LAH CONVERT
// 1. button checkout di klik event nya click
// 2. setiap event akan menjalankan beberapa fungsi berikut
//  2.a fungsi split untuk nyplit dan convert harga original jadi number 
//  2.b fungsi calucalte untuk menghitung harga yang telah di split dg value dr form
//  2.c fungsi join untuk menjoin hasil dari calculate dan covert jadi rupiah

// kita punya variabel berapakalidiklik akan menjalankan berapakali function rentetan dipanggil

const buttonCheckout = document.querySelector('#btn-checkout')
buttonCheckout.addEventListener('click',checkout);

function checkout() {
    event.preventDefault();
    const formValue = +document.querySelector('#form-value').value
    let total = 0
    // kalo berbicara dengan data
    // udah dapet priceArrayData
    for (let i = 0; i < priceArrayData.length; i++) {
        const masihRupiah = priceArrayData[i];
        const split = splitRupiah(masihRupiah);
        const calculated = calculate(split,formValue);

        total += calculated        
    }
    const joined = joinRupiah(total)
    
    renderModal(joined)

}

// function helper split
function splitRupiah(string) {
    let result = '';
    for (let i = 3; i < string.length; i++) {
        if(string[i] !== '.') result += string[i]
    }
    return +result
}

function joinRupiah(number) {
    let result = ''
    let numberStr = number.toString();
    let count = 0;
    for (var i = numberStr.length - 1; i >= 0; i--) {
        if (count === 3) {
            result = '.' + result
            count = 0
        }
        result = numberStr[i] + result
        count++
    }
    return `Rp ${result}`
}

function calculate(number,formValue) {
    if(formValue === 0) {
        return number;
    }
    return number * formValue
}

function renderModal(joined) {
    const modalConstructor = document.querySelector(".modal-constructor")
    
    modalConstructor.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Checkout Pembayaran</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Total pembelian anda sebesar <span class='total-harga'>${joined}</span> kapan mau bayar ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Ngutang dulu</button>
        </div>
      </div>
    </div>
  </div> `


}