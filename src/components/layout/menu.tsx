import { Menu } from 'antd';
import React, {useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';

type PageType='/'|'/books'|'/authors'|''
export const MenuApp = () => {

    const {pathname}=useLocation()
    const [currentPage, setCurrentPage] = useState<PageType>('/')
    useEffect(()=>{
        if(pathname!==currentPage){
            if(pathname==='/books'||pathname==='/'||pathname==='/authors'){
                setCurrentPage(pathname)
            } else{
                setCurrentPage('')
            }
        }
    }, [currentPage, pathname])
    return (
        <Menu theme="dark" mode="horizontal"
              selectedKeys={[currentPage]}
        >
            <Menu.Item key="/"><Link to='/'>Главная</Link></Menu.Item>
            <Menu.Item key="/books"><Link to='/books'>Книги</Link></Menu.Item>
            <Menu.Item key="/authors"><Link to='/authors'>Авторы</Link></Menu.Item>
        </Menu>

    );
};

