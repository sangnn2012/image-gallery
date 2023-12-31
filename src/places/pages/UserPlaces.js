import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg',
        address: '20 W 34th St., New York, NY 10001, USA',
        location: {
            lat: 40.7484,
            lng: -73.9857,
        },
        creatorId: 'u1',
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg',
        address: '20 W 34th St., New York, NY 10001, USA',
        location: {
            lat: 40.7484,
            lng: -73.9857,
        },
        creatorId: 'u2',
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => place.creatorId === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;