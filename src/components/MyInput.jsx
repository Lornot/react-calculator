var React = require('react');

var MyInput = React.createClass({

    getInitialState: function () {
        return {
            'result': 0,
            'valid': true
        };
    },
    render: function () {

        var formClass = this.state.valid ? 'form-group' : 'form-group has-error';
        var message = this.state.valid ? '' : 'This is not a number';

        return (
            <div className={formClass}>
                <label className="control-label"  htmlFor="inputError1">{ message }</label>
                <input onChange={this.props.onChange} className="form-control" id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} disabled={this.props.disabled} value={this.props.value}/>
            </div>

        )
    }
});

module.exports = MyInput;