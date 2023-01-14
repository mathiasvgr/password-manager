import { FC } from "react";

interface IconProps {
    name : string;
    alt : string;
    option ?: any;
}

const Icon : FC<IconProps> = ({name, alt, option}) => {
    return (
        <img src={"/icons/" + name} alt={alt} {...option} />
    )
}

export {
    Icon
}