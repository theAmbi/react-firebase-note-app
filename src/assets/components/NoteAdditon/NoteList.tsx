import React, { useEffect, useRef, useState } from 'react'
import { auth, database } from '../../firebase/firebase.config'
import { collection, getDocs, deleteDoc } from 'firebase/firestore'
import 'firebase/firestore'
import { NoteListStyled } from '../../styles/Notes/NoteList.styled'
import search from '../../images/search.svg'
import list from '../../images/list.svg'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
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
const fetchNotes = async () => {
    const response = await getDocs(collectionRef);
    const notes: any = response.docs.map((note) => ({
        id: note.id,
        ...note.data()
    }));
    setMyNotes(notes);
}

useEffect(() => {
    fetchNotes();
});

    // const storedNotes = localStorage.getItem('notes');
    // console.log(storedNotes);
    




    return (
        <NoteListStyled>
            <div id='heading-flex'>
                <h3>My Notes</h3>
                <div className='icons-flex'>
                    <img src={list} className='notelist-list' />
                    <img src={search} className='notelist-search' onClick={() => setSearchNote(!searchNote)} />
                    {searchNote && <div id='searchInput'>
                        <input type="text" placeholder='search note...' />
                    </div>}
                </div>
            </div>
            <div>
            </div>

            <div className="list">
                {myNotes.map((note) => {
                    return <SingleNote note={note} key={note.id} />
                })
                }

                

            </div>

        </NoteListStyled>
    )
}

export default NoteList