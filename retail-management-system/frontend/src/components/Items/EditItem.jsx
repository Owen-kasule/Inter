import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

const EditItem = () => {
    const { id } = useParams();
    const history = useHistory();
    const [item, setItem] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await api.get(`/items/${id}`);
                setItem(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching item data');
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/items/${id}`, item);
            history.push('/items');
        } catch (err) {
            setError('Error updating item');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Item</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={item.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={item.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={item.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={item.quantity} onChange={handleChange} required />
                </div>
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default EditItem;