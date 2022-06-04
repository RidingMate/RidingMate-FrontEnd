import styled from 'styled-components'
import SortIcon from '../../assets/images/pages/market/sortIcon.svg'
import selectIcon from '../../assets/images/pages/market/selectIcon.svg'

const NoticeContainer = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-between;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  color: #333333;

  padding-top: 21px;

  margin-top: 34px;
  margin-bottom: 41px;

  img {
    cursor: pointer;
  }

  div {
    cursor: pointer;
  }

  div:hover {
    text-decoration-line: underline;
  }
`
const SearchContainer = styled.div`
  width: 40%;
  margin-bottom: 105px;
`

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 15px 10px;
`
const TagItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 9px;
  height: 35px;

  background: #f1f1f1;
  border-radius: 10px;

  /* margin-right: 15px; */

  span {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    /* line-height: 16px; */
    color: #222222;

    margin-right: 21px;
  }

  img {
    cursor: pointer;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const FilterContainer = styled.div`
  width: 265px;
  margin-right: 30px;
  margin-bottom: 138px;

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #222222;
  }
`

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #222222;

  margin-bottom: 20px;

  select {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 88px;
    height: 17px;

    border: none;
    outline: none;

    background: url(${SortIcon}) no-repeat 95% 10%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;

    line-height: 16px;
    color: #222222;

    cursor: pointer;
  }

  /* img {
    margin-left: 5px;
    cursor: pointer;
  } */
`

const MyBikeArea = styled.div`
  display: flex;
  flex-direction: column;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 15px;
`

const CardContainer = styled.div`
  /* :not(:last-of-type) { */
  /* margin-right: 40px; */
  /* } */
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #dddddd;
`

const InfoWrap = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */

  .inputItem {
    display: flex;
    align-items: center;
  }

  .name {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #555555;
  }

  .line {
    height: 3px;
    width: 15px;

    background: #999999;

    margin-left: 15px;
    margin-right: 15px;
  }
`

const Select = styled.select`
  width: ${(props) => props.width || '180px'};
  height: 60px;
  padding: 21px 15px;
  border: 2px solid #dddddd;
  border-radius: 15px;
  font-family: 'Apple SD Gothic Neo';
  background: url(${selectIcon}) no-repeat 90% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  color: #999999;

  select::-ms-expand {
    display: none;
  }

  select option[value=''][disabled] {
    display: none;
  }
`

const InputText = styled.input`
  width: ${(props) => props.width || '110px'};
  height: 60px;
  padding: 21px 15px;
  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  color: #222222;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;

  .text {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #222222;

    margin-bottom: 20px;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 265px;
  height: 60px;
  background: #222222;
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;

  cursor: pointer;
`

export {
  NoticeContainer,
  SearchContainer,
  TagContainer,
  TagItem,
  ContentContainer,
  FilterContainer,
  SortContainer,
  MyBikeArea,
  ListContainer,
  CardContainer,
  Divider,
  InfoWrap,
  Select,
  InputText,
  ButtonContainer,
  Button,
}
