import React, { Fragment } from "react";
import "./pcBuild.css";
const PcBuild = () => {
  return (
    <Fragment>
      <div class="wrapper wrapper__pageTitle ">
        <section class="xs-col-11 lg-col-9 xl-col-8 xs-mx-auto ">
          <h1 class="pageTitle ">System Builder</h1>
        </section>
      </div>

      <div class="partlist__wrapper">
        <div class="partlist__metrics">
          <div class="partlist__compatibility partlist__compatibility--noIssues">
            
          </div>
          <div class="partlist__keyMetric">
           
          </div>
        </div>
        <div class="block partlist partlist--edit clearfix">
          <table class="xs-col-12">
            <thead>
              <tr>
                <th class="th__component">Component</th>
                <th></th>
                <th class="th__selection" colspan="2">
                  Selection
                </th>
                <th class="th__base">Base</th>
                <th class="th__promo">Promo</th>
                <th class="th__shipping">Shipping</th>
                <th class="th__tax ">Tax</th>
                <th class="th__settings"></th>
                <th class="th__price">Price</th>
                <th class="th__where">Where</th>
                <th class="th__buy"></th>
                <th class="th__remove"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/cpu/">CPU</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/cpu/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A CPU
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/cpu-cooler/">CPU Cooler</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/cpu-cooler/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A CPU Cooler
                  </a>
                </td>
              </tr>

              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/motherboard/">Motherboard</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/motherboard/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A Motherboard
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/memory/">Memory</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/memory/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose Memory
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/internal-hard-drive/">Storage</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/internal-hard-drive/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose Storage
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/video-card/">Video Card</a>
                </td>

                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/video-card/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A Video Card
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/case/">Case</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/case/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A Case
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/power-supply/">Power Supply</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/power-supply/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A Power Supply
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/os/">Operating System</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/os/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose An Operating System
                  </a>
                </td>
              </tr>
              <tr class="tr__product">
                <td class="td__component">
                  <a href="/products/monitor/">Monitor</a>
                </td>
                <td class="td__placement--empty"></td>
                <td class="td__addComponent" colspan="11">
                  <a
                    href="/products/monitor/"
                    class="button  button--icon button--small"
                  >
                    <svg class="icon shape-add">
                      <use xlinkHref="#shape-add"></use>
                    </svg>
                    Choose A Monitor
                  </a>
                </td>
              </tr>
            
              

             
            </tbody>
          </table>
        </div>
       
      </div>
    </Fragment>
  );
};

export default PcBuild;
