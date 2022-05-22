import React from 'react'
import * as S from './PageHeader.style.js'

const PageHeader = ({ main_title, sub_title, className }) => {
  return (
    <S.PageHeaderWrap className={className}>
      <h1>{main_title}</h1>
      <p>{sub_title}</p>
    </S.PageHeaderWrap>
  )
}

export default PageHeader
