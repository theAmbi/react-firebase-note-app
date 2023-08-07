import React, { useCallback, useState, useEffect, useRef } from 'react'
import { NoteAddStyle } from '../../styles/Notes/NoteAddStyle'
import { auth, database } from '../../firebase/firebase.config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import cancel from '../../images/exit.svg'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NoteAddBtn } from '../../styles/NoteAddBtn.styled';
import Notification from '../Notification';

// const collectionRef = collection(database, "notes");

interface UserData {
    title: string;
    description: string;
}

const NoteAdd:React.FC = ({onClose, onNoteAdded}:any,) => {
    const [user] = useAuthState(auth);
    const [showNotif, setShowNotif] = useState(false)
    const [formData, setFormData] = useState<UserData>({title: '', description: ''});
    const [notes, setNotes]= useState<any[]>([]);
    const titleRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(() => {
        if (titleRef.current){
            titleRef.current.focus()
        }
    }, [])
    


    const collectionRef = collection(database, `notes/${user?.uid}/mynotes`);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, title: event.target.value});
    };

    const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, description: event.target.value});
    }

        const addNote = useCallback(() :void => {
            if (formData.title !== "" && formData.description !== "") {
              addDoc(collectionRef, {
                title: formData.title,
                description: formData.description,
                timestamp: serverTimestamp(),
                userId: user?.uid, 
                // Corrected to serverTimestamp
            });

            const newNote = {title: formData.title, description: formData.description};
            setNotes([...notes, newNote]);
            setFormData({title: '', description: ''});
            // setShowNotif(true);
            console.log(notes);                
            } else {
                alert('Title and description cannot be empty')
            }


            setTimeout(() => {
               onNoteAdded();
            }, 3000)
        
            // console.log(user);
            
          }, [formData.title, formData.description, notes]);

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
                                <input type="text" name='note-title' placeholder='Add a New Note' value={formData.title} onChange={handleTitleChange} ref={titleRef}/>
                            </div>

                            {/* note description */}
                            <div className="note-description">
                                <textarea name="note-desc" id="" placeholder='note description goes here' value={formData.description} onChange={handleDescChange}></textarea>
                            </div>

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