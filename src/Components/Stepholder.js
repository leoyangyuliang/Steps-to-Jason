import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step from './Step';
import './components.css';


class Stepholder extends Component {
  constructor(){
    super();
    this.refs={};
    this.state = {
      number_of_properties:0,
      properties:[]
    }
  }

  componentWillMount(){
  this.setState({
    dictionaryOption: [
      "pending",
      "buying",
      "selling"
    ]
  });

  }

  handleAddProject1(project){
    this.props.addProject(project);
    let temp_number_of_properties = this.state.number_of_properties+1;
    this.setState({
      number_of_properties:temp_number_of_properties
    });
    console.log("number_of_properties: "+this.state.number_of_properties);
    //this.showNextProperty();

  }


deleteLastProperty(id){
  let temp = this.state.properties;
  let index = temp.findIndex(x => x.id === id);
  temp.splice(index,1);
  this.setState({properties:temp});
  let temp_number_of_properties = (this.state.number_of_properties-1);
  this.setState({
    number_of_properties:temp_number_of_properties
  });
}

  render() {
    let actual_length = this.state.properties.length;
    let length = this.state.number_of_properties;

    for (var i = actual_length; i <= length; i += 1) {

      let step = "step"+i;
      if(this.refs["step"+(i-1)])
      {
        console.log("step "+i+" exist");
      }
      let temp_properties = <Step
        ref={step}
        key={i}
        index={step}
        addProject0={this.handleAddProject1.bind(this)}
        dictionary ={this.state.dictionaryOption}
        />;
        this.state.properties.push(temp_properties);

    };
    console.log(this.state.properties);
    return (
      <div>
        <div>
        {this.state.properties}
        </div>
        <p className ="goNextButton">
                <button onClick={()=>this.refs["step"+length].handleSubmit()}>Next Step</button>
        </p>

      </div>
    );

  }
}

Stepholder.propTypes = {
  projects: PropTypes.PropTypes.object,
  addProject: PropTypes.PropTypes.func
}

export default Stepholder;
