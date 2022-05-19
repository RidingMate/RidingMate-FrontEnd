import styled from 'styled-components'
import SearchIcon from './searchIcon.svg'

const Wrap = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #333333;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  input {
    width: 100%;
    border: none;
  }

  input::placeholder {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #999999;
  }

  input:focus {
    outline: none;
  }
`

// const SearchWrap = styled.div`
//   input {
//   }
// `

const SearchForm = () => {
  return (
    <Wrap>
      <input type="text" placeholder="모델명, 제조사, 거래제목 등" />
      <img src={SearchIcon} alt="검색" />
    </Wrap>
  )
}

export default SearchForm
