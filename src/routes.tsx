import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/main.page";
import {BookPage} from "./pages/books/book.page";
import {AllBooksPage} from './pages/books/all-books.page';
import {AuthorPage} from "./pages/authors/author.page";
import {AllAuthorsPage} from "./pages/authors/all-authors.page";
import {Page404Error} from "./pages/404.page";
import {EditBookPage} from "./pages/books/edit-book.page";
import { NewBookPage } from './pages/books/new-book.page';

export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <MainPage/>
            </Route>
            <Route path='/books/:id/edit'>
                <EditBookPage/>
            </Route>
            <Route path='/books/new'>
                <NewBookPage/>
            </Route>
            <Route path='/books/:id'>
                <BookPage/>
            </Route>
            <Route path='/books'>
                <AllBooksPage/>
            </Route>
            <Route path='/authors/:id'>
                <AuthorPage/>
            </Route>
            <Route path='/authors'>
                <AllAuthorsPage/>
            </Route>
            <Route path='*'>
                <Page404Error/>
            </Route>
        </Switch>
    );
};

