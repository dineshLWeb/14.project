import productImage from '../assets/images/image 1.png'
import heartIcon from '../assets/images/kalp.svg'
import scaleIcon from '../assets/images/terazi-icon.svg'
import stockIcon from '../assets/images/yuvarlak.svg'

function ProductCard() {
  return (
    <div className="all">
      <div className="container">
        <img className="urun" src={productImage} alt="Razer Kraken Kitty Edition Gaming Headset" />
        <div className="info">
          <span>Free shipping</span>
          <h2>Razer Kraken Kitty Edt Gaming Headset Quartz</h2>
          <h5 className="old-price">$599</h5>
          <h1>$199</h1>
          <h6>The offer is valid until April 3 or as long as stock lasts!</h6>
          <div className="dis-cizgi">
            <button type="button">Add to Cart</button>
          </div>
          <div className="stok">
            <img src={stockIcon} alt="" aria-hidden="true" />
            <p>50+ pcs. in stock.</p>
          </div>
          <div className="down-button">
            <button type="button">
              <img src={scaleIcon} alt="" aria-hidden="true" />
              Add to compare
            </button>
            <button type="button">
              <img src={heartIcon} alt="" aria-hidden="true" />
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

