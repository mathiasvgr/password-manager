import { Icon } from "@components/common/Icon";
import { Box, TextField, Button, Theme } from "@mui/material";
import { FC } from "react";

interface EditableTextProps {
    label : string,
    text : string,
    onTextChange : (text : string) => void,
    placeholder : string,
    canCopy ?: boolean,
}

const EditableText : FC<EditableTextProps> = ({label, text, onTextChange, placeholder, canCopy}) => {

    const onChange = (event : any) => {
        onTextChange(event.target.value);
    }

    const containerStyles = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: 5,

        marginBottom: 2,
        marginTop: 2,
    }

    const labelStyles = {
        color: (theme : Theme) => theme.palette.primary.main,
        justifySelf: "end",
        alignSelf: "center",
    }

    const textFieldStyles = {
        justifySelf: "start",
        alignSelf: "center",
    }

    const textFieldContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: 3
    }

    const onCopy = () => { 
        navigator.clipboard.writeText(text);
    }

    return (
        <Box sx={containerStyles}>
            <Box sx={labelStyles}>{label}</Box>

            <Box sx={textFieldContainerStyle}>
                <TextField  
                    sx={textFieldStyles}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder={placeholder}
                    value={text}
                    onChange={onChange}
                />
                {
                    canCopy
                    &&
                    <Button sx={{height: "100%"}} onClick={onCopy}>
                        <Icon option={{width: "30px"}} name={"copy.svg"} alt={"copy"}  />
                    </Button>
                }

            </Box>

        </Box>
    )

}

export {
    EditableText
}