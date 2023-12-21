import useData from 'context/data';
import React from 'react';
import { useEffect } from 'react';

const Loader = () => {
    const {data, isLoading} = useData()

    useEffect(() => {
        
    },[])
    return (
        <>
            <div className={`preloader ${isLoading ? '' : 'preloader-deactivate'}`}>
                <div id="global">
                    <div id="top" className="mask">
                        <div className="plane"></div>
                    </div>

                    <div id="middle" className="mask">
                        <div className="plane"></div>
                    </div>

                    <div id="bottom" className="mask">
                        <div className="plane"></div>
                    </div>

                    <p><i>LOADING...</i></p>
                </div>
            </div>
        </>
    );
};

export default Loader;
