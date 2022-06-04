import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/market/Layout'
import Card from '../../components/market/Card'
import SearchForm from '../../components/market/SearchForm'
import LeftArrow from '../../assets/images/pages/market/leftArrowIcon.svg'
import RightArrow from '../../assets/images/pages/market/rightArrowIcon.svg'
import XIcon from '../../assets/images/pages/market/XIcon.svg'
import myBike from './myBike'
// import { useNavigate } from 'react-router-dom'
import {
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
} from './Market.style'
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22px;
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
