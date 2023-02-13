import { DecryptedLogin, DecryptedLoginCreate } from "@api/models/LoginsModel"
import { PMButton } from "@components/common/Buttons";
import { Box, ButtonProps, Theme } from "@mui/material"
import { FC, useEffect, useState } from "react"

interface FooterActionsProps {
    oldDecryptedLogin ?: DecryptedLogin | DecryptedLoginCreate,
    newDecryptedLogin : DecryptedLogin | DecryptedLoginCreate,
}

type Mode = "edit" | "view" | "create";

function isDifferent(oldDecryptedLogin : DecryptedLogin | DecryptedLoginCreate | undefined, newDecryptedLogin : DecryptedLogin | DecryptedLoginCreate) {

    if (!oldDecryptedLogin)
        return true;

    return oldDecryptedLogin.password !== newDecryptedLogin.password ||
    oldDecryptedLogin.name !== newDecryptedLogin.name ||
    oldDecryptedLogin.emails !== newDecryptedLogin.emails ||
    oldDecryptedLogin.website !== newDecryptedLogin.website ||
    oldDecryptedLogin.categories !== newDecryptedLogin.categories ||
    oldDecryptedLogin.Oauth !== newDecryptedLogin.Oauth ||
    oldDecryptedLogin.logo !== newDecryptedLogin.logo;

}

function getMode( oldDecryptedLogin : DecryptedLogin | DecryptedLoginCreate | undefined, newDecryptedLogin : DecryptedLogin | DecryptedLoginCreate ) : Mode {
    
    if (!isDifferent(oldDecryptedLogin, newDecryptedLogin))
        return "view";
    
    if (!oldDecryptedLogin) {
        return "create"
    }
    return "edit";
}

interface DeleteButtonProps extends ButtonProps {
    decryptedLogin : DecryptedLogin | DecryptedLoginCreate
}

const DeleteButton : FC<DeleteButtonProps> = ({decryptedLogin, ...rest}) => {
    const deleteLogin = () => {
        console.log("delete login", decryptedLogin);
    }

    return (
        <PMButton.Primary {...rest} onClick={deleteLogin}>DELETE</PMButton.Primary>
    )

}

function getActions(mode : Mode, decryptedLogin : DecryptedLogin | DecryptedLoginCreate) : JSX.Element | null {
    
    switch (mode) {
        case "edit":
            return <PMButton.Primary>SAVE</PMButton.Primary>
        case "create":
            return <PMButton.Primary>CREATE</PMButton.Primary>
    }
}

const FooterActions : FC<FooterActionsProps> = ({oldDecryptedLogin, newDecryptedLogin}) => {
    const [mode, setMode] = useState<Mode>("view");

    useEffect(() => {
        setMode(getMode(oldDecryptedLogin, newDecryptedLogin));
    }, [oldDecryptedLogin, newDecryptedLogin])

    const containerStyle = {
        height : "100%",
        width : "100%",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        padding : (theme : Theme) => theme.spacing(1, 4)
    }

    const unchangedActionsStyle = {
        display : "flex",
        gap : 2
    }

    return (
        <Box sx={containerStyle}>
            <Box sx={unchangedActionsStyle}>
                <DeleteButton disabled={mode != "view"} decryptedLogin={oldDecryptedLogin!} />
                <PMButton.Primary>SHARE</PMButton.Primary>
            </Box>

            <Box sx={unchangedActionsStyle}>
                {mode !== "view" && <PMButton.Primary>Reset</PMButton.Primary>}
                {getActions(mode, newDecryptedLogin)}
            </Box>
        </Box>
    )
}

export {
    FooterActions
}