import styled from 'styled-components'
import dropdownImg from '../../../assets/images/pages/MyBike/dropdown.svg'

const Wrap = styled.div`
  width: 900px;

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
  padding: 0 23px;

  appearance: none;

  background: url(${dropdownImg}) no-repeat 95% 50%;
  background-color: #ffffff;
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

const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
`

const Thumbnail = styled.div`
  width: 190px;
  height: 190px;
  padding: 15px;

  border: 2px solid #dddddd;
  border-radius: 15px;

  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
  :hover {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${({ src }) => src});
    & :first-child {
      display: block;
    }
  }
`

const Btn = styled.button`
  display: none;
  float: right;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;

  color: ${({ color }) => color};

  cursor: pointer;
  border: none;
  outline: none;
`
export {
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
}
