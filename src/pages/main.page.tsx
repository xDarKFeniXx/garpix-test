import {Carousel} from 'antd';
import React from 'react';
import {Helmet} from "react-helmet";

export const MainPage = () => {
    const carousel = new Array(4).fill(0).map((_, index) => {
            return (
                <div key={index}><h3 className='carousel-styles'>Lorem ipsum dolor sit amet.</h3></div>
                //usually i don't use index for key
            )
        }
    )
    return (
        <>
            <Helmet>
                <title>Garpix Test|Home</title>
            </Helmet>
            <section>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda dolores hic nam,
                    possimus sunt? A asperiores delectus, dicta dolore ipsa ipsam minima necessitatibus quasi rerum
                    sequi tempora ut.</h3>
            </section>
            <section>
                <Carousel autoplay>
                    {carousel}
                </Carousel>
            </section>
        </>
    );
};

