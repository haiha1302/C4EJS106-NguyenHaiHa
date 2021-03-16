// Creata a random number
console.log('Số ngẫu nhiên trong khoảng 0 đến 1');
for(i = 0; i < 1; i++) {
    console.log(Math.random());
}

// Pick a random value from array
console.log('Số ngẫu nhiên từ 1 đến 10');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = Math.floor(Math.random() * arr.length);
console.log(arr[result]);

// Design a question answering application
/*
    Web bán đồng hồ, điện thoại
    Function:
        - Search sản phẩm
        - Thanh menu: Trang chủ, Đồng hồ, Điện thoại, Dịch vụ, Giới thiệu, Liên hệ, Thanh toán, Giỏ hàng
        - Hiện danh mục sản phẩm: Các loại đồng hồ, các loại điện thoại
            + Sản phẩm mới
            + Sản phẩm bán chạy
            + Phụ kiện
        - Quy đổi tiền tệ
        - Giỏ hàng
        - Thanh toán
    
*/