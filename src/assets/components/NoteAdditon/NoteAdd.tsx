import React, { useCallback, useState, useEffect, useRef } from 'react'
import { NoteAddStyle } from '../../styles/Notes/NoteAddStyle'
import { auth, database } from '../../firebase/firebase.config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import cancel from '../../images/exit.svg'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NoteAddBtn } from '../../styles/NoteAddBtn.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
// const collectionRef = collection(database, "notes");

interface UserData {
    title: string;
    description?: string;
}

const NoteAdd: React.FC = ({ onClose, onNoteAdded }: any,) => {
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState<UserData>({ title: '' });
    const [notes, setNotes] = useState<any[]>([]);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const [editorHtml, setEditorHtml] = useState('');


    // for rich text
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



    const collectionRef = collection(database, `notes/${user?.uid}/mynotes`);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, title: event.target.value });
    };

    // const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setFormData({...formData, description: event.target.value});
    // }

    const handleDescChange = (html: string) => {
        setEditorHtml(html);
        setFormData({ ...formData, description: html });

    }

    const addNote = useCallback((): void => {
        if (formData.title !== "" && editorHtml !== "") {
            addDoc(collectionRef, {
                title: formData.title,
                description: editorHtml,
                timestamp: serverTimestamp(),
                userId: user?.uid,
                // Corrected to serverTimestamp
            });

            const newNote = { title: formData.title, description: formData.description };
            setNotes([...notes, newNote]);
            setFormData({ title: '', description: '' });
            setEditorHtml('');


            toast.success('Note added successfully!')
        } else {
            toast.error("Title & desc can't be empty");
        }


        // setTimeout(() => {
        //    onNoteAdded();
        // }, 2000)


    }, [formData.title, editorHtml, notes]);

    //   useEffect(() => {
    //     localStorage.setItem('notes', JSON.stringify(notes));
    // }, [notes]);



    return (
        <>
            <NoteAddStyle>
                <div className='note-add-wrapper'>


                    <div className='note-container'>
                        <div className='cancel' onClick={onClose}>
                            <img src={cancel} />
                        </div>
                        <div className="note-title">
                            <input type="text" name='note-title' placeholder='Add a New Note' value={formData.title} onChange={handleTitleChange} ref={titleRef} />
                        </div>

                        {/* note description */}
                        <div className="note-description">
                            {/* <textarea name="note-desc" id="" placeholder='note description goes here' value={formData.description} onChange={handleDescChange}></textarea> */}
                            <ReactQuill value={editorHtml} onChange={handleDescChange} theme='snow' modules={modules} formats={formats} />
                        </div>
                        <p id='word-count-2'>{editorHtml.split(/\s+/).filter(Boolean).length} words written</p >

                        {/* note button  */}

                        <NoteAddBtn bg={"#D8315B"} color={"#FFFAFF"} onClick={addNote}>Add note</NoteAddBtn>

                    </div>
                </div>
            </NoteAddStyle >
            {/* {showNotif && <Notification text='note added successfully!'/> } */}

        </>
    )
}





export default NoteAdd;