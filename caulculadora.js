// var global
var global = 0
var op = '';

//function de digitar o numero
function digitar(x){
    digi = document.getElementById('resultado').innerText;
    if(digi == 0){
        digi=''
    }
    digit = digi + x ;
    document.getElementById('resultado').innerText = digit;

}
function reset(){
    document.getElementById('resultado').innerText = 0;
}
function ope(operador){
    x =parseInt(document.getElementById('resultado').innerText);
    document.getElementById('resultado').innerText = 0;
    if(operador == '+'){
        global = global + x;
        op = '+'
    }
    else if(operador == '='){
        if(op == '+'){
            global = global + x;
        }
        else if(op == '-'){
            global = global - x;
        }
        else if(op == '*'){
            global = global * x;
        }
        else if(op == '/'){
            global = global / x;
        }
        document.getElementById('resultado').innerText = global;
        global = 0;
        op = '';
    }
    else if(operador == '-'){
        global = x - global;
        op = '-'
    }
    else if(operador == '*'){
        global = x * global;
        op = '*'
    }
    else if(operador == '/'){
        global =global / x;
        op='/';
    }
}


