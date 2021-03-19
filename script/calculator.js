function updateDisplay(newValue){
    var d = document.getElementById('display');
    
    switch (newValue){
        case '':
            d.innerHTML = '';
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){ 
                break;     
            }
            else{
                d.innerHTML += newValue;
                break;
            }
        case '=':
            //if empty, do nothing
            if (d.innerHTML == ''){
                break;
            }
            //if starts with or endsWith an operator, then display "Err"
            else if(d.innerHTML.charAt(0) == ('+') || d.innerHTML.charAt(0) ==('-') || d.innerHTML.charAt(0) ==('*') || d.innerHTML.charAt(0) ==('/')){
                d.innerHTML = "Err";
            }
            else if (d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                d.innerHTML = "Err";
            }
            //else do some math
            else{
                x = eval(d.innerHTML);
                d.innerHTML = x;
            }
            break;
        }
    }