import React, { Component } from 'react';
import StoreMapPresenter from './StoreMapPresenter';
import Geolocation from '@react-native-community/geolocation';

class StoreMapContainer extends Component {
    state = {
        lat : 0,
        lng: 0,
        error: ''
    }
    componentDidMount(){
        Geolocation.getCurrentPosition(info => console.log(info));
        Geolocation.getCurrentPosition(position => {
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }, error => {
            console.log(error);
        });
    }

    render(){
        return (
            <StoreMapPresenter
                lat={this.state.lat}
                lng={this.state.lng}
            />
        );
    }
}
export default StoreMapContainer;