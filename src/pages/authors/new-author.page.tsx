import React from 'react';
import {useDispatch} from "react-redux";
import {IAuthorDTO} from "../../types/author.interface";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";
import {AuthorForm} from "../../components/author-form/author-form";

export const NewAuthorPage = () => {
    const dispatch=useDispatch()
    const handleSaveNewAuthor=(newAuthor:IAuthorDTO)=>{
        dispatch(asyncAuthorsAC.addNewAuthor(newAuthor))
    }
    return (
        <div>
           New Author
            <AuthorForm onSubmitCB={handleSaveNewAuthor}/>
        </div>
    );
};

