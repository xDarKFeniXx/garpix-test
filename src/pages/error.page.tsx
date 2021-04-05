
import {Result, Button} from 'antd';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
interface IErrorProps{
    error:string
}
export const ErrorPage:React.FC<IErrorProps> = ({error}) => {
  return (
      <>
        <Helmet>
          <title>Page Not found|404</title>
        </Helmet>
        <Result
            status="warning"
            title="Sorry, the page you visited does not exist."
            subTitle={error}
            extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
        />

      </>
  )
};

