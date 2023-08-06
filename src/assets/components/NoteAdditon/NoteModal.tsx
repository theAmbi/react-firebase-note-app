import React, {useState} from 'react'
import { NoteModalWrap } from '@assets/styles/Notes/NoteModal.styled';

interface Note {
    id: string;
}

interface NoteModalProps {
    note: Note;
    onClose: () => void;
    onDelete: (noteId: string) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({note, onClose, onDelete}) => {
    const [editedNote, setEditedNote] = useState<Note>({...note});

    const handleEdit = () => {

    }

    const handleDelete = () => {
        onDelete(note.id);
    };

    return (
        <NoteModalWrap>
            
        </NoteModalWrap>
    )
}

export default NoteModal;