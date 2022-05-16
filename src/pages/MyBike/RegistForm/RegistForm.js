import { useState } from 'react'
import {
  Wrap,
  Form,
  Grid,
  Category,
  Input,
  UploadBox,
  Select,
  CheckBox,
  RegistSection,
  Div,
  P,
  Image,
  Thumbnail,
  Btn,
} from './RegistForm.style'
import RegistButtonImg from '../../../assets/images/pages/MyBike/regist_button_img.svg'
import closeImg from '../../../assets/images/pages/MyBike/close.svg'
import Button from '../../../elements/Button'

import { Link } from 'react-router-dom'

/* years와 months 리스트만 뽑기 위한 함수*/
const yearList = () => {
  const list = []
  for (let year = 1950; year <= 2022; year++) {
    list.push(year)
  }
  return list
}

const monthList = () => {
  const list = []
  for (let month = 1; month <= 12; month++) {
    list.push(month)
  }
  return list
}

const BikeRegistForm = () => {
  const [imgSrc, setImgSrc] = useState()
  const formData = new FormData()
  const fileReader = new FileReader()

  const handleChange = (e) => {
    if (e.target.files.length) {
      const imgTarget = e.target.files[0]
      fileReader.readAsDataURL(imgTarget)
      fileReader.onload = function (e) {
        setImgSrc(e.target.result)
      }
    }
  }

  const handleDelete = () => {
    formData.delete('images')
    setImgSrc()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.append('images', e.target.images.files[0])
    formData.append('nickname', e.target.nickname.value)
    formData.append('manufacture', e.target.manufacture.value)
    formData.append('model', e.target.model.value)
    formData.append('year', e.target.year.value)
    formData.append('mileage', e.target.mileage.value)
    formData.append('purchase_year', e.target.purchase_year.value)
    formData.append('purchase_month', e.target.purchase_month.value)
    formData.append('isMain', e.target.isMain.checked)
  }

  return (
    <Wrap>
      <h2>새 바이크 등록하기</h2>
      <Form onSubmit={handleSubmit}>
        <Grid>
          <Category>
            <div>이미지({imgSrc ? '1' : '0'}/1)</div>
            <div>선택사항</div>
          </Category>
          <Div>
            <input
              onChange={handleChange}
              type="file"
              name="images"
              id="uploader"
              accept="image/jpg,impge/png,image/jpeg"
              style={{ display: 'none' }}
            />
            {imgSrc ? (
              <Thumbnail src={imgSrc} alt="bike_image">
                <Btn
                  src={closeImg}
                  onClick={handleDelete}
                  color={'#FFFFFF'}
                  width={'15px'}
                  height={'15px'}
                ></Btn>
              </Thumbnail>
            ) : (
              <UploadBox htmlFor="uploader">
                <Image src={RegistButtonImg} width={'40px'} height={'36px'} />
                사진추가하기
              </UploadBox>
            )}
          </Div>

          <Category>바이크 별칭</Category>
          <Input type="text" name="nickname" placeholder="내 바이크 1" />

          <Category>제조사</Category>
          <Select name="manufacture" defaultValue="default">
            <option value="default">선택하세요</option>
            <option value="manufacture-option">manufacturing company1</option>
            <option value="manufacture-option">manufacturing company1</option>
          </Select>

          <Category>모델명</Category>
          <Div>
            <Select name="model" defaultValue="default">
              <option value="default">선택하세요</option>
              <option value="model-option">model1</option>
              <option value="model-option">model2</option>
            </Select>
          </Div>

          <Div></Div>
          <P fontSize={'12px'} top={'-10px'} left={'10px'}>
            찾으시는 제조사/모델이 없나요?
            <Link to="/" style={{ color: '#333333' }}>
              정보추가 요청하기
            </Link>
          </P>

          <Category>연식</Category>
          <Select name="year" defaultValue="default">
            <option value="default">선택하세요</option>
            {yearList().map((data, idx) => (
              <option key={idx}>{data}년</option>
            ))}
          </Select>

          <Category>누적 주행거리(km)</Category>
          <Input type="text" name="mileage" placeholder="입력하세요" />

          <Category>구매일자</Category>
          <Div justifyContent={'space-between'} alignItems={'center'}>
            <Select name="purchase_year" defaultValue="default" width={'170px'}>
              <option value="default">선택하세요</option>
              {yearList().map((data, idx) => (
                <option key={idx}>{data}년</option>
              ))}
            </Select>
            년
            <Select
              name="purchase_month"
              defaultValue="default"
              width={'170px'}
            >
              <option value="default">선택하세요</option>
              {monthList().map((data, idx) => (
                <option key={idx}>{data}월</option>
              ))}
            </Select>
            월
          </Div>
        </Grid>

        <RegistSection>
          <span>이 바이크를 대표 바이크로 설정</span>
          <CheckBox type="checkbox" name="isMain" />
        </RegistSection>
        <Button content={'등록하기'} type={'submit'} />
      </Form>
    </Wrap>
  )
}

export default BikeRegistForm
