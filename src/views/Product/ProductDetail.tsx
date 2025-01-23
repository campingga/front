import React, { useEffect, useState } from 'react'
import './ProductDetail.css';

// component: 상품정보 컴포넌트 //
function ProductDetailTop() {

  // state: 상품 이미지 //
  const [mainImage, setMainImage] = useState<string>('https://via.placeholder.com/300');
  const [previewImages, setPreviewImages] = useState<string[]>([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ]);

  // state: 상품 가격 정보 //
  const [productName, setProductName] = useState('상품 이름');
  const [price, setPrice] = useState(100000);
  const [discountPrice, setDiscountPrice] = useState(80000);
  const [discountPeriod, setDiscountPeriod] = useState('2025-01-25');
  const [deliveryCharge, setDeliveryCharge] = useState(3000);
  const [totalPrice, setTotalPrice] = useState(0);

  // state: 상품 옵션 정보 //
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [productCount, setProductCount] = useState(0);

  const colors = ['빨강', '파랑', '초록', '검정'];
  const sizes = ['S', 'M', 'L', 'XL'];

  // event handler: 이미지 변경 이벤트 처리 //
  const onImageChangeClickHandler = (image: string) => {
    setMainImage(image);
  };

  // event handler: 상품 수량 증가이벤트 처리 //
  const onIncreaseClickHandler = () => {
    setProductCount(productCount + 1);
  }

  // event handler: 상품 수량 감소 이벤트 처리 //
  const onDecreaseClickHandler = () => {
    if (productCount < 1) {
      return;
    }
    setProductCount(productCount - 1);
  }

  // effect: 상품 총가격 바라보는 이펙트 //
  useEffect(()=> {
    const effectivePrice = discountPrice || price;
    setTotalPrice(productCount * effectivePrice);
  }, [productCount, price, discountPrice])

  // render: 상품정보 컴포넌트 렌더딩 //
  return (
    <div className='product-box-contain'>

      <div className='product-image-box'>

      <div className="product-image">
        <img src={mainImage} alt="상품 메인 이미지" style={{ width: '300px', height: '300px' }} />
      </div>

      <div className="product-previewImage-image-box" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {previewImages.map((image, index) => (
          <div
            key={index}
            className="product-previewImage-image"
            onClick={() => onImageChangeClickHandler(image)} // 클릭 시 메인 이미지 변경
          >
            <img src={image} alt={`미리보기 ${index + 1}`} style={{ width: '100px', height: '100px' }} />
          </div>
        ))}
      </div>
        
      </div>

      <div className='product-information-box'>

        <div className='product-name'>{productName}</div>

        <div className='product-information-price-contain'>
          <div className='product-information-price-box'>
            <div className='product-information-text-type-1'>판매가</div>
            <div className='product-information-price'>{price}</div>
          </div>
          <div className='product-information-discount-box'>
            <div className='product-information-text-type-1'>할인가</div>
            <div className='product-information-discount'>{discountPrice}</div>
          </div>
          <div className='product-information-discount-period-box'>
            <div className='product-information-text-type-1'>할인 기간</div>
            <div className='product-information-discount-period'>{discountPeriod}</div>
          </div>
          <div className='product-information-delivery-charge-box'>
            <div className='product-information-text-type-1'>배송비</div>
            <div className='product-information-delivery-charge'>{deliveryCharge}</div>
          </div>
        </div>

        <div className='product-information-option-box'>

          <div className='product-information-color-option'>
            <div className='product-information-text-type-1'>색상</div>
            <select
              className="product-information-option"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="" disabled>
                - 옵션을 선택해 주세요
              </option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className='product-information-size-option'>
            <div className='product-information-text-type-1'>사이즈</div>
            <select
              className="product-information-option"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="" disabled>
                - 옵션을 선택해 주세요
              </option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className='product-total-count-box'>
            <div className='product-total-count-text'>수량</div>
            <div className='product-total-count-increase-decrease'>
              <div className='product-total-count-decrease' onClick={onDecreaseClickHandler}>-</div>
              <div>{productCount}</div>
              <div className='product-total-count-increase' onClick={onIncreaseClickHandler}>+</div>
            </div>
          </div>

        </div>

        <div className='product-information-total-price-box'>
          <div className='product-information-text-type-3'>총 상품금액</div>
          <div className='product-information-total-price'>{totalPrice}</div>
        </div>

        <div className='product-information-button-box'>
          <div className='product-information-text-purchase-button'>구매하기</div>
          <div className='product-information-text-cart-button'>장바구니</div>
          <div className='product-information-wish-button'>★</div>
        </div>

      </div>
    </div>
  )

}

// component: 상품상세정보 컴포넌트 //
function ProductDetailMid() {

  // state: 상품상세정보 카테고리 선택 상태 //
  const [category, setCategory] = useState<string>("상품상세정보");

  // state: 상품 후기 정보 통계 상태 //
  const [reviewStatistics, setReviewStatistics] = useState({
    totalReviews: 120,
    imageReviews: 45,
    averageScore: 4.5,
    scoreDistribution: [
      { score: 5, count: 80 },
      { score: 4, count: 25 },
      { score: 3, count: 10 },
      { score: 2, count: 3 },
      { score: 1, count: 2 },
    ],
  });

  // state: 후기 정보 상태 //
  const [reviews, setReviews] = useState([
    {
      id: 1,
      score: 5,
      nickname: "사용자1",
      date: "2025-01-19",
      text: "상품이 정말 마음에 들어요!",
    },
    {
      id: 2,
      score: 4,
      nickname: "사용자2",
      date: "2025-01-18",
      text: "가격 대비 괜찮은 상품입니다.",
    },
  ]);

  // state: 후기 리스트 상태 //
  // riview-category
  const [riviewCategory, setRiviewCategory] = useState('recommendation');

  
  const totalReviewCount = reviewStatistics.scoreDistribution.reduce(
    (acc, item) => acc + item.count,
    0
  );

  const handleReport = () => {
    window.confirm("신고하시겠습니까?");
  };


  const categories = [
    "상품상세정보",
    "사이즈표",
    "후기",
    "상품문의",
    "쇼핑가이드",
  ];

  // render: 상품상세정보 컴포넌트 렌더딩 //
  return (
    <div className='product-detail-mid'>

      <div className="product-detail-information-category">
        <div className="product-detail-information-category-text">
          {categories.map((item) => (
            <div
              key={item}
              className={`product-category-item ${category === item ? "selected" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div></div>

      <div className='product-riview-statistics-box'>
        <div className='product-riview-statistics-review-count'>
          <div className='product-riview-statistics-total-review-count'>총 후기 {reviewStatistics.totalReviews} 건</div>
          <div className='product-riview-statistics-image-review-count'>사진후기 {reviewStatistics.imageReviews} 건</div>
        </div>
        <div className='product-riview-statistics-score'>{reviewStatistics.averageScore.toFixed(1)}</div>
        <div className="product-review-statistics-graph">
          {reviewStatistics.scoreDistribution.map((item) => {
            const percentage = ((item.count / totalReviewCount) * 100).toFixed(1);
            return (
              <div key={item.score} className="score-bar">
                <span>{item.score}점:</span>
                <span>
                  {item.count}개 ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='product-review-user-list-top'>

        <div className='prrduct-riview-user-list-top-box'>
          <div className='product-riview-total-count'>후기 {reviewStatistics.totalReviews} 건</div>
          <div className='product-riview-category'>
            <div
              className={`product-riview-recommendation ${riviewCategory === 'recommendation' ? 'active' : ''}`}
              onClick={() => setRiviewCategory('recommendation')}
            >
              추천순
            </div>
            <div
              className={`product-riview-latest ${riviewCategory === 'latest' ? 'active' : ''}`}
              onClick={() => setRiviewCategory('latest')}
            >
              최신순
            </div>
            <div
              className={`product-riview-horoscope ${riviewCategory === 'horoscope' ? 'active' : ''}`}
              onClick={() => setRiviewCategory('horoscope')}
            >
              별점순
            </div>
          </div>
        </div>
        
      </div>

      <div className="product-review-user-list">
        {reviews.map((review) => (
          <div key={review.id} className="product-review-user">
            
            <div className='product-review-left'>
              <div className="product-review-score">점수: {review.score}</div>
              <div className="product-review-user-nickname">닉네임: {review.nickname}</div>
              <div className="product-review-date">작성일: {review.date}</div>
            </div>
            
            <div className='product-review-right'>
              <div className="product-review-text">후기: {review.text}</div>
              <div
                className="product-review-report"
                style={{ cursor: "pointer", color: "red" }}
                onClick={handleReport}
              >
                신고/차단
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
    
  )

}

// component: 상품 주문 페이지 컴포넌트 //
export default function ProductDetail() {

  // render: 상품 주문 페이지 컴포넌트 렌더링 //
  return (
    <div className='product-detail-render'>
      <ProductDetailTop />
      <ProductDetailMid />
    </div>
  )
}
