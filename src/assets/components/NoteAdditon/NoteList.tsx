import React, { useEffect, useState, useCallback } from 'react'
import { auth, database } from '../../firebase/firebase.config'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import 'firebase/firestore'
import { NoteListStyled } from '../../styles/Notes/NoteList.styled'
import {  AiOutlineSearch } from 'react-icons/ai'
import {TbFaceIdError} from 'react-icons/tb'
import { SingleNote } from './SingleNote'
import { useAuthState } from 'react-firebase-hooks/auth';

type Note = {
    id: string;
    title: string;
    description: string;
    timestamp: Firebase.firestore.Timestamp;
}

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


const sortedNotes = [...myNotes].sort((a:Note, b:Note) => b.timestamp.toMillis() - a.timestamp.toMillis()
);

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
                {sortedNotes.length > 0 ? 
                    sortedNotes.map((note: any) => {
                    return <SingleNote note={note} key={note.id} />
                })   
             : (<div className='note-error'><TbFaceIdError id='errorIcon'/> <p>Oops, looks like we couldn't find your note.</p></div>)}
            {!myNotes ? <div>No note found</div> : '' }

                

            </div>

        </NoteListStyled>
    )
}

export default NoteList