import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true,
        },
        description: {
            value: identifiedPlace.description,
            isValid: true,
        }
    }, true);

    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return <form
        className="place-form"
        onSubmit={placeUpdateSubmitHandler}
    >
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialIsValid={formState.inputs.title.isValid}
        />
        <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialIsValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
        </Button>
    </form>
};

export default UpdatePlace;