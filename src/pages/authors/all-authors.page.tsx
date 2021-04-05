import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Button, Space, Table} from "antd";
import {Link} from "react-router-dom";
import {authorsListSelector, loadingSelector} from "../../store/authors/authors.selectors";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";
import {DeleteOutlined, EditOutlined, ExportOutlined} from "@ant-design/icons";


export const AllAuthorsPage = () => {
    const dispatch=useDispatch()
    const loading=useSelector(loadingSelector)
    const authorsList=useSelector(authorsListSelector)
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch(asyncAuthorsAC.fetchData())
        }
    }, [dispatch,loading])
    const handleDelete=(id:number)=>{
       dispatch(asyncAuthorsAC.deleteAuthor(id))
    }
    const columns = [

    {
        title: 'Author First Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Author Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },


    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Link to={`/authors/${record.id}`}><Button type='primary' icon={<ExportOutlined />}/></Link>
                <Link to={'/authors/'+record.id+'/edit'} ><Button icon={<EditOutlined />}/></Link>
                <Button danger icon={<DeleteOutlined />} onClick={()=>handleDelete(record.id)} />

            </Space>
        ),
    }
];
    return (
        <>
            <Helmet>
                <title>Garpix Test|Authors</title>
            </Helmet>
            <Link to='authors/new'>Create New Author</Link>
            <Table
                dataSource={authorsList}
                columns={columns}
                loading={loading === LoadingEnum.LOADING}
                rowKey={'id'}
            />
        </>
    );
};

