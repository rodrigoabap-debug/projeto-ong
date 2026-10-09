import { iniciarFormulario } from './formulario.js';
iniciarFormulario();
const botaoMenu = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

botaoMenu.addEventListener('click', function () {
    const menuAberto = menuLinks.classList.toggle('ativo');

    botaoMenu.setAttribute(
        'aria-expanded',
        String(menuAberto)
    );

    botaoMenu.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    );
});
const botaoToast = document.querySelector('#mostrar-toast');
const toast = document.querySelector('#toast');

if (botaoToast && toast) {
    botaoToast.addEventListener('click', function () {
        toast.classList.add('ativo');

        setTimeout(function () {
            toast.classList.remove('ativo');
        }, 3000);
    });
}

const conteudoPrincipal = document.querySelector('#conteudo-principal');
const linksRotas = document.querySelectorAll('[data-rota]');
const conteudoInicial = conteudoPrincipal ? conteudoPrincipal.innerHTML : '';

const projetos = [
    { nome: 'Doações', descricao: 'Arrecadação de alimentos e itens para a comunidade.' },
    { nome: 'Voluntariado', descricao: 'Participação de voluntários nas ações sociais da ONG.' }
];
function navegarPara(rota) {
    console.log('Rota selecionada:', rota);
    if (rota === 'inicio') {
    conteudoPrincipal.innerHTML = conteudoInicial;

}
    if (rota === 'projetos') {
const listaProjetos = projetos.map(function (projeto) {
    return `
        <article>
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `;
}).join(''); 
        conteudoPrincipal.innerHTML = `
        <section>
            <h2>Projetos da ONG</h2>
            <p>Conheça os projetos sociais desenvolvidos pela nossa ONG.</p>

            ${listaProjetos}
        </section>
    `;
}
}
linksRotas.forEach(function (link) {
    link.addEventListener('click', function (e) {
        if (!conteudoPrincipal) {
            return;
        }

        e.preventDefault();

        const rota = this.getAttribute('data-rota');
        navegarPara(rota);
    });
});