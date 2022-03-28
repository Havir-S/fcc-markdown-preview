import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from '@reduxjs/toolkit';

const defaultState = {
  text: ''
}
const TEXTUPDATE = 'TEXTUPDATE';

const updateText = (inputValue) => {
  return {
    type: TEXTUPDATE,
    text: inputValue
  }
}

const textReducer = ((state = defaultState, action) => {
  switch (action.type) {
    case TEXTUPDATE:
    console.log(action);
    state = Object.assign({}, state, {text:action.text});
    return state;
    break;
    default:
    return state;
  }
})

const store = createStore(textReducer);


function mapStateToProps(state) {
  return {
    text: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateText: (e) => {
      dispatch(updateText(e));
    }
  }
}

//main function for translating the input into html elements
const HTMLCREATOR = (input) => {
  let returnedText = input.replace('\n', <br/>),
      newInput = input.split("");
      console.log(newInput);

//regex
let newLineRegex = /\n/;

let test = <div className='previewText'></div>
  return (
    test
  )
}

////////////////////////////////////////////////////////////

class EditedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToEdit: this.props.text
    }
  }
  render() {
    const test = HTMLCREATOR(this.props.text)
    return (
      test
    )
  }
}


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
    this.props.updateText(e.target.value);


  }
  render() {
    return (
      <div className="App">
        <div className='wrapper'>
          <div className='textholder'>
            <div className='textholdertitle'>
            Editor
            </div>
            <textarea value={this.state.text} onChange={this.handleChange} id='editor'>
            </textarea>
          </div>
          <div className='previewholder'>
            <div className='previewholdertitle'>
            Previewer
            </div>
            <div id='preview'>
              <EditedText text={this.state.text}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const ConnectedWrapper = connect(mapStateToProps,mapDispatchToProps)(Wrapper);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
