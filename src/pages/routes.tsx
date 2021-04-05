import React from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./main.page";
import {BookPage} from "./books/book.page";
import {AllBooksPage} from './books/all-books.page';
import {AuthorPage} from "./authors/author.page";
import {AllAuthorsPage} from "./authors/all-authors.page";
import {Page404Error} from "./404.page";
import {EditBookPage} from "./books/edit-book.page";
import {NewBookPage} from './books/new-book.page';
import {NewAuthorPage} from "./authors/new-author.page";
import {EditAuthorPage} from "./authors/edit-author.page";

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
            <Route path='/authors/:id/edit'>
                <EditAuthorPage/>
            </Route>
            <Route path='/authors/new'>
                <NewAuthorPage/>
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

