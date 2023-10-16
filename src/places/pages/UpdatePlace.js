import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

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
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

    if(!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return <form
        className="place-form"
        onSubmit={() => {}}
    >
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={() => {}}
            value={identifiedPlace.title}
            valid={true}
        />
        <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={() => {}}
            value={identifiedPlace.description}
            valid={true}
        />
        <Button type="submit" disabled={true}>
            UPDATE PLACE
        </Button>
    </form>
};

export default UpdatePlace;