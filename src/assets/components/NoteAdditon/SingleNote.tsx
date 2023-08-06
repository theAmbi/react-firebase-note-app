import React, { useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'

export const SingleNote = ({ note }) => {
    // const [hover, setHover] = useState(false);
    let maxLength = 30;
    {
        if ((note.title.length) > maxLength) {
            note.title = note.title.substring(0, maxLength) + "...";
        }
    }

    return (
        <div key={note.id} className='note' >
            <div className='note-details-flex'>
                <div className='note-heading'>
                    <h3 className='notelist-title'>{note.title}</h3>
                    <p className='notelist-description'>{note.description}</p>

                </div>

                <div id='more-icon'>
                    <FiMoreVertical />
                </div>
            </div>


            {/* {hover && <div className="options">
                <div id='edit'><AiOutlineEdit className='edit-icon' />
                </div>
                <div id='delete'><AiOutlineDelete className='delete-icon' />
                </div>
            </div>} */}
        </div>
    )
}
