import { useState, useRef } from 'react'
import * as S from './Select.style'

const Select = ({
  width = '400px',
  height = '60px',
  defaultContent,
  children,
  className,
  name,
}) => {
  // console.log(list)
  // // console.log(list.parentNode.parentNode)
  // // select_box.forEach((el) => {
  // //   // el.addEventListener('click', handleOpen)
  // //   console.log(el)
  // // })

  // const [open, setOpen] = useState(false)
  // const dropdownRef = useRef()

  // const handleClose = (e) => {
  //   if (open) {
  //     console.log('ref: ', dropdownRef.current.contains(e.target))
  //     console.log('e.target: ', e.target)
  //   }
  //   // if (open && !dropdownRef.current.contains(e.target)) {
  //   //   console.log('click')
  //   // }
  // }

  // const list_item = document.querySelector('.list-item')
  const [open, setOpen] = useState(false)
  const listRef = useRef()

  const handleOpen = () => setOpen(!open)

  // select_box.forEach((el) => console.log(el))

  return (
    <S.Wrap className={className}>
      <S.Select
        className="select-box"
        placeholder={defaultContent}
        width={width}
        height={height}
        name={name}
        onClick={handleOpen}
      />
      <S.Dropdown className="dropdown-list" open={open} ref={listRef}>
        <ul>
          {children.map((data, idx) => (
            <li className="list-item" key={idx}>
              {data}
            </li>
          ))}
        </ul>
      </S.Dropdown>
    </S.Wrap>
  )
}

export default Select
