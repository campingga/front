import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartProductInfo from "src/types/cart/cartProductInfo.interface";
import { deleteCartProductItem, deleteSelectCartProductItem, getCartProductList } from "src/apis/dto/cart";
import { ResponseDto } from "src/apis/dto";
import CartProductResponseDto from "src/apis/dto/cart/response/cart-product.response.dto";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const userId = 1; // 추후 userStore 변경
    const [cartItemList, setCartItemList] = useState<CartProductInfo[]>([]);
    const [checkItemList, setCheckItemList] = useState<CartProductInfo[]>([]);
    const isAllChecked = cartItemList.length > 0 && checkItemList.length === cartItemList.length;
    const navigate = useNavigate();

    const toggleCheckItem = (productId: number) => {
        setCheckItemList((prev) => {
            if (prev.some((item) => item.productId === productId)) {
                return prev.filter((item) => item.productId !== productId);
            }

            const selectedItem = cartItemList.find((item) => item.productId === productId);
            return selectedItem ? [...prev, selectedItem] : prev;
        });
    };

    const toggleAllCheck = () => {
        setCheckItemList((prev) =>
            prev.length === cartItemList.length ? [] : [...cartItemList]
        );
    };

    const setNumberFormat = (number: number) => {
        return new Intl.NumberFormat('ko-KR').format(number);
    }

    const cartItemAllOrder = () => {
        if (checkItemList.length > 0) {
            navigate("/order", { state: { products: cartItemList } });
        }
        alert("장바구니가 비어있습니다.");
    }

    const cartSelectItemOrder = () => {
        if (checkItemList.length > 0) {
            navigate("/order", { state: { products: checkItemList } });
        }
        alert("장바구니가 비어있습니다.");
    }

    const buyNowItemOrder = (productNumber: number) => {
        const products = [];
        const selectItem = cartItemList.find((item) => item.productId === productNumber);
        products.push(selectItem);
        navigate("/order", { state: { products: products } });
    }

    const getCartProductInfoResponse = (responseBody: CartProductResponseDto | ResponseDto | null) => {
    
        const message = 
        !responseBody ? '서버에 문제가 있습니다.' :
        responseBody.code === 'AF' ? '잘못된 접근입니다.' :
        responseBody.code === 'DBE' ? '서버에 문제가 있습니다.' : '';

        const isSuccessed = responseBody !== null && responseBody.code === 'SU';
        if (!isSuccessed) {
            alert(message);
            return;
        }
        const { cartProductList } = responseBody as CartProductResponseDto;
        setCartItemList(cartProductList);
    }

    const deleteCartProductItemResponse = (responseBody: CartProductResponseDto | ResponseDto | null) => {
    
        const message = 
        !responseBody ? '서버에 문제가 있습니다.' :
        responseBody.code === 'AF' ? '잘못된 접근입니다.' :
        responseBody.code === 'DBE' ? '서버에 문제가 있습니다.' :
        responseBody.code === 'ECP' ? '장바구니가 비어있습니다.' : '';

        const isSuccessed = responseBody !== null && responseBody.code === 'SU';
        if (!isSuccessed) {
            alert(message);
            return;
        }
        getCartProductList(userId).then(getCartProductInfoResponse);

    }

    const deleteCartItem = (productId: number) => {
        deleteCartProductItem(userId, productId).then(deleteCartProductItemResponse);
        setCheckItemList((prev) => prev.filter((item) => item.productId !== productId));
    }

    const deleteSelectCartItem = () => {
        const productIds: Array<number> = [];
        checkItemList.map((item) => {
            productIds.push(item.productId);
        })

        deleteSelectCartProductItem(userId, productIds).then(deleteCartProductItemResponse);
        setCheckItemList([]);
    }

    useEffect(() => {
        getCartProductList(userId).then(getCartProductInfoResponse);
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>장바구니</h3>
            </div>
            <div className={styles.cartItemInfoContainer}>
                <table className={styles.cartInfoTable}>
                    <thead className={styles.cartInfoTableHead}>
                        <tr>
                            <th className={styles.cartInfoTableCheckTh}>
                                <input 
                                    type="checkbox"
                                    checked={isAllChecked}
                                    onChange={toggleAllCheck}
                                />
                            </th>
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
                        {cartItemList.map((item) => (
                            <tr key={item.productId}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={checkItemList.some((v) => v.productId == item.productId)}
                                        onChange={() => toggleCheckItem(item.productId)}
                                    />
                                </td>
                                <td className={styles.cartInfoTableTd}>
                                    <div className={styles.productImg}>
                                        <img src="/logo192.png" className={styles.itemImg}></img>
                                    </div>
                                </td>
                                <td className={`${styles.cartInfoTableDetailTd}`}>
                                    <div className={styles.cartInfoTableDetailBox}>
                                        <p className={styles.titleFont}>{item.productName}</p>
                                        <span className={styles.itemOption}>[옵션: {item.size} / {item.color}]</span>
                                    </div>
                                </td>
                                <td className={styles.cartInfoTableTd}>
                                    <div className={styles.itemCountChangeBtnBox}>
                                        <button className={styles.itemCountChangeBtn}><p className={styles.titleFont}>↑</p></button>
                                        <p>1</p>
                                        <button className={styles.itemCountChangeBtn}><p className={styles.titleFont}>↓</p></button>
                                    </div>
                                </td>
                                <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>{setNumberFormat(item.price)}원</p></td>
                                <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>10,000원</p></td>
                                <td className={styles.cartInfoTableTd}><p className={styles.cartInfoDetailFont}>무료</p></td>
                                <td className={styles.cartInfoTableTd}>
                                    <div className={styles.cartInfoTableSelectBox}>
                                        <button className={`${styles.cartInfoTableSelectBtn} ${styles.cartInfoTableBuyBtn}`} onClick={() => buyNowItemOrder(item.productId)}>바로 구매</button>
                                        <button className={styles.cartInfoTableSelectBtn} onClick={() => deleteCartItem(item.productId)}>삭제</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.cartItemBuyContainer}>
                <div className={styles.cartItemBuyBox}>
                    <span className={styles.itemOption}>선택상품</span>
                    <button className={styles.cartItemBuyBtn} onClick={deleteSelectCartItem}>삭제하기</button>
                    <button className={`${styles.cartItemBuyBtn} ${styles.cartItemOrderBtn}`} onClick={cartSelectItemOrder}>주문하기</button>
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
                <button className={`${styles.orderBtn} ${styles.allOrderBtn}`} onClick={cartItemAllOrder}>전체상품주문</button>
                <button className={styles.orderBtn} onClick={cartSelectItemOrder}>선택상품주문</button>
            </div>
        </div>
    )
}