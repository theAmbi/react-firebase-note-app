import React, { useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { doc, deleteDoc, collection } from 'firebase/firestore'
import { auth, database } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'


interface NoteProps {
    note: {
        title: string;
        id: string;
        timestamp: any;
    }
}

export const SingleNote: React.FC<NoteProps> = ({ note }) => {
    // const [hover, setHover] = useState(false);
    const [user] = useAuthState(auth);

    const collectionRef = collection(database, `notes/${user?.uid}/mynotes`);

    let maxLength = 30;
    {
        if ((note.title.length) > maxLength) {
            note.title = note.title.substring(0, maxLength) + "...";
        }
    }

    const deleteNote = async (documentId :string) => {
      await deleteDoc(doc(collectionRef, documentId))
    }

    return (
        <div key={note.id} className='note' >
            <div className='note-details-flex'>
                <div className='note-heading'>
                    <h3 className='notelist-title'>{note.title}</h3>
                    {note.timestamp && (
                    <p id='timestamp'>Created at {note.timestamp.toDate().toLocaleString()}</p>
                    )}
                    {/* <p className='notelist-description'>{note.description}</p> */}
                </div>
                <div className='note-edit-icons'>
                    <AiOutlineEdit className='edit' title='edit'/>
                    <AiOutlineDelete className='delete' title='delete' onClick={() => deleteNote(note.id).then(() => {
                        console.log('document deleted successfully');

                        })
                        .catch((error) => {
                            console.error('Error deleting document: ', error)
                        })}/>
                </div>
            </div>
        </div>
    )
}
