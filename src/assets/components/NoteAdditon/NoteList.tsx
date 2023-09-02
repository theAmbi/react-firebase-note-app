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
    const NOTES_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

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


const sortedNotes = [...myNotes].sort((a:Note, b:Note) => {
    const aTimestamp = a.timestamp?.toMillis() || 0;
    const bTimestamp = b.timestamp?.toMillis() || 0;
    bTimestamp - aTimestamp;
});

const startIndex = (currentPage - 1) * NOTES_PER_PAGE;
const endIndex = startIndex + NOTES_PER_PAGE;
const notesToDisplay = sortedNotes.slice(startIndex, endIndex);

const totalPages = Math.ceil(sortedNotes.length / NOTES_PER_PAGE);

const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
};

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
                {/* {sortedNotes.length > 0 ? 
                    sortedNotes.map((note: any) => {
                    return <SingleNote note={note} key={note.id} />
                })   
             : (<div className='note-error'><TbFaceIdError id='errorIcon'/> <p>Oops, looks like we couldn't find your note.</p></div>)}
            {!myNotes ? <div>No note found</div> : '' } */}
            {notesToDisplay.length > 0 ? (
                notesToDisplay.map((note: any) => {
                    return <SingleNote note={note} key={note.id}/>;
                })
            ): (
                <div className='note-error'>
                    <TbFaceIdError id='errorIcon'/>
                    <p>Oops...looks like we couldn't find your note.</p>
                </div>
            )}

            {!myNotes ? <div>No note found</div> : ''}
            </div>

            <div className='pagination-controls'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} id='previous'>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} id='next'>Next</button>
            </div>

                
            {/* </div> */}

        </NoteListStyled>
    )
}

export default NoteList