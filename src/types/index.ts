export interface IMeme {
    readonly id: number;
    title: string;
    imageUrl: string;
    likes: number;
    isLiked?: boolean;
}