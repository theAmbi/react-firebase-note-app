import React, { useEffect, useRef, useState, useCallback } from 'react'
import { auth, database } from '../../firebase/firebase.config'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import 'firebase/firestore'
import { NoteListStyled } from '../../styles/Notes/NoteList.styled'
import {  AiOutlineSearch } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import {TbFaceIdError} from 'react-icons/tb'
import { SingleNote } from './SingleNote'
import { useAuthState } from 'react-firebase-hooks/auth';

const NoteList = () => {
    const [user] = useAuthState(auth);

    const [myNotes, setMyNotes] = useState([]);
    const [searchNote, setSearchNote] = useState('');

const collectionRef = collection(database, `notes/${user?.uid}/mynotes`);
const fetchNotes = useCallback(async () => {
    const response = await getDocs(collectionRef);
    const notes: any = response.docs.map((note) => ({
        id: note.id,
        ...note.data()
    }));
    setMyNotes(notes);

  

    if(searchNote){
        const filteredNotes = notes.filter((note: any) => {
            return note.title.includes(searchNote) || note.description.includes(searchNote);
        });
        setMyNotes(filteredNotes);
    } 

}, [collectionRef, searchNote])

useEffect(() => {
    fetchNotes();
}, [fetchNotes]);




    return (
        <NoteListStyled>
            <div id='heading-flex'>
                <h3>My Notes</h3>
                <div className='icons-flex'>
                  <div className='note-search'>
                  <input type="text" placeholder='search note...' value={searchNote} onChange={(e) => setSearchNote(e.target.value)}/>
                <AiOutlineSearch className='notelist-search'/>
                  </div>
                </div>
            </div>
            <div>
            </div>

            <div className="list">
                {myNotes.length > 0 ? 
                    myNotes.map((note: any) => {
                    return <SingleNote note={note} key={note.id} />
                })   
             : (<div className='note-error'><TbFaceIdError id='errorIcon'/> <p>Oops, looks like we couldn't find your note.</p></div>)}
            {!myNotes ? <div>No note found</div> : '' }

                

            </div>

        </NoteListStyled>
    )
}

export default NoteList