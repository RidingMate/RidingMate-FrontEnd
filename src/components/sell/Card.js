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

  &.selected {
    border: 10px solid rgba(153, 153, 153, 0.5);
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
