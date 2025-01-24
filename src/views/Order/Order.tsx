import { useLocation } from "react-router-dom";
import styles from "./Order.module.css";
import { useEffect, useState } from "react";
import { getOrderProductList } from "src/apis/order";
import OrderProductResponseDto from "src/apis/order/response/order-product.response.dto";
import { ResponseDto } from "src/apis/dto";
import OrderProductInfo from "src/types/order/orderProductInfo.interface";
import DaumPostCode from 'react-daum-postcode';



export default function Order() {
    const [selectPayBtn, setSelectPayBtn] = useState(0);
    const [login, setLogin] = useState(false);
    const location = useLocation();
    const productList = location.state?.products;
    const [orderProductList, setOrderProductList] = useState<OrderProductInfo[]>([]);

    const [totalItemOriginPrice, setTotalItemOriginPrice] = useState(0);
    const [totalDeliveryCharge, setTotalDeliveryCharge] = useState(0);
    const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
    const [addressSearchModal, setAddressSearchModal] = useState(false);
    const [addressData, setAddressData] = useState({ zipCode: "", address: "", recipient: "", addressDetail: "", phoneCenterNumber: "", phoneLastNumber: ""});


    const setNumberFormat = (number: number) => {
        return new Intl.NumberFormat('ko-KR').format(number);
    }
    const getOrderProductInfoResponse = (responseBody: OrderProductResponseDto | ResponseDto | null) => {

        const message = 
        !responseBody ? '서버에 문제가 있습니다.' :
        responseBody.code === 'AF' ? '잘못된 접근입니다.' :
        responseBody.code === 'DBE' ? '서버에 문제가 있습니다.' : '';

        const isSuccessed = responseBody !== null && responseBody.code === 'SU';
        if (!isSuccessed) {
            alert(message);
            return;
        }
        const { products } = responseBody as OrderProductResponseDto;
        setOrderProductList(products);
    }

    const setOrderItemListPrice = () => {
        const totalItemPrice = orderProductList.reduce((acc, item) => acc + item.price, 0);
        setTotalItemOriginPrice(totalItemPrice);
    }

    useEffect(() => {
        getOrderProductList(productList).then(getOrderProductInfoResponse);
    }, [])

    useEffect(() => {
        setOrderItemListPrice();
    }, [orderProductList]);
    // 서버로 보낼 데이터 셋
    // {
    //     "orderRequestDto": {
    //       "userId": null,
    //       "customerName": "홍길동",
    //       "phoneNumber": "01012345678",
    //       "email": "hong@naver.com",
    //       "address": "부산시 사상구 XX대로 12",
    //       "addressDetail": "XX아파트 101동 101호",
    //       "zipCode": "123456",
    //       "orderPassword": "123456",
    //       "massage": "부재시 문앞 배송",
    //       "status": 0,
    //       "finalPrice": 30000,
    //       "price": 33000
    //     },
    //     "products": [
    //       {
    //               "productId": 1,
    //               "count": 1,
    //               "size": "XL",
    //               "color": "BLACK"
    //           },
    //           {
    //               "productId": 2,
    //               "count": 1,
    //               "size": "L",
    //               "color": "WHITE"
    //           }
    //     ]
    //   }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>주문/결제</h3>
            </div>
            <div className={styles.orderDetailBox}>
                <span className={styles.subject}>배송지</span>
                <div className={`${styles.addressBox} ${styles.commonBox}`}>
                    {login &&
                        <>
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
                        </>
                    }
                    {!login &&
                        <AddressSearch setAddressSearchModal={setAddressSearchModal} addressData={addressData} setAddressData={setAddressData}></AddressSearch>
                    }
                    <select className={styles.orderSelect}>
                        <option>배송메모를 선택해주세요</option>
                        <option>배송 전 연락주세요.</option>
                        <option>부재 시 연락주세요.</option>
                        <option>부재 시 경비실에 맡겨주세요.</option>
                    </select>
                </div>
                <span className={styles.subject}>주문상품</span>
                <div className={`${styles.productListBox} ${styles.commonBox}`}>
                    <div className={styles.productList}>
                        {orderProductList.map((item) => (
                            <div className={styles.productBox}>
                                <div className={styles.productImg}>
                                    <img src="/logo192.png" className={styles.itemImg}></img>
                                </div>
                                <div className={styles.productDetail}>
                                    <p className={styles.titleFont}>{item.name}</p>
                                    <span className={styles.itemOption}>[옵션: {item.size} / {item.color}]</span>
                                    <span className={styles.itemOption}>수량: {item.count}개</span>
                                    <p className={styles.price}>금액:
                                        <p className={styles.originPrice}>38,000</p>
                                        <p>{setNumberFormat(item.price)} 원</p>
                                    </p>
                                </div>
                                <div className={styles.deliveryCharge}>
                                    <p style={{ width: "100%", textAlign: "end", paddingRight: "3px"}}>배송비 3,000원</p>
                                </div>
                            </div>
                        ))}
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
                                    <p className={styles.totalProductPrice}>{setNumberFormat(totalItemOriginPrice)}원</p>
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
            {addressSearchModal && (
                <div className={styles.modalArea}>
                    <AddressSearchModal setAddressSearchModal={setAddressSearchModal} addressData={addressData} setAddressData={setAddressData}></AddressSearchModal>
                </div>
            )}
        </div>
    )
}

type AddressSearchModalProps = {
    setAddressSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
    addressData: { zipCode: string, address: string, recipient: string, addressDetail: string, phoneCenterNumber: string, phoneLastNumber: string}; // 주소 데이터 타입
    setAddressData: React.Dispatch<React.SetStateAction<{ zipCode: string, address: string, recipient:string, addressDetail: string, phoneCenterNumber: string, phoneLastNumber: string}>>;
};

const AddressSearch: React.FC<AddressSearchModalProps> = ({ setAddressSearchModal, addressData, setAddressData }) => {

    return(
        <>
            <div className={styles.addressBox}>
                <div className={styles.bankSelect}>
                    <p className={styles.addressSearchFont}>받는사람<span className={styles.blueText}>*</span></p>
                    <input className={styles.bankView} value={addressData.recipient} onChange={(e) => setAddressData((prev) => ({ ...prev, recipient: e.target.value}))} ></input>
                </div>
                <div className={styles.bankSelect}>
                    <p className={styles.addressSearchFont}>주소<span className={styles.blueText}>*</span></p>
                    <input className={styles.bankView} placeholder="우편번호" value={addressData.zipCode} readOnly onClick={() => setAddressSearchModal(true)}></input>
                    <button className={styles.addressSearchBtn} onClick={() => setAddressSearchModal(true)}>주소검색</button>
                </div>
                <div className={styles.bankSelect}>
                    <p className={styles.addressSearchFont}></p>
                    <input className={styles.bankView} placeholder="주소" value={addressData.address}></input>
                </div>
                <div className={styles.bankSelect}>
                    <p className={styles.addressSearchFont}></p>
                    <input className={styles.bankView} placeholder="상세주소" value={addressData.addressDetail} onChange={(e) => setAddressData((prev) => ({ ...prev, addressDetail: e.target.value}))}></input>
                </div>
                <div className={styles.bankSelect}>
                    <p className={styles.addressSearchFont}>전화번호<span className={styles.blueText}>*</span></p>
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
                        <input className={styles.cashReceiptNumber} value={addressData.phoneCenterNumber} onChange={(e) => setAddressData((prev) => ({ ...prev, phoneCenterNumber: e.target.value}))}></input>
                        -
                        <input className={styles.cashReceiptNumber} value={addressData.phoneLastNumber} onChange={(e) => setAddressData((prev) => ({ ...prev, phoneLastNumber: e.target.value}))}></input>
                    </div>
                </div>
            </div>
        </>
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



const AddressSearchModal: React.FC<AddressSearchModalProps> = ({ setAddressSearchModal, setAddressData }) => {

    const onCompletePost = (data: any) => {
        setAddressSearchModal(false);
        setAddressData(((prev) => ({
            ...prev,
            zipCode:  data.zonecode,
            address: data.address
        })))
    }

    return (
        <div className={styles.addressSearchContainer}>
            <div className={styles.closeBtnBox}>
                <button className={styles.closeBtn} onClick={() => setAddressSearchModal(false)}>X</button> 
            </div>
            <DaumPostCode className={styles.postCode} onComplete={onCompletePost}></DaumPostCode>
        </div>
    )
}