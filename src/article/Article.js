import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NewsCardContent = ({type}) => {
  const router = useRouter()

    return (
        <>
            <div className="single-blog-post" onClick={() => router.push(`/post/${type}/test`)}>
                <div className="post-image">
                    <Link href={`/post/${type}/test`}>
                        <a>
                            {type==="news"&&<img src="https://cdn.imweb.me/thumbnail/20230807/c5cc7ba6132cd.jpeg" alt="image" />}
                            {type==="24h"&&<img src="https://cdn.imweb.me/thumbnail/20220704/c2ddd828eda54.jpg" alt="image" />}
                            {type==="gallery"&&<img src="https://cdn.imweb.me/thumbnail/20221207/5cc7cf9213a55.jpg" alt="image" />}
                        </a>
                    </Link>

                    <div className="date">
                        <i className="flaticon-calendar"></i> 2023-08-07
                    </div>
                </div>

                <div className="post-content">
                    <h3 style={{fontSize:"16px", fontWeight:"normal"}}>
                        <Link href={`/post/${type}/test`}>
                            <a>2023년 8월 관리소장 임명장 수여식</a>
                        </Link>
                    </h3>

                    {/* <Link href="/news-details">
                        <a className="default-btn">Read More <span></span></a>
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default NewsCardContent;
