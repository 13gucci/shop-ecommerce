type TRole = 'User' | 'Admin';

export type TUser = {
    _id: string;
    roles: TRole[];
    email: string;
    name: string;
    date_of_birth: null;
    address: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
};
