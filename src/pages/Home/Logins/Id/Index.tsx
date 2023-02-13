import { ApiResponse } from "@api/ApiResponse";
import { LoginsApi } from "@api/LoginsApi";
import { DecryptedLogin } from "@api/models/LoginsModel";
import { LoginDrawerContent } from "@components/Home/View/LoginDrawerContent";
import { PMDrawer } from "@components/common/PMDrawer";
import { useLoaderData } from "react-router-dom";

async function IdViewLoader ({params } : any ) {
    const id  = params.id as string;
    let decryptedLogin : DecryptedLogin | null = null;

    try {
        console.log("id =", id);

        const apiResponse : ApiResponse<DecryptedLogin | null> = await LoginsApi.decryptLogin(Number(id));
        console.log(apiResponse);
        decryptedLogin  =  apiResponse.data;
    } catch (error) {
        decryptedLogin = null;
    }
  
    return decryptedLogin;

}

const isDecryptedLogin = (login : any) : login is DecryptedLogin => {

    if (login === null || login === undefined) {
        return false;
    }

    return  login.hasOwnProperty("id") && 
            login.hasOwnProperty("name") && 
            login.hasOwnProperty("username") && 
            login.hasOwnProperty("password") && 
            login.hasOwnProperty("website") && 
            login.hasOwnProperty("categories");
}

const IdView = () => {
    const decryptedLogin : any = useLoaderData();
    
    if (!isDecryptedLogin(decryptedLogin)) {
        return null;
    }

    return (
        <PMDrawer>
            <LoginDrawerContent currentDecryptedLogin={decryptedLogin} />
        </PMDrawer>
    )
}

export {
    IdView,
    IdViewLoader
}