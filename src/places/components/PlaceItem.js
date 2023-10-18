import React, { useState } from 'react';

import Card from '../../shared/components/UIElement/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElement/Modal';
import Map from '../../shared/components/UIElement/Map';
import './PlaceItem.css';

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const closeDeleteWarningHandler = () => setShowConfirmModal(false);
    const confirmDeleteHandler = () => {
        console.log('DELETING...');
        closeDeleteWarningHandler();
    }

    return <React.Fragment>
        <li className="place-item">
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map
                        center={props.coordinates}
                        zoom={16}
                    />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={closeDeleteWarningHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button
                            inverse
                            onClick={closeDeleteWarningHandler}
                        >
                            CANCEL
                        </Button>
                        <Button
                            danger
                            onClick={confirmDeleteHandler}
                        >
                            DELETE
                        </Button>
                    </React.Fragment>
                }
            >
                <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button
                        inverse
                        onClick={openMapHandler}
                    >
                        VIEW ON MAP
                    </Button>
                    <Button to={`/places/${props.id}`}>EDIT</Button>
                    <Button
                        danger
                        onClick={showDeleteWarningHandler}
                    >
                        DELETE
                    </Button>
                </div>
            </Card>
        </li>
    </React.Fragment>
}

export default PlaceItem;