import * as S from './Card.style'
import InfoBox from 'src/elements/infoBox'
import { Link } from 'react-router-dom'

const Card = ({
  id,
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
          <Link to={`/mybike/records?id=${id}&type=detail`}>
            <div className="service-name-center">
              <p className="name">{serviceName}</p>
              <p className="center">{serviceCenter}</p>
            </div>
          </Link>
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

export default Card
