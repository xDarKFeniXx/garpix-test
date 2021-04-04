import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/main.page";
import {BookPage} from "./pages/books/book.page";
import {AllBooksPage} from './pages/books/all-books.page';
import {AuthorPage} from "./pages/authors/author.page";
import {AllAuthorsPage} from "./pages/authors/all-authors.page";
import {Page404Error} from "./pages/404.page";

export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <MainPage/>
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

