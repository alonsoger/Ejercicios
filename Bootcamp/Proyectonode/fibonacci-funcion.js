let numeros = [];
// 1,1,2,3,5,8,13,21,34...
function fibonacci(num) {
    let first = 0
    let second = 1
    if(num <= 0){
        numeros.push(1)
    } else if(num == 1){
        numeros.push(1)
    } else {
        numeros.push(1)
        for(let i = 1; i < num; i++){
            let valor = first + second;
            numeros = [...numeros, valor];
            first = second
            second = valor;

        }
    }
}
fibonacci(6)
console.log(numeros)