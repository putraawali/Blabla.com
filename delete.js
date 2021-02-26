/**
 * 1.kasih listener ke button delete
    2. select event.target.parentNode (dicoba utk select sampai constructor dari formnya) 
    3. kosongkan innerHtml dr no.3 (menghapus display dr UI, tp data belum)
    4. kurangi data total harga dengan harga yang di kolom delete -> panggil rentetan fungsi utk split join rupiah lg
 * 
 *- bikin variabel penampung index yg di delete/splice
 * - loop arrOfObjData
 * - conditional: klo ketemu nama barang di 
 * 
 */


function deleteForm() {
    event.preventDefault();

    const formConstructor = event.target.parentNode;
    const formHarga = formConstructor.querySelector('#form-harga').value
    const formNamaBarang = formConstructor.querySelector('#form-nama-barang').value
    formConstructor.innerHTML = ''

    for (let i = 0; i < arrOfObjData.length; i++) {
        
        if (formNamaBarang === arrOfObjData[i].namaBarang) {
            
            arrOfObjData.splice(i, 1)
        }
    }

    console.log(arrOfObjData,'dari delete');
    console.log(formHarga,'dari delete');
    console.log(formNamaBarang,'dari delete');
}
