let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let c = Number(prompt("Nhập c: "));

let denta = b * b - 4 * a * c;
var x1 = 0;
var x2 = 0;

if(denta > 0)
{
    x1 = (-b - Math.sqrt(denta)) / 2 * a;
    x2 = (-b + Math.sqrt(denta)) / 2 * a;
    console.log("Phương trình có 2 nghiệm: ")
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
}
else if(denta = 0)
{
    x1 = -b / 2 * a;
    console.log("Phương trình có một nghiệm: ");
    console.log(`x1 = x2 = ${x1}`);
}
else
{
    console.log("Phương trình vô nghiệm!");
}