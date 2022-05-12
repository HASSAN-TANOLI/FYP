
import React, { Fragment, useEffect, useState } from 'react'
import {allVendors} from "../../actions/vendorActions";
import {allProducts} from "../../actions/productActions";

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'


import "./pcBuildd.css";

const PcBuildd = ({}) => {

  const dispatch = useDispatch();
  const {vendors} = useSelector(state => state.allVendors);
  const {products} = useSelector(state => state.allProducts);

  const [vendorProducts, setVendorProducts] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState({});
  const [build, setBuild] = useState({});


  useEffect(() => {
    dispatch(allProducts());
  })


  useEffect(() => {
    console.log('selected Vendor', selectedVendor);
    
    console.log(products);
    const _products = products.filter(p => p?.userId === selectedVendor);
    setVendorProducts([..._products]);
  },[selectedVendor])

  return (
    <Fragment>
      <div class="container">
        <label>Select a Store: </label>

        <select className="combobox" onChange={e => setSelectedVendor(e.target.value)}>
          <option value={null} selected>Select a vandor</option>
          {
            vendors.map(vendor => {
              return <option value={vendor._id} key={vendor._id} >{vendor.shopname}</option>
            })
          }
        </select>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title m-b-0">System Builder</h5>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Component</th>
                      <th scope="col">Select</th>
                      <th scope="col">Selection</th>
                      <th scope="col"> Price </th>
                      <th scope="col">Reset</th>
                    </tr>
                  </thead>
                  <tbody class="customtable">
                    <tr>
                      <td>
                        <a> CPU </a>
                      </td>
                      <td>
                       
        <select className="combobox">
          <option value={null} selected>Select a CPU</option>
          {
            vendorProducts.map(product => {
              return <option value={product._id} key={product._id}>{product.name}</option>
            })
          }
        </select>
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>MOTHERBOARD</td>
                      <td>
                        {" "}
                        <a href=""> Select Motherboard </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>RAM</td>
                      <td>
                        {" "}
                        <a href=""> Select Ram </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td> STORAGE </td>
                      <td>
                        {" "}
                        <a href=""> Select Storage </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td> GRAPHIC CARD </td>
                      <td>
                        {" "}
                        <a href=""> Select Graphic Card </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>POWER SUPPLY</td>
                      <td>
                        {" "}
                        <a href=""> Select Power Supply </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>CASE</td>
                      <td>
                        {" "}
                        <a href=""> Select Casing </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td> MONITOR </td>
                      <td>
                        {" "}
                        <a href=""> Select Monitor </a>{" "}
                      </td>
                      <td> </td>
                      <td> </td>

                      <td>
                        {" "}
                        <a href="">
                          {" "}
                          <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br></br>
              <br></br>
              <label class="totalAmount">Total Amount: </label><br></br>
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PcBuildd;
