import CartProductInfo from "src/types/cart/cartProductInfo.interface";
import ResponseDto from "../../response.dto";

export default interface CartProductResponseDto extends ResponseDto {
    cartProductList: CartProductInfo[]
}