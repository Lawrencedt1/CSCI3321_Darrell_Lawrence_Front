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
            if (d.innerHTML.endsWith('+')){ // if +,-,*, or /, then do nothing
                break;     
            }
            else{
                d.innerHTML += newValue;
                break;
            }
        case '=':
            //combine
            break;
        }
    }