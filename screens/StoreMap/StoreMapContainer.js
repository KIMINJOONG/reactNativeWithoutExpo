import React, { Component } from 'react';
import StoreMapPresenter from './StoreMapPresenter';
import Geolocation from '@react-native-community/geolocation';

class StoreMapContainer extends Component {
    state = {
        latLng: {},
        error: ''
    }
    componentDidMount(){
        Geolocation.getCurrentPosition(position => {
            this.setState({
                latLng: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
        }, error => {
            console.log(error);
        });
    }

    render(){
        const { latLng } = this.state;
        console.log(latLng);
        return (
            <StoreMapPresenter
                latlng={this.state.latLng}
            />
        );
    }
}
export default StoreMapContainer;