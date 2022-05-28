import * as S from './FuelCard.style'
import InfoBox from 'src/elements/InfoBox'

const FuelCard = ({ amount, price, date, handleEdit, handleDelete }) => {
  return (
    <S.Card>
      <InfoBox
        className={'card-wrap'}
        theme="solid"
        width={'100%'}
        height={'80px'}
      >
        <div className="img" />
        <div className="amount">
          <b>{amount}</b>L
        </div>
        <div className="price">
          <b>{price.toLocaleString('ko-KR')}</b>원
        </div>
        <div className="date">{date}</div>
        <button className="edit-btn" onClick={handleEdit} />
        <button className="delete-btn" onClick={handleDelete} />
      </InfoBox>
    </S.Card>
  )
}

export default FuelCard
