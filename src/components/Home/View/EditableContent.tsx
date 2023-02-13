import { Box } from "@mui/material"
import { EditableText } from "./EditableText"
import { DecryptedLogin, DecryptedLoginCreate } from "@api/models/LoginsModel";

interface EditableContentProps {
    decryptedLogin : DecryptedLogin | DecryptedLoginCreate,
    setDecryptedLogin : (newDecryptedLogin : DecryptedLogin | DecryptedLoginCreate) => void,
}

const EditableContent = ({decryptedLogin, setDecryptedLogin}: EditableContentProps) => {

    const {name, password, username, emails, website, categories, Oauth, logo} = decryptedLogin;

    function getDecryptedLoginSetter<T extends keyof DecryptedLogin>(key : T)  {
        return (
            (value : DecryptedLogin[T]) => setDecryptedLogin({...decryptedLogin, [key] : value})
        )
    }

    const container = {
        overflow: "auto",
        mt: 2
    }

    return(
        <Box sx={container}>
            <EditableText canCopy label={"Password"} text={password} onTextChange={getDecryptedLoginSetter("password")} placeholder={"Password"}/>
            <EditableText canCopy label={"Username"} text={username || ""} onTextChange={getDecryptedLoginSetter("username")} placeholder={"Username"}/>
            <EditableText canCopy label={"Emails"} text={emails} onTextChange={getDecryptedLoginSetter("emails")} placeholder={"Emails"}/>
            <EditableText label={"Website"} text={website} onTextChange={getDecryptedLoginSetter("website")} placeholder={"Website"}/>
            <EditableText label={"Categories"} text={categories || ""} onTextChange={getDecryptedLoginSetter("categories")} placeholder={"Categories"}/>
            <EditableText label={"name"} text={name || ""} onTextChange={getDecryptedLoginSetter("name")} placeholder={"Name"}/>
            <EditableText label={"Oauth"} text={Oauth || ""} onTextChange={getDecryptedLoginSetter("Oauth")} placeholder={"Oauth"}/>
        </Box>
    )
}

export {
    EditableContent
}