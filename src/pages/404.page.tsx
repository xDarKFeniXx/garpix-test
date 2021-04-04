import {Result, Button} from 'antd';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

export const Page404Error = () => {
    return (
        <>
            <Helmet>
                <title>Page Not found|404</title>
            </Helmet>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
            />

        </>
    )
};

