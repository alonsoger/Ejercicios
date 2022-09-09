/** FUNCION DE SUMA */

//Con Bucle for
function sumTo(n){
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
//Con recursividad
function sumTo(n){
    if (n == 1){
        return 1;
    }else {
        return n + sumTo(n-1)
    }
}
//Con formula matematica
function sumTo(n) {
    return n * (n+1)/2;
}
///////////////////////////////////////////////////////////////////////////////////////////////

/** FUNCION FACTORIAL */
function factorial(n){
    if(n == 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
/** FUNCION DE FIBONACCI */
function fibo(n){
    if(n <= 1){
        return n;
    }else {
        return fibo(n-1) + fibo(n-2);  
    }
}