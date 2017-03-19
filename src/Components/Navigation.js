import React, { Component } from 'react';

import PaymentBtn from './PaymentBtn';

class Navigation extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-fixed-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="navbar-brand">Cheap Silicone Baking Mats</span>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav pull-right">
                        <li >
                          <div className="nav-buy">
                            <PaymentBtn/>
                          </div>
                    </li>
                    </ul>
                </div>

            </div>

        </nav>

      </div>
    );
  }
}

export default Navigation;
