import React from 'react';
import {BookForm} from "../../components/book-form/book-form";
import {useDispatch, useSelector} from "react-redux";
import {authorsListSelector} from "../../store/authors/authors.selectors";
import {INormalizeBook} from "../../types/book.interface";
import {asyncBooksAC} from "../../store/books/books.reducer";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../store/store";
import {bookByIdSelector} from "../../store/books/books.selectors";
import {useLoadedAuthors} from "../../hooks/useLoadedAuthors.hook";

interface IBookParams {
    id: string
}
export const EditBookPage = () => {
    useLoadedAuthors()
    const dispatch=useDispatch()
    const params = useParams<IBookParams>()
    const authors=useSelector(authorsListSelector)
    const book=useSelector((state:AppStateType)=>bookByIdSelector(state, +params.id))

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

