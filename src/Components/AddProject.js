import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    dictionary: ['ABCD', '中文', '213123']
  }

  handleSubmit(){
    if(this.refs.title.value === ''){
      alert('请输入something');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        dictionary: this.refs.dictionary.value
      }}, function(){
      //console.log(this.state);
        this.props.addProject1(this.state.newProject);
      });
    }
  }

  render() {
    let dictionaryOption = this.props.dictionary.map(dictionary => {
      return <option key={dictionary} value={dictionary}>{dictionary}</option>
    });
    return (
      <div className ="block" >
          <div className = "TextInput">
            <label>Title: </label>
            <input type="text" ref="title" />
            {this.props.index}
          </div>
          <div className = "dictionarySelection">
            <label>Dictionary: </label>
              <select ref="dictionary">
                {dictionaryOption}
              </select>
          </div>
            <p  className="goNext" >
            </p>
      </div>
    );
  }
}

AddProject.propTypes = {
  dictionary: PropTypes.PropTypes.array,
  addProject1: PropTypes.PropTypes.func
}

export default AddProject;
