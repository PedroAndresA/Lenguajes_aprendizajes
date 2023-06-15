let tarjeta = "daviplata";

switch (tarjeta){
    case "credito":
        document.write("tu tarjeta de credito es valida");
            break;
        case "debito":
            document.write("tu tarjeta es de debito es valida");
                break;
    default : 
    document.write("tu tarjeta de ",tarjeta," no esv valida");
}
document.write("<br></br>");

let contador = 10;

while (contador > 0 ) {
    document.write(contador,". estoy en javascript y sere el mejor","<br>");
    contador = contador -1 ; 
}
document.write("<br></br>");

document.write("mayor a menor");
document.write("<br></br>");

let animales = ['perro','jirafa','cocodrilo','morsa'];

for (let indice = animales.length -1 ; indice > 0; indice--){
    document.write("animal",indice,animales[indice],"<br> </br>");
    
}

document.write("menor a mayor");
document.write("<br></br>");

for (let i = 0; i < animales.length ; i++){
    document.write("animal",i,animales[i],"<br> </br>");
}


document.write("<br></br>");

let number=5;
for (x=0; x <= number; x++){
    document.write("el numero es :",x,"<br>");
}


document.write("<br></br>");

let tabla = (prompt("ingrsa la tabla de multiplicar"));
let res;8

for(m=1;m <= 10 ; m++){
    res=m*tabla;
    document.write(tabla," X ", m , "=" , res ,"\n","<br>"); 
}