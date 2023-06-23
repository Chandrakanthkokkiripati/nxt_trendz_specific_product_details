// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productItem} = props
  const {brand, imageUrl, price, rating, title} = productItem

  return (
    <li className="list-item">
      <img
        className="similar-product-image"
        src={imageUrl}
        alt="similar product"
      />
      <h1 className="similar-product-title">{title}</h1>
      <p className="brand-name">by {brand}</p>
      <div className="price-container">
        <p className="price">Rs {price}/-</p>
        <div className="product-rating-container">
          <p className="product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-image"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
