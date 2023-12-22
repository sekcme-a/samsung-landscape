import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <>
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/images/404.png" alt="error" />
                                    
                                    <h3>Page Not Found</h3>
                                    <p>해당 페이지를 찾을 수 없습니다.</p>

                                    <Link href="/">
                                        <a className="default-btn">
                                            메인화면으로 돌아가기 <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error;