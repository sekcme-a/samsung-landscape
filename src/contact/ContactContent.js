import React, {useEffect, useState} from 'react';
import ContactForm from './ContactForm';
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';

const ContactContent = ({type}) => {
    const {data, fetch_data} = useData()
    const [fetchedData, setFetchedData] = useState({
        address: "서울특별시 도봉구 시루봉로 234, 동우빌딩 2층",
        email: "dongwoodh@hanmail.net",
        contact: "02) 976-2200"
      })


    useEffect(()=>{
        if(!data.contact.fetched) fetch_data("contact")
      },[])
    
      useEffect(() => {
        if(data?.contact?.fetched){
          setFetchedData({
            ...data.contact
          })
        }
      },[data?.contact])


    return (
        <>
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <span className="sub-title">동우그룹</span>
                                <h2>{type==="type2" ? "건의사항" : "사업문의"}</h2>
                                <p style={{fontWeight:"normal"}}>
                                  {type==="type2" ? "어떤 내용이든 건의하시면 답변해드리겠습니다.": "사업에 관한 문의는 언제든 환영합니다. 동우그룹에 문의해 보세요!"}</p>
                            </div>

                            <div className="contact-info">
                                <ul className="contact-list">
                                    <li style={{whiteSpace:"pre-line"}}>
                                        <div className="icon">
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <span>주소</span>
                                        {fetchedData.address}<EditButton type="contact" item="address" text="주소" />
                                    </li>

                                    <li style={{whiteSpace:"pre-line"}}>
                                        <div className="icon">
                                            <i className="flaticon-email"></i>
                                        </div>
                                        <span>이메일</span>
                                        {fetchedData.email}<EditButton type="contact" item="email" text="이메일" />
                                        {/* fax@email.com */}
                                    </li>

                                    <li style={{whiteSpace:"pre-line"}}>
                                        <div className="icon">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <span>연락처</span>
                                        {fetchedData.contact}<EditButton type="contact" item="contact" text="연락처" />
                                    </li>
                                </ul>

                                {/* <ul className="social">
                                <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <span className="sub-title">{type==="type2" ? "건의할 내용이 있으신가요?":"문의할 내용이 있으신가요?"}</span>
                                <h2>{type==="type2" ? "건의사항 작성" : "문의 작성"}</h2>
                                <p style={{fontWeight:"normal"}}>
                                  {type==="type2" ? "동우그룹에 건의할 내용을 작성해주세요. 빠른 시일내에 답변해드리겠습니다.":"문의할 내용을 작성해주세요. 빠른 시일내에 답변해드리겠습니다."}</p>
                            </div>

                            <ContactForm {...{type}}/>
                        </div>
                    </div>
                </div>
                
                {/* <div className="bg-map">
                    <img src="/images/bg-map.png" alt="image" />
                </div> */}
            </section>
        </>
    );
};

export default ContactContent;
