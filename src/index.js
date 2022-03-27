import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    return state = {text:action.text}
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


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 's'
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
            <textarea value={this.state.text} onChange={this.handleChange} id='editor'>
            </textarea>
          </div>
          <div className='previewholder'>
            <div id='preview'>
            {this.state.text}
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
