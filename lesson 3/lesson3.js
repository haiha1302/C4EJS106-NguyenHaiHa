let movies = ["Spiderman", "Batman", "Hitman", "Pokemon"]
let ages = [12, 13, 12, 5, 8, 20]
console.log(movies);

// movies.unshift("Upin & Ipin");
// console.log(movies);

//Read
let firstMovie = movies[0];
console.log(firstMovie);
let len = movies.length;
console.log(movies[len - 1]);

//Dùng for để in ra tất cả phần tử trong mảng
// for(i = 0; i <= len - 1; i++)
// {
//     console.log(movies[i]);
// }
for (let movie in movies)
{
    console.log(movie);
}

// Tạo ra 1 danh sách các bạn trong lớp
// Hỏi người dùng có muốn thêm thành viên mới ko
// Nếu có: Thêm thành viên mới vào cuối danh sách
// Nếu không: In ra danh sách lớp và thoát chương trình
// let arr = ["Ha__Lo", "Đạt cỏ", "Em Hiển"];
// while(true)
// {
//     let ans = prompt("Có thêm không ? (Y/N) ");
//     if(ans == "Y")
//     {
//         let newStudent = prompt("Tên của học sinh ? ");
//         arr.push(newStudent);
//     }
//     else
//     {
//         console.log(arr);
//         break;
//     }
// }

/*
    Tạo ra một danh sách các bạn trong lớp
    Hỏi người dùng muốn thao tác (C, R, U, D)
    Nếu người dùng chọn "C" => Hỏi thêm học sinh nào => Thêm vào danh sách
    Nếu người dùng chọn "R" => Hỏi muốn xem học sinh ở vị trí bao nhiêu 
                            => alert tên của học sinh ở vị trí đó
    Nếu chọn "U" => Hỏi xem muốn update học sinh ở vị trí bao nhiêu
                => Thay đổi học sinh ở vị trí tương ứng  
    Nếu chọn "D" => Hỏi xem muốn xóa học sinh ở vị trí bao nhiêu
                => Xóa học sinh ở vị trí tương ứng
    Nếu chọn "Q" => Thoát chương trình và in ra danh sách lớp
*/ 