import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NewsCardContent = ({type, data}) => {
  const router = useRouter()

  function formatDateToYYYYMMDD(date) {
    if(date instanceof Date){
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
    
      return `${year}-${month}-${day}`;
    } else return "-"
  }



    return (
        <>
            <div className="single-blog-post" onClick={() => router.push(`/post/${type}/${data.id}`)}>
                <div className="post-image">
                    <Link href={`/post/${type}/${data.id}`}>
                        <a>
                            <img src={data.thumbnailImg} alt={data.title} />
                        </a>
                    </Link>

                    <div className="date">
                        <i className="flaticon-calendar"></i> {formatDateToYYYYMMDD(data?.publishedAt.toDate())}
                    </div>
                </div>

                <div className="post-content">
                    <h3 style={{fontSize:"16px", fontWeight:"normal"}}>
                        <Link href={`/post/${type}/${data.id}`}>
                            <a>{data.title}</a>
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
