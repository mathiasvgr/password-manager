import { DecryptedLoginCreate } from "@api/LoginsApi";
import { DecryptedLogin } from "@api/models/LoginsModel";
import { Icon } from "@components/common/Icon";
import { Logo } from "@components/common/Logo";
import { Theme } from "@emotion/react";
import { Box, Button, Divider, TextField } from "@mui/material";
import { FC, useState } from "react";
import { EditableContent } from "./EditableContent";
import { Header } from "./Header";
import { FooterActions } from "./FooterActions";

let EMPTY_LOGIN : DecryptedLoginCreate = {
    password: "",
    name: "",
    emails: "",
    website: "",
}

interface LoginDrawerContentProps {
    currentDecryptedLogin ?: DecryptedLogin
}

const LoginDrawerContent : FC<LoginDrawerContentProps> = ({currentDecryptedLogin}) => {

    const [newDecryptedLogin, setNewDecryptedLogin] = useState<DecryptedLogin | DecryptedLoginCreate>(currentDecryptedLogin || EMPTY_LOGIN);

    const contentStyle = {
        width: "max(35vw, 500px)",
        backgroundColor: (theme : Theme) => theme.palette.secondary.main,
        height: "100vh",
        overflow: "auto",
        display: "grid", 
        gridTemplateRows: "2fr 7fr 1fr",       
    }

    return (
        <Box sx={contentStyle}>
            <Header name={newDecryptedLogin.name} logo={newDecryptedLogin.logo}  />
            <EditableContent decryptedLogin={newDecryptedLogin} setDecryptedLogin={setNewDecryptedLogin} />  
            <FooterActions oldDecryptedLogin={currentDecryptedLogin} newDecryptedLogin={newDecryptedLogin} />
        </Box>
    )
}

export
{
    LoginDrawerContent
}