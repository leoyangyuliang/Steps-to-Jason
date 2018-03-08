import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddProject from './AddProject';
import './components.css';


class PropertiesHolder extends Component {
  constructor(){
    super();
    this.state = {
      dictionary: [],
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
    this.showNextProperty();
  }


  showNextProperty(){
      let temp = this.props.properties;
    if(this.refs["child"+temp.length].refs.title.value ==='')
    {
      alert('请输入something');
    }
    else{
    if(this.props.properties)
    {
      let ref = "child"+(temp.length+1);
      console.log(ref);
      temp.push(<AddProject
        ref={ref}
        key={(temp.length+1)}   //the key is the index
        index={ref}
        addProject1={this.handleAddProject1}
        dictionary ={this.state.dictionaryOption}
        />);
          console.log(temp.length);
      this.props.updateProperties(temp);
    }
  }
}

deleteLastProperty(){
  let temp = this.state.properties;
  temp.splice(temp.legnth,1);
  this.setState({properties:temp});
}

  render() {
    let length = this.state.properties.length;
    console.log(length);

    return (
      <div>
        <AddProject
              ref="child0"
              key="0"
              index="child0"
              addProject1={this.handleAddProject1.bind(this)}
              dictionary ={this.state.dictionaryOption}
        />

        <p>
        {this.props.properties}
        </p>
        <p className ="goNextButton">
        {length}
        <button onClick={()=>this.refs["child"+length].handleSubmit()}>Submit</button>
        <button onClick={this.showNextProperty.bind(this)}>Next Step</button>
        </p>

      </div>
    );

  }
}

PropertiesHolder.propTypes = {
  projects: PropTypes.PropTypes.object,
  addProject: PropTypes.PropTypes.func
}

export default PropertiesHolder;
