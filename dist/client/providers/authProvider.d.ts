declare const authProvider: {
    login: ({ login, password }: {
        login: any;
        password: any;
    }) => void;
    checkError: (error: any) => Promise<void>;
    checkAuth: (params: any) => Promise<void>;
    logout: () => Promise<void>;
    getIdentity: () => Promise<void>;
    getPermissions: () => Promise<void>;
};
export default authProvider;
