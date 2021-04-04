import { Menu } from 'antd';
import Layout from 'antd/lib/layout';
import React, {useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';

type PageType='/'|'/books'|'/authors'|''

export const LayoutApp:React.FC = ({children}) => {
    const {pathname}=useLocation()
    const [currentPage, setCurrentPage] = useState<PageType>('/')
    console.log(pathname)
        useEffect(()=>{
        if(pathname!==currentPage){
            if(pathname==='/books'||pathname==='/'||pathname==='/authors'){
               setCurrentPage(pathname)
            } else{
                setCurrentPage('')
            }
        }
    }, [pathname])
    return (
        <Layout className="layout">


            <Layout.Header>
                <div className='container-layout'>

                    <Menu theme="dark" mode="horizontal"
                          selectedKeys={[currentPage]}
                    >
                        <Menu.Item key="/"><Link to='/'>Главная</Link></Menu.Item>
                        <Menu.Item key="/books"><Link to='/books'>Книги</Link></Menu.Item>
                        <Menu.Item key="/authors"><Link to='/authors'>Авторы</Link></Menu.Item>
                    </Menu>
                </div>
            </Layout.Header>

            <Layout.Content style={{ padding: '-1 50px' }}>
                <div className='container-layout'>
                    <div className="site-layout-content">{children}</div>
                </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>

                <div className='container-layout'>
                    Test for Garpix by Markov N.
                </div>
            </Layout.Footer>
        </Layout>
    );
};

