var React = require('react');

var MyInput = React.createClass({

    setInitialState: function () {
        this.setInitialState({'result':0, 'valid': true});
    },
    render: function () {
        return (
            <input onChange={this.props.onChange} className="form-control" id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} disabled={this.props.disabled} />
        )
    }
});

module.exports = MyInput;