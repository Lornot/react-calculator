var React = require('react');

var Operation = React.createClass({
    render: function () {
        return (
            <button type="button" className="btn btn-primary" title={this.props.title} data-sign={this.props.sign} onClick={this.props.onClick}>{this.props.title}</button>
        )
    }
});

module.exports = Operation;