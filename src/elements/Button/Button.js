import { Btn } from './Button.style'

/* theme : button-black, button-grey, button-login 
button-login은 logo props에 컴포넌트 형식으로 이미지를 넣어주면 됩니다.
*/

const Button = ({
  onClick = () => '',
  theme = 'button-black',
  content,
  width = '250px',
  logo,
  type,
  className,
  children,
}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <Btn
      onClick={handleClick}
      type={type}
      className={className}
      theme={theme}
      width={width}
    >
      <div>{logo}</div>
      <div>{content}</div>
      {children}
    </Btn>
  )
}

export default Button
