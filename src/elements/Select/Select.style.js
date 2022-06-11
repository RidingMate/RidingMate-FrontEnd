import styled from 'styled-components'
import btn_dropdwon_img from './btn_dropdwon_img.svg'

const Wrap = styled.div`
  position: relative;
`

const Select = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: 10px;
  padding: 0 23px;

  appearance: none;

  background: url(${btn_dropdwon_img}) no-repeat 95% 50%;
  background-color: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  cursor: pointer;
`
const Dropdown = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  padding: 12px 24px;

  background: rgba(254, 254, 254, 1);
  border: 1px solid #dddddd;
  border-radius: 15px;

  max-height: 292px;
  overflow-y: auto;
  z-index: 1;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ul {
  }
`

export { Wrap, Select, Dropdown }
