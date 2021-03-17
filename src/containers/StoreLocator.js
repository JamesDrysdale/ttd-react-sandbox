import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png'
        }
        this.shops = [{
            'location' : 'Portland',
            'address'  : '123 Portland Dr'
        }, {
            'location' : 'Astoria',
            'address'  : '456 Astoria Pl'
        }, {
            'location' : '',
            'address'  : ''
        }];
    }
    render() {
        let storeButtons = this.shops.map((shop, id) => {
            return(<Button key={id} location={shop.location} />)
        })

        return (<Fragment>
                    <Header />
                    <div>
                        {storeButtons}
                    </div>
                    
                    <Map imagename={this.state.currentMap} location={this.props.location} />
                </Fragment>);
    }
}

 export default StoreLocator;