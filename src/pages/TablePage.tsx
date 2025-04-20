import {TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Button, useDisclosure} from "@heroui/react";
import {Table} from "@heroui/react";
import {IMeme} from '../types'
import {getKeyValue} from "@heroui/react";
import * as React from 'react';
import ModalComponent from "../components/EditModalComponent";
import {useState} from "react";
import { useMemes } from "../context/MemeContext";

const TablePage: React.FC = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { memes, setMemes } = useMemes();

    const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);

    const handleEditClick = (meme: IMeme) => {
        setSelectedMeme(meme);
        onOpen();
    };
    return (
        <>
            <Table

                isHeaderSticky={false}
                hideHeader={false}
                isMultiSelectable={false}
                isSelectable={false}
                layout={'auto'}
                isStriped={true}
                aria-label="Memes Table"
                color={'primary'}
                fullWidth={false}
                isCompact={false}
                radius={'lg'}
                shadow={'sm'}
                className={'my-4'}
            >
                <TableHeader>
                    <TableColumn key="id" >ID</TableColumn>
                    <TableColumn key="title" >Title</TableColumn>
                    <TableColumn key="imageUrl" className="hidden sm:table-cell">Image URL</TableColumn>
                    <TableColumn key="likes">Likes</TableColumn>
                    <TableColumn key="actions" >Actions</TableColumn>
                </TableHeader>
                <TableBody<IMeme>
                    items={memes}
                    loadingContent={<Spinner label="Loading..."/>}
                >
                    {(item: IMeme): React.ReactNode => (
                        <TableRow>
                            {(columnKey): React.ReactNode => {
                                if (columnKey === "title") {
                                    return (
                                        <TableCell  title={item.title}>
                                            {item.title}
                                        </TableCell>
                                    );
                                }
                                if (columnKey === "actions") {
                                    return (
                                        <TableCell>
                                            <Button color={'primary'} variant="ghost" onPress={() => handleEditClick(item)}>Edit</Button>
                                        </TableCell>
                                    );
                                }
                                if (columnKey === "imageUrl") {
                                    return (
                                        <TableCell   className="hidden sm:table-cell truncate" title={item.imageUrl}>
                                            {item.imageUrl}
                                        </TableCell>
                                    );
                                }

                                return (
                                    <TableCell>
                                        {getKeyValue(item, columnKey as keyof IMeme)}
                                    </TableCell>
                                );
                            }}
                        </TableRow>
                    )}
                </TableBody>

            </Table>
            {selectedMeme &&
                <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} meme={selectedMeme} setMemes={setMemes}/>}
        </>
    );
}

export default TablePage;