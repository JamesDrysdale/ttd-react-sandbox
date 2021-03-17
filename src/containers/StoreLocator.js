import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {
    render() {
        return (<Fragment>
                    <Header />
                    <div>
                        <Button location="Portland" /> <Button location="Astoria" /> <Button />
                    </div>
                    
                    <Map />
                </Fragment>);
    }
}

 export default StoreLocator;