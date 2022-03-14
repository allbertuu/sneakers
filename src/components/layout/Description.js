import Count from '../Count';
import Button from '../Button';

import '../../styles/Description.scss';
import '../../styles/Button.scss';
import '../../styles/Description.scss';

const Description = () => {
  return (
    <section className="l-description">
      <p className="brand">SNEAKERS COMPANY</p>
      <h1 className="title">Fall Limited Edition Sneakers</h1>
      <p className="text">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className="price">
        <div className="with-discount">
          <p>125.00</p>
          <div className="discount">50%</div>
        </div>
        <p className="no-discount">250.00</p>
      </div>
      <div className="buttons">
        <Count />
        <Button type="addToCart" />
      </div>
    </section>
  );
}

export default Description