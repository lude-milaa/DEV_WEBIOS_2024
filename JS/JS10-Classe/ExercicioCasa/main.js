// exercício casa
class conta_bancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numero_conta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numero_conta = numero_conta;
        this.saldo = 0; 
    }

    conta_poupanca(valor, meses) {
        const taxa = 1.5; 
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100);
        }
        this.saldo += valor;
        return this.saldo;
    }

    conta_corrente(valor, meses) {
        const taxa = 3.6; 
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100); 
        }
        this.saldo += valor;
        return this.saldo;
    }

    conta_estudante(valor, meses) {
        const taxa = 1.2; 
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100);
        }
        this.saldo += valor;
        return this.saldo;
    }
}

// contas
const conta_poupanca = new conta_bancaria("Lude Mila", 20, 4500, "Feminino", "0102", "Poupança", "542600");
const conta_corrente = new conta_bancaria("Lude MIla", 20, 2300, "Feminino", "2024", "Corrente", "704624");
const conta_estudante = new conta_bancaria("Lude Mila", 20, 1500, "Feminino", "3332", "Estudante", "134245");

// taxas
conta_poupanca.conta_poupanca(1000, 3);
conta_corrente.conta_corrente(1000, 3);
conta_estudante.conta_estudante(1000, 3);

// novos saldos
console.log("Conta Poupança:");
console.log(`Nome: ${conta_poupanca.nome}`);
console.log(`Idade: ${conta_poupanca.idade}`);
console.log(`Salário: ${conta_poupanca.salario}`);
console.log(`Sexo: ${conta_poupanca.sexo}`);
console.log(`Agência: ${conta_poupanca.agencia}`);
console.log(`Conta: ${conta_poupanca.conta}`);
console.log(`Número da Conta: ${conta_poupanca.numero_conta}`);
console.log(`Novo Saldo: ${conta_poupanca.saldo}`);

console.log("Conta Corrente:");
console.log(`Nome: ${conta_corrente.nome}`);
console.log(`Idade: ${conta_corrente.idade}`);
console.log(`Salário: ${conta_corrente.salario}`);
console.log(`Sexo: ${conta_corrente.sexo}`);
console.log(`Agência: ${conta_corrente.agencia}`);
console.log(`Conta: ${conta_corrente.conta}`);
console.log(`Número da Conta: ${conta_corrente.numero_conta}`);
console.log(`Novo Saldo: ${conta_corrente.saldo}`);

console.log("Conta Estudante:");
console.log(`Nome: ${conta_estudante.nome}`);
console.log(`Idade: ${conta_estudante.idade}`);
console.log(`Salário: ${conta_estudante.salario}`);
console.log(`Sexo: ${conta_estudante.sexo}`);
console.log(`Agência: ${conta_estudante.agencia}`);
console.log(`Conta: ${conta_estudante.conta}`);
console.log(`Número da Conta: ${conta_estudante.numero_conta}`);
console.log(`Novo Saldo: ${conta_estudante.saldo}`);