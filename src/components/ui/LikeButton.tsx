import {Button} from "@heroui/react";
import * as React from "react";
import {FC} from "react";
import {useMemes} from "../../context/MemeContext";

interface HeartIconProps {
    fill?: string;
    filled?: boolean;
    size?: number;
    height?: number;
    width?: number;

    [key: string]: any;
}

const HeartIcon: FC<HeartIconProps> = ({
                fill = "currentColor",
                filled,
                size,
                height,
                width,
                ...props
                }) => {
    return (
        <svg
            fill={filled ? fill : "none"}
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

interface LikeButtonProps {
    id: number;
}


export const LikeButton: FC<LikeButtonProps> = ({id}) => {
    const {memes, updateLikes} = useMemes();
    if (!memes) return null;

    const {isLiked, likes} = memes.find((m) => m.id === id);
    const isLikedCurrent: boolean = isLiked ?? false;
    const likesCurrent: number = likes ?? 0;

    const handleLikeClick = () => {
        const newLikes = isLikedCurrent ? likesCurrent - 1 : likesCurrent + 1;
        const newIsLiked = !isLikedCurrent;
        updateLikes(id, newLikes, newIsLiked);
    };

    return (
        <p className="flex items-center gap-2 text-base font-medium self-end">
            <Button
                isIconOnly
                aria-label="Like"
                color="danger"
                variant="light"
                className="hover:scale-110 transition-transform duration-200"
                onPress={handleLikeClick}
            >
                <HeartIcon fill={isLikedCurrent ? "red" : "gray"} filled={isLikedCurrent} height={24} width={24}
                           size={24}/>
            </Button>
            <span>{likes}</span>
        </p>
    );
};
