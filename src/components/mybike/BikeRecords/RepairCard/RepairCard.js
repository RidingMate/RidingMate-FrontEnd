import * as S from './RepairCard.style'
import InfoBox from 'src/elements/InfoBox'

const RepairCard = ({
  serviceName,
  serviceCenter,
  serviceCharge,
  serviceDate,
  handleEdit,
  handleDelete,
}) => {
  return (
    <S.Card>
      <InfoBox
        className={'card-wrap'}
        theme="solid"
        width={'100%'}
        height={'145px'}
      >
        <div className="card-pos-top">
          <div className="service-name-center">
            <p className="name">{serviceName}</p>
            <p className="center">{serviceCenter}</p>
          </div>
          <div className="service-edit-btns">
            <button className="edit-btn" onClick={handleEdit} />
            <button className="delete-btn" onClick={handleDelete} />
          </div>
        </div>
        <div className="card-pos-bottom">
          <div className="service-charge">
            <b>{serviceCharge}</b>원
          </div>
          <div className="service-date">{serviceDate}</div>
        </div>
      </InfoBox>
    </S.Card>
  )
}

export default RepairCard
