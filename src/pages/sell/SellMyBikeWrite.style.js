import styled from 'styled-components'
import arrow from '../../assets/images/pages/sell/arrow.svg'

const InfoContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  .infoTitle {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    margin-bottom: 10px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #dddddd;
`

const InfoWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputItem {
    display: flex;
    align-items: center;
  }

  .name {
    width: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #555555;

    margin-right: 31px;
  }

  .yearText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #999999;

    margin-left: 10px;

    :not(:last-of-type) {
      margin-right: 14px;
    }
  }

  .phoneText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #555555;

    margin-left: 15px;
    margin-right: 14px;
  }

  .guideText {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #555555;

    margin-left: 20px;
    margin-top: 10px;

    .highlight {
      cursor: pointer;
      margin-left: 2px;
      text-decoration: underline;
    }
  }
`

const InputText = styled.input`
  width: ${(props) => props.width || '400px'};
  height: 60px;
  padding: 21px 25px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #222222;
`

const Select = styled.select`
  width: ${(props) => props.width || '400px'};
  height: 60px;
  padding: 21px 25px;
  border: 2px solid #dddddd;
  border-radius: 15px;
  font-family: 'Apple SD Gothic Neo';
  background: url(${arrow}) no-repeat 95% 50%;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  select::-ms-expand {
    display: none;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #555555;

  .smallText {
    font-size: 14px;
    font-weight: 400;
  }
`

const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;

  padding: 30px 0px;

  .text {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #999999;

    margin-top: 10.57px;
  }

  .imageItem {
    width: 160px;
    height: 160px;
    border-radius: 15px;
    object-fit: cover;
  }
`

const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 160px;
  height: 160px;

  background: #ffffff;
  outline: 2px solid #dddddd;
  border-radius: 15px;

  img {
    width: 40px;
    height: 35px;
  }
`

const DetailContentContainer = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #555555;

  padding: 30px 0px;

  .smallText {
    font-size: 13px;
    font-weight: 400;
  }

  textarea {
    margin-left: 25px;
    width: 100%;
    height: 200px;
    resize: none;

    padding: 30px;

    background: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 15px;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;

    color: #222222;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 41px;

  .text {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    color: #222222;

    margin-bottom: 30px;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 60px;
  background: ${(props) => props.bColor};
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;

  cursor: pointer;
`

export {
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
}
