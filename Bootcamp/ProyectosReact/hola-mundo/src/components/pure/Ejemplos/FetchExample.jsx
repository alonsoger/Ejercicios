//Lo usamos para las peticiones HTTP.
import React, { useState, useEffect} from 'react';
import { getAllUsers } from './../../../services/FetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users:', response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            });
    }

    return (
        <div>
            <h2>Users:</h2>
            { users.map((user, index) => 
                    (
                        <p key={index}>
                            {user.first_name} {user.last_name}
                        </p>
                    )
                )
            }
        </div>
    );
}

export default FetchExample;
