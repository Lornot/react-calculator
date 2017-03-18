var React = require('react');
var Input = require('./Input.jsx');
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
            'result'  : 'Result'
        }
    },
    handleOperationClick: function () {
        alert('sadfsadf');
    },
    clear: function () {
        alert('clear ');
    },
    onChange() {
        alert('Change the number');
    },
    render: function () {

        var Operations = OperationsData.map(
            function (operation) {
                return <Operation type={operation.title} ref={operation.title} />
            }
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3"></div>
                    <div className="col-md-offset-6">
                        <h1>Simple calculator</h1>
                        <div className="form-group">
                            <Input type="text" ref="Number1" onChange={this.onChange()} placeholder={this.state.number1}/>
                            <Input type="text" onChange={this.onChange()} placeholder={this.state.number2}/>
                        </div>
                        <div className="operations">
                            {Operations}
                        </div>
                        <div className="result">
                            <Input disabled="disabled" type="text" placeholder={this.state.result} />
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