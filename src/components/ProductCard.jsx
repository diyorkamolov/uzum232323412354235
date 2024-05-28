const ProductCard = ({ good }) => {
    return (
      <>
        <ul key={good && good.id}>
          <li>
            <img src={good && good.media[0]} alt="" />
            <div>Акция</div>
          </li>
          <li>
            <p>{good && good.title.slice(0, 48) + ".."}</p>
            <span></span>
            <p>{Math.floor((good && good.price * 12) / 100)} руб/мес</p>
            <div>
              <div>
                <p>{good && good.price} руб</p>
                <span>
                  {good && good.price - Math.floor((good.price * good.salePercentage) / 100)}
                  руб
                </span>
              </div>
            </div>
          </li>
        </ul>
      </>
    );
  };
  
  export default ProductCard;
  