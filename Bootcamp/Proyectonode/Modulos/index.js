import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

const sum = suma(1, 2);
const sum2 = suma(4, 5);
const multiplicacion = multiplica(sum, sum2);

console.log(sum);
console.log(sum2);
console.log(multiplicacion);
console.log(chalk.green(multiplicacion));



