import React, {useState,useRef, useEffect} from 'react'
import { NoteModalWrap } from '../../styles/Notes/NoteModal.styled';
import { AiOutlineDelete } from 'react-icons/ai'
import { doc, updateDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, database } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {toast} from 'react-toastify'



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
    const titleRef = useRef<HTMLInputElement | null >(null);

    const docRef = doc(database, `notes/${user?.uid}/mynotes/${note.id}`);

    const handleSave = () => {
        if (editedTitle !== '' && editedDesc !== ''){
            updateDoc(docRef,  {
                title: editedTitle,
                description: editedDesc,
                timestamp: serverTimestamp(),
            })
        } 
        onClose();
        toast.success("Note edited successfully!")
    };

    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: [] }],
          [{ font: [] }],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ color: ["red", "#785412"] }],
          [{ background: ["red", "#785412"] }]
        ]
      };

      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
      ];

      useEffect(() => {
       if (titleRef.current) {
        titleRef.current.focus()
       }
      }, [])


    return (
        <NoteModalWrap>
           
            <div id='wrapper'>
            <div className="top-bar">
            <h2>Edit note </h2>
            {/* <AiOutlineDelete/> */}
            </div>
            <div id='inputs'>
            <input type="text" value={editedTitle} placeholder='edit note title...' onChange={(e) => setEditedTitle(e.target.value)} ref={titleRef}/>
            <ReactQuill value={editedDesc} onChange={(html) => setEditedDesc(html)} theme='snow' modules={modules} formats={formats}/>
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