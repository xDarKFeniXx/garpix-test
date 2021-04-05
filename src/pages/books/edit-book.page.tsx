import React, {useEffect} from 'react';
import {BookForm} from "../../components/book-form/book-form";
import {useDispatch, useSelector} from "react-redux";
import {authorsListSelector, loadingSelector} from "../../store/authors/authors.selectors";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";
import {INormalizeBook} from "../../types/book.interface";
import {asyncBooksAC} from "../../store/books/books.reducer";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../store/store";
import {bookByIdSelector} from "../../store/books/books.selectors";

interface IBookParams {
    id: string
}
export const EditBookPage = () => {
    const dispatch=useDispatch()
    const params = useParams<IBookParams>()
    const loadingAuthors=useSelector(loadingSelector)
    const authors=useSelector(authorsListSelector)
    const book=useSelector((state:AppStateType)=>bookByIdSelector(state, +params.id))
    useEffect(()=>{
        if(loadingAuthors===LoadingEnum.NEVER){
            dispatch(asyncAuthorsAC.fetchData())
        }
    }, [loadingAuthors, dispatch])
    const handleSubmitEdit=(newBook:INormalizeBook)=>{
        dispatch(asyncBooksAC.updateBook(newBook))
    }
    return (
        <div>
           Edit Book
           <BookForm authors={authors} onSubmitCB={handleSubmitEdit} book={book}/>
        </div>
    );
};

