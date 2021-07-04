import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/userTypeSelector';
import { fethcUser } from '../store/action-creators/user';
import { useActions } from './../hooks/useAction';

export const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);

    const {fethcUser} = useActions()

    useEffect(() => {
        fethcUser()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    } if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => 
                    <div key={user.id}>{user.name}</div>
                )}
        </div>
    )
};