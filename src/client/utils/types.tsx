export interface IUser {
    id: number;
    name: string;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IBook {
    id: number;
    title: string;
    price: string;
    author: string;
    categoryid: number;
    created_at?: Date;
}