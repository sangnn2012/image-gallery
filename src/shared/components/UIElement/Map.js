import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = (props) => {
    const mapRef = useRef();
    const { center, zoom } = props;
    useEffect(() => {
        const initMap = async () => {
            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
            const map = new Map(mapRef.current, {
                center,
                zoom,
                mapId: 'DEMO_MAP_ID',
            });
            new AdvancedMarkerElement({
                map: map,
                position: center,
                title: '',
            });
        }
        initMap();
    }, [center, zoom]);


    return <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
    >

    </div>
}

export default Map;