var inputNumber = document.getElementById('inputNumber')
var btn = document.getElementById('btn')

btn.addEventListener('click', randomNumber)

function randomNumber(num) {
    var randomNumber = Math.floor(Math.random() * 10) + 1
    if(inputNumber == randomNumber) {
        alert(`Chúc mừng bạn đã nhập đúng!!!`)
    }
    else {
        alert(`Ban da nhap sai, xin nhap lai`)
    }
    console.log(randomNumber);
}

