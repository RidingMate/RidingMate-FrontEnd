import styled from 'styled-components'

const Wrap = styled.div`
  /* width: 290px;
  height: 385px; */

  padding: 30px;

  cursor: pointer;

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #222222;
  }

  .subTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #777777;

    margin-top: 5px;
  }

  .img {
    width: 200px;
    height: 210px;
    border-radius: 15px;
    object-fit: cover;

    margin-top: 15px;
  }

  &.selected {
    outline: 10px solid #999999;
    border-radius: 25px;
  }
`
const Card = (props) => {
  const { title, subTitle, img, selected } = props

  return (
    <Wrap className={selected.includes(title) ? 'selected' : ''}>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <img className="img" src={img} alt={subTitle} />
    </Wrap>
  )
}

export default Card
