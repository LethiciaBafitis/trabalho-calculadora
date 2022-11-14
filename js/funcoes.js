function opbasicas(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;

    resultado = eval(parseInt(num1) + operador + parseInt(num2));

    document.getElementById("resultado").innerHTML = resultado;
}
function oparea(){
    b = document.getElementById("base-alt").value;
    h = document.getElementById("base-alt").value;

    resultado = eval((parseInt(b) * parseInt(h)) / 2);
    document.getElementById("resultado").innerHTML = resultado;
   
}




function opraiz(){
    num = document.getElementById("raiz").value;

    resultado = Math.sqrt(parseInt(num),);

    document.getElementById("resultado").innerHTML = resultado;
}



function opbhaskara(){
    a = document.getElementById("coe-a").value
    b = document.getElementById("coe-b").value
    c = document.getElementById("coe-c").value

    delta = Math.pow(b, 2) - 4 * a * c;
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if(delta < 0){
        resultado = ("Não possui raízes!");
    }
 
    else{
        resultado = "S = {" + x1 + ", " + x2 + "}";
    }

    document.getElementById("resultado").innerHTML = resultado
}





function potenciação(){

    base = document.getElementById("base").value;
    expoente = document.getElementById("expoente").value;

    resultado = Math.pow(parseInt(base), parseInt(expoente));

    document.getElementById("resultado").innerHTML = resultado;
}