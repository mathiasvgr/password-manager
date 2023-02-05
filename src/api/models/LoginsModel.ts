
interface EncryptedLogin {
    id : number,  
    name : string,
    emails : string,
    website : string,
    timestamp : number,
    logo ?: string,
}

interface DecryptedLogin extends EncryptedLogin {
    password : string,
    categories ?: string,
    username ?: string,
    Oauth ?: string,
}

export {
    type EncryptedLogin,
    type DecryptedLogin,
}