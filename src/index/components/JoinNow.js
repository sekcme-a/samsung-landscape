import React, { Component } from 'react';
import Link from 'next/link';

class JoinNow extends Component {
    render() {
        return (
            <>
                <section className="join-area ptb-100">
                    <div className="container">
                        <div className="join-content">
                            <h2>사업문의</h2>
                            <p style={{fontWeight:"normal", fontSize:"17px"}}>동우가 도움을 드릴 수 있는 내용을 자세히 알려주시면 더 나은 답변을 드릴 수 있습니다.</p>

                            <Link href="/service/contact" >
                                <a className="default-btn">
                                    문의하기 <i className="flaticon-right-chevron"></i> 
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default JoinNow;