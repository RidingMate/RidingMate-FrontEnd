import * as S from './Arrow.style'

const Arrow = ({ src, reverse, onClick, width = '30px', height = '30px' }) => {
  return (
    <S.Arrow
      onClick={onClick}
      reverse={reverse}
      src={src}
      width={width}
      height={height}
    ></S.Arrow>
  )
}

export default Arrow
