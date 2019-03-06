import React, { Component } from 'react';

 class DurationPicker extends Component {
     constructor(props){
        super(props);
        this.state = {
            tab: '',
            title: '',
            titleForm: '',
            titleTo: '',
            type: 'DURATION',
            toolType: 'DURATION_PICKER',
            defaultValue: '',
            placeholder: '',
            description: '',
            validation: {
                isReadOnly: false,
                isRequired: false,
            }
        };
        this.changeValue = this.changeValue.bind(this);
     }
    componentWillMount(){
        this.setState(this.props.field);
    }
    changeValue(stateFor, value){
        switch(stateFor){
            case "NAME" :
                this.setState({ name : value});
                break;
            case "TITLE" :
                this.setState({title: value});
                break;
            case "TITLE_FROM"
                break
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }

 
}

export default DurationPicker;