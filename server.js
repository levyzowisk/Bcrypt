import bcrypt from "bcrypt";
// Criptografia: Pode ser revertida(Descriptografar).
// Hash: Não pode reverter, é uma via de mão unica.
// - A senha informada pelo usuário é transformada em hash utilizando a mesma técnica do cadastro e comparada com a senha que já está armazenada no Banco de Dados

const saltRound = 2;

const password = 'levy';

bcrypt.genSalt(saltRound, (err, salt) => {
    if (err) {
        console.log(err);
    }
    const hashgerado = bcrypt.hashSync(password, salt, (err, hash) => {
        if(err) {
            console.log(err);
        }
        console.log(hash);
    })

    bcrypt.compare(password,hashgerado,(err,result) => {
        if(err) {
            console.log(err);
        }
        
        console.log(result);

    })
})


