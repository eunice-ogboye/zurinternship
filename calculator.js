
function add(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var answer = document.getElementById('ans');
   
    var add = Number(num1) + Number(num2);
    answer.innerHTML = add
}

function subtract(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var answer = document.getElementById('ans');
    
    var add = Number(num1) - Number(num2);
    answer.innerHTML = add
}

function divide(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var answer = document.getElementById('ans');
   
    var add = Number(num1) / Number(num2);
    answer.innerHTML = add
}

function multiply(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var answer = document.getElementById('ans');

    var add = Number(num1) * Number(num2);
    answer.innerHTML = add
}