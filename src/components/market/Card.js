import styled from 'styled-components'

const Wrap = styled.div`
  /* width: 290px;ㅈ
  height: 385px; */

  cursor: pointer;

  .img {
    width: 230px;
    height: 250px;
    border-radius: 15px;
    object-fit: cover;
  }

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #222222;

    /* margin-top: 19px; */
  }

  .subTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #222222;
    margin-top: 5px;
  }

  .info {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: right;

    color: #777777;
    margin-top: 20px;
  }

  .price {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: right;

    /* identical to box height */

    color: #222222;
    margin-top: 5px;
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
