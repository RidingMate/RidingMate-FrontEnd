import styled from 'styled-components'

const Wrap = styled.div`
  width: 290px;
  height: 385px;

  border: 10px solid #ffffff;
  border-radius: 25px;

  cursor: pointer;

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
  }

  .subTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #777777;
  }

  .img {
    width: 230px;
    height: 250px;
    border-radius: 15px;
    object-fit: cover;

    margin-top: 25px;
  }

  :not(:last-of-type) {
    margin-right: 80px;
  }
`
const Card = (props) => {
  const { title, subTitle, img } = props

  return (
    <Wrap>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <img className="img" src={img} alt={subTitle} />
    </Wrap>
  )
}

export default Card
