import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/market/Layout'
import Card from '../../components/market/Card'
import SearchForm from '../../components/market/SearchForm'
import LeftArrow from '../../assets/images/pages/market/leftArrowIcon.svg'
import RightArrow from '../../assets/images/pages/market/rightArrowIcon.svg'
import SortIcon from '../../assets/images/pages/market/sortIcon.svg'
import XIcon from '../../assets/images/pages/market/XIcon.svg'
import selectIcon from '../../assets/images/pages/market/selectIcon.svg'
import myBike from './myBike'
// import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22px;
`

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

const Market = () => {
  // const filter = [company, modelName]
  const [company, setCompany] = useState('')
  const [modelName, setModelName] = useState('')

  // const navigate = useNavigate()

  const handleSelectCompany = (e) => {
    setCompany(e.target.value)
  }

  const handleSelectModelName = (e) => {
    setModelName(e.target.value)
  }

  return (
    <Layout title="Market" smallTitle="바이크 중고마켓">
      <Wrap>
        <NoticeContainer>
          <img src={LeftArrow} alt="왼쪽 버튼" />
          <div>
            공지사항내용 클릭하면 들어가져야하는데... 이건 또 언제 만들어...
          </div>
          <img src={RightArrow} alt="오른쪽 버튼" />
        </NoticeContainer>
        <SearchContainer>
          <SearchForm />
          {/* {filter && ( */}
          <TagContainer>
            {company !== '' && (
              <TagItem onClick={() => setCompany('')}>
                <span className="text">{company}</span>
                <img src={XIcon} alt="삭제" />
              </TagItem>
            )}
            {modelName !== '' && (
              <TagItem onClick={() => setModelName('')}>
                <span className="text">{modelName}</span>
                <img src={XIcon} alt="삭제" />
              </TagItem>
            )}
          </TagContainer>
          {/* )} */}
        </SearchContainer>
        <ContentContainer>
          <FilterContainer>
            <span className="title">필터</span>
            <div style={{ marginTop: '5px' }} />
            <Divider />
            <InfoWrap>
              <div className="inputItem">
                <div className="name">제조사</div>
                <div>
                  <Select
                    width="180px"
                    onChange={handleSelectCompany}
                    value={company}
                  >
                    <option value="" disabled selected>
                      선택하세요.
                    </option>
                    <option value="HONDA">혼다</option>
                  </Select>
                </div>
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="inputItem">
                <div className="name">모델명</div>
                <div>
                  <Select
                    width="180px"
                    onChange={handleSelectModelName}
                    value={modelName}
                  >
                    <option>선택하세요.</option>
                    <option value="SUPER CUB">SUPER CUB</option>
                  </Select>
                </div>
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="inputItem">
                <div className="name">거래지역</div>
                <div>
                  <Select
                    width="180px"
                    // onChange={handleSelectModelName}
                    // value={modelName}
                  >
                    <option>시를 선택하세요.</option>
                    <option value="SUPER CUB">서울시</option>
                  </Select>
                </div>
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="inputItem">
                <div className="name" />
                <div>
                  <Select
                    width="180px"
                    // onChange={handleSelectModelName}
                    // value={modelName}
                  >
                    <option>구를 선택하세요.</option>
                    <option value="SUPER CUB">강남구</option>
                  </Select>
                </div>
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="name">주행거리(km)</div>
              <div
                className="inputItem"
                style={{
                  flexDirection: 'row',
                  marginTop: '15px',
                }}
              >
                <InputText type="text" placeholder="최소값" />
                <span className="line" />
                <InputText type="text" placeholder="최대값" />
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="name">가격(원)</div>
              <div
                className="inputItem"
                style={{
                  flexDirection: 'row',
                  marginTop: '15px',
                }}
              >
                <InputText type="text" placeholder="최소값" />
                <span className="line" />
                <InputText type="text" placeholder="최대값" />
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="name">연식</div>
              <div
                className="inputItem"
                style={{
                  flexDirection: 'row',
                  marginTop: '15px',
                }}
              >
                <Select>
                  <option>선택하세요.</option>
                </Select>
                <span className="line" />
                <Select>
                  <option>선택하세요.</option>
                </Select>
              </div>
            </InfoWrap>
            <InfoWrap>
              <div className="name">배기량</div>
              <div
                className="inputItem"
                style={{
                  flexDirection: 'row',
                  marginTop: '15px',
                }}
              >
                <Select>
                  <option>선택하세요.</option>
                </Select>
                <span className="line" />
                <Select>
                  <option>선택하세요.</option>
                </Select>
              </div>
            </InfoWrap>
            <ButtonContainer>
              <span className="text">
                거래완료 안 보기 <input type="checkbox" />
              </span>
              <Button>적용하기</Button>
            </ButtonContainer>
          </FilterContainer>
          <MyBikeArea>
            <SortContainer>
              <select>
                <option>최근 등록순</option>
              </select>
            </SortContainer>
            <ListContainer>
              {myBike.map((item) => (
                <CardContainer
                  key={item.key}
                  // onClick={() => selectMarketBike(item.title)}
                >
                  <Card
                    title={item.title}
                    subTitle={item.subTitle}
                    cc={item.cc}
                    km={item.km}
                    img={item.img}
                    price={item.price}
                  />
                </CardContainer>
              ))}
            </ListContainer>
          </MyBikeArea>
        </ContentContainer>
      </Wrap>
    </Layout>
  )
}

export default Market
