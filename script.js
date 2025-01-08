let inputArea = document.getElementById('result');
let buttonArea = document.querySelectorAll('.input');

let string = "";
let arr = Array.from(buttonArea);

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputArea.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            inputArea.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inputArea.value = string;
        }
        else{
            string += e.target.innerHTML;
            inputArea.value = string;
        }
    })
})
