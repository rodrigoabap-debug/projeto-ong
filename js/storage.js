export function salvarDados(dados) {
    localStorage.setItem('cadastroONG', JSON.stringify(dados));
}

export function recuperarDados() {
    const dadosSalvos = localStorage.getItem('cadastroONG');

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}