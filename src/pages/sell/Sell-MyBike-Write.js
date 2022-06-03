import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Procedure from '../../components/sell/Procedure'
import { useNavigate } from 'react-router-dom'
import arrow from './arrow.svg'
import camIcon from './camIcon.png'

const Wrap = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  /* margin-top: 22px; */
  padding-bottom: 110px;
`

const InfoContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  .infoTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    margin-bottom: 10px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #dddddd;
`

const InfoWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputItem {
    display: flex;
    align-items: center;
  }

  .name {
    width: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #555555;

    margin-right: 31px;
  }

  .yearText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #999999;

    margin-left: 10px;

    :not(:last-of-type) {
      margin-right: 14px;
    }
  }

  .phoneText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #555555;

    margin-left: 15px;
    margin-right: 14px;
  }

  .guideText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #555555;

    margin-left: 20px;
    margin-top: 10px;

    .highlight {
      cursor: pointer;
      margin-left: 2px;
      text-decoration: underline;
    }
  }
`

const InputText = styled.input`
  width: ${(props) => props.width || '400px'};
  height: 60px;
  padding: 21px 25px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #222222;
`

const Select = styled.select`
  width: ${(props) => props.width || '400px'};
  height: 60px;
  padding: 21px 25px;
  border: 2px solid #dddddd;
  border-radius: 15px;
  font-family: 'Apple SD Gothic Neo';
  background: url(${arrow}) no-repeat 95% 50%;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  select::-ms-expand {
    display: none;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #555555;

  .smallText {
    font-size: 14px;
    font-weight: 400;
  }
`

const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;

  padding: 30px 0px;

  .text {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #999999;

    margin-top: 10.57px;
  }

  .imageItem {
    width: 160px;
    height: 160px;
    border-radius: 15px;
    object-fit: cover;
  }
`

const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 160px;
  height: 160px;

  background: #ffffff;
  outline: 2px solid #dddddd;
  border-radius: 15px;

  img {
    width: 40px;
    height: 35px;
  }
`

const DetailContentContainer = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #555555;

  padding: 30px 0px;

  .smallText {
    font-size: 13px;
    font-weight: 400;
  }

  textarea {
    margin-left: 25px;
    width: 100%;
    height: 200px;
    resize: none;

    padding: 30px;

    background: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 15px;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;

    color: #222222;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 41px;

  .text {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    color: #222222;

    margin-bottom: 30px;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 60px;
  background: ${(props) => props.bColor};
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;

  cursor: pointer;
`

const Sell = () => {
  const navigate = useNavigate()
  // const [imageFile, setImageFile] = useState([])
  const [imagePreview, setImagePreview] = useState([])

  const handleImageUpload = (e) => {
    const fileArr = e.target.files

    let fileURLs = []
    let file
    let filesLength = fileArr.length > 20 ? 20 : fileArr.length

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i]

      let reader = new FileReader()
      reader.onload = () => {
        fileURLs[i] = reader.result
        setImagePreview([...fileURLs])
        // setImageFile(e.target.files[i])
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Layout title="SELL" smallTitle="판매하기">
      <Wrap>
        <Procedure name="바이크/거래 정보 입력" />
        <InfoContainer>
          <span className="infoTitle">바이크 정보</span>
          <Divider />
          <InfoWrap>
            <div className="inputItem">
              <div className="name">제조사</div>
              <Select>
                <option>혼다</option>
              </Select>
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">모델명</div>
              <div>
                <Select>
                  <option>Super Cub</option>
                </Select>
                <div className="guideText">
                  찾으시는 제조사/모델이 없나요?
                  <span className="highlight">정보추가 요청하기</span>
                </div>
              </div>
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">연식</div>
              <Select>
                <option>2021</option>
              </Select>
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">누적주행거리(km)</div>
              <InputText type="text" />
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">구매일자</div>
              <Select width="170px">
                <option>2021</option>
              </Select>
              <span className="yearText">년</span>
              <Select width="170px">
                <option>10</option>
              </Select>
              <span className="yearText">월</span>
            </div>
          </InfoWrap>
        </InfoContainer>
        <InfoContainer>
          <span className="infoTitle">거래 정보</span>
          <Divider />
          <InfoWrap>
            <div className="inputItem">
              <div className="name">제목</div>
              <InputText type="text" />
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">연락처</div>
              <InputText type="text" width="110px" />
              <span className="phoneText">-</span>
              <InputText type="text" width="110px" />
              <span className="phoneText">-</span>
              <InputText type="text" width="110px" />
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">거래지역</div>
              <Select width={'180px'} style={{ marginRight: '40px' }}>
                <option>서울특별시</option>
              </Select>
              <Select width={'180px'}>
                <option>강남구</option>
              </Select>
            </div>
          </InfoWrap>
          <InfoWrap>
            <div className="inputItem">
              <div className="name">가격(원)</div>
              <InputText type="text" />
            </div>
          </InfoWrap>
        </InfoContainer>
        <Divider style={{ marginTop: '30px' }} />
        <ImageContainer>
          <div style={{ marginTop: '20px' }}>
            이미지({imagePreview.length}/20)
          </div>
          <span className="smallText">선택사항</span>
          <Divider style={{ marginTop: '20px' }} />
          <ImageWrap>
            <ImageLabel>
              <img src={camIcon} alt="사진 추가하기" />
              <span className="text">사진 추가하기</span>
              <input
                style={{ display: 'none' }}
                id="image"
                type="file"
                multiple
                accept="image/png, image/jpeg, image/jpg, image/gif"
                onChange={handleImageUpload}
              />
            </ImageLabel>
            {imagePreview.length > 0 &&
              imagePreview.map((item, index) => (
                <img
                  className="imageItem"
                  src={item}
                  key={index}
                  alt={`등록 이미지 ${index}`}
                />
              ))}
          </ImageWrap>
        </ImageContainer>
        <Divider />
        <DetailContentContainer>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ width: '56px' }}>상세내용</span>
            <span className="smallText">선택사항</span>
          </div>
          <textarea />
        </DetailContentContainer>
        <Divider />
        <ButtonContainer>
          <span className="text">
            구매자에게 주유/정비정보 공개하기
            <input type="checkbox" />
          </span>
          <Button
            bColor={'#222222'}
            onClick={() => navigate('/sell/mybike/write')}
          >
            입력완료
          </Button>
        </ButtonContainer>
      </Wrap>
    </Layout>
  )
}

export default Sell
