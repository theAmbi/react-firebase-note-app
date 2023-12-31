import styled from "styled-components";
import '../colours/colours.css'

export const NoteListStyled = styled.section`
margin: 50px 0;

.pagination-controls{
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
}

#previous, #next{
    padding: 14px 20px;
    background-color: var(--white);
    color: var(--grayishBlue);
    /* font-weight: 600; */
    text-align: left;
    font-size: .9rem;
    cursor: pointer;
    border-radius: 14px;
    position: relative;
    outline: none;
    border: none;

    :disabled{
        opacity: .5;
    }
}

#heading-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid #AFC8EA;
    border-top: 1px solid #AFC8EA;
}
h3{
    font-weight: 600;
    font-size: 2rem;
    color: #001524;
}

.icons-flex{
    display: flex;
    align-items: center;
    gap: 25px;
}

.list{
    width: 98%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: #fff;
    /* border: 1px solid lightgray; */
    border-radius: 9px;
    margin-top: 30px;
    padding: 30px 12px;


}

#timestamp{
    color: var(--grayishBlue);
    margin-bottom: 16px;
}

.notelist-title{
    font-size: 1.2rem;
    margin: 10px 0;
}

.notelist-description{
    color: #577399;
    margin: 10px 0;
}

.note-details-flex{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.note-heading{
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;
}


#more-icon{
    cursor: pointer;
    padding: 8px;
    height: fit-content;
}

.note-edit-icons{
    font-size: 1.4rem;
    display: flex;
    gap: 20px;

    .delete{
        color: var(--errorRed);
        cursor: pointer;
        padding: 10px;
        border-radius: 4px;

        &:hover{
            background-color: var(--errorRed);
            color: var(--white);
        }
    }

    .edit{
        color: var(--grayishBlue);
        cursor: pointer;
        padding: 10px;
        border-radius: 4px;

        &:hover{
            background-color: var(--gray);
        }
    }

}

.note-error{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 0 auto;
    text-align: center;
    color: var(--grayishBlue);
    margin: 80px 0px;

    & > p{
        max-width: 350px;
    }

    #errorIcon{
        font-size: 4.7rem;
        text-align: center;
    }
}

.note-search{
    padding: 23px 20px;
    background-color: var(--white);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 15px;

    &:focus{
            border: 2px solid var(--grayishBlue)
        }

    input{
        outline: none;
        border: none;
        padding-left: 1px;

        ::placeholder{
            color: var(--grayishBlue);
        }

        
    }


    .notelist-search{
        font-size: 1.4rem;
        cursor: pointer;
        color: var(--grayishBlue);
    }

}
.note{
    background-color: #fff;
    border-bottom: 1px solid #f6f7fb;
    margin: 7px 0px;
    width: 97%;
    padding: 6px 14px;
    position: relative;
    display: flex;


    .options{
        /* background-color: #001524; */
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 30px;

        #edit, #delete{
            padding: 8px 10px;
            border: 1px solid #f6f7fb;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            color: #fff;
            width: 50%;
        }

        .edit-icon, .delete-icon{
            padding: 3px 6px;
            color: #fff;
            font-size: 1.5rem;
        }
    }
}

.note:last-child{
    border-bottom: none;
}

#modal-overlay{
    width: 100%;
    height: 100vh !important;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
    /* margin: 0 auto; */
    height: fit-content;
    padding: 20px 7px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    /* border: 1px solid red; */
    overflow: hidden;

    .pagination-controls{
        gap: 10px;

        #previous, #next{
            padding: 14px 19px !important;
        }
    }

    #heading-flex{
        padding: 20px 10px;
        h3{
            font-size: 1.1rem;
        }
    }

    .note-search{
        padding: 20px 9px;

        input{
            max-width: 100px;
        }

        .notelist-search{
        order: 0;
    }

    
    }

   

    .note {
        width: 90%;
        /* background-color: yellow; */

        .note-details-flex{
            justify-content: space-between;
        }
        .note-heading h3{
            font-size: 1rem;
        }

        p{
            font-size: .8rem;
        }

        .note-edit-icons{
            gap: 10px;
            justify-content: flex-end;
        }
    }

    .list{
        width: 96%;
        padding: 30px 8px;
    }
}

@media only screen and (min-width: 481px) and (max-width: 1000px) {
    .list{
        width: 97%;
        padding: 30px 20px;
    }
}
`