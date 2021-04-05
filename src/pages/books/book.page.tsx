import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {bookByIdSelector, loadingSelector} from "../../store/books/books.selectors";
import {AppStateType} from "../../store/store";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncBooksAC} from "../../store/books/books.reducer";
import {Page404Error} from "../404.page";
import {Button, PageHeader, Tag, Typography} from 'antd';

interface IBookParams {
    id: string
}

export const BookPage = () => {
    const params = useParams<IBookParams>()
    const dispatch = useDispatch()
    const loading = useSelector(loadingSelector)
    const book = useSelector((state: AppStateType) => bookByIdSelector(state, +params.id))
    useEffect(() => {
        if (loading === LoadingEnum.NEVER) {
            dispatch(asyncBooksAC.fetchData())
        }
    }, [loading, dispatch])
    if (book === undefined) {
        return <Page404Error/>
    } else {
        return (
            <PageHeader
                title={book.title}
                className="site-page-header"
                subTitle={`${book.author_first_name} ${book.author_last_name}`}
                tags={<Tag color="green">Books</Tag>}
                extra={[
                    <Button key="2">Delete</Button>,
                    <Button key="1" type="primary">
                        Edit
                    </Button>,
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            >
                <Typography.Paragraph>
                    {book.description}
                </Typography.Paragraph>
            </PageHeader>

        );
    }
};

