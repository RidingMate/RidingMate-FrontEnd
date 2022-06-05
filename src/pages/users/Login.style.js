import styled from 'styled-components'

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  span {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #333333;
  }

  button {
    width: 400px;
    height: 60px;

    background: #f1f1f1;
    border-radius: 15px;
    cursor: pointer;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #222222;

    margin-top: 15px;

    /* css 초기화 */
    border: none;
    box-shadow: none;
    padding: 0;
    overflow: visible;
  }
`
export { SignInContainer }
