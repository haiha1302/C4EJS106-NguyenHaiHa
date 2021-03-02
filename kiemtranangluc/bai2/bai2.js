console.log("Các số dương có 1 chữ số")
for (i = 1; i < 10; i++)
{
    console.log(i);
}

console.log("Các số có 2 chữ số chia hết cho 7")
for (a = 10; a < 100; a++)
{
    if (a % 7 == 0)
    {
        console.log(a);
    }
}

console.log("Các số từ a đến b chia hết cho n")
let b = Number(prompt("Nhập a: "));
let c = Number(prompt("Nhập b: "));
let d = Number(prompt("Nhập n: "));
for (e = b; e <= c; e++)
{
    if(e % d == 0)
    {
        console.log(e);
    }
}

console.log("Tổng các số từ m đến n")
let f = Number(prompt("Nhập m: "));
let g = Number(prompt("Nhập n: "));
var tong = 0;
for (h = f; h <= g; h++)
{
    tong = tong + h;
}
console.log(tong);

console.log("Giá trị của m!")
let k = Number(prompt("Nhập m: "));
var giaithua = 1;
for(l = 1; l <= k; l++)
{
    giaithua = giaithua * l;
}
console.log(giaithua);

// console.log("Các số nguyên tố từ a đến b")
// let soA = Number(prompt("Nhập a; "));
// let soB = Number(prompt("Nhập b: "));
// for (m = soA; m <= soB; m++)
// {

// }