import React, { Component } from 'react';

import PaymentBtn from './PaymentBtn';


class Home extends Component {
  render() {
    return (
      <div>
        <header className="business-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="tagline"> Your baking will change forever when you use these non-stick baking mats.</h1>
                    </div>
                    <div className="col-md-4 text-center fromTop">
                     <div className="panel  panel-pricing">
                        <div className="panel-body text-center topText"><strong> Features</strong> </div>
                         <ul className="list-group text-center">
                             <li className="list-group-item"><i className="fa fa-check"></i> Non-stick</li>
                             <li className="list-group-item"><i className="fa fa-check"></i>Easy-to-clean</li>
                             <li className="list-group-item"><i className="fa fa-check"></i>Durable</li>
                            <li className="list-group-item"><i className="fa fa-check"></i> High Quality Silicone</li>
                         </ul>
                         <div className="panel-body priceWhite text-center">
                             <p className="oldPriceP2">Was <span className="oldPrice">$19.99</span></p>
                          <span className="oldPriceP">Now </span> <span className="newPrice"><strong>$9.95</strong></span>
                         </div>
                         <div className="panel-footer">

                           <PaymentBtn/>
                         </div>
                     </div>
                 </div>
                </div>
            </div>
        </header>



                <div className="container">


                  <hr/>

                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="center">Upgrade the way you think about baking with the latest technology.</h2>
                        </div>
                    </div>


                    <hr/>

                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-circle img-responsive img-center" src="img/s-l1600-9.jpg" alt=""/>
                            <h2>High Quality</h2>
                            <p>Made of premium quality non-toxic materials passed strict FDA approved tests. No oil or fat is required for baking which reduces intake of cholesterol, saturated fat and cancerogenic substances produced by cooking oils subjected to high temperatures.</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-circle img-responsive img-center" src="img/s-l1600-5.jpg" alt=""/>
                            <h2>Non-stick and Easy-to-clean</h2>
                            <p>No more scrubbing! Even burnt sugar and fat falls off on itson. Just rinse the mat in warm soapy water to clean it. You can also wash it in your dishwasher. Repeated multiple uses and washing cycles do not affect non-stick properties of the mat. After every use and cleanup, it will be just like new again.</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-circle img-responsive img-center" src="img/s-l1600-11.jpg" alt=""/>
                            <h2>Durable and Long Lasting:</h2>
                            <p>It's flexible yet tear resistant, and designed to withstand thousands of uses under extreme conditions of bitter cold and intense heat</p>
                        </div>
                    </div>



                    <hr/>


                    <div className="container content">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="testimonials">
                                	<div className="active item">
                                      <blockquote><p>This baking mat has changed the way I bake. It's such a pleasure to bake with the kids and so easy to clean up afterwards</p></blockquote>
                                      <div className="carousel-info">
                                        <img alt="" src="img/woman1.jpg" className="pull-left"/>
                                        <div className="pull-left">
                                          <span className="testimonials-name">Susan Smith</span>
                                          <span className="testimonials-post">Mother of 2 boys</span>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="testimonials">
                                	<div className="active item">
                                      <blockquote><p>I was pleased with the quick delivery. This product has been a pleasure to bake with. Myself and my children love this product</p></blockquote>
                                      <div className="carousel-info">
                                        <img alt="" src="img/woman2.jpg" className="pull-left"/>
                                        <div className="pull-left">
                                          <span className="testimonials-name">Linda Jones</span>
                                          <span className="testimonials-post">Mother of 3 girls</span>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <hr/>

                    <div className="container content">
                        <div className="row">
                            <div className="col-md-2 ">
                              <h4>Specifications</h4>
                            </div>
                            <div className="col-md-10 ">
                                  <img src="img/s-l1600-4.jpg" width="80%" alt=""/>
                                  <p>Width 40 cm </p>
                                  <p>Height 60 cm </p>
                                  <p>Tempreatures up to 248°F</p>
                            </div>

                        </div>
                      </div>






                            <div className="col-lg-12 foooter">
                                <p>Copyright &copy; Silicone Baking Mats</p>
                            </div>


                
                </div>

      </div>
    );
  }
}

export default Home;
