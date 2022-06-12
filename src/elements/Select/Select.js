import React, { useEffect } from 'react'
import * as S from './Select.style'

const Select = ({
  width = '400px',
  height = '60px',
  defaultContent,
  children,
  className,
  name,
}) => {
  useEffect(() => {
    const inputs = document.querySelectorAll('.input')

    inputs.forEach((input) => {
      input.addEventListener('click', () => {
        const list = input.nextElementSibling
        const items = list.querySelectorAll('.option-item')
        clickLabel(input, items)
      })
    })

    const clickLabel = (input, items) => {
      inputs.forEach((clickInput) => {
        if (input !== clickInput) {
          clickInput.parentNode.classList.remove('active')
        }
      })

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
      input.innerHTML = item.textContent
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

    window.addEventListener('click', (e) => handleClose(e))

    return () => window.removeEventListener('click', (e) => handleClose(e))
  }, [])

  return (
    <S.Container className={className}>
      <S.Wrap width={width} height={height}>
        <input
          className="input"
          placeholder={defaultContent}
          readOnly
          name={name}
        />
        <ul className="dropdown">
          {children.map((data, idx) => (
            <li className="option-item" key={idx}>
              {data}
            </li>
          ))}
        </ul>
      </S.Wrap>
    </S.Container>
  )
}

export default React.memo(Select)
