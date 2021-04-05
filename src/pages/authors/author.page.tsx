import React from 'react';
import {useLoadedAuthors} from "../../hooks/useLoadedAuthors.hook";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {authorByIdSelector} from "../../store/authors/authors.selectors";
import {Avatar, Card } from 'antd';
import {Page404Error} from "../404.page";
interface IParamsProp{
    id:string
}
export const AuthorPage = () => {
    useLoadedAuthors()
    const params=useParams<IParamsProp>()
    const author=useSelector((state:AppStateType)=>authorByIdSelector(state, +params.id))
    if(!author){
        return <Page404Error/>
    } else{
        return (
            <Card style={{ width: 300, marginTop: 16 }} >
                <Card.Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={author.first_name + ' ' +author.last_name}
                    description="Author"
                />
            </Card>
        );

    }
    };

