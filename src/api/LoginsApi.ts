import { ApiError, ApiResponse } from "./ApiResponse";
import { DecryptedLogins, EncryptedLogins } from "./models/LoginsModel";

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
class LoginsApi {

    private static mockData: EncryptedLogins[] = [
        {
            id: 1,
            name: 'John Doe',
            emails: 'john.doe@example.com',
            website: 'www.johndoe.com',
            timestamp: 1612348723,
            logo: 'https://www.johndoe.com/logo.png'
        },
        {
            id: 2,
            name: 'Jane Doe',
            emails: 'jane.doe@example.com',
            website: 'www.janedoe.com',
            timestamp: 1612348761,
        },
        {
            id: 3,
            name: 'Bob Smith',
            emails: 'bob.smith@example.com',
            website: 'www.bobsmith.com',
            timestamp: 1612348798,
            logo: 'https://www.bobsmith.com/logo.png'
        },
        {
            id: 4,
            name: 'Alice Johnson',
            emails: 'alice.johnson@example.com',
            website: 'www.alicejohnson.com',
            timestamp: 1612348835,
        },
        {
            id: 5,
            name: 'Charlie Brown',
            emails: 'charlie.brown@example.com',
            website: 'www.charliebrown.com',
            timestamp: 1612348872,
            logo: 'https://www.charliebrown.com/logo.png'
        },
        {
            id: 6,
            name: 'Eve Adams',
            emails: 'eve.adams@example.com',
            website: 'www.eveadams.com',
            timestamp: 1612348909,
        },
        {
            id: 7,
            name: 'Frank Wilson',
            emails: 'frank.wilson@example.com',
            website: 'www.frankwilson.com',
            timestamp: 1612348946,
            logo: 'https://www.frankwilson.com/logo.png'
        },
        {
            id: 8,
            name: 'Grace Lee',
            emails: 'grace.lee@example.com',
            website: 'www.gracelee.com',
            timestamp: 1612348983,
        },
        {
            id: 9,
            name: 'Henry Davis',
            emails: 'henry.davis@example.com',
            website: 'www.henrydavis.com',
            timestamp: 1612349020,
            logo: 'https://www.henrydavis.com/logo.png'
        },
        {
            id: 10,
            name: 'Isabelle Taylor',
            emails: 'isabelle.taylor@example.com',
            website: 'www.isabelletaylor.com',
            timestamp: 1612349057,
        },
    ];

    static getEncryptedLogins() : Promise<ApiResponse<EncryptedLogins[]>> {
        return fakeApiCall(LoginsApi.mockData);
    }

    static decryptLogin(id: number) : Promise<ApiResponse<DecryptedLogins | null>> {
        let data : EncryptedLogins | undefined = LoginsApi.mockData.find((login) => login.id == id);
        
        if (data == undefined) {
            return fakeApiCall(null, true, "Login not found");
        }

        return fakeApiCall({
            id: data.id,
            name: data.name,
            emails: data.emails,
            website: data.website,
            timestamp: data.timestamp,
            logo: data.logo,
            password: "password",
            categories: "categories",
            username: "username"
        } as DecryptedLogins);
    }

    static createLogin(login : EncryptedLogins) : Promise<ApiResponse<EncryptedLogins>> {
        return fakeApiCall(login);
    }

    static updateLogin(login : EncryptedLogins) : Promise<ApiResponse<EncryptedLogins>> {
        return fakeApiCall(login);
    }

    static deleteLogin(id : number) : Promise<ApiResponse<EncryptedLogins | null>> {
        const data : EncryptedLogins | undefined = LoginsApi.mockData.find((login) => login.id == id);

        if (data == undefined) {
            return fakeApiCall(null, true, "Login not found");
        }

        return fakeApiCall(data);
    }


}

export {
    LoginsApi
}