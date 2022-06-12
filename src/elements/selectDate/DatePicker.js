import { useEffect } from 'react'
import * as S from './DatePicker.style'
import select_arrow from '../../assets/icons/mybike/select_arrow.png'

const DatePicker = ({ type }) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()

  useEffect(() => {
    const label_year = document.querySelector('.label')
    const optionItem_year = document.querySelectorAll('.optionItem')

    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect = (item) => {
      label_year.parentNode.classList.remove('active')
      label_year.innerHTML = item.textContent
    }
    // 옵션 클릭시 클릭한 옵션을 넘김
    optionItem_year.forEach((option, index) => {
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
    <S.Wrap className="box">
      <div className="select_box">
        <div className="btn_wrap">
          <button className="label">{year}</button>
          <img className="select_arrow" alt="select_arrow" src={select_arrow} />
          <ul className="optionList">
            {Array.from({ length: 50 }).map((item, idx) => {
              return (
                <li key={String(idx)} className="optionItem">
                  {year - idx}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="unit">년</div>
    </S.Wrap>
  )
}

export default DatePicker
