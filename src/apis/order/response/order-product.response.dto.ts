import { ResponseDto } from "src/apis/dto";
import OrderProductInfo from "src/types/order/orderProductInfo.interface";

export default interface OrderProductResponseDto extends ResponseDto {
    products: OrderProductInfo[]
}