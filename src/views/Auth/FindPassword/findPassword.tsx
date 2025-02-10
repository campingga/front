import React from 'react'
import './findPasswordStyle.css';

export default function findPassword() {
    return (
        <div id='main-password-find'>
            <div className='password-find-total-box'>
                <div className='password-find-text'>비밀번호 찾기</div>
                <div className='radio-box'>
                    <div className='radio-email-box'>
                        <input type="radio" />
                        <div className='radio-email'>이메일</div>
                    </div>
                    <div className='radio-phone-box'>
                        <input type="radio" />
                        <div className='radio-phone'>휴대폰</div>
                    </div>
                </div>
                <div className='member-id-box'>
                    <div className='member-id'>아이디</div>
                    <input className='member-id-input' />
                </div>
                <div className='member-name-box'>
                    <div className='member-name'>이름</div>
                    <input className='member-name-input' />
                </div>
                <div className='email-phone-find-box'>
                    <div className='email-phone-find'>이메일로 찾기</div>
                    <input className='email-phone-find-input' />
                </div>
                <div className='check-button'>확인</div>
            </div>
        </div>
    )
}
