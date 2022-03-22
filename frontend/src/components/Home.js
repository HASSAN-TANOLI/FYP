import React, { Fragment, useState, useEffect } from 'react';
import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import  Pagination from 'react-js-pagination';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../actions/productActions';
import { useAlert } from 'react-alert';

const Home = ({match}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const alert = useAlert();
  const dispatch = useDispatch();
   
  const {loading, products, error, productsCount, resPerPage } = useSelector(state => state.products);

  const keyword = match.params.keyword; //we are using param beacuse we are setting keywords in params in search component 
    
  useEffect(() => {
    if(error){
      
   
      return alert.error(error);
     }

  dispatch(getProducts(keyword, currentPage));  

   

  },[dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber){
    setCurrentPage(pageNumber);
   }

  return (
    <Fragment>
      {loading ? <Loader /> : null}
      <MetaData title={'buy best product online'} />
      
       <h1 id="products_heading">Latest Products</h1>
       <section id="products" class="container mt-5">
      <div className="row">
        {products && products.map(product => (

          <Product product={product} key={product._id} />

          //using key because we are using map function 
             
        ))}
     

        
       
      </div>
    </section>

    {resPerPage < productsCount && (
      <div className="d-flex justify-content-center mt-5">
      
      <Pagination
        activePage = {currentPage}
        itemsCountPerPage = {resPerPage}
        totalItemsCount = {productsCount}
        onChange = {setCurrentPageNo}
        nextPageText = 'Next'
        prevPageText = 'Prev'
        firstPageText = 'First'
        lastPageText = 'Last'
        itemClass = 'page-item' //bootstrap class we don't have to handle them in css
        linkClass = 'page-link' //bootstrap class we don't have to handle them in css

      
      />
      </div>
    )}
    
      
       
      
    </Fragment>
  )
}

export default Home
