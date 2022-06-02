import styled from 'styled-components'

const Container = styled.div`
  width: ${({ width }) => width};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const Slider = styled.div`
  width: 100%;
  height: ${({ height }) => height};

  position: relative;

  overflow: hidden;

  border-radius: 15px;
  .slider-images {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      /* position: absolute; */
      object-fit: cover;
    }
  }
  .btn-group {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    padding: 0 3%;

    display: flex;
    justify-content: space-between;
    mix-blend-mode: difference;
    > * {
      cursor: pointer;
    }
  }
`
const Counter = styled.div`
  display: grid;
  place-content: center;

  width: 70px;
  height: 30px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 30px;
`

export { Container, Slider, Counter }
