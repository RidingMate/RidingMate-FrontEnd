import { useEffect } from 'react'
import DatePicker from '../../../../elements/selectDate/DatePicker'
import * as S from './AddRefueling.style'
import select_arrow from '../../../../assets/icons/mybike/select_arrow.png'

const MaintenancePage = () => {
  const now = new Date()
  // const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()

  // const yearRef = useRef('')
  // const monthRef = useRef('')
  // const dateRef = useRef('')
  // const amountRef = useRef(0)
  // const mileageRef = useRef(0)
  // const priceRef = useRef(0)

  useEffect(() => {
    const label_year = document.querySelector('.label_month')
    const optionItem_year = document.querySelectorAll('.optionItem_month')

    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect = (item) => {
      label_year.parentNode.classList.remove('active')
      label_year.innerHTML = item.textContent
    }
    // 옵션 클릭시 클릭한 옵션을 넘김
    optionItem_year.forEach((option) => {
      option.addEventListener('click', () => handleSelect(option))
    })

    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    label_year.addEventListener('click', () => {
      if (label_year.parentNode.classList.contains('active')) {
        label_year.parentNode.classList.remove('active')
      } else {
        label_year.parentNode.classList.add('active')
      }
    })
  }, [])

  return (
    <S.Wrap>
      <S.Header>
        <h1>주유기록 추가하기</h1>
      </S.Header>
      <S.Forms>
        <div className="form_box">
          <div className="title">주유 날짜</div>
          <div className="input_wrap">
            <div className="date_wrap">
              <DatePicker />
              <div className="box month">
                <div className="select_box month">
                  <div className="btn_wrap">
                    <button className="label label_month">{month}</button>
                    <img
                      className="select_arrow"
                      alt="select_arrow"
                      src={select_arrow}
                    />
                    <ul className="optionList">
                      {Array.from({ length: 12 }).map((item, idx) => {
                        return (
                          <li
                            key={String(idx)}
                            className="optionItem optionItem_month"
                          >
                            {idx + 1}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="unit">월</div>
              </div>
              <div className="box date">
                <div className="select_box date">
                  <div className="btn_wrap">
                    <button className="label label_date">{date}</button>
                    <img
                      className="select_arrow"
                      alt="select_arrow"
                      src={select_arrow}
                    />
                    {/* <ul className="optionList">
                      {Array.from({ length: 30 }).map((item, idx) => {
                        return (
                          <li key={String(idx)} className="optionItem optionItem_date">
                            {idx + 1}
                          </li>
                        )
                      })}
                    </ul> */}
                  </div>
                </div>
                <div className="unit">일</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form_box">
          <div className="title">주유량(L)</div>
          <div className="input_wrap">
            <S.Input type={'number'} placeholder={'입력하세요.'} />
          </div>
        </div>
        <div className="form_box">
          <div className="title">현재 주행거리(km)</div>
          <div className="input_wrap">
            <S.Input type={'number'} placeholder={'입력하세요.'} />
          </div>
        </div>
        <div className="form_box">
          <div className="title">가격(원)</div>
          <div className="input_wrap">
            <S.Input type={'number'} placeholder="입력하세요." />
          </div>
        </div>
      </S.Forms>
      <S.Button>추가하기</S.Button>
    </S.Wrap>
  )
}

export default MaintenancePage
