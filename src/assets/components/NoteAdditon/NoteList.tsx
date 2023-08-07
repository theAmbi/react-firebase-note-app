import React, { useEffect, useRef, useState, useCallback } from 'react'
import { auth, database } from '../../firebase/firebase.config'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import 'firebase/firestore'
import { NoteListStyled } from '../../styles/Notes/NoteList.styled'
import {  AiOutlineSearch } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { SingleNote } from './SingleNote'
import { useAuthState } from 'react-firebase-hooks/auth'

// import { IoGridOutline } from 'react-icons/io'
// import { AiOutlineUnorderedList } from 'react-icons/ai'

const NoteList = () => {
    const [user] = useAuthState(auth);

    const [myNotes, setMyNotes] = useState([]);
    const [searchNote, setSearchNote] = useState(false);

const collectionRef = collection(database, `notes/${user?.uid}/mynotes`);
const fetchNotes = useCallback(async () => {
    const response = await getDocs(collectionRef);
    const notes: any = response.docs.map((note) => ({
        id: note.id,
        ...note.data()
    }));
    setMyNotes(notes);
}, [collectionRef])

useEffect(() => {
    fetchNotes();
}, [fetchNotes]);

    // const storedNotes = localStorage.getItem('notes');
    // console.log(storedNotes);
    




    return (
        <NoteListStyled>
            <div id='heading-flex'>
                <h3>My Notes</h3>
                <div className='icons-flex'>
                    {/* <img src={list} className='notelist-list' /> */}
                  <div className='note-search'>
                  <input type="text" placeholder='search note...' />
                <AiOutlineSearch className='notelist-search'/>
                  </div>
                    {/* {searchNote && <div id='searchInput'>
                        <input type="text" placeholder='search note...' />
                    </div>} */}
                </div>
            </div>
            <div>
            </div>

            <div className="list">
                {myNotes.map((note: any) => {
                    return <SingleNote note={note} key={note.id} />
                })
                }
            {!myNotes ? <div>No note found</div> : '' }

                

            </div>

        </NoteListStyled>
    )
}

export default NoteList