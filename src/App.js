import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';
import Forms from './SessionThree/Forms';
import LifeCycle from './SessionThree/LifeCycle';
import FunctionalComponent from './SessionThree/FunctionalComponent';
import ApiComponent from './SessionThree/ApiComponent';
import MyFunctionalComponent from './SessionFour/FC';
import FCUseEffect from './SessionFive/FCUseEffect';
import FCRendering from './SessionFive/FCListRendering';
import Home from './SessionSix/Home';
import Albums from './SessionSix/Albums';
import Photos from './SessionSix/Photos';
import FCRef from './SessionSeven/FCRef';
import FCDebouncing from './SessionSeven/FCDebouncing';
import FCMaterialUi from './SessionSeven/FCMaterialUI';
import FCUseCallback from './SessionEight/FCUseCallback';
import FCUseMemo from './SessionEight/FCUseMemo';
import FCContext from './SessionNine/FCContext';
import FCReducer from './SessionNine/FCReducer';
import NormalRedux from './SessionTen/NormalRedux';
import AsyncRedux from './SessionTen/AsyncRedux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLifeCycle: true,
      updateTrigger: false,
    };
  }
  toggleLifeCycle = () => {
    this.setState((prevState) => ({
      showLifeCycle: !prevState.showLifeCycle,
    }));
  };

  triggerUpdate = () => {
    this.setState((prevState) => ({
      updateTrigger: !prevState.updateTrigger
    }));
  };

  render() {
    return (
      <div>
        {/* <SessionOneCounter /> */}
        {/* <SessionTwoCounter /> */}
        {/* <Forms /> */}
        {this.state.showLifeCycle && <LifeCycle />}
          <button onClick={this.toggleLifeCycle}>
            Show/Hide LifeCycle Component
          </button>
          <button onClick={this.triggerUpdate}>
            Trigger LifeCycle Update
          </button>
        {/* <FunctionalComponent /> */}
        {/* <ApiComponent /> */}
        {/* <MyFunctionalComponent t2={'Hello World T2'} name="Ajo" /> */}
        {/* <FCUseEffect /> */}
        {/* <FCRendering /> */}
        {/* <FCUseEffect /> */}
        {/* <Home /> */}
        {/* <FCRef /> */}
        {/* <FCDebouncing /> */}
        {/* <FCMaterialUi /> */}
        {/* <FCUseCallback /> */}
        {/* <FCUseMemo /> */}
        {/* <FCContext /> */}
        {/* <FCReducer /> */}
        {/* <NormalRedux /> */}
        {/* <AsyncRedux /> */}
      </div>
    );
  }
}

export default App;
