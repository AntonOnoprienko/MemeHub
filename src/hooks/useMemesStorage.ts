import { useEffect, useState } from "react";
import { IMeme } from "../types";

export const useMemesStorage = (initialMemes:IMeme[]) => {
    const [memes, setMemes] = useState<IMeme[]>(() => {
        const storedMemes = localStorage.getItem('memes');
        return storedMemes ? JSON.parse(storedMemes) : initialMemes;
    });
    useEffect(() => {
        localStorage.setItem('memes', JSON.stringify(memes));
    },[memes])

    return [memes, setMemes] as const
}