import React, { Fragment, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, clearErrors, newReview } from "../../actions/productActions";
import { addItemToCart } from "../../actions/cartActions";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { NEW_REVIEW_RESET } from "../../constants/productConstant";
import ListReviews from "../review/ListReviews";


const ProductDetails = ({ match }) => {
  //match is a prop that is passed from the router it is just like req.params.id

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const[comment, setComment] = useState('');

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const {error: reviewError, success} = useSelector(state => state.newReview);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success(success);
      dispatch({type: NEW_REVIEW_RESET});
    }

  }, [dispatch, alert, error, reviewError, match.params.id, success]); //if any thing change it will then call the useEffect and run the code inside it

  const addToCart = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    alert.success("Item added to cart");
  };

  const increaseQty = () => {
    const count = document.querySelector(".count"); // .count is the class name of the span

    if (count.valueAsNumber >= product.stock) return; //if the value is greater than the stock then it will not increase the quantity

    const qty = count.valueAsNumber + 1; //if its less then stock then it will add more
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector(".count"); // .count is the class name of the span

    if (count.valueAsNumber <= 1) return; //if the input value is less than 1 then it will not decrease

    const qty = count.valueAsNumber - 1; //if its less then stock then it will add more
    setQuantity(qty);
  };

  function setUserRatings() {   
    const stars = document.querySelectorAll(".star"); //selecting all stars

    stars.forEach((star, index) => { 
      star.starValue = index + 1; //storing the value of the each star in the starValue property

      ["click", "mouseover", "mouseout"].forEach(function (e) { //adding multiple event listeners to each star
        star.addEventListener(e, showRatings);
      });
    });

    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === "click") {
          if (index < this.starValue) {
            star.classList.add("orange");

            setRating(this.starValue);
          } else {
            star.classList.remove("orange");
          }
        }

        if (e.type === "mouseover") {
          if (index < this.starValue) {
            star.classList.add("yellow");
          } else {
            star.classList.remove("yellow");
          }
        }

        if (e.type === "mouseout") {
          star.classList.remove("yellow");
        }
      });
    }
  }

  const reviewHandler = () => {
    const formData = new FormData();

    formData.set('rating', rating);
    formData.set('comment', comment);
    formData.set('productId', match.params.id);

    dispatch(newReview(formData));
}

  return (
    <Fragment>
      {loading ? (
        <Loader /> //if loading is true then show the loader else show the product details
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              <Carousel pause="hover">
                {product.images &&
                  product.images.map((image) => (
                    <Carousel.Item key={image.public_id}>
                      <img
                        className="d-block w-100"
                        src={image.url}
                        alt={product.title}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{product.name}</h3>
              <p id="product_id">Product # {product._id} </p>

              <hr />

              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">({product.numOfReviews}Reviews)</span>

              <hr />

              <p id="product_price">{product.price}</p>
              <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>
                  -
                </span>

                <input
                  type="number"
                  className="form-control count d-inline"
                  value={quantity}
                  readOnly
                />

                <span className="btn btn-primary plus" onClick={increaseQty}>
                  +
                </span>
              </div>
              <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4"
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <hr />

              <p>
                Status:{" "}
                <span
                  id="stock_status"
                  className={product.stock > 0 ? "greenColor" : "redColor"}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <hr />

              <h4 className="mt-2">Description:</h4>
              <p>{product.description}</p>

              <p id="product_seller mb-3">
                Sold by: <strong>{product.vendor}</strong>
              </p>

              {user ? (
                <button
                  id="review_btn"
                  type="button"
                  className="btn btn-primary mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#ratingModal"
                  onClick={setUserRatings}
                >
                  Submit Your Review
                </button>
              ) : (
                <div className="alert alert-danger mt-5" type="alert">
                  Login to post your review.
                </div>
              )}

              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div
                    className="modal fade"
                    id="ratingModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ratingModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">
                            Submit Review
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="stars">
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>

                          <textarea
                            name="review"
                            id="review"
                            className="form-control mt-3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>

                          <button
                            className="btn my-3 float-right review-btn px-4 text-white"
                            onClick={reviewHandler}
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {product.reviews && product.reviews.length > 0 && (
                        <ListReviews reviews={product.reviews} />
                    )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
