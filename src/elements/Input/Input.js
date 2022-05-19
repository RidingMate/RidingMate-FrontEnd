import * as S from './Input.style'

const Input = ({ type, name, placeholder, width, value, onChange }) => {
  return (
    <S.Wrap>
      <S.MyInput
        name={name}
        type={type}
        placeholder={placeholder}
        width={width}
        value={value}
        onChange={onChange}
      />
    </S.Wrap>
  )
}

export default Input
