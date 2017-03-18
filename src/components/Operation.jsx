var React = require('react');

var Operation = React.createClass({
    calculate: function (a,b) {

        return a+b;
    },
    render: function () {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onClick}>{this.props.type}</button>
        )
    }
});

module.exports = Operation;