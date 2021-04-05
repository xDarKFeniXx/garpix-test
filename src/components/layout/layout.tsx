import Layout from 'antd/lib/layout';
import React from 'react';
import {MenuApp} from "./menu";
import {useSelector} from "react-redux";
import {errorSelector as errorSelectorAuthors} from "../../store/authors/authors.selectors";
import {errorSelector as errorSelectorBooks} from "../../store/books/books.selectors";
import {ErrorPage} from "../../pages/error.page";


export const LayoutApp: React.FC = ({children}) => {
    const errorAuthors = useSelector(errorSelectorAuthors)
    const errorBooks = useSelector(errorSelectorBooks)
    const content=errorAuthors||errorBooks ? <ErrorPage error={errorAuthors+' '+ errorBooks}/> : children
    return (
        <Layout className="layout">
            <Layout.Header>
                <div className='container-layout'>
                    <MenuApp/>
                </div>
            </Layout.Header>
            <Layout.Content style={{padding: '-1 50px'}}>
                <div className='container-layout'>
                    <div className="site-layout-content">{content}</div>
                </div>
            </Layout.Content>
            <Layout.Footer style={{textAlign: 'center'}}>
                <div className='container-layout'>
                    Test for Garpix by Markov N.
                </div>
            </Layout.Footer>
        </Layout>
    );
};

