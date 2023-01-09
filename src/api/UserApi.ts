import { UserModel } from "@api/models/UserModel"
import { UserSaltModel } from "./models/UserSaltModel";
import { ApiError, ApiResponse } from "./ApiResponse";

function fakeApiCall<T>(data : T | null, fail : boolean = false, message : string = "OK") : Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
        if (fail == true ) {
            reject({ message : message} as ApiError);
        }
        
        resolve({
            data : data,
            message : message
        } as ApiResponse<T>)
    });
}

// Fake call while waiting for rust data
class UserApi {

    public static isThereUserInDb(): Promise<ApiResponse<Boolean>> {
        return fakeApiCall<Boolean>(true);
    }

    static fetchedUser : boolean = false;
    public static getUser() : Promise<ApiResponse<UserModel>> {
        if (this.fetchedUser)
            return fakeApiCall<UserModel>({
                password : "password",
                id : 'toto'
            });
        
        this.fetchedUser = true;
        return fakeApiCall<UserModel>(
            {
                password : "password",
                id : 'toto'
            },
            true,
            "error 404"
        )
    }

    public static login(password: string) : Promise<ApiResponse<UserModel>> {
        return fakeApiCall<UserModel>({
            password : password,
            id : "id"
        })
    }

    public static register(password: string, salt : UserSaltModel) : Promise<ApiResponse<UserModel>> {
        return fakeApiCall<UserModel>({
            password : password,
            id : "id"
        })
    }
    
    public static logout() : Promise<ApiResponse<null>> {
        return fakeApiCall<null>(null)
    }

    public static deleteAllLoggedUserInfos() : Promise<ApiResponse<null>> {
        return fakeApiCall<null>(null)
    }

}

export {
    UserApi
}