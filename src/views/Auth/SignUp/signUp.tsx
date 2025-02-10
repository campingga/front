import React from 'react'
import './signUpStyle.css';

export default function signUp() {
    return (
        <div id='main-signUp'>
            <div className='signUp-total-box'>
                <div className='signUp-text-box'>
                    <div className='signUp-text'>회원가입</div>
                </div>
                <div className='essential-item-box'>
                    <div className='essential-item-symbol'>*</div>
                    <div className='essential-item-text'>필수항목</div>
                </div>
                <div className='member-information-box'>
                    <div className='signUp-name-total-box'>
                        <div className='signUp-name-box'>
                            <div className='signUp-name-text'>이름</div>
                            <div className='signUp-name-symbol'>*</div>
                        </div>
                        <div className='signUp-name-input-box'>
                            <input className='signUp-name-input' placeholder='이름을 입력해 주세요' />
                        </div>
                    </div>
                    <div className='signUp-id-total-box'>
                        <div className='signUp-id-box'>
                            <div className='signUp-id-text'>아이디</div>
                            <div className='signUp-id-symbol'>*</div>
                        </div>
                        <div className='signUp-id-input-box'>
                            <input className='signUp-id-input' placeholder='아이디를 입력 (n~n자)' />
                            <div className='signUp-duplication-check-button'>중복확인</div>
                        </div>
                    </div>
                    <div className='signUp-password-total-box'>
                        <div className='signUp-password-box'>
                            <div className='signUp-password-text'>비밀번호</div>
                            <div className='signUp-password-symbol'>*</div>
                        </div>
                        <div className='signUp-password-input-box'>
                            <input className='signUp-password-input' placeholder='비밀번호를 입력(영어, 숫자, 특수문자 포함 n~n자)' />
                        </div>
                    </div>
                    <div className='signUp-password-check-total-box'>
                        <div className='signUp-password-check-box'>
                            <div className='signUp-password-check-text'>비밀번호 확인</div>
                            <div className='signUp-password-check-symbol'>*</div>
                        </div>
                        <div className='signUp-password-check-input-box'>
                            <input className='signUp-password-check-input' placeholder='비밀번호를 다시 입력해 주세요' />
                        </div>
                    </div>
                    <div className='signUp-phone-number-total-box'>
                        <div className='signUp-phone-number-box'>
                            <div className='signUp-phone-number-text'>전화번호</div>
                            <div className='signUp-phone-number-symbol'>*</div>
                        </div>
                        <div className='signUp-phone-number-input-box'>
                            <input className='signUp-phone-number-input' placeholder='휴대폰 번호를 ‘-’제외하고 11자리' />
                            <div className='signUp-authentication-number-send-button'>인증번호 전송</div>
                        </div>
                    </div>
                    <div className='signUp-phone-number-check-total-box'>
                        <div className='signUp-phone-number-check-box'>
                            <div className='signUp-phone-number-check-text'>전화번호 확인</div>
                            <div className='signUp-phone-number-check-symbol'>*</div>
                        </div>
                        <div className='signUp-phone-number-check-input-box'>
                            <input className='signUp-phone-number-check-input' placeholder='인증번호 4자리' />
                        </div>
                    </div>
                    <div className='signUp-email-total-box'>
                        <div className='signUp-email-box'>
                            <div className='signUp-email-text'>이메일 주소</div>
                            <div className='signUp-email-symbol'>*</div>
                        </div>
                        <div className='signUp-email-input-box'>
                            <input className='signUp-email1-input' placeholder='이메일 주소' />
                            <div className='signUp-at-symbol'>@</div>
                            <input className='signUp-email2-input' placeholder='gmail.com' />
                        </div>
                    </div>
                    <div className='signUp-address-total-box'>
                        <div className='signUp-address-box'>
                            <div className='signUp-address-text'>주소검색</div>
                        </div>
                        <div className='signUp-address-input-box'>
                            <div className='signUp-zipcode-input-box'>
                                <input className='signUp-zipcode-input' placeholder='우편번호' />
                                <div className='signUp-zipcode-button'>우편번호 검색</div>
                            </div>
                            <input className='signUp-address-input' placeholder='주소' />
                            <input className='signUp-address-detail-input' placeholder='상세주소' />
                        </div>
                    </div>
                    <div className='signUp-birth-total-box'>
                        <div className='signUp-birth-box'>
                            <div className='signUp-birth-text'>생년월일</div>
                        </div>
                        <div className='signUp-birth-input-box'>
                            <input className='signUp-year-input' />
                            <div className='signUp-year-text'>년</div>
                            <input className='signUp-month-input' />
                            <div className='signUp-month-text'>월</div>
                            <input className='signUp-day-input' />
                            <div className='signUp-day-text'>일</div>
                        </div>
                    </div>
                    <div className='signUp-refund-account-total-box'>
                        <div className='signUp-refund-account-box'>
                            <div className='signUp-refund-account-text'>환불계좌</div>
                        </div>
                        <div className='signUp-refund-account-input-box'>
                            <div className='signUp-account-holder-input-box'>
                                <div className='signUp-account-holder-text'>예금주</div>
                                <input className='signUp-account-holder-input' />
                            </div>
                            <div className='signUp-bank-input-box'>
                                <div className='signUp-bank-text'>은행명</div>
                                <div className='signUp-bank-dropdown-box'>
                                    <div className='signUp-bank-dropdown'>은행선택</div>
                                    <div className='signUp-bank-dropdown-icon'></div>
                                </div>
                            </div>
                            <div className='signUp-account-number-input-box'>
                                <div className='signUp-account-number-text'>계좌번호</div>
                                <input className='signUp-account-number-input' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='clause-box'>
                    <div className='clause-agree-box'>
                        <div className='clause-agree-text'>이용약관 동의</div>
                        <div className='clause-agree-icon'></div>
                    </div>
                    <div className='clause-content-box'>이용약관 내용</div>
                </div>
                <div className='signUp-button-box'>
                    <div className='signUp-button'>회원가입</div>
                </div>
            </div>
        </div>
    )
}
