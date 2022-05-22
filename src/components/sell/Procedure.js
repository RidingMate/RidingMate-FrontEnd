import styled from 'styled-components'

const SellProcedure = styled.div`
  /* width: 216px; */
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .diagram_wrap {
    width: 171px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .circle {
      width: 10px;
      height: 10px;
      border: 2px solid #dddddd;
      border-radius: 50%;

      &.selected {
        width: 13px;
        height: 13px;
        border: 0px;
        background: #222222;
      }
    }

    .line {
      width: 75.5px;
      height: 3px;
      background-color: #dddddd;
    }
  }

  .text_wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .text {
      font-family: 'Apple SD Gothic Neo';
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      text-align: center;

      color: #999999;

      :not(:last-of-type) {
        margin-right: 13px;
      }

      &.selected {
        color: #222222;
      }
    }
  }
`
const Procedure = (props) => {
  const { name } = props

  return (
    <SellProcedure>
      <div className="diagram_wrap">
        <div className={`circle ${name === '바이크 선택' ? 'selected' : ''}`} />
        <div className="line" />
        <div
          className={`circle ${
            name === '바이크/거래 정보 입력' ? 'selected' : ''
          }`}
        />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="text_wrap">
        <div className={`text ${name === '바이크 선택' ? 'selected' : ''}`}>
          바이크 선택
        </div>
        <div
          className={`text ${
            name === '바이크/거래 정보 입력' ? 'selected' : ''
          }`}
        >
          바이크/거래 정보 입력
        </div>
        <div className="text">등록완료</div>
      </div>
    </SellProcedure>
  )
}

export default Procedure
