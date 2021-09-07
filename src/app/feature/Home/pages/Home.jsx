import React, {useEffect} from 'react'
import './Home.style.css';
import Table from '../../../shared/components/Table/Table';
import Buttom from '../../../shared/components/Button/Button';

import {useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../../../core/redux/actions/userActions';

const Home = () => {

    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.userReducer);

    useEffect(() => {
        
    }, [])
    
    
    const handleGetUsers = () => {
        dispatch(getUsers());
    }

    return (
        <div className="background">
            <div className="flexContainer">

                <div className="flexCenterBtn">
                    <Buttom color="secondary" variant="contained" onClick={() => handleGetUsers()} />
                </div>
                <hr />
                <div className="flexCenterTable">
                    <Table data={users} />
                </div>

            </div>
        </div>
    )
}

export default Home
