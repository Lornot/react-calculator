var React = require('react');

var Input = React.createClass({

    setInitialState: function () {
        this.setInitialState({'result':0, 'valid': true});
    },
    onChange: function (e) {
        
    },
    render: function () {
        return (
            <input onChange={this.onChange} className="form-control" type={this.props.type} placeholder={this.props.placeholder} disabled={this.props.disabled} />
        )
    }
});

module.exports = Input;