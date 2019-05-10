const app = require('./src/config/custon-express');

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
});

