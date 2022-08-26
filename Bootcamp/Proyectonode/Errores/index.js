//Logger 
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
//Impresiones
logger.info("Imprime info")
logger.debug("Imprime debug")
logger.warn("Imprime warn")
logger.error("Imprime error")

//Funcion
const miError = valor => {
  if (typeof valor === 'string') {
    return "Ingresaste un string";
  }
  throw new Error("Tenes que ingresar un 'String'")
}

const algo = "Algo2";

try {
  const letra = miError(1)
} catch (e) {
  logger.error("Error!")
}