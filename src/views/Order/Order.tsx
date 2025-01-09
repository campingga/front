import styles from "./Order.module.css";
import { useState } from "react";

export default function Order() {
    const [selectPayBtn, setSelectPayBtn] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>주문/결제</h3>
            </div>
            <div className={styles.orderDetailBox}>
                <span className={styles.subject}>배송지</span>
                <div className={`${styles.addressBox} ${styles.commonBox}`}>
                    <div className={styles.nameBox}>
                        <span className={styles.titleFont}>강호</span>
                        <button className={styles.addressChangeBtn}>변경</button>
                    </div>
                    <div style={{ marginBottom: "3px" }}>
                        <p className={styles.titleFont}>부산광역시 사상구 XX대로 12 XX아파트 101동 1001호 (123456)</p>
                    </div>
                    <div>
                        <span>010-1234-5678</span>
                    </div>
                    <select className={styles.orderSelect}>
                        <option>배송메모를 선택해주세요</option>
                    </select>
                </div>
                <span className={styles.subject}>주문상품</span>
                <div className={`${styles.productListBox} ${styles.commonBox}`}>
                    <div className={styles.productList}>
                        <div className={styles.productBox}>
                            <div className={styles.productImg}>
                                <img src="/logo192.png" className={styles.itemImg}></img>
                            </div>
                            <div className={styles.productDetail}>
                                <p className={styles.titleFont}>룩 플리츠 롱와이드P</p>
                                <span className={styles.itemOption}>[옵션: FREE/블랙]</span>
                                <span className={styles.itemOption}>수량: 1개</span>
                                <p className={styles.price}>금액:
                                    <p className={styles.originPrice}>38,000</p>
                                    <p>35,000원</p>
                                </p>
                            </div>
                            <div className={styles.deliveryCharge}>
                                <p style={{ width: "100%", textAlign: "end", paddingRight: "3px"}}>배송비 3,000원</p>
                            </div>
                        </div>
                        <div className={styles.productBox}>
                            <div className={styles.productImg}>
                                <img src="/logo192.png" className={styles.itemImg}></img>
                            </div>
                            <div className={styles.productDetail}>
                                <p className={styles.titleFont}>룩 세더 실켓 7부 박스티</p>
                                <span className={styles.itemOption}>[옵션: FREE/차콜콜]</span>
                                <span className={styles.itemOption}>수량: 1개</span>
                                <p className={styles.price}>금액:
                                    <p className={styles.originPrice}>27,000</p>
                                    <p>22,000원</p>
                                </p>
                            </div>
                            <div className={styles.deliveryCharge}>
                                <p style={{ width: "100%", textAlign: "end", paddingRight: "3px"}}>배송비 3,000원</p>
                            </div>
                        </div>
                    </div>
                    <table className={styles.priceTable}>
                        <thead className={styles.priceTableThead}>
                            <tr className={styles.priceTableTr}>
                                <th className={styles.priceTableTh}>전체 상품금액</th>
                                <th className={styles.priceTableTh}>전체 배송비</th>
                                <th className={styles.priceTableTh}>전체 할인금액</th>
                                <th className={styles.priceTableTh}>총합</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>65,000원</p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.redText}>+ 6,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.blueText}>+ 6,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>= 63,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className={styles.subject}>쿠폰</span>
                <div className={`${styles.couponBox} ${styles.commonBox}`}>
                    <div className={styles.couponSelectArea}>
                        <div className={styles.couponTitleBox}>
                            <p className={styles.titleFont}>쿠폰 적용</p>
                            <div className={styles.useCouponBox}>
                                <button className={styles.addressChangeBtn}>쿠폰</button>
                                <p className={styles.subTitle}>보유쿠폰 <span className={styles.blueText}>2개</span></p>
                            </div>
                        </div>
                        <div className={styles.enableCouponList}>
                            <p className={styles.enableCoupon}>- 회원가입 감사 2천원 쿠폰</p>
                            <p className={styles.enableCoupon}>2,000원</p>
                        </div>
                    </div>
                    <table className={styles.priceTable}>
                        <thead className={styles.priceTableThead}>
                            <tr className={styles.priceTableTr}>
                                <th className={styles.priceTableTh}>결제 예정금액액</th>
                                <th className={styles.priceTableTh}>쿠폰 할인</th>
                                <th className={styles.priceTableTh}>총합</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>65,000원</p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.blueText}>- 2,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>= 61,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className={styles.subject}>최종 결제정보</span>
                <div className={`${styles.finalPaymentPriceInfoBox} ${styles.commonBox}`}>
                    <table className={styles.priceTable}>
                        <thead className={styles.priceTableThead}>
                            <tr className={styles.priceTableTr}>
                                <th className={styles.priceTableTh}>주문상품</th>
                                <th className={styles.priceTableTh}>배송비</th>
                                <th className={styles.priceTableTh}>기본 할인</th>
                                <th className={styles.priceTableTh}>쿠폰 할인</th>
                                <th className={styles.priceTableTh}>최종 결제 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>65,000원</p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.redText}>+ 6,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.blueText}>- 8,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>
                                    <p className={styles.totalProductPrice}>
                                        <span className={styles.blueText}>- 2,000</span>원
                                    </p>
                                </td>
                                <td className={styles.priceTableTd}>= 61,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className={styles.subject}>결제 수단</span>
                <div className={`${styles.selectPayment} ${styles.commonBox}`}>
                    <p className={styles.titleFont}>결제수단 선택</p>
                    <ul className={styles.selectBtnList}>
                        <li className={`${styles.selectBtn} ${selectPayBtn === 0 ? styles.selectPayBtn : ""}`} onClick={() => setSelectPayBtn(0)}>
                            <p>무통장 입금</p>
                        </li>
                        <li className={`${styles.selectBtn} ${selectPayBtn === 1 ? styles.selectPayBtn : ""}`} onClick={() => setSelectPayBtn(1)}>
                            <p>토스(Toss)</p>
                        </li>
                        <li className={`${styles.selectBtn} ${selectPayBtn === 2 ? styles.selectPayBtn : ""}`} onClick={() => setSelectPayBtn(2)}>
                            <p>카드 결제</p>
                        </li>
                        <li className={`${styles.selectBtn} ${selectPayBtn === 3 ? styles.selectPayBtn : ""}`} onClick={() => setSelectPayBtn(3)}>
                            <p>실시간 계좌이체</p>
                        </li>
                    </ul>
                    <div className={styles.paymentDetail}>
                        {selectPayBtn === 0 ? <DirectDeposit></DirectDeposit>
                            : selectPayBtn === 3 ? <LiveAccountTransfer></LiveAccountTransfer>
                            : <p>pg사 정책 언급 or 결제 약관 표시</p>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.finalPaymentBtn}>
                <p>61,000원 결제하기</p>
            </div>
        </div>
    )
}

function DirectDeposit() {
    const [cashReceipt, setCashReceipt] = useState(true);
    const [receiptType, setReceiptType] = useState("personal");

    return (
        <div className={styles.bankSelectBox}>
            <div className={styles.bankSelect}>
                <p className={styles.detailFont}>입금은행<span className={styles.blueText}>*</span></p>
                <select className={styles.bankView}>
                    <option className={styles.bankAccount}>국민은행 000000-00-000000 캠핑가</option>
                </select>
            </div>
            <div className={styles.bankSelect}>
                <p className={styles.detailFont}>입금자명<span className={styles.blueText}>*</span></p>
                <input className={styles.bankView}></input>
            </div>
            <div className={styles.cashReceipt}>
                <p className={styles.detailSubTitle}>현금영수증</p>
                <div className={styles.checkBox}>
                    <input className={styles.checkInput} type="radio" checked={cashReceipt} name="cashReceipt" onChange={() => setCashReceipt(true)}></input><label className={styles.labelBtn} onClick={() => setCashReceipt(true)}>현금영수증 신청</label>
                    <input className={styles.checkInput} type="radio" checked={!cashReceipt} name="cashReceipt" onChange={() => setCashReceipt(false)}></input><label className={styles.labelBtn} onClick={() => setCashReceipt(false)}>신청안함</label>
                </div>
                {cashReceipt &&
                    <div className={styles.checkBox}>
                        <input className={styles.checkInput} type="radio" checked={receiptType === "personal"} name="receiptType" value="personal" onChange={() => setReceiptType("personal")}></input><label className={styles.labelBtn} onClick={() => setReceiptType("personal")}>개인</label>
                        <input className={styles.checkInput} type="radio" checked={receiptType === "business"} name="receiptType" value="business" onChange={() => setReceiptType("business")}></input><label className={styles.labelBtn} onClick={() => setReceiptType("business")}>사업자</label>
                    </div>
                }
                {(cashReceipt && receiptType === "personal") && 
                    <div className={styles.cashReceiptNumberBox}>
                        <select className={styles.cashReceiptNumber}>
                            <option>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select>
                        -
                        <input className={styles.cashReceiptNumber}></input>
                        -
                        <input className={styles.cashReceiptNumber}></input>
                    </div>
                }
                {(cashReceipt && receiptType === "business") && 
                    <div>
                        <input className={styles.cashReceiptNumber} placeholder="사업자번호"></input>
                    </div>
                }
            </div>
        </div>
    )
}

function LiveAccountTransfer() {
    const [cashReceipt, setCashReceipt] = useState(true);
    const [receiptType, setReceiptType] = useState("personal");

    return (
        <div className={styles.bankSelectBox}>
            <div className={styles.bankSelect}>
                <p className={styles.detailFont}>예금주명<span className={styles.blueText}>*</span></p>
                <input className={styles.bankView}></input>
            </div>
            <div className={styles.cashReceipt}>
                <p className={styles.detailSubTitle}>현금영수증</p>
                <div className={styles.checkBox}>
                    <input className={styles.checkInput} type="radio" checked={cashReceipt} name="cashReceipt" onChange={() => setCashReceipt(true)}></input><label>현금영수증 신청</label>
                    <input className={styles.checkInput} type="radio" checked={!cashReceipt} name="cashReceipt" onChange={() => setCashReceipt(false)}></input><label>신청안함</label>
                </div>
                {cashReceipt &&
                    <div className={styles.checkBox}>
                        <input className={styles.checkInput} type="radio" checked={receiptType === "personal"} name="receiptType" value="personal" onChange={() => setReceiptType("personal")}></input><label>개인</label>
                        <input className={styles.checkInput} type="radio" checked={receiptType === "business"} name="receiptType" value="business" onChange={() => setReceiptType("business")}></input><label>사업자</label>
                    </div>
                }
                {(cashReceipt && receiptType === "personal") && 
                    <div className={styles.cashReceiptNumberBox}>
                        <select className={styles.cashReceiptNumber}>
                            <option>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select>
                        -
                        <input className={styles.cashReceiptNumber}></input>
                        -
                        <input className={styles.cashReceiptNumber}></input>
                    </div>
                }
                {(cashReceipt && receiptType === "business") && 
                    <div>
                        <input className={styles.cashReceiptNumber} placeholder="사업자번호"></input>
                    </div>
                }
            </div>
        </div>
    )
}