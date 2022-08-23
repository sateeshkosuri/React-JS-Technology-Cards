import './index.css'

const Cards = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li>
      <div className="card-container">
        <div className={className}>
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
          <div className="image-container">
            <img src={imgUrl} className="card-image" alt={title} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Cards
