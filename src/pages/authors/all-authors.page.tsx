import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Space, Table} from "antd";
import {Link} from "react-router-dom";
import {authorsListSelector, loadingSelector} from "../../store/authors/authors.selectors";
import {LoadingEnum} from "../../types/loading.enum";
import {asyncAuthorsAC} from "../../store/authors/authors.reducer";

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
                <Link to={`/authors/${record.id}`}>Show</Link>
                {/*<Link to={record.id}>Edit</Link>*/}
                {/*<Link to={record.id}>Delete</Link>*/}
            </Space>
        ),
    }
];
export const AllAuthorsPage = () => {
    const dispatch=useDispatch()
    const loading=useSelector(loadingSelector)
    const authorsList=useSelector(authorsListSelector)
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch(asyncAuthorsAC.fetchData())
        }
    }, [dispatch,loading])
    return (
        <>
            <Helmet>
                <title>Garpix Test|Authors</title>
            </Helmet>
            <Table
                dataSource={authorsList}
                columns={columns}
                loading={loading === LoadingEnum.LOADING}
                rowKey={'id'}
            />
        </>
    );
};

