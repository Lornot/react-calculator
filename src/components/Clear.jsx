var React = require('react');

var Clear = React.createClass({

    render: function () {
        return (
            <button className="btn btn-danger" onClick={this.props.onClick}>Clear</button>
        )
    }
});

module.exports = Clear;