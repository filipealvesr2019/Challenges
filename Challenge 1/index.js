function calcularIdade(dataNascimento) {
    const dataNascimentoFormatada = new Date(dataNascimento);
    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimentoFormatada.getFullYear();
    const meses = dataAtual.getMonth() - dataNascimentoFormatada.getMonth();

    if (meses < 0 || (meses === 0 && dataAtual.getDate() < dataNascimentoFormatada.getDate())) {
        idade--;
    }

    return idade;
}

// Exemplo de uso:
const dataNascimento = '1991-10-22'; // Formato: 'YYYY-MM-DD'
const idade = calcularIdade(dataNascimento);
console.log(`A idade é ${idade} anos.`);
