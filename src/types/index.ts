export interface IMeme {
    readonly id: number;
    title: string;
    imageUrl: string;
    likes: number;
    isLiked?: boolean;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
}