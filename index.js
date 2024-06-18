import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 100;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar( 500);
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);

contaCorrenteRicardo.sacar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);



console.log(cliente1,);
console.log(cliente2);

