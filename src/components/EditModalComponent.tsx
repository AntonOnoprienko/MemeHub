import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button, Input
} from "@heroui/react";
import * as React from "react";
import {IMeme} from "../types";
import {useEffect, useState} from "react";
import {useIsMobile} from "../hooks/useIsMobile";

interface Props {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    meme: IMeme;
    setMemes: React.Dispatch<React.SetStateAction<IMeme[]>>;
}

const  EditModalComponent:React.FC<Props> = ({isOpen, onOpenChange, meme, setMemes}) => {

    const [titleValue, setTitleValue] = useState<string>('');
    const [imageUrlValue, setImageUrlValue] = useState<string>('');
    const [likesValue, setLikesValue] = useState<number>(0);
    const isMobile = useIsMobile();
    const titleErrors:string[] = [];
    const urlErrors:string[] = [];
    const likesErrors:string[] = [];


    const handleSave = () => {
        if (titleErrors.length === 0 && urlErrors.length === 0 && likesErrors.length === 0) {
            const finalLikes = (likesValue || likesValue === 0) ? likesValue : Math.floor(Math.random() * 100);

            setMemes((prevMemes) =>
                prevMemes.map((m) =>
                    m.id === meme.id ? { ...m, title:titleValue, imageUrl:imageUrlValue, likes: finalLikes } : m
                )
            );

            onOpenChange(false);
        }

        return null;
    };

    const trimmedTitle = titleValue.trim();

    if (!trimmedTitle) {
        titleErrors.push('Title is required.');
    } else if (trimmedTitle.length < 3 || trimmedTitle.length > 100) {
        titleErrors.push('Title must be between 3 and 100 characters long.');
    }
    if (likesValue < 0 || likesValue > 99) {
        likesErrors.push('Enter number of likes (0–99)');
    }

    if (!imageUrlValue || !/^https?:\/\/.*\.(jpg)$/i.test(imageUrlValue)) {
        urlErrors.push('Image URL must be a valid URL ending in .jpg.')
    }
    useEffect(() => {
        if (isOpen) {
            const {title,imageUrl,likes} = meme;
            setTitleValue(title);
            setImageUrlValue(imageUrl);
            setLikesValue(likes);
        }
    }, [isOpen, meme]);

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={!isMobile}>
                <ModalContent className="px-3 sm:px-6 py-4 max-w-full sm:max-w-md mx-4 sm:mx-auto" >
                    {(onClose) => (
                        <>
                            <ModalHeader>Edit Meme</ModalHeader>
                            <ModalBody className="flex flex-col gap-4">
                                <Input

                                    errorMessage={() => (
                                        <ul>
                                            {titleErrors.map((error, i) => (
                                                <li key={i}>{error}</li>
                                            ))}
                                        </ul>
                                    )}
                                    isInvalid={titleErrors.length > 0}
                                    label="Title"
                                    labelPlacement="outside"
                                    name="title"
                                    placeholder="Enter your title"
                                    value={titleValue}
                                    onValueChange={setTitleValue}
                                    classNames={isMobile ? { input: "text-[16px]" } : undefined}
                                />
                                <Input
                                    errorMessage={() => (
                                        <ul>
                                            {urlErrors.map((error, i) => (
                                                <li key={i}>{error}</li>
                                            ))}
                                        </ul>
                                    )}

                                    isInvalid={urlErrors.length > 0}
                                    label="Image Url"
                                    labelPlacement="outside"
                                    name="imageUrl"
                                    placeholder="Enter image Url"
                                    value={imageUrlValue}
                                    onValueChange={setImageUrlValue}
                                    classNames={isMobile ? { input: "text-[16px]" } : undefined}
                                />
                                <Input
                                    errorMessage={() => (
                                        <ul>
                                            {likesErrors.map((error, i) => (
                                                <li key={i}>{error}</li>
                                            ))}
                                        </ul>
                                    )}
                                    isInvalid={likesErrors.length > 0}
                                    type={"number"}
                                    label="Likes"
                                    labelPlacement="outside"
                                    name="likes"
                                    placeholder="Enter number of likes"
                                    value={likesValue.toString()}
                                    onValueChange={(e) => setLikesValue(Number(e))}
                                    classNames={isMobile ? { input: "text-[16px]" } : undefined}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" variant="ghost" onPress={handleSave}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditModalComponent;