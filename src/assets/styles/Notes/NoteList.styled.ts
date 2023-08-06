import styled from "styled-components";

export const NoteListStyled = styled.section`
margin: 50px 0;

#heading-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
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

    .notelist-list, .notelist-search{
        width: 30px;
        cursor: pointer;
    }
}

.list{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: #fff;
    border: 1px solid lightgray;
    margin-top: 30px;
    padding: 30px 12px;

}

.notelist-title{
    font-size: 1.4rem;
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
.note{
    background-color: #fff;
    border-bottom: 1px solid #f6f7fb;
    margin: 7px 0px;
    width: 94%;
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

        #delete{
            background-color: #D8315B;
        }

        #edit{
            background-color: #577399;
        }
    }
}
`