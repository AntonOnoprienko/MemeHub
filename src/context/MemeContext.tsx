import * as React from 'react';
import { createContext, useContext } from "react";
import { IMeme } from "../types";
import { useMemesStorage } from "../hooks/useMemesStorage";
import { memes as initialMemes } from '../data/';

type MemeContextType = {
    memes: IMeme[];
    setMemes: React.Dispatch<React.SetStateAction<IMeme[]>>;
    updateLikes: (id: number, newLikes: number, isLiked: boolean) => void;
};

const MemeContext = createContext<MemeContextType | null>(null);

export const MemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [memes, setMemes] = useMemesStorage(initialMemes);

    const updateLikes = (id: number, newLikes: number, isLiked: boolean) => {
        setMemes((prevMemes) =>
            prevMemes.map((meme) =>
                meme.id === id ? { ...meme, likes: newLikes, isLiked } : meme
            )
        );
    };

    return (
        <MemeContext.Provider value={{ memes, setMemes, updateLikes }}>
            {children}
        </MemeContext.Provider>
    );
};

export const useMemes = () => {
    const context = useContext(MemeContext);
    if (!context) {
        throw new Error("useMemes must be used within a MemeProvider");
    }
    return context;
};
