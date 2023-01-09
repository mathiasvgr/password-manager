import { ApiResponse } from "@api/ApiResponse";
import { UserApi } from "@api/UserApi";
import { UserModel } from "@api/models/UserModel";
import { Navigate, Outlet, useLoaderData, useLocation } from "react-router-dom";

const AuthGuardsPropsLoader = async () => {
    let user : UserModel | null = null;
    
    try {
        const apiResponse : ApiResponse<UserModel> = await UserApi.getUser();
        user  =  apiResponse.data
    } catch (error) {
        user = null;
    }

    return { user };
}

const AuthGuards = () => {
    const { user } :  any = useLoaderData();   

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}


export 
{
    AuthGuardsPropsLoader,
    AuthGuards
}