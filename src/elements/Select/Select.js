import React, { useEffect } from 'react'
import * as S from './Select.style'

const Select = ({
  width = '400px',
  height = '60px',
  defaultContent,
  children,
  className,
  name,
  onChange,
  onClick,
}) => {
  useEffect(() => {
    // 모든 .input div 선택
    const inputs = document.querySelectorAll('.input')

    inputs.forEach((input) => {
      input.addEventListener('click', () => {
        const list = input.nextElementSibling // input 다음에 있는 element -> dropdown
        const items = list.querySelectorAll('.option-item')
        clickInput(input, items) // 각각의 input과 그에 따른 items(options)들
      })
    })
    // input을 클릭하면 실행되는 함수
    // 클릭한 input /items(dropdown options)
    const clickInput = (input, items) => {
      inputs.forEach((clickInput) => {
        /* 다른 select 눌렀을 때 처리*/
        // 위의 forEach에서 클릭한 input과 clickInput 함수 안에서
        // 클릭한 Input이 다르면 active 클래스 제거
        if (input !== clickInput) {
          clickInput.parentNode.classList.remove('active')
        }
      })

      // input.parentNode : .input과 .dropdown을 감싸고 있는 부모 노드
      if (input.parentNode.classList.contains('active')) {
        input.parentNode.classList.remove('active')
        items.forEach((item) => {
          item.removeEventListener('click', () => {
            handleSelect(input, item)
          })
        })
      } else {
        input.parentNode.classList.add('active')
        items.forEach((item) => {
          item.addEventListener('click', () => {
            handleSelect(input, item)
          })
        })
      }
    }

    const handleSelect = (input, item) => {
      // list의 item을 클릭하면 input의 innerHTML에 선택한 items을 넣는다
      // 그리고 active 클래스 제거
      // input.setAttribute('placeholder', item.textContent)
      input.setAttribute('value', item.textContent)
      input.parentNode.classList.remove('active')
    }

    const handleClose = (e) => {
      if (
        !e.target.classList.contains('input') &&
        !e.target.classList.contains('option-item')
      ) {
        inputs.forEach((input) => {
          input.parentNode.classList.remove('active')
        })
      }
    }
    // 외부 클릭했을때 dropdown리스트 close처리
    window.addEventListener('click', (e) => handleClose(e))

    return () => window.removeEventListener('click', (e) => handleClose(e))
  }, [])

  // const onClick = (e) => {
  //   e.preventDefault()
  //   const value = e.target.innerHTML
  //   const name = e.target.parentNode.parentNode.firstChild.name
  // }

  return (
    <S.Container className={className}>
      <S.Wrap width={width} height={height}>
        <input
          className="input"
          placeholder={defaultContent}
          readOnly
          name={name}
          onChange={onChange}
        />
        <ul className="dropdown">
          {children.map((data, idx) => (
            <button className="option-item" key={idx} onClick={onClick}>
              {data}
            </button>
          ))}
        </ul>
      </S.Wrap>
    </S.Container>
  )
}

export default React.memo(Select)
