import {Card, CardHeader, CardBody, Image, CardFooter} from "@heroui/react";
import {LikeButton} from "./ui/LikeButton";
import {AnchorLink} from "./ui/AnchorLink";
import {IMeme} from "../types";
import * as React from "react";

interface MemeCardDetailsProps {
    meme: IMeme;
}

const MemeCardDetails: React.FC<MemeCardDetailsProps> = ({meme}) => {
    const {id, title, imageUrl } = meme;
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">{title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 my-2 flex justify-center items-center">
                <Image
                    alt={`Meme: ${title}`}
                    className="w-full h-full object-contain rounded-md"
                    src={imageUrl}
                />
            </CardBody>
            <CardFooter className="flex justify-between w-full mt-2">
                <small>
                    <AnchorLink url={imageUrl}>Open Image</AnchorLink>
                </small>
                <LikeButton memeId={id} />
            </CardFooter>
        </Card>
    );
};

export default MemeCardDetails;
