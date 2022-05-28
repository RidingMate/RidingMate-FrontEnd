import React from 'react'
import * as S from './InfoBox.style'

// theme : solid, border
const InfoBox = ({
  children,
  width = '470px',
  height = '90px',
  theme = 'border',
  className,
}) => {
  return (
    <S.InfoBox
      width={width}
      height={height}
      theme={theme}
      className={className}
    >
      {children}
    </S.InfoBox>
  )
}

export default InfoBox
