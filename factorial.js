/*- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/

//factorial con while
function factorial (numero){
    let resultado = 1;
    let i = 1;

    while (i <= numero){
        resultado *= i;

        ++i;
    }
    return resultado;
}

console.log(factorial(10));


function factorial_dos (n){
    let result = 1
    for(let i = 2;i<=n; i++){
        result = result *i
    }
    return result;
}

console.log (factorial(10));