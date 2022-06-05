import * as S from './AddMaintenance.style'
// import Input from '../../elements/Input'
import cameraIcon from '../../../../assets/icons/mybike/camera.png'
import { useState } from 'react'

const MaintenancePage = () => {
  const [count, setCount] = useState(1)
  const [imgCount, setImgCount] = useState(0)
  // const titleRef = useRef('')
  // const centerNameRef = useRef('')
  // const yearRef = useRef('')
  // const monthRef = useRef('')
  // const dateRef = useRef('')
  // const itemRef = useRef(null)
  // const priceRef = useRef(0)

  // const itemList = [{ item: '' }]
  // const deleteItem = (target) => {
  //   const newItemList = itemList.filter(el => el !== target)
  // }

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <S.Wrap>
      <S.Header>
        <h1>정비기록 추가하기</h1>
      </S.Header>
      <S.Forms>
        <div className="form_box">
          <div className="title">제목</div>
          <div className="input_wrap">
            <S.Input type={'text'} placeholder={'입력하세요.'} />
          </div>
        </div>
        <div className="form_box">
          <div className="title">서비스센터 / 기관명</div>
          <div className="input_wrap">
            <S.Input type={'text'} placeholder={'입력하세요.'} />
          </div>
        </div>
        <div className="form_box">
          <div className="title">정비 날짜</div>
          <div className="input_wrap">
            <S.Input type={'text'} placeholder={'입력하세요.'} />
          </div>
        </div>
        {Array.from({ length: count }).map((item, idx) => {
          return (
            <div key={String(idx)} className="form_box">
              <div className="title">정비 항목{idx + 1}</div>
              <div className="input_wrap">
                <S.Input type={'text'} placeholder={'입력하세요.'} />
              </div>
            </div>
          )
        })}

        <div className="form_box" onClick={addCount}>
          <div className="title">정비 항목{count + 1}</div>
          <div className="input_wrap">
            <div className="dot_border plus"></div>
          </div>
        </div>

        <div className="form_box">
          <div className="title">가격(원)</div>
          <div className="input_wrap">
            <S.Input type="number" placeholder="입력하세요." />
          </div>
        </div>
      </S.Forms>
      <S.ImageCount>
        <div className="wrap">
          <div className="count">이미지({imgCount}/8)</div>
          <div className="info">선택사항</div>
        </div>
      </S.ImageCount>
      <S.AddImages>
        <div className="add_img_box">
          <img alt='camera' src={cameraIcon} />
          <div className="info">사진 추가하기</div>
        </div>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
      </S.AddImages>
      <S.Desc>
        <div className="wrap">
          <div className="title_box">
            <div className="title">상세내용</div>
            <div className="info">선택사항</div>
          </div>
          <textarea className="desc_form"></textarea>
        </div>
      </S.Desc>
      <S.Button>추가하기</S.Button>
    </S.Wrap>
  )
}

export default MaintenancePage