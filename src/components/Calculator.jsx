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
            'number1' : 'NUMBER e.g. 1337',
            'number2' : 'NUMBER e.g. 2108',
            'number1_valid' : true,
            'number2_valid' : true,
            'result'  : 'Result'
        }
    },
    handleOperationClick: function () {
        alert('sadfsadf');
    },
    clear: function () {
        alert('clear ');
    },
    handleChange(element) {
        let id = element.target.id;
        let val = element.target.value;
        let obj = {};
        obj[id] = val;
        this.setState(obj);
    },
    calculate: function(element) {
        let sign = element.target.getAttribute('data-sign');

        if (isNaN(this.state.number1))
            this.state({'number1_valid':false});

        if (isNaN(this.state.number2))
            this.state({'number2_valid':false});
        
        let result = eval(this.state.number1 + sign + this.state.number2);

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
                        <div className="form-group">
                            <MyInput type="text" id="number1" ref="Number1" onChange={this.handleChange} placeholder={this.state.number1}/>
                            <MyInput type="text" id="number2" onChange={this.handleChange} placeholder={this.state.number2}/>
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