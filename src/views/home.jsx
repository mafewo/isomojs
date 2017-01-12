//ectma6
/*import React, { Component } from 'react';
export default class home extends Component {
  render() {
return (

<div className="row">
      <h1>this.props.title</h1>
</div>
    );      
  }
}*/
var React = require('react');

var Home = React.createClass({
    render: function(){
        return(
            <h1>{this.props.title}</h1>
        )
    }
});
module.exports = Home;