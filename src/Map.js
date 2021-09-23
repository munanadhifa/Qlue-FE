import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import GoogleMapReact from 'google-map-react';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -6.200000,
      lng: 106.816666
    },
    zoom: 11
  };

  render() {

    return (
      <Container Fixed>
        <div style={{ height: '600px', width: '100%', marginTop: '100px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCUt3Mx2EIcxwaKjtYEIR96z5KhmHkTLuE" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {/* <AnyReactComponent
            lat={-6.200000}
            lng={106.816666}
            text="My Marker"
          /> */}
          </GoogleMapReact>
        </div>



      </Container>
    )
  }

}

export default Map