import React, {useEffect} from 'react';
import {BookForm} from "../../components/book-form/book-form";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";
import {LoadingEnum} from "../../types/loading.enum";
import {useDispatch, useSelector} from "react-redux";
import {authorsListSelector, loadingSelector} from '../../store/authors/authors.selectors';
import {INormalizeBook} from "../../types/book.interface";
import {asyncBooksAC} from "../../store/books/books.reducer";

export const NewBookPage = () => {
    const dispatch=useDispatch()
    const loadingAuthors = useSelector(loadingSelector)
    const authors = useSelector(authorsListSelector)
    const handleNewBook=(newBook:INormalizeBook)=>{
        dispatch(asyncBooksAC.addNewBook(newBook))
    }
    useEffect(() => {
        if (loadingAuthors === LoadingEnum.NEVER) {
            dispatch(asyncAuthorsAC.fetchData())
        }
    }, [loadingAuthors, dispatch])
    return (
        <div>
            New Book
            <BookForm authors={authors} onSubmitCB={handleNewBook}/>
        </div>
    );
};

