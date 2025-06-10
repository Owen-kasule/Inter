import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the Retail Management System</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/items">View Items</Link>
                    </li>
                    <li>
                        <Link to="/items/add">Add Item</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;