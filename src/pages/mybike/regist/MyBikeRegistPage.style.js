import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 172px;
`

const Form = styled.form`
  width: 900px;

  margin-top: 58px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Head = styled.div`
  width: 100%;
  padding: 15px 0;

  align-self: start;

  font-size: 25px;
  font-weight: 800;

  border-bottom: 1px solid #e2e2e2;
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
  text-align: center;
  justify-self: end;
  & :nth-child(2) {
    font-size: 12px;
  }
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
  Head,
  Grid,
  Category,
  UploadBox,
  CheckBox,
  RegistSection,
  Div,
  P,
  Image,
  Thumbnail,
  Btn,
}
