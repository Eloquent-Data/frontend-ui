export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
    type: string;
    username: string;
    role: string;
    id: number;
}

export interface SignUp {
    country: string;
    firstName: string;
    gender: string;
    lastName: string;
    password: string;
    userCategory: string;
    userEmail: string;
}
