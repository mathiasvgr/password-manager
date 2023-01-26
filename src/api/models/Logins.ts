
interface EncryptedLogins {
    name : string,
    emails : string,
    website : string,
    timestamp : string,
    logo ?: string,

}

interface DecryptedLogins {
    name : string,
    emails : string,
    website : string,
    timestamp : string,
    password : string,
    
    logo ?: string,
    categories ?: string,
    username ?: string,
    Oauth ?: string,
}

export {
    type EncryptedLogins,
    type DecryptedLogins,
}