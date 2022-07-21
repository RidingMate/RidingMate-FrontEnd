import styled from 'styled-components'
import userCardImg from '../../assets/images/pages/mypage/usercard_default_img.svg'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  .not_img {
    width: 300px;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f1f1f1;
    border-radius: 15px;
  }

  .exist_img {
    img {
      width: 300px;
      height: 300px;

      object-fit: cover;
      border-radius: 15px;
    }
  }
`
const Text = styled.div`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};

  margin-bottom: 10px;
`

const UserDataArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  color: #000000;

  button {
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 10px;

    cursor: pointer;

    margin-top: 5px;
  }

  .my_question {
    width: 100%;
    margin-top: 31px;
    color: #222222;

    .box {
      width: 100%;
      height: 90px;
      padding: 20px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      background: #ffffff;
      border: 2px solid #dddddd;
      border-radius: 15px;
    }

    .item {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`

const Divider = styled.div`
  width: 1px;
  height: 100%;
  margin: 0 20px;

  border: 1px solid #dddddd;
`

const UserCard = ({
  img,
  userName,
  login,
  phoneNumber,
  userIdx,
  answer,
  question,
}) => {
  return (
    <Wrap>
      {img === '' ? (
        <div className="not_img">
          <img
            src={userCardImg}
            alt={`${userName}의 프로필 이미지가 존재하지 않습니다.`}
          />
        </div>
      ) : (
        <div className="exist_img">
          <img src={img} alt={`${userName} 프로필 이미지`} />
        </div>
      )}
      <UserDataArea>
        <Text fontWeight="800" fontSize="20px" lineHeight="24px">
          {userName}
        </Text>
        <Text fontWeight="500" fontSize="13px" lineHeight="16px">
          {login}
        </Text>
        <Text fontWeight="400" fontSize="13px" lineHeight="16px">
          {phoneNumber}
        </Text>
        <button
          onClick={() => {
            userIdx
          }}
        >
          회원정보 수정
        </button>
        <div className="my_question">
          <Text fontWeight="600" fontSize="15px" lineHeight="18px">
            나의 문의
          </Text>
          <div className="box">
            <div className="item">
              <Text fontWeight="500" fontSize="15px" lineHeight="18px">
                문의 글
              </Text>
              <Text
                fontWeight="500"
                fontSize="15px"
                lineHeight="18px"
                textAlign="right"
              >
                {question}
              </Text>
            </div>
            <Divider />
            <div className="item">
              <Text fontWeight="500" fontSize="15px" lineHeight="18px">
                답변완료
              </Text>
              <Text
                fontWeight="500"
                fontSize="15px"
                lineHeight="18px"
                textAlign="right"
              >
                {answer}
              </Text>
            </div>
          </div>
        </div>
      </UserDataArea>
    </Wrap>
  )
}

export default UserCard
