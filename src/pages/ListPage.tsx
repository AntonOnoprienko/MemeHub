import MemeItemComponent from "../components/MemeItemComponent";
import {useMemes} from "../context/MemeContext";


const ListPage = () => {
    const { memes } = useMemes();
    return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memes.map(meme => (
                <MemeItemComponent key={meme.id} {...meme} />
            ))}
        </div>
    );
};

export default ListPage;