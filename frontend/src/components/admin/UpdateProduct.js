import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getProductDetails, clearErrors } from "../../actions/productActions";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstant";

const UpdateProduct = ({match, history}) => {

  
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    // const [vendorName, setVendorName] = useState("");

    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const categories = [
      "Electronics",
      "Laptops",
      "Mobiles",
      "Computers",
      "Accessories",
      "MotherBoards",
      "Processors",
      "GraphicCards",
      "Ram",
      "HardDisks",
      "SSD",
      "KeyBoards",
      "Mouse",
      "Headphones",
    ];
  


    const alert = useAlert();
    const dispatch = useDispatch();

    const {error, product}= useSelector((state) => state.productDetails);
  
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.product);
    const { vendor} = useSelector(state => state.vendor)

    const productId = match.params.id;

    useEffect(() => {

      if(product && product._id !== productId){  //if the product id is not equal to match.params.id
        dispatch(getProductDetails(productId));

      }
      else{
        setUserId=product.userId;
        setName=product.name;
        setPrice=product.price;
        setDescription=product.description;
        setCategory=product.category;
        setStock=product.stock;
        // setVendorName=product.vendorName;
        setOldImages(product.images);
       
      }

      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }

      if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        history.push("/admin/products");
        alert.success("Product Updated successfully");
        dispatch({ type: UPDATE_PRODUCT_RESET });
      }
    }, [dispatch, alert, error, isUpdated, history, updateError], productId);
  

    const submitHandler = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.set("userId", vendor._id);
      formData.set("name", name);
      formData.set("price", price);
      formData.set("description", description);
      formData.set("category", category);
      formData.set("stock", stock);
      // formData.set("vendor", vendor.name);
  
      images.forEach((image) => {
        formData.append("images", image);
      });
  
      dispatch(updateProduct(product._id, formData));
    };
  
    const onChange = (e) => {
      const files = Array.from(e.target.files);
  
      setImagesPreview([]); //if user add images again so we have to set old selected images to empty array
      setImages([]);
      setOldImages([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((oldArray) => [...oldArray, reader.result]); //it will spread the previous array of image and add new image to it
            setImages((oldArray) => [...oldArray, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    };
  

  return (
    <Fragment>
      <MetaData title={"Update Product"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4">Update Product</h1>

                <div className="form-group">
                  <label htmlFor="name_field">User Id</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">Name</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price_field">Price</label>
                  <input
                    type="text"
                    id="price_field"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description_field">Description</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="category_field">Category</label>
                  <select
                    className="form-control"
                    id="category_field"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="stock_field">Stock</label>
                  <input
                    type="number"
                    id="stock_field"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                {/* <div className="form-group">
                  <label htmlFor="seller_field">Vendor Name</label>
                  <input
                    type="text"
                    id="seller_field"
                    className="form-control"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                  />
                </div> */}

                <div className="form-group">
                  <label>Images</label>

                  <div className="custom-file">
                    <input
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Images
                    </label>
                  </div>

                  {oldImages && oldImages.map(img => (
                    <img src={img.url} key={img} alt={img.url} className="mt-3 mr-2" width="55"
                    height="52" /> 
                  ))}

                  {imagesPreview.map((img) => (
                    <img
                      src={img}
                      key={img}
                      alt="Images Preview"
                      className="mt-3 mr-2"
                      width="55"
                      height="52"
                    />
                  ))}
                </div>

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                >
                 UPDATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  )
}

export default UpdateProduct
