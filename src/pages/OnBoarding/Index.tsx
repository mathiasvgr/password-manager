import { ApiResponse } from "@api/ApiResponse";
import { UserApi } from "@api/UserApi";
import { useAuth } from "@hooks/useAuth";
import { Navigate, useLoaderData } from "react-router-dom";

const OnBoardingPropsLoader = async () => {
  let isThereUserInDB : Boolean = false;

  try {
    const apiResponse : ApiResponse<Boolean> = await UserApi.isThereUserInDb();
    isThereUserInDB =  apiResponse.data;
  } catch (_) {
    isThereUserInDB = false; 
  }
  return { isThereUserInDB };
}

function OnBoarding() {
  const { isThereUserInDB } : any = useLoaderData();

  if (isThereUserInDB == true) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <div>
      <button> Onboarding</button>
    </div>
  );
}

export 
{
  OnBoardingPropsLoader,
  OnBoarding
}
