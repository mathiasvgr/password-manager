
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

type EncryptedLoginCreate = Omit<EncryptedLogin, 'id' | 'timestamp'>;
type DecryptedLoginCreate = Omit<DecryptedLogin, 'id' | 'timestamp'>;

export {
    type EncryptedLogin,
    type DecryptedLogin,
    type EncryptedLoginCreate,
    type DecryptedLoginCreate
}