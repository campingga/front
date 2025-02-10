import React from 'react'
import './signInStyle.css';

export default function signIn() {
    return (
        <div id='main-signIn'>
            <div className='signIn-total-box'>
                <div className='signIn-text'>로그인</div>
                <input className='id-input' placeholder='아이디' />
                <input className='password-input' placeholder='비밀번호' />
                <div className='signIn-signUp-box'>
                    <div className='signIn-button'>로그인</div>
                    <div className='signUp-move-button'>회원가입</div>
                </div>
                <hr style={{ width: '100%', margin: '0px', color: 'rgba(167, 167, 167, 1)' }} />
                <div className='id-password-find-box'>
                    <div className='id-find-button'>아이디 찾기</div>
                    <hr style={{ height: '15px', margin: '0px', color: 'rgba(167, 167, 167, 1)' }} />
                    <div className='password-find-button'>비밀번호 찾기</div>
                </div>
                <div className='naver-signIn-button'>
                    <div className='naver-icon'></div>
                    <div className='naver-signIn'>네이버 로그인</div>
                </div>
                <div className='kakao-signIn-button'>
                    <div className='kakao-icon'></div>
                    <div className='kakao-signIn'>카카오계정 로그인</div>
                </div>
            </div>
            <div className='dividing-line'></div>
            <div className='nonmember-signIn-total-box'>
                <div className='nonmember-signIn-text'>비회원 로그인</div>
                <div className='orderer-name-box'>
                    <div className='orderer-name'>주문자이름</div>
                    <input className='orderer-name-input' />
                </div>
                <div className='order-number-box'>
                    <div className='orderer-number'>주문번호</div>
                    <input className='orderer-number-input' />
                </div>
                <div className='nonmember-order-password-box'>
                    <div className='nonmember-order-password'>비회원주문 비밀번호</div>
                    <input className='nonmember-order-password-input' />
                </div>
                <div className='nonmember-signIn-box'>
                    <div className='nonmember-signIn-button'>
                        <div className='nonmember-signIn'>로그인</div>
                        <div className='nonmember-signIn-icon'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
