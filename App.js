import React from 'react';
import { StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import store from "./store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true});


  render() {
    const {loaded} = this.state;
      return (
        <Provider store={store}>
          <>
            <StatusBar barStyle="light-content" />
            <MainNavigation />
          </>
        </Provider>
      );
  }
}