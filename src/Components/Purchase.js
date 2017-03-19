import React, { Component } from 'react';

import Navigation from './Navigation';

import {Link} from 'react-router';

class Purchase extends Component {
  render() {
    return (
      <div>
       <Navigation />
        <div className="Purchase">
          <h4>Thankyou for you purchase</h4>
          <p>We are processing your order and will have it in the mail in the next few days</p>
          <Link to="/" className="btn btn-primary">Back</Link>
     </div>
    </div>
    );
  }
}

export default Purchase;
