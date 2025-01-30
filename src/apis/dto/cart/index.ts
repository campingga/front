import axios, { AxiosResponse } from "axios";

const CART_MODULE_URL = "/api/v1/cart";
const GET_CART_PRODUCT_ITEM_LIST_URL = (userId: number) => `${CART_MODULE_URL}/${userId}`;
const DELETE_CART_PRODUCT_ITEM_URL = (userId: number, productId: number) => `${CART_MODULE_URL}/${userId}/${productId}`;
const DELETE_SELECT_CART_PRODUCT_ITEM_URL = (userId: number) => `${CART_MODULE_URL}/${userId}`;
export const responseDataHandler = <T>(response: AxiosResponse<T, any>) => {
    const { data } = response;
    return data;
};

export const getCartProductList = async (userId: number) => {
    const responseBody = await axios.get(GET_CART_PRODUCT_ITEM_LIST_URL(userId))
        .then(responseDataHandler)
        .catch((error) => {
            console.log(error);
        })
    return responseBody;
}

export const deleteCartProductItem = async (userId: number, productId: number) => {
    const resposneBody = await axios.delete(DELETE_CART_PRODUCT_ITEM_URL(userId, productId))
        .then(responseDataHandler)
        .catch((error) => {
            console.log(error);
        })
        return resposneBody;
}

export const deleteSelectCartProductItem = async (userId: number, productIds: number[]) => {
    const resposneBody = await axios.post(DELETE_SELECT_CART_PRODUCT_ITEM_URL(userId), productIds)
        .then(responseDataHandler)
        .catch((error) => {
            console.log(error);
        })
        return resposneBody;
}