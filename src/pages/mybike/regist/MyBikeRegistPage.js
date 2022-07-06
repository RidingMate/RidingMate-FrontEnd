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
import useBikeController from 'src/hooks/useBikeController'

const MyBikeRegistPage = () => {
  const date = new Date()
  const fd = new FormData()

  const [imgFile, setImgFile] = useState(null) // 이미지 파일
  const [imgBase64, setImgBase64] = useState([]) // 미리보기

  const [params, setParams] = useState({})

  const { CompanyList, ModelList, YearList } = useBikeController()

  const companyRes = CompanyList()
  const modelRes = ModelList(params.company)
  const yearRes = YearList(params.company, params.model)

  const handleChangeFile = (e) => {
    setImgFile(event.target.files[0])
    fd.append('file', event.target.files[0])
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onloadend = () => {
      const base64 = reader.result
      setImgBase64(base64)
      e.target.value = ''
    }
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = name !== 'bikeRole' ? e.target.value : e.target.checked
    setParams({
      ...params,
      [name]: name !== 'bikeRole' ? value : true ? 'representative' : 'normal',
    })
  }

  const handleDelete = () => {
    fd.delete('file')
    setImgFile(null)
    setImgBase64('')
  }

  const handleSelect = (e) => {
    const name = e.target.parentNode.parentNode.firstChild.name
    const value = e.target.innerHTML
    setParams({
      ...params,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setParams((params) => {
      const temp = {
        ...params,
        dateOfPurchase: `${params.purchase_year}-${String(
          params.purchase_month
        ).padStart(2, '0')}-01`,
        bikeRole: params.bikeRole === 'on' ? 'representative' : 'normal',
      }

      delete temp['purchase_year']
      delete temp['purchase_month']

      return temp
    })
    console.log(params)
  }

  return (
    <S.Container>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <S.Wrap>
        <S.Head>새 바이크 등록하기</S.Head>
        <S.Grid>
          <S.Category>
            <div>이미지({imgFile ? '1' : '0'}/1)</div>
            <div>선택사항</div>
          </S.Category>
          <S.Div>
            <input
              onChange={handleChangeFile}
              type="file"
              id="uploader"
              name="file"
              accept="image/jpg,image/png,image/jpeg"
              style={{ display: 'none' }}
            />
            {imgFile ? (
              <S.Thumbnail src={imgBase64} alt="bike_image">
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
            onChange={handleInput}
            type={'text'}
            name={'bikeNickName'}
            placeholder={'내 바이크 1'}
          />

          <S.Category>제조사</S.Category>
          <Select
            name={'company'}
            defaultContent={'선택하세요'}
            onClick={handleSelect}
          >
            {companyRes.isSuccess
              ? Array.from(
                  companyRes.data.data.response,
                  (value) => value.content
                )
              : ['잠시만 기다려주세요']}
          </Select>

          <S.Category>모델명</S.Category>
          <Select
            name={'model'}
            defaultContent={'선택하세요'}
            onClick={handleSelect}
          >
            {modelRes.isSuccess
              ? Array.from(
                  modelRes.data.data.response,
                  (value) => value.content
                )
              : ['제조사를 선택해주세요']}
          </Select>

          <S.Div></S.Div>
          <S.P fontSize={'12px'} top={'-10px'} left={'10px'}>
            찾으시는 제조사/모델이 없나요?
            <Link to="/" style={{ color: '#333333' }}>
              정보추가 요청하기
            </Link>
          </S.P>

          <S.Category>연식</S.Category>
          <Select
            name={'year'}
            defaultContent={'선택하세요'}
            onClick={handleSelect}
          >
            {yearRes.isSuccess
              ? Array.from(yearRes.data.data.response, (value) => value.content)
              : ['제조사와 모델을 선택해주세요']}
          </Select>

          <S.Category>누적 주행거리(km)</S.Category>
          <Input
            name={'mileage'}
            type={'text'}
            placeholder={'입력하세요'}
            onChange={handleInput}
          />

          <S.Category>구매일자</S.Category>
          <S.Div justifyContent={'space-between'} alignItems={'center'}>
            <Select
              name={'purchase_year'}
              defaultContent={'선택하세요'}
              width={'170px'}
              onClick={handleSelect}
            >
              {makeRangeList(1990, date.getFullYear(), 1, true)}
            </Select>
            년
            <Select
              name={'purchase_month'}
              width={'170px'}
              defaultContent={'선택하세요'}
              onClick={handleSelect}
            >
              {makeRangeList(1, 12)}
            </Select>
            월
          </S.Div>
        </S.Grid>
        <S.RegistSection>
          <span>이 바이크를 대표 바이크로 설정</span>
          <S.CheckBox name="bikeRole" type="checkbox" onChange={handleInput} />
        </S.RegistSection>
        <Button content={'등록하기'} type={'submit'} onClick={handleSubmit} />
      </S.Wrap>
    </S.Container>
  )
}

export default MyBikeRegistPage
