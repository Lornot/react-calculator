var React = require('react');
var MyInput = require('./MyInput.jsx');
var Operation = require('./Operation.jsx');
var Clear = require('./Clear.jsx');

var OperationsData = [
    {
        'title' : 'add',
        'sign'  : '+'
    },
    {
        'title' : 'substruct',
        'sign'  : '-'
    },
    {
        'title' : 'divide',
        'sign'  : '/'
    },
    {
        'title' : 'multiply',
        'sign'  : '*'
    }
];

var Calculator = React.createClass({
    getInitialState: function () {
        return {
            'number1_placeholder' : 'NUMBER e.g. 1337',
            'number1_value'       : '',
            'number2_placeholder' : 'NUMBER e.g. 2108',
            'number2_value'       : '',
            'result'              : 'Result'
        }
    },
    clear: function () {
        this.setState({
            'number1_value' : '',
            'number2_value' : '',
            'result'  : 'Result',
        });
        this.refs.number1.setState({'valid':true});
        this.refs.number2.setState({'valid':true});
    },
    handleChange(element) {
        let id = element.target.id;
        let val = element.target.value;

        let ref_object = this.refs[id];
        if (isNaN(val)) {
            ref_object.setState({'valid':false});
        } else {
            ref_object.setState({'valid':true});
        }
        let obj = {};
        let property_name = id + '_value';
        obj[property_name] = val;
        this.setState(obj);
    },
    calculate: function(element) {
        let sign = element.target.getAttribute('data-sign');

        if (!this.refs.number1.state.valid || !this.refs.number2.state.valid) {
            this.setState({'result':'Invalid inputs'});
            return;
        }

        let result = eval(this.state.number1_value + sign + this.state.number2_value);

        this.setState({'result':result});
    },
    render: function () {

        // var Operations = OperationsData.map(
        //     function (operation) {
        //         return <Operation type={operation.title} onClick={operation.calculate} />
        //     }
        // );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3"></div>
                    <div className="col-md-offset-6">
                        <h1>Simple calculator</h1>
                        <div className="form-group ">
                            <MyInput type="text" id="number1" ref="number1" onChange={this.handleChange} placeholder={this.state.number1_placeholder} value={this.state.number1_value} />
                            <MyInput type="text" id="number2" ref="number2" onChange={this.handleChange} placeholder={this.state.number2_placeholder} value={this.state.number2_value} />
                        </div>
                        <div className="operations">
                            <Operation title="Add" sign="+" onClick={this.calculate} />
                            <Operation title="Substruct" sign="-" onClick={this.calculate} />
                            <Operation title="Divide" sign="/" onClick={this.calculate} />
                            <Operation title="Multiply" sign="*" onClick={this.calculate} />
                        </div>
                        <div className="result">
                            <MyInput disabled="disabled" type="text" placeholder={this.state.result}  />
                        </div>
                        <div>
                            <Clear ref="Clear" onClick={this.clear} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Calculator;