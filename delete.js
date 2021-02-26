/**
 * 1.kasih listener ke button delete
    2. select event.target.parentNode (dicoba utk select sampai constructor dari formnya) 
    3. kosongkan innerHtml dr no.3 (menghapus display dr UI, tp data belum)
    4. kurangi data total harga dengan harga yang di kolom delete -> panggil rentetan fungsi utk split join rupiah lg
 * 
 * 
 * 
 */


function deleteForm() {
    event.preventDefault();

    const formConstructor = event.target.parentNode;
    console.log(formConstructor.querySelector('#form-harga').value)
    console.log(formConstructor.querySelector('#form-nama-barang').value)
    formConstructor.innerHTML = ''

    console.log(arrOfObjData,'dari delete');
}
