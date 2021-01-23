/*
tạo menu đồ ăn 
    - nhập tên món ăn 
    - nhập vào giá món ăn
    - in ra console menu

    cơm: 10000
    Mỳ: 5000
    sữa: 5000
*/
// for (let i = 0; i < 3; i++)
// {
//     let nhapmon = prompt("Nhập món ăn");
//     let nhapgia = prompt("Nhập giá");
//     console.log(`${nhapmon}: ${nhapgia}`);
// }

// let nhapmon_com = prompt("Nhập món ăn");
// let nhapgia_com = prompt("Nhập giá cơm");
// let nhapmon_my = prompt("Nhập món mỳ:");
// let nhapgia_my = prompt("Nhập giá mỳ");
// let nhapmon_sua = prompt("Nhập món sữa:");
// let nhapgia_sua = prompt("Nhập giá sữa");
// console.log(`${nhapmon_com}: ${nhapgia_com}`);
// console.log(`${nhapmon_my}: ${nhapgia_my}`);
// console.log(`${nhapmon_sua}: ${nhapgia_sua}`);

//In dãy từ 0 đến 100
// console.log("Dãy 0 đến 10")
// for(let i = 0; i <= 10; i++)
// {
//     console.log(i);
// }

// //In ra dãy từ 100 đến 0
// console.log("Dãy 10 đến 0")
// for(let a = 10; a >= 0; a--)
// {
//     console.log(a);
// }

// //In dãy số chẵn từ 0 đến 50
// console.log("Dãy chẵn 0 đến 50")
// for(let b = 0; b <= 50; b+=2)
// {
//     console.log(b);
// }

//In dãy m đến n (do ng dùng nhập)
// let m = prompt("Nhập m: ");
// let n = prompt("Nhập n: ");
// for(let i = m; i <= n; i++)
// {
//     console.log(i);
// }

// while (m <= n){
//     console.log(m);
//     m++;
// }

//In dãy từ 3 đến n các số chia hết cho 3

//let n = prompt("Nhập n: ");
// for(let i = 3; i <= n; i+=3)
// {
//     console.log(i);
// }

//In ra các số chia hết cho 3 từ m đến n
// let m = Number(prompt("Nhập m: "));
// let n = Number(prompt("Nhập n: "));
// for(let i = m; i <= n; i++)
// {
//     if(i % 3 == 0)
//     {
//         console.log("Chia het cho 3");
//     }
//     else if (i % 5 == 0)
//     {
//         console.log("Chia het cho 5");
//     }
//     else
//     {
//         console.log("Failsed");
//     }
// }

// let  x = 3;
// if(x < 3)
// {
//     console.log("Lùm xùm");
// }
// else if (x == 3)
// {
//     console.log("Laccac");
// }
// else
// {
//     console.log("Hiiii");
// }

//Yêu cầu người dùng nhập tuổi, in ra xme người dùng đã đủ tuổi lấy vợ chưa
//Nếu tuối < 10 -> trẻ con
//Nếu tuối < 20 -> chưa đủ tuổi
//Nếu tuổi < 60 -> okee
//Nếu tuổi > 60 -> già quá
while(true)
{
    let age = Number(prompt("Nhập tuổi của bạn: "));
    if(age == 0)
    {
        break;
    }
    else if (age < 10)
    {
        console.log("Trẻ con");
    }
    else if(age < 20)
    {
        console.log("Chưa đủ tuổi");
    }
    else if(age < 60)
    {
        console.log("Okee");
    }
    else
    {
        console.log("Già quá");
    }
}