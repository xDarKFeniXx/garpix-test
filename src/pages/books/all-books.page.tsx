import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Space, Table} from "antd";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {ExportOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

import {booksListSelector, loadingSelector} from "../../store/books/books.selectors";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncBooksAC} from "../../store/books/books.reducer";


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
        render:(text:any, record:any)=><p>{record.created_at ? record.created_at.toLocaleDateString():''}</p>
    },

    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Link to={record.link||'/books'}> <Button type='primary' icon={<ExportOutlined />}/> </Link>
                <Link to={record.link+'/edit'} ><Button icon={<EditOutlined />}/></Link>
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
            <Link to='/books/new'>Create New Book </Link>
            <Table
                dataSource={booksList}
                columns={columns}
                loading={loading === LoadingEnum.LOADING}
                rowKey={'id'}
            />
        </>
    );
};

