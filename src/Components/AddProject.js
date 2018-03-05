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

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('请输入something');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        dictionary: this.refs.dictionary.value
      }}, function(){
      //  console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let dictionaryOption = this.props.dictionary.map(dictionary => {
      return <option key={dictionary} value={dictionary}>{dictionary}</option>
    });
    return (
      <div>
        <form  className ="block" onSubmit={this.handleSubmit.bind(this)}>
          <div className = "TextInput">
            <label>Title: </label>
            <input type="text" ref="title" />
          </div>
          <div className = "dictionarySelection">
            <label>Dictionary: </label>
            <select ref="dictionary">
              {dictionaryOption}
            </select>
          </div>
          <p  className="goNext" >
          <input type="submit" value="save" />
          </p>
        </form>

      </div>
    );
  }
}

AddProject.propTypes = {
  dictionary: PropTypes.PropTypes.array,
  addProject: PropTypes.PropTypes.func
}

export default AddProject;
