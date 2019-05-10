const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body>
                </html>
            `
        );
    });
    
    app.get('/livros', (req, resp) => {

        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(resultados => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: resultados
                    }
                ))
                .catch(erro => console.log(erro));
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'))
    });

    app.post('/livros', (req, resp) => {
        const livroDao = new LivroDao(db);
        console.log(req.body);
        livroDao.adicionar(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

};