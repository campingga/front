import React from 'react'
import './findIdStyle.css';

export default function findId() {
    return (
        <div id='main-id-find'>
            <div className='id-find-total-box'>
                <div className='id-find-text'>아이디 찾기</div>
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
