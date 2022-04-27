import React, { Fragment} from 'react'
import "./pcBuildd.css";

const PcBuildd = () => {
  return (
    <Fragment>

<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title m-b-0">Static Table With Checkboxes</h5>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                
                                <th scope="col">Country</th>
                                <th scope="col">Browser</th>
                                <th scope="col">Platform(s)</th>
                                <th scope="col">Engine version</th>
                            </tr>
                        </thead>
                        <tbody class="customtable">
                            <tr>
                               
                                <td>India</td>
                                <td>Chrome OS</td>
                                <td>MAC OS</td>
                                <td>76</td>
                            </tr>
                            <tr>
                               
                                <td>USA</td>
                                <td>Internet Explorer</td>
                                <td>Win 2010</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                
                                <td>UK</td>
                                <td>Safari</td>
                                <td>Mac OS</td>
                                <td>16</td>
                            </tr>
                            <tr>
                               
                                <td>UAE</td>
                                <td>Google Chrome</td>
                                <td>Win 2013</td>
                                <td>76.12</td>
                            </tr>
                            <tr>
                                
                                <td>Canada</td>
                                <td>Internet Explorer</td>
                                <td>Win 2010</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                
                                <td>Turkey</td>
                                <td>Internet Explorer 8</td>
                                <td>Win 2010</td>
                                <td>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

      </Fragment>
  )
}

export default PcBuildd
