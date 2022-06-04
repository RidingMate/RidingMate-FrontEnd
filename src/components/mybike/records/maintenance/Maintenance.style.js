import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
  h2 {
    padding-top: 20px;
    font-size: 20px;
    font-weight: 800;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Header = styled.div`
  margin-top: 70px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;
  h1 {
    color: #222222;
    font-size: 20px;
    font-weight: 600;
  }
`
export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  border-bottom: 1px solid #dddddd;

  .plus {
    color: #dddddd;
    cursor: pointer;
  }

  .form_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 27px;
    /* border: 1px solid red; */

    .title {
      flex: 1;
      color: #555555;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      direction: rtl;
      /* border: 1px solid red; */
    }
    .input_wrap {
      flex: 2;

      .dot_border {
        width: 400px;
        height: 60px;
        padding-left: 25px;

        background: #ffffff;
        border: 2px dashed #dddddd;
        border-radius: 15px;
      }
    }
  }
`
export const Input = styled.input`
  width: 400px;
  height: 60px;
  padding-left: 25px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  :focus {
    outline: none;
    border: 2px solid #aaaaaa;
  }
`
export const ImageCount = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dddddd;

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .count {
      color: #555555;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
    .info {
      color: rgba(0, 0, 0, 0.5);
      font-size: 10px;
      font-weight: 500;
      line-height: 13px;
    }
  }
`
export const AddImages = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #dddddd;

  display: grid;
  grid-gap: 25px;
	gap: 25px;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(160px, auto));

  .add_img_box {
    width: 160px;
    height: 160px;
    border-radius: 15px;
    border: 2px solid #dddddd;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10.5px;

    & img {
      width: 40px;
      height: 36px;
    }
    .info {
      color: #999999;
      font-size: 14px;
      font-weight: 500;
      line-height: 16.8px;
    }
  }
`
export const ImageBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 15px;
  background-color: #dddddd;
`
export const Desc = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #dddddd;

  .wrap {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    /* border: 1px solid red; */

    .title_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        color: #555555;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
      }
      .info {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        font-weight: 500;
        line-height: 13px;
      }
    }
  }

  & textarea {
    flex: 4;
    padding: 30px;
    min-height: 200px;
    border-radius: 15px;
    border: 2px solid #dddddd;
    resize: none;

    :focus {
      outline: none;
      border: 2px solid #aaaaaa;
    }
  }
`
export const Button = styled.div`
  width: 250px;
  height: 60px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  border-radius: 15px;
  margin: 40px auto 100px;
  background-color: #222222;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`