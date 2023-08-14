import React, {useState} from 'react'
import { NoteModalWrap } from '../../styles/Notes/NoteModal.styled';
import { AiOutlineDelete } from 'react-icons/ai'
import { Container } from '../../styles/Container.styled';
import { doc, updateDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, database } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'



interface Note {
    title:  string ;
    description: string;
    id: string;
}

interface NoteModalProps {
    note: Note;
    onClose: () => void;
    onDelete?: (noteId: string) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({note, onClose}) => {
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedDesc, setEditedDesc] = useState(note.description);
    const [user] = useAuthState(auth);

    const docRef = doc(database, `notes/${user?.uid}/mynotes/${note.id}`);

    const handleSave = () => {
        if (editedTitle !== '' && editedTitle !== ''){
            updateDoc(docRef,  {
                title: editedTitle,
                description: editedDesc,
                timestamp: serverTimestamp(),
            })
        } 
        onClose();
    };


    return (
        <NoteModalWrap>
           
            <div id='wrapper'>
            <div className="top-bar">
            <h2>Edit note 📝</h2>
            {/* <AiOutlineDelete/> */}
            </div>
            <div id='inputs'>
            <input type="text" value={editedTitle} placeholder='edit note title...' onChange={(e) => setEditedTitle(e.target.value)} />
            <textarea value={editedDesc} onChange={(e) => setEditedDesc(e.target.value)}/>
            <div id='btn'>
            <button onClick={handleSave} id='save'>Save</button>
            <button onClick={onClose} id='close'>Cancel</button>
            </div>
            </div>
            </div>
       
        </NoteModalWrap>
    )
}

export default NoteModal;