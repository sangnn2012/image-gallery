import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Sang Nguyen',
        image: 'http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg',
        places: 3,
    }];
    return <UserList items={USERS} />
};

export default Users;