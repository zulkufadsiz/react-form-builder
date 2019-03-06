import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import logo from './logo.svg';
import './App.css';

class TestComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      toolType: 'CUSTOM_COMP',
      num1: 1,
      num2: 2
    }
  }

  changeValue(value){
    this.setState({
      num1:value
    });
  

    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index)
    }, 0)
  }

  render(){
    return(
      <div className="container">
          <span className="pull-right cross" onClick={() => this.props.removeField(this.props.index)}>x</span>
          <input onChange={(e) => this.changeValue(e.target.value)} type="text" />
      </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
            <div className="row">
                <div className="col-md-7">
                    {/* <FormContainer
                        loader={false}
                        debug={false}
                        updateOnMount={true}
                        updateForm={this.updateForm}
                        onSave={this.myForm}
                        custom={ myCustoms } /> */}
                </div>
                <div className="col-md-5">
                    <ToolBox custom={ myCustoms } />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
