function erroHandler(status) {
    if (status === '404')
        console.log('Ops! Não encontrei o endpoint da URL!!');
    else if (status === '400')
        console.log('Ops! Você inseriu alguma informação errada! Corriga os campos e tente novamente.');
    else if (status === '500')
        console.log('Ops! Erro no servidor.');
    else 
        console.log('Não foi possivel realizar a requisição!');
};