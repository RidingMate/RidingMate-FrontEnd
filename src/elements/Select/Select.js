import * as S from './Select.style'

const Select = ({ width, name, defaultContent, handleChange, children }) => {
  return (
    <S.Select
      width={width}
      name={name}
      defaultValue="default"
      onChange={handleChange}
    >
      <option value="default">{defaultContent}</option>
      {children}
    </S.Select>
  )
}

export default Select
