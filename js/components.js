// Đổ data vào html
let product_items = document.getElementById("product_items");
function showProducts(image, name, price, sold, brand, place)
{
    product_items.insertAdjacentHTML('beforeEnd', 
    `       
        <div class="grid__column-2-4">
            <a class="product-item" href="#">
            <div class="product-item_img" style="background-image: url(${image})"></div>
            <h4 class="product-item_name">${name}</h4>
            <div class="product-item_price">${price}</div>
            <div class="product-item_action">
                <span class="product-item_like">
                    <i class="far fa-heart"></i>
                </span>
                <span class="product-item_sold">${sold} đã bán</span>
            </div>
            <div class="product-item_origin">
                <span class="product-item_brand">${brand}</span>
                <span class="product-item_place">${place}</span>
            </div>
            </a>
        </div>
    `
    )
}
// Mặc định show tất cả sản phẩm
product_items.innerHTML = '';
for(let i = 0; i < products.length; i++)
{
    showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
}
// Show tất cả sản phẩm khi click vào
let showAll = document.getElementById('all');
showAll.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
    }
})
// Show thiết bị điện tử
let showTBDT = document.getElementById('thietBiDienTu');
showTBDT.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Thiết bị điện tử")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show sách
let showSach = document.getElementById('sach');
showSach.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Sách")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show Đồ tiêu dùng
let showDoTieuDung = document.getElementById('doTieuDung');
showDoTieuDung.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Đồ tiêu dùng")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})

// Show Thời trang
let showThoiTrang = document.getElementById('thoiTrang');
showThoiTrang.addEventListener('click', () => {
    product_items.innerHTML = '';
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].category == "Thời trang")
        {
            showProducts(products[i].image, products[i].name, products[i].price, products[i].sold, products[i].brand, products[i].place);
        }
    }
})
