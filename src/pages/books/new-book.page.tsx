import React from 'react';
import {BookForm} from "../../components/book-form/book-form";
import {useDispatch, useSelector} from "react-redux";
import {authorsListSelector} from '../../store/authors/authors.selectors';
import {INormalizeBook} from "../../types/book.interface";
import {asyncBooksAC} from "../../store/books/books.reducer";
import {useLoadedAuthors} from "../../hooks/useLoadedAuthors.hook";

export const NewBookPage = () => {
    useLoadedAuthors()
    const dispatch=useDispatch()
    const authors = useSelector(authorsListSelector)
    const handleNewBook=(newBook:INormalizeBook)=>{
        dispatch(asyncBooksAC.addNewBook(newBook))
    }

    return (
        <div>
            New Book
            <BookForm authors={authors} onSubmitCB={handleNewBook}/>
        </div>
    );
};

