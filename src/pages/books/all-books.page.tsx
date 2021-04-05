import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Space, Table} from "antd";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {DeleteOutlined, EditOutlined, ExportOutlined} from '@ant-design/icons';

import {booksListSelector, loadingSelector} from "../../store/books/books.selectors";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncBooksAC} from "../../store/books/books.reducer";
import {BOOKS, BOOKS_NEW_URL, booksEditPath} from '../../utils/consts';


export const AllBooksPage = () => {

    const dispatch = useDispatch()
    const loading = useSelector(loadingSelector)
    const booksList = useSelector(booksListSelector)
    const handleDelete=(id:number)=>{
        dispatch(asyncBooksAC.deleteBook(id))
    }
    useEffect(() => {
        if (loading === LoadingEnum.NEVER) {
            dispatch(asyncBooksAC.fetchData())
        }
    }, [dispatch, loading])
    const columns = [
    {
        title: 'Book Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Author First Name',
        dataIndex: 'author_first_name',
        key: 'author_first_name',
    },
    {
        title: 'Author Last Name',
        dataIndex: 'author_last_name',
        key: 'author_last_name',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
    },

    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Link to={record.link||BOOKS}> <Button type='primary' icon={<ExportOutlined />}/> </Link>
                <Link to={booksEditPath(record.id)} ><Button icon={<EditOutlined />}/></Link>
                <Button danger icon={<DeleteOutlined />} onClick={()=>handleDelete(record.id)} />
            </Space>
        ),
    }
];
    return (
        <>
            <Helmet>
                <title>Garpix Test|Books</title>
            </Helmet>
            <Link to={BOOKS_NEW_URL}>Create New Book </Link>
            <Table
                dataSource={booksList.map(book=>({...book, created_at: new Date(book.created_at).toLocaleDateString()}))}
                columns={columns}
                loading={loading === LoadingEnum.LOADING}
                rowKey={'id'}
            />
        </>
    );
};

