import express from 'express';
import path from 'path';

const host = '0.0.0.0';
const porta = 3000;

let listaEmpresas = [];


const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(process.cwd(), 'publico')));

function cadastroEmpresas(requisicao, resposta){
    const cnpj = requisicao.body.cnpj;
    const razaosocial = requisicao.body.razaosocial;
    const nomefantasia = requisicao.body.nomefantasia;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const estado = requisicao.body.estado;
    const cep = requisicao.body.cep;
    const email = requisicao.body.email;
    const telefone = requisicao.body.telefone;

    if(cnpj && razaosocial && nomefantasia && endereco && cidade && estado && cep && email && telefone){
            listaEmpresas.push({
            cnpj: cnpj,
            razaosocial: razaosocial,
            nomefantasia: nomefantasia,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            cep: cep,
            email: emai,
            telefone: telefone,
        });
        resposta.redirect('/listaEmpresas');
    }
    else{
        resposta.write(`
    <!DOCTYPE html>
    <html lang="en">
        
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cadastro de Pacientes</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        
        <body>
            <link rel="stylesheet" href="estilo.css">
            <div class="container m-2">
                <legend>Cadastro de Empresas</legend>
                <form method="POST" action='/cadastroEmpresas'>
                    <div class="boder form-row">
                        <div class="col-md-4 mb-3">
                            <label for="cnpj">CNPJ</label>
                            <input type="text" class="form-control" id="cnpj" name="cnpj" value= "${cnpj}"placeholder="CNPJ" required>`);
        if(cnpj == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o CNPJ!
                        < /div>
            `);
        }
        resposta.write(` 
                        </div>
                        <div class="col-md-4 mb-3">
                             <label for="razaosocial">Razão social</label>
                             <input type="text" class="form-control" id="razaosocial" name="razaosocial" value="${razaosocial}" placeholder="Razão social"
                              required>`);
        if(razaosocial == "")
        {
            resposta.write(` 
                        <div class="alert alert-danger" role="alert">
                             Informe o nome da Razão Social da empresa!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                         <div class="col-md-4 mb-3">
                           <label for="nomefantasia">Nome fantasia</label>
                            <input type="text" class="form-control" id="nomefantasia" name="nomefantasia" value="${nomefantasia}" placeholder="Nome fantasia"
                            required>`);
        if(nomefantasia == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o nome fantasia da empresa!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="endereco">Endereço</label>
                            <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}" placeholder="Endereço"
                            required>`);
        if(endereco == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o endereco!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                         <div class="form-row">
                         <div class="col-md-6 mb-3">
                            <label for="cidade">Cidade</label>
                            <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}" placeholder="Cidade" required>`);
         if(cidade == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe a cidade!
                        < /div>`);
        }
        resposta.write(`
                        </div>
            	        <div class="col-md-3 mb-3">
                            <label for="estado">Estado</label>
                            <select class="form-control" id="estado" name="estado"  required>
                            <option value="${estado}">Selecione o estado</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AM">AM</option>
                            <option value="AP">AP</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MG">MG</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="RS">RS</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                            </select>`);
        if(!estado)
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Selcione o estado!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cep">CEP</label>
                            <input type="text" class="form-control" id="cep" name="cep" value="${cep}" placeholder="CEP" required>`);
        if(cep == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o CEP!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="email" name="email" value="${email}" placeholder="Email"
                            required>`);
        if(email == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o Email!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                        <div class="col-md-2 mb-3">
                            <label for="telefone">Telefone</label>
                            <input type="text" class="form-control" id="telefone" name="telefone" value="${telefone} "placeholder="Telefone" maxlength="12"
                            required>`);
        if(telefone == "")
        {
            resposta.write(`
                        <div class="alert alert-danger" role="alert">
                            Informe o telefone!
                        < /div>`);
        }
        resposta.write(`
                        </div>
                            <button class="btn btn-primary" type="submit">Finalizar Cadastro</button>
                            <a class="btn btn-secondary" href="/">Voltar</a>
                </form>
            </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    </html>`);
            resposta.end();
    }
}

app.post('/cadastroEmpresas', cadastroEmpresas);

app.get('/listaEmpresas', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Empresas</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>CNPJ</th>');
    resp.write('<th>Razão social</th>');
    resp.write('<th>Nome fantasia</th>');
    resp.write('<th>Endereço</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>CEP</th>');
    resp.write('<th>Email</th>');
    resp.write('<th>Telefone</th>');
    resp.write('</tr>');
    for (let i=0; i<listaEmpresas.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listaEmpresas[i].cnpj}`);
        resp.write(`<td>${listaEmpresas[i].razaosocial}`);
        resp.write(`<td>${listaEmpresas[i].nomefantasia}`);
        resp.write(`<td>${listaEmpresas[i].endereco}`);
        resp.write(`<td>${listaEmpresas[i].cidade}`);
        resp.write(`<td>${listaEmpresas[i].estado}`);
        resp.write(`<td>${listaEmpresas[i].cep}`);
        resp.write(`<td>${listaEmpresas[i].email}`);
        resp.write(`<td>${listaEmpresas[i].telefone}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>')
    resp.write('</html>');
    resp.end();
});

app.listen(porta,host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})