import { useRef, useState, useEffect } from 'react'
import Arrow from './arrow'
import * as S from './ImageSlider.style'

// import img_src_1 from 'src/assets/images/pages/mybike/bike_list_example_img_1.jpeg'
// import img_src_2 from 'src/assets/images/pages/mybike/bike_list_example_img_2.jpeg'
// import img_src_3 from 'src/assets/images/pages/mybike/bike_list_example_img_3.jpeg'
// import img_src_4 from 'src/assets/images/pages/mybike/bike_list_example_img_4.jpeg'

// const imgArray = [img_src_1, img_src_2, img_src_3, img_src_4]

// arrowSrc : arrow 이미지 소스
// imgArray : image들의 경로 소스들 배열
// width, height : slider 가로, 세로 사이즈

const ImageSlider = ({
  arrowSrc,
  imgArray,
  width = '400px',
  height = '400px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef(null)

  const ARRAY_LENGTH = imgArray.length

  const prevClick = () => {
    if (currentIndex === 0) setCurrentIndex(ARRAY_LENGTH - 1)
    else setCurrentIndex(currentIndex - 1)
  }
  const nextClick = () => {
    if (currentIndex === ARRAY_LENGTH - 1) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out'
    slideRef.current.style.transform = `translate(-${currentIndex}00%)`
  }, [currentIndex])

  return (
    <S.Container width={width}>
      <S.Slider height={height}>
        <div className="slider-images" ref={slideRef}>
          {imgArray.map((src, index) => (
            <img src={src} alt="" key={index} />
          ))}
        </div>
        <div className="btn-group">
          <Arrow
            src={arrowSrc}
            reverse
            onClick={prevClick}
            width={'30px'}
            height={'30px'}
          />
          <Arrow
            src={arrowSrc}
            onClick={nextClick}
            width={'30px'}
            height={'30px'}
          />
        </div>
      </S.Slider>
      <S.Counter>{`${currentIndex + 1}/${ARRAY_LENGTH}`}</S.Counter>
    </S.Container>
  )
}

export default ImageSlider
