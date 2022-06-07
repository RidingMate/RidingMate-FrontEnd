import * as S from './Select.style'

const Select = ({
  width = '400px',
  height = '60px',
  name,
  defaultContent,
  handleChange,
  children,
}) => {
  return (
    <S.Select
      width={width}
      height={height}
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
