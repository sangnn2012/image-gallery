import React from 'react';

import UserList from '../components/UserList';

const User = () => {
    const USERS = [{
        id: 'u1',
        name: 'Sang Nguyen',
        image: 'http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg',
        places: 3,
    }];
    return <UserList users={USERS} />
};

export default User;