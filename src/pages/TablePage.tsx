import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, useDisclosure } from "@heroui/react";
import { IMeme } from '../types';
import ModalComponent from "../components/EditModalComponent";
import { useState } from "react";
import { useMemes } from "../context/MemeContext";
import ReduxTest from "../components/ReduxPage";


const TablePage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { memes, setMemes } = useMemes();
    const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);

    const handleEditClick = (meme: IMeme) => {
        setSelectedMeme(meme);
        onOpen();
    };

    return (
        <>
            <h2 className="text-center text-bold">Memes information table</h2>
            <Table layout={'auto'} isHeaderSticky={false} hideHeader={false}
                  fullWidth={true} isStriped={true} isCompact={false}


                   aria-label="Memes Table"
                   color={'primary'}
                   radius={'lg'}
                   shadow={'sm'}
                   className={'my-4'} >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Title</TableColumn>
                    <TableColumn className="hidden sm:table-cell">URL</TableColumn>
                    <TableColumn>Likes</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody items={memes}>
                    {(meme:IMeme):any => (
                        <TableRow key={meme.id}>
                            <TableCell>{meme.id}</TableCell>
                            <TableCell>{meme.title}</TableCell>
                            <TableCell className="hidden sm:table-cell truncate">{meme.imageUrl}</TableCell>
                            <TableCell>{meme.likes}</TableCell>
                            <TableCell>
                                <Button
                                    color="primary"
                                    variant="ghost"
                                    onPress={() => handleEditClick(meme)}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {selectedMeme &&
                <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} meme={selectedMeme} setMemes={setMemes} />
            }
        </>
    );
};

export default TablePage;
