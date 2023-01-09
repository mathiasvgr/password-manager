interface ApiResponse<T>{
    data: T;
    message : string;    
}

interface ApiError extends Error  {
}

export {
    type ApiResponse,
    type ApiError
}