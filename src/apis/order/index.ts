import axios, { AxiosResponse } from "axios";
import { CAMPING_GA_DOMAIN } from "src/apis";
import OrderProductRequestDto from "./request/order-product.request.dto";

const ORDER_MODULE_URL = `${CAMPING_GA_DOMAIN}/api/v1/order`;

const GET_ORDER_PRODUCT_LIST = `/api/v1/order`;

export const responseDataHandler = <T>(response: AxiosResponse<T, any>) => {
    const { data } = response;
    return data;
};

export const getOrderProductList = async (requestBody: OrderProductRequestDto[]) => {
    const responseBody = await axios.post(GET_ORDER_PRODUCT_LIST, requestBody)
        .then(responseDataHandler)
        .catch((error) => {
            console.log(error);
        })
    return responseBody;
}