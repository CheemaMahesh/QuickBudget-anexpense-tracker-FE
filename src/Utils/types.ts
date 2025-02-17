export interface SignUpForm {
    name?: string;
    email?: string;
    password?: string;
}
export interface ResType {
data: {
    status?: number | string;
    success?: boolean;
    message?: string;
    token?: string;
}
}

export interface TokenInterface {
    token: string
}