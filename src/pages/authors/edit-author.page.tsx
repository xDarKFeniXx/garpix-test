import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAuthorDTO} from "../../types/author.interface";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";
import {AuthorForm} from "../../components/author-form/author-form";
import {useParams} from "react-router-dom";
import {authorByIdSelector} from "../../store/authors/authors.selectors";
import {AppStateType} from "../../store/store";
import {useLoadedAuthors} from "../../hooks/useLoadedAuthors.hook";

interface IAuthorParams {
    id:string
}
export const EditAuthorPage = () => {
    useLoadedAuthors()
    const params = useParams<IAuthorParams>()
    const dispatch=useDispatch()
    const author=useSelector((state:AppStateType)=>authorByIdSelector(state, +params.id))
    const handleEditAuthor=(newAuthor:IAuthorDTO)=>{
        dispatch(asyncAuthorsAC.updateAuthor(newAuthor))
    }
    return (
        <div>
           Edit author
            <AuthorForm onSubmitCB={handleEditAuthor} author={author}/>
        </div>
    );
};

