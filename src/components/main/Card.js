import * as S from './style/CardStyle'
// import test_bike_img from './test_bike_1.png'
import test_bike_img_2 from './test_bike_2.png'

const Card = () => {
  // const test_img = "https://kream-phinf.pstatic.net/MjAyMjA1MTNfMiAg/MDAxNjUyNDA5NTQxNDc3.-fKtRIe7kVHKCJD4fugz6cA4R2E-h8P87SeEZ47whpYg.vuWnZDJw1T8a6kxIIfEfLAJh7S3UZ9mA5_r6bCISY0og.JPEG/a_b7a667361c084a9091ff2bc99251b5fb.jpg?type=m";

  return (
    <S.Card className="product_item">
      {/* a 태그, Link 예정 */}
      <a href="#" className="item_inner">
        <div className="thumb_box">
          <div className="product">
            <div className="picture product_img">
              <img className="image" alt="test_img" src={test_bike_img_2} />
            </div>
          </div>
          {/* <a href="#" aria-label="관심상품" className="btn_wish" /> */}
        </div>
        <div className="info_box">
          <div className="bike">
            <p className="name">Supreme x Stone Island - 22SS</p>
            <p className="model">혼다 Super Cub(2021)</p>
          </div>
          <div className="desc">
            <div className="cc">
              <div className="cc_num">998</div>
              <div className="cc_cc">cc</div>
            </div>
            <div className="slash">/</div>
            <div className="km">
              <div className="km_num">24,309</div>
              <div className="km_km">km</div>
            </div>
          </div>
          <div className="price">
            <div className="amount lg">
              <span className="num">1,259,000</span>
              <span className="won lg">원</span>
            </div>
          </div>
        </div>
      </a>
    </S.Card>
  )
}

export default Card
