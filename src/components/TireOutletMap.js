import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';

const TireOutletMap = withScriptjs(
	withGoogleMap((props) => {
		const location = { lat: 28.480774, lng: -81.396365 };
		return (
			<GoogleMap defaultZoom={15} defaultCenter={location}>
				{<Marker position={location} />}
			</GoogleMap>
		);
	})
);
export default TireOutletMap;
