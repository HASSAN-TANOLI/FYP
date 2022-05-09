
import React, { Fragment, useEffect } from 'react'



import "./pcBuildd.css";

const PcBuildd = ({vendors}) => {

  

     

  

   


  return (
    <Fragment>
      <div class="container">
        <label>Select a Store: </label>

        <select className="combobox">
          <option> </option>
         
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
                        {" "}
                        <a href=""> Select Cpu </a>{" "}
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PcBuildd;
