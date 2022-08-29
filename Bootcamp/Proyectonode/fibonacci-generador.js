// Fibonacci generador
function* fibonacci() {
    yield 0;
    yield 1;
    let first = 0;
    let second = 1;
    while(true) {
        const valor = first + second;
        yield valor;

        first = second;
        second = valor;
    }
}
const fibo = fibonacci(6);

//Fibonacci funcion
// 0,1,1,2,3,5,8,13,21..

function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

}