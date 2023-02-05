import { ApiError, ApiResponse } from "@api/ApiResponse";
import { UserApi } from "@api/UserApi";
import { UserModel } from "@api/models/UserModel";
import { useAuth } from "@hooks/useAuth";
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";

const LoginPropsLoader = async () => {
  let user = null;

  try {
    const apiResponse : ApiResponse<UserModel> = await UserApi.getUser();
    user = apiResponse.data;
  } catch (err : any) {
    user = null;
  }
  return { user }
}

function Login() {
  const {login} = useAuth();
  const navigate = useNavigate();
  const { user } : any = useLoaderData();

  if (user) {
    return <Navigate to="/home/logins" />;
  }

  const connectingUser = () => {
    try {
      login("User");
      navigate("/home/logins")
    } catch (err : any) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <button onClick={connectingUser}> Login</button>
    </div>
  );
}

export 
{
  LoginPropsLoader,
  Login
}
