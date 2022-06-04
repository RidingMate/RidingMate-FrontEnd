import * as S from './Input.style'

const Input = ({ type, name, placeholder, width, value, onChange, flex }) => {
  return (
    <S.Wrap>
      <S.MyInput
        name={name}
        type={type}
        placeholder={placeholder}
        width={width}
        value={value}
        onChange={onChange}
        flex={flex}
      />
    </S.Wrap>
  )
}

export default Input
