let a = prompt("Nhập vào tên của bạn: ");
let b = Number(prompt("Nhập điểm Toán của bạn: "));
let c = Number(prompt("Nhập điểm Văn của bạn: "));
let d = Number(prompt("Nhập điểm Anh của bạn: "));

console.log(`Điểm tổng kết của ${a} trong năm học vừa rồi: `);
console.log(`Toán: ${b}`);
console.log(`Văn: ${c}`);
console.log(`Anh: ${d}`);

let e = (b + c + d) / 3;
alert(`Điểm trung bình của bạn là: ${e}`);

if(e < 4)
{
    alert(`Kém`);
}
else if(e < 6)
{
    alert(`Trung bình`);
}
else if(e < 8)
{
    alert(`Khá`);
}
else
{
    alert(`Giỏi`);
}