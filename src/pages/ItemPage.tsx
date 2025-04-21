import { useParams, useNavigate } from "react-router-dom";
import { useMemes } from "../context/MemeContext";
import MemeCardDetails from "../components/MemeCardDetails";
import {Button} from "@heroui/react";

const ItemPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const { memes } = useMemes();
    const meme = memes.find((m) => m.id.toString() === id);
    if (!memes || !id || !meme) return <p className="p-4">Meme not found</p>;

    const currentIndex = memes.findIndex((m) => m.id.toString() === id);
    const prevMeme = memes[currentIndex - 1];
    const nextMeme = memes[currentIndex + 1];

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="my-4 flex justify-between">
                <Button color={'primary'} variant={'ghost'} isDisabled={!prevMeme} onPress={() => prevMeme && navigate(`/list/item/${prevMeme.id}`)}>Prev</Button>
                <Button color={'primary'} variant={'ghost'} onPress={() => navigate("/list")}>Back to List</Button>
                <Button color={'primary'} variant={'ghost'} isDisabled={!nextMeme} onPress={() => nextMeme && navigate(`/list/item/${nextMeme.id}`)}>Next</Button>
            </div>

            <MemeCardDetails meme={meme} />
        </div>
    );
};

export default ItemPage;
