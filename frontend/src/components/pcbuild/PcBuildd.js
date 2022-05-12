import React, { Fragment, useEffect, useState } from "react";
import { allVendors } from "../../actions/vendorActions";
import { allProducts } from "../../actions/productActions";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import "./pcBuildd.css";

const PcBuildd = ({}) => {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.allVendors);
  const { products } = useSelector((state) => state.allProducts);

  const [vendorProducts, setVendorProducts] = useState([]);
  const [total, setTotal] = useState(0)
  const [selectedVendor, setSelectedVendor] = useState({});
  const [cpus, setCpus] = useState([]);
  const [gpus, setGpus] = useState([]);
  const[motherBoards, setMotherBoards] = useState([]);
  const [build, setBuild] = useState({});

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  useEffect(() => {
    console.log("selected Vendor", selectedVendor);
    resetProducts();
    console.log(products);
    const _products = products.filter((p) => p?.userId === selectedVendor);
    setVendorProducts([..._products]);
  }, [selectedVendor]);

  useEffect(() => {
    const _cpus = vendorProducts.filter(
      (p) => p.category.toLowerCase() === "cpu"
    );
    const _gpus = vendorProducts.filter(
      (p) => p.category.toLowerCase() === "graphiccards"
    );

    const _motherBoards = vendorProducts.filter( (p) => p.category.toLowerCase() === "motherboards");

    
    setCpus(_cpus);
    setGpus(_gpus);
    setMotherBoards(_motherBoards);
  }, [vendorProducts]);

  const resetProducts = () => {
    setBuild({});
    setCpus([]);
    setVendorProducts([]);
    setGpus([]);
    setMotherBoards([]);
  };

  useEffect(() => {
    console.log("build changed", build);


    Object.keys(build).forEach(key => {
      setTotal(
        total + build[key].price
      )
    })
  }, [build]);

  return (
    <Fragment>
      <div class="container">
        <label>Select a Store: </label>

        <select
          className="combobox"
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value={null} selected>
            Select a vandor
          </option>
          {vendors.map((vendor) => {
            return (
              <option value={vendor._id} key={vendor._id}>
                {vendor.shopname}
              </option>
            );
          })}
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
                        <select
                          className="combobox"
                          onChange={(e) =>
                            setBuild({
                              ...build,
                              cpu: JSON.parse(e.target.value),
                            })
                          }
                        >
                          <option value={null} selected>
                            Select a CPU
                          </option>
                          {cpus.map((product) => {
                            return (
                              <option
                                key={product._id}
                                value={JSON.stringify(product)}
                              >
                                {product.name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td>{build?.cpu?.name}</td>
                      <td>{build?.cpu?.price}</td>
                      <td> </td>
                    </tr>

                    <tr>
                      <td>MOTHERBOARD</td>
                      <td>
                        <select
                          className="combobox"
                          onChange={(e) =>
                            setBuild({
                              ...build,
                              motherBoards: JSON.parse(e.target.value),
                            })
                          }
                        >
                          <option value={null} selected>
                            Select a Motherboard
                          </option>
                          {motherBoards.map((product) => {
                            return (
                              <option
                                key={product._id}
                                value={JSON.stringify(product)}
                              >
                                {product.name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td>{build?.motherBoards?.name}</td>
                      <td>{build?.motherBoards?.price}</td>
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
                        <select className="combobox"
                          onChange=
                          {(e) =>
                            setBuild({
                              ...build,
                              graphiccards: JSON.parse(e.target.value),
                            })
                          } >
                          <option value={null} selected>
                            Select a GPU
                          </option>
                          {gpus.map((product) => {
                            return (
                              <option
                                key={product._id}
                                value={JSON.stringify(product)}
                              >
                                {product.name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td>{build?.graphiccards?.name}</td>
                      <td>{build?.graphiccards?.price}</td>
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
              <label class="totalAmount">Total Amount:  {total}</label>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PcBuildd;
