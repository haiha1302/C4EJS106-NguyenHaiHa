// let message = "Lum xum";

// let arrMessage = message.split(" ");
// // let arrMessage = Array(message);

// console.log(arrMessage);

// let danhSachNguoiYeuCu = prompt("NHAP DANH SACH NGUOI YEU CU: ");
// let nguoiCanTim = prompt("Nhap ten nguoi muon tim: ");

// let arrDSNYC = danhSachNguoiYeuCu.split(" ");

// let timThayKhong = arrDSNYC.indexOf(nguoiCanTim);
// // trả về -1 => không tìm thấy
// // trả về 1 => tìm thấy
// if(timThayKhong == -1)
// {
//     console.log("Ảo tưởng roài ");
// }
// else
// {
//     console.log("Nhớ nyc" + nguoiCanTim);
// }

// let canNang = Number(prompt("Nhập danh sách cân nặng: "));
// let arrCanNang = canNang.split(",");
// console.log(arrCanNang);
// let min = arrCanNang[0];

// for (i = 1; i < arrCanNang.length; i++)
// {   if(min > arrCanNang[i])
//     {
//         min = arrCanNang[i];
//     }
// }
// console.log(min);


// // Tìm số nguyên tố
// let num = [2, 10, 3, 11, 17, 22, 23];

// for(i = 0; i < num.length; i++)
// {
//     if(num[i] < 2)
//     {
//         continue;
//     }
//     let isNguyenTo = true; 
//     for (let j = 2; j < num[i]; j++)
//     {
//         if(num[i] % j == 0)
//         {
//             isNguyenTo = false;
//             break;
//         }   
//     }
//     if(isNguyenTo)
//     {
//         console.log(num[i]);
//     }
// }

