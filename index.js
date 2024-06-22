import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 1234567899);
const cliente2 = new Cliente("Alice", 987655465);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente (1002, cliente2);
contaCorrenteRicardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);