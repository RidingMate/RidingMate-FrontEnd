import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
  /* border: 1px solid blue; */

  .select_box * {
    box-sizing: border-box;
  }

  .select_box {
    width: 95px;
    height: 100%;
    position: relative;
    border-radius: 15px;
    border: 2px solid #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    /* :after {
      content: '';
      display: block;
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 35px;
      background: lightcoral;
    } */

    .btn_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding-right: 6px;
      /* border: 1px solid red; */
    }

    .select_arrow {
      width: 15px;
      height: 8.85px;
    }

    .label {
      display: flex;
      align-items: center;
      width: inherit;
      height: inherit;
      border: 0 none;
      outline: 0 none;
      /* padding-left: 15px; */
      background: transparent;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
    .optionList {
      position: absolute;
      display: none;
      top: 64px;
      left: -2px;
      width: 100%;
      background: rgba(254, 254, 254, 1);
      color: #000000;
      list-style-type: none;
      padding: 0;
      border-radius: 10px;
      border: 1px solid #dddddd;
      overflow: hidden;
      max-height: 0;
      transition: 0.3s ease-in;

      .optionItem {
        /* border-bottom: 1px dashed rgb(170, 72, 72); */
        padding: 5px 15px 5px;
        transition: 0.1s;

        :hover {
          background: rgba(0, 0, 0, 0.08);
        }
        :last-child {
          border-bottom: 0 none;
        }
      }

      // 스크롤 커스텀
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #dddddd;
        border-radius: 45px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #dddddd;
      }
    }
    .active .optionList {
      display: block;
      max-height: 292px;
      overflow-y: auto;

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }
  }

  .unit {
    color: #999999;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
  }
`