import Button from '../../elements/Button'
import styled from 'styled-components'
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

const Wrap = styled.div`
  width: 900px;
  margin-top: 58px;
  margin-bottom: 172px;
  h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid #e2e2e2;
  }
`

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Grid = styled.div`
  margin: 30px 0;
  padding-bottom: 30px;
  width: 100%;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 400px;
  column-gap: 25px;
  row-gap: 25px;

  border-bottom: 1px solid #e2e2e2;
`

const Category = styled.div`
  font-size: 16px;
  justify-self: end;
`

const Input = styled.input`
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '60px'};
  left: 832px;
  top: 739px;
  padding-left: 25px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;
`

const UploadBox = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 190px;
  height: 190px;

  border: 2px solid #dddddd;
  border-radius: 15px;

  font-size: 15px;
  color: #999999;

  cursor: pointer;
`

const Select = styled.select`
  width: ${({ width }) => width || '400px'};
  height: 60px;
  left: 832px;
  top: 739px;
  padding-left: 23px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  box-sizing: border-box;
`

const CheckBox = styled.input`
  width: 20px;
  height: 20px;

  border: 2px solid #222222;

  cursor: pointer;
  appearance: none;
  &:checked {
    accent-color: #222222;
    appearance: auto;
  }
`

const RegistSection = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  span {
    font-weight: 900;
    margin-right: 15px;
  }
`

const Div = styled.div`
  height: ${({ height }) => height};

  display: ${({ display }) => display || 'flex'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`

const P = styled.p`
  position: relative;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  height: ${({ height }) => height};

  font-size: ${({ fontSize }) => fontSize || '16px'};

  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  transform: ${({ transform }) => transform};
`

const BikeRegistForm = () => {
  return (
    <Wrap>
      <h2>새 바이크 등록하기</h2>
      <Form>
        <Grid>
          <Category>이미지</Category>
          <Div>
            <input
              type="file"
              name="bike_file"
              id="uploader"
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
            />
            <UploadBox for="uploader">
              <svg
                width="40"
                height="37"
                viewBox="0 0 40 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3634 10.5192V6.63657H29.4808V3.92777H33.3634V0H36.0722V3.92777H40V6.63657H36.0722V10.5192H33.3634ZM2.7088 36.4334C1.98646 36.4334 1.3544 36.1625 0.812641 35.6208C0.27088 35.079 0 34.447 0 33.7246V10.5643C0 9.86907 0.27088 9.24605 0.812641 8.68623C1.3544 8.12641 1.98646 7.85553 2.7088 7.85553H9.34537L12.6411 3.92777H25.2822V6.63657H13.9052L10.6095 10.5643H2.7088V33.7246H33.4086V14.763H36.1174V33.7246C36.1174 34.447 35.8375 35.079 35.2867 35.6208C34.7269 36.1625 34.1038 36.4334 33.4086 36.4334H2.7088ZM18.0587 29.842C20.2257 29.842 22.0497 29.1016 23.5214 27.6298C24.9932 26.158 25.7336 24.316 25.7336 22.1219C25.7336 19.9549 24.9932 18.14 23.5214 16.6862C22.0497 15.2325 20.2257 14.5011 18.0587 14.5011C15.8916 14.5011 14.0316 15.2325 12.5688 16.6862C11.1061 18.149 10.3747 19.9549 10.3747 22.1219C10.3747 24.2889 11.1061 26.158 12.5688 27.6298C14.0316 29.1016 15.8555 29.842 18.0587 29.842ZM18.0587 27.1332C16.614 27.1332 15.4221 26.6546 14.4921 25.7065C13.5621 24.7585 13.0926 23.5576 13.0926 22.1129C13.0926 20.6682 13.5621 19.5214 14.4921 18.5914C15.4221 17.6614 16.614 17.1919 18.0587 17.1919C19.4763 17.1919 20.6501 17.6614 21.5982 18.5914C22.5463 19.5214 23.0248 20.6953 23.0248 22.1129C23.0248 23.5576 22.5553 24.7494 21.5982 25.7065C20.6501 26.6546 19.4673 27.1332 18.0587 27.1332Z"
                  fill="#999999"
                />
              </svg>
              사진추가하기
            </UploadBox>
          </Div>

          <Category>바이크 별칭</Category>
          <Input type="text" name="bike_nickname" placeholder="내 바이크 1" />

          <Category>제조사</Category>
          <Select name="bike_manufacture" defaultValue="default">
            <option value="default">선택하세요</option>
            <option value="manufacture-option">manufacturing company1</option>
            <option value="manufacture-option">manufacturing company1</option>
          </Select>

          <Category>모델명</Category>
          <Div>
            <Select name="bike_models" defaultValue="default">
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
          <Select name="bike_year" defaultValue="default">
            <option value="default">선택하세요</option>
            {yearList().map((data, idx) => (
              <option key={idx} value="bike_year">
                {data}년
              </option>
            ))}
          </Select>

          <Category>누적 주행거리(km)</Category>
          <Input type="text" name="bike_mileage" placeholder="입력하세요" />

          <Category>구매일자</Category>
          <Div justifyContent={'space-between'} alignItems={'center'}>
            <Select
              name="bike_purchase_year"
              defaultValue="default"
              width={'170px'}
            >
              <option value="default">선택하세요</option>
              {yearList().map((data, idx) => (
                <option key={idx} value="bike_year">
                  {data}년
                </option>
              ))}
            </Select>
            년
            <Select
              name="bike_purchase_month"
              defaultValue="default"
              width={'170px'}
            >
              <option value="default">선택하세요</option>
              {monthList().map((data, idx) => (
                <option key={idx} value="bike_year">
                  {data}년
                </option>
              ))}
            </Select>
            월
          </Div>
        </Grid>

        <RegistSection>
          <span>이 바이크를 대표 바이크로 설정</span>
          <CheckBox type="checkbox" name="bike_is_main" />
        </RegistSection>
        <Button />
      </Form>
    </Wrap>
  )
}

export default BikeRegistForm
