import styled from 'styled-components'
import btn_dropdwon_img from './btn_dropdwon_img.svg'

const Container = styled.div`
  position: relative;
`
const Wrap = styled.div`
  .input {
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    margin-bottom: 10px;
    padding: 0 23px;

    background: url(${btn_dropdwon_img}) no-repeat 95% 50%;
    background-color: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 15px;

    cursor: pointer;
  }
  .dropdown {
    display: none;
  }
  &.active {
    .dropdown {
      width: 100%;
      max-height: 292px;
      padding: 10px 23px;

      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 2px;

      background-color: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 15px;

      z-index: 1;

      overflow-y: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }

      .option-item {
        font-size: 14px;
        :hover {
          font-weight: 900;
        }
      }
    }
  }
`

export { Container, Wrap }
