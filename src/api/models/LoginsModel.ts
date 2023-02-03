
interface EncryptedLogins {
    id : number,  
    name : string,
    emails : string,
    website : string,
    timestamp : number,
    logo ?: string,
}

interface DecryptedLogins extends EncryptedLogins {
    password : string,
    categories ?: string,
    username ?: string,
    Oauth ?: string,
}

export {
    type EncryptedLogins,
    type DecryptedLogins,
}