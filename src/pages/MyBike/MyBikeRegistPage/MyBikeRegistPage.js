import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './MyBikeRegistPage.style'
import RegistButtonImg from '../../../assets/images/pages/MyBike/regist_button_img.svg'
import closeImg from '../../../assets/images/pages/MyBike/close.svg'
import Button from '../../../elements/Button'
import Input from '../../../elements/Input'
import Select from '../../../elements/Select'

/* years와 months 리스트만 뽑기 위한 함수*/
const yearList = () => {
  const list = []
  for (let year = 1980; year <= 2022; year++) {
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

const MyBikeRegistPage = () => {
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
    <S.Wrap>
      <h2>새 바이크 등록하기</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.Grid>
          <S.Category>
            <div>이미지({imgSrc ? '1' : '0'}/1)</div>
            <div>선택사항</div>
          </S.Category>
          <S.Div>
            <input
              onChange={handleChange}
              type="file"
              name="images"
              id="uploader"
              accept="image/jpg,impge/png,image/jpeg"
              style={{ display: 'none' }}
            />
            {imgSrc ? (
              <S.Thumbnail src={imgSrc} alt="bike_image">
                <S.Btn
                  src={closeImg}
                  onClick={handleDelete}
                  color={'#FFFFFF'}
                  width={'15px'}
                  height={'15px'}
                ></S.Btn>
              </S.Thumbnail>
            ) : (
              <S.UploadBox htmlFor="uploader">
                <S.Image src={RegistButtonImg} width={'40px'} height={'36px'} />
                사진추가하기
              </S.UploadBox>
            )}
          </S.Div>

          <S.Category>바이크 별칭</S.Category>
          <Input type={'text'} name={'nickname'} placeholder={'내 바이크 1'} />

          <S.Category>제조사</S.Category>
          <Select name={'manufacture'} defaultContent={'선택하세요'}>
            <option value="manufacture-option">manufacturing company1</option>
            <option value="manufacture-option">manufacturing company1</option>
          </Select>

          <S.Category>모델명</S.Category>
          <S.Div>
            <Select name={'model'} defaultContent={'선택하세요'}>
              <option value="model-option">model1</option>
              <option value="model-option">model2</option>
            </Select>
          </S.Div>

          <S.Div></S.Div>
          <S.P fontSize={'12px'} top={'-10px'} left={'10px'}>
            찾으시는 제조사/모델이 없나요?
            <Link to="/" style={{ color: '#333333' }}>
              정보추가 요청하기
            </Link>
          </S.P>

          <S.Category>연식</S.Category>
          <Select name={'year'} defaultContent={'선택하세요'}>
            {yearList().map((data, idx) => (
              <option key={idx}>{data}년</option>
            ))}
          </Select>

          <S.Category>누적 주행거리(km)</S.Category>
          <Input type={'text'} name={'mileage'} placeholder={'입력하세요'} />

          <S.Category>구매일자</S.Category>
          <S.Div justifyContent={'space-between'} alignItems={'center'}>
            <Select
              name={'purchase_year'}
              defaultContent={'선택하세요'}
              width={'170px'}
            >
              {yearList().map((data, idx) => (
                <option key={idx}>{data}년</option>
              ))}
            </Select>
            년
            <Select
              name={'purchase_month'}
              width={'170px'}
              defaultContent={'선택하세요'}
            >
              {monthList().map((data, idx) => (
                <option key={idx}>{data}월</option>
              ))}
            </Select>
            월
          </S.Div>
        </S.Grid>

        <S.RegistSection>
          <span>이 바이크를 대표 바이크로 설정</span>
          <S.CheckBox type="checkbox" name="isMain" />
        </S.RegistSection>
        <Button content={'등록하기'} type={'submit'} />
      </S.Form>
    </S.Wrap>
  )
}

export default MyBikeRegistPage
