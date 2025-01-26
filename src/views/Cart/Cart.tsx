import styles from "./Cart.module.css";

export default function Cart() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>장바구니</h3>
            </div>
            <div className={styles.cartItemInfoContainer}>
                <table className={styles.cartInfoTable}>
                    <thead className={styles.cartInfoTableHead}>
                        <tr>
                            <th className={styles.cartInfoTableCheckTh}><input type="checkbox"></input></th>
                            <th className={styles.cartInfoTableTh}>사진</th>
                            <th className={styles.cartInfoTableDetailTh}>상품정보</th>
                            <th className={styles.cartInfoTableTh}>수량</th>
                            <th className={styles.cartInfoTableTh}>상품 금액</th>
                            <th className={styles.cartInfoTableTh}>기본할인금액</th>
                            <th className={styles.cartInfoTableTh}>배송비</th>
                            <th className={styles.cartInfoTableTh}>선택</th>
                        </tr>
                    </thead>
                    <tbody className={styles.cartInfoTableBody}>
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td className={styles.cartInfoTableTd}>
                                <div className={styles.productImg}>
                                    <img src="/logo192.png" className={styles.itemImg}></img>
                                </div>
                            </td>
                            <td className={`${styles.cartInfoTableDetailTd}`}>
                                <div className={styles.cartInfoTableDetailBox}>
                                    <p className={styles.titleFont}>룩 플리츠 롱와이드P</p>
                                    <span className={styles.itemOption}>[옵션: Free / 블랙]</span>
                                </div>
                            </td>
                            <td className={styles.cartInfoTableTd}>
                                <div className={styles.itemCountChangeBtnBox}>
                                    <button className={styles.itemCountChangeBtn}><p className={styles.titleFont}>↑</p></button>
                                    <p>1</p>
                                    <button className={styles.itemCountChangeBtn}><p className={styles.titleFont}>↓</p></button>
                                </div>
                            </td>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>38,000원</p></td>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>10,000원</p></td>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>무료</p></td>
                            <td className={styles.cartInfoTableTd}>
                                <div className={styles.cartInfoTableSelectBox}>
                                    <button className={`${styles.cartInfoTableSelectBtn} ${styles.cartInfoTableBuyBtn}`}>바로 구매</button>
                                    <button className={styles.cartInfoTableSelectBtn}>삭제</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.cartItemBuyContainer}>
                <div className={styles.cartItemBuyBox}>
                    <span className={styles.itemOption}>선택상품</span>
                    <button className={styles.cartItemBuyBtn}>삭제하기</button>
                    <button className={`${styles.cartItemBuyBtn} ${styles.cartItemOrderBtn}`}>주문하기</button>
                </div>
            </div>
            <div className={styles.cartItemInfoContainer}>
                <table className={styles.cartInfoTable}>
                    <thead className={styles.cartInfoTableHead}>
                        <tr>
                            <th className={styles.cartInfoTableTh}>전체 상품금액</th>
                            <th className={styles.cartInfoTableTh}>전체 배송비</th>
                            <th className={styles.cartInfoTableTh}>전체 할인금액</th>
                            <th className={styles.cartInfoTableDetailTh}>총합</th>
                        </tr>
                    </thead>
                    <tbody className={styles.cartInfoTableBody}>
                        <tr>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartTotalPriceFont}>38,000원</p></td>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartTotalPriceFont}>+ 0원</p></td>
                            <td className={styles.cartInfoTableTd}><p className={styles.cartTotalPriceFont}>- 10,000원</p></td>
                            <td className={`${styles.cartInfoTableTd}`}><p className={styles.cartTotalPriceFont}>= 28,000원</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.orderContainer}>
                <button className={`${styles.orderBtn} ${styles.allOrderBtn}`}>전체상품주문</button>
                <button className={styles.orderBtn}>선택상품주문</button>
            </div>
        </div>
    )
}