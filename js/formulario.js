import { salvarDados, recuperarDados } from './storage.js';

export function iniciarFormulario() {
    const formulario = document.querySelector('form');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        if (formulario.checkValidity()) {
            salvarDados(Object.fromEntries(new FormData(formulario)));

            Swal.fire({
                title: 'Sucesso!',
                text: 'Cadastro realizado com sucesso!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            alert('Preencha corretamente todos os campos obrigatórios.');
            formulario.reportValidity();
        }
    });

    const campoCpf = formulario.querySelector('#cpf');

campoCpf.addEventListener('input', function () {
    const mensagemAnterior = document.querySelector('#erro-cpf');

    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }

    if (!campoCpf.checkValidity()) {
        const mensagem = document.createElement('small');
        mensagem.id = 'erro-cpf';
        mensagem.textContent = 'Digite o CPF no formato 000.000.000-00';
        campoCpf.insertAdjacentElement('afterend', mensagem);
    }
});
    
    const camposFormulario = formulario.querySelectorAll('input');

    camposFormulario.forEach(function (campo) {
        campo.addEventListener('input', function () {
            if (campo.checkValidity()) {
                campo.style.border = '2px solid green';
            } else {
                campo.style.border = '2px solid red';
            }
        });
    });

    const dados = recuperarDados();

    if (dados) {
        Object.keys(dados).forEach(function (nome) {
            const campo = formulario.querySelector(`[name="${nome}"]`);

            if (campo) {
                campo.value = dados[nome];
            }
        });
    }
}