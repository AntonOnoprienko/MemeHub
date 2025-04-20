import {Card, CardHeader, CardBody, Image, CardFooter} from "@heroui/react";
import * as React from 'react';
import {IMeme} from "../types";
import {useNavigate} from "react-router-dom";
import {LikeButton} from "./ui/LikeButton";
import {AnchorLink} from "./ui/AnchorLink";


const MemeItemComponent:React.FC<IMeme> = ({ id, title, imageUrl }) => {
    const navigate = useNavigate();
    return (

        <Card className="py-4">
            <div onClick={()=>{navigate(`/list/item/${id}`)}} className='cursor-pointer'>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large truncate w-full text-center" title={title}>{title}</h4>
            </CardHeader>
            <CardBody className="overflow-hidden py-2 my-2 flex justify-center items-center h-60">
                <Image
                    alt={`Meme: ${title}`}
                    className="w-full h-full object-cover rounded-md"
                    src={imageUrl}
                />
            </CardBody>
            </div>
            <CardFooter className="flex justify-between w-full mt-2" onClick={(e) => e.stopPropagation()}>
                <small>
                    <AnchorLink url={imageUrl}>Open Image</AnchorLink>
                </small>
                    <LikeButton memeId={id}  />
            </CardFooter>
        </Card>
    );
};

export default MemeItemComponent;



