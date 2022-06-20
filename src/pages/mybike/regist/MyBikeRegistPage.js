import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './MyBikeRegistPage.style'

import regist_button_bike_img from 'src/assets/images/pages/mybike/regist/regist_button_bike_img.svg'
import regist_button_added_img_close from 'src/assets/images/pages/mybike/regist/regist_button_added_img_close.svg'

import Button from 'src/elements/button'
import Input from 'src/elements/Input'
import Select from 'src/elements/select'
import PageHeader from 'src/elements/pageHeader'
import { makeRangeList } from 'src/hooks/utils'
import { registBike } from 'src/api/mybike/list/RegistBike'

const MyBikeRegistPage = () => {
  const [imgSrc, setImgSrc] = useState()
  const imageData = new FormData()
  const fileReader = new FileReader()
  const date = new Date()

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
    imageData.delete('images')
    setImgSrc()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const query = {
      bikeNickName: e.target.bikeNickName.value,
      bikeRole: e.target.bikeRole.checked ? 'representative' : 'normal',
      company: e.target.company.value,
      dateOfPurchase: `${e.target.purchase_year.value}-${String(
        e.target.purchase_month.value
      ).padStart(2, '0')}-01`,
      mileage: e.target.mileage.value,
      model: e.target.model.value,
      year: e.target.year.value,
    }

    imageData?.append('file', e.target.file.files[0])

    registBike(imageData, query)
  }
  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <S.Form onSubmit={handleSubmit}>
        <S.Head>새 바이크 등록하기</S.Head>
        <S.Grid>
          <S.Category>
            <div>이미지({imgSrc ? '1' : '0'}/1)</div>
            <div>선택사항</div>
          </S.Category>
          <S.Div>
            <input
              onChange={handleChange}
              type="file"
              id="uploader"
              name="file"
              accept="image/jpg,image/png,image/jpeg"
              style={{ display: 'none' }}
            />
            {imgSrc ? (
              <S.Thumbnail src={imgSrc} alt="bike_image">
                <S.Btn
                  src={regist_button_added_img_close}
                  onClick={handleDelete}
                  color={'#FFFFFF'}
                  width={'15px'}
                  height={'15px'}
                ></S.Btn>
              </S.Thumbnail>
            ) : (
              <S.UploadBox htmlFor="uploader">
                <S.Image
                  src={regist_button_bike_img}
                  width={'40px'}
                  height={'36px'}
                />
                사진추가하기
              </S.UploadBox>
            )}
          </S.Div>

          <S.Category>바이크 별칭</S.Category>
          <Input
            type={'text'}
            name={'bikeNickName'}
            placeholder={'내 바이크 1'}
          />

          <S.Category>제조사</S.Category>
          <Select name={'company'} defaultContent={'선택하세요'}>
            {['honda', 'honda']}
          </Select>

          <S.Category>모델명</S.Category>
          <Select name={'model'} defaultContent={'선택하세요'}>
            {['model1', 'model2']}
          </Select>

          <S.Div></S.Div>
          <S.P fontSize={'12px'} top={'-10px'} left={'10px'}>
            찾으시는 제조사/모델이 없나요?
            <Link to="/" style={{ color: '#333333' }}>
              정보추가 요청하기
            </Link>
          </S.P>

          <S.Category>연식</S.Category>
          <Select name={'year'} defaultContent={'선택하세요'}>
            {makeRangeList(1990, date.getFullYear(), 1, true)}
          </Select>

          <S.Category>누적 주행거리(km)</S.Category>
          <Input name={'mileage'} type={'text'} placeholder={'입력하세요'} />

          <S.Category>구매일자</S.Category>
          <S.Div justifyContent={'space-between'} alignItems={'center'}>
            <Select
              name={'purchase_year'}
              defaultContent={'선택하세요'}
              width={'170px'}
            >
              {makeRangeList(1990, date.getFullYear(), 1, true)}
            </Select>
            년
            <Select
              name={'purchase_month'}
              width={'170px'}
              defaultContent={'선택하세요'}
            >
              {makeRangeList(1, 12)}
            </Select>
            월
          </S.Div>
        </S.Grid>

        <S.RegistSection>
          <span>이 바이크를 대표 바이크로 설정</span>
          <S.CheckBox name="bikeRole" type="checkbox" />
        </S.RegistSection>
        <Button content={'등록하기'} type={'submit'} />
      </S.Form>
    </S.Wrap>
  )
}

export default MyBikeRegistPage
