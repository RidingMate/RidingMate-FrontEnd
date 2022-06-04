import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Procedure from '../../components/sell/Procedure'
import { useNavigate } from 'react-router-dom'
import camIcon from '../../assets/images/pages/sell/camIcon.png'
import {
  InfoContainer,
  Divider,
  InfoWrap,
  InputText,
  Select,
  ImageContainer,
  ImageWrap,
  ImageLabel,
  DetailContentContainer,
  ButtonContainer,
  Button,
} from './SellWrite.style'

const Wrap = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  padding-bottom: 110px;
`

const SellMyBikeWrite = () => {
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
        <Procedure name="바이크/거래 정보 입력" type="my" />
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

export default SellMyBikeWrite
