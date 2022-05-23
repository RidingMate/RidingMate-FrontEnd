import styled from 'styled-components'

const Wrap = styled.div`
  /* width: 290px;ㅈ
  height: 385px; */

  cursor: pointer;

  .img {
    width: 200px;
    height: 210px;
    border-radius: 15px;
    object-fit: cover;
  }

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #222222;

    /* margin-top: 10px; */
  }

  .subTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #222222;

    margin-top: 3px;
  }

  .info {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
    color: #777777;

    margin-top: 10px;
  }

  .price {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    color: #222222;

    margin-top: 3px;
  }
`
const Card = (props) => {
  const { img, title, subTitle, cc, km, price } = props

  return (
    <Wrap>
      <img className="img" src={img} alt={subTitle} />
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <div className="info">
        {cc}cc / {km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km
      </div>
      <div className="price">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
      </div>
    </Wrap>
  )
}

export default Card
