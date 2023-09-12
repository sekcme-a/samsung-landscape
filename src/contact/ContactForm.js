import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { firestore as db } from 'firebase/firebase'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = ({type}) => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
      if(type==="type2"){
        await db.collection("team_admin").doc("dongwoomain").collection("recommand").doc().set({
            ...contact,
            createdAt: new Date(),
            unread: true
        })
        alert("건의해주셔서 감사합니다. 빠른 시일내에 답변드리겠습니다.")
      }
      else{
        await db.collection("team_admin").doc("dongwoomain").collection("contact").doc().set({
            ...contact,
            createdAt: new Date(),
            unread: true
        })
        alert("문의를 보내주셔서 감사합니다. 빠른 시일내에 답변드리겠습니다.")
      }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="이름" 
                                className="form-control" 
                                value={contact.name}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="이메일" 
                                className="form-control" 
                                value={contact.email}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="number" 
                                placeholder="전화번호" 
                                className="form-control" 
                                value={contact.number}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="문의제목" 
                                className="form-control" 
                                value={contact.subject}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="text" 
                                cols="30" 
                                rows="6" 
                                placeholder="내용을 작성해주세요..." 
                                className="form-control" 
                                value={contact.text}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn">
                            {type==="type2" ? "건의사항 전송" : "사업문의 전송"} <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;