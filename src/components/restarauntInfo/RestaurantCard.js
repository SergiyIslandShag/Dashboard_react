import "./style.css";
import { useState } from "react";

function RestaurantInfo(props) {
    const [name, setName] = useState(props.name);
    const [address, setAddress] = useState(props.address);
    const [rating, setRating] = useState(props.rating);
    const [cuisineType, setCuisineType] = useState(props.cuisineType);
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function handleCuisineTypeChange(event) {
        setCuisineType(event.target.value);
    }

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleSaveClick() {
        setIsEditing(false);
    }

    return (
        <div className="restaurant-info">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Назва"
                    />
                    <input
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        placeholder="Адреса"
                    />
                    <input
                        type="number"
                        value={rating}
                        onChange={handleRatingChange}
                        placeholder="Рейтинг"
                        min="0"
                        max="5"
                        step="0.1"
                    />
                    <input
                        type="text"
                        value={cuisineType}
                        onChange={handleCuisineTypeChange}
                        placeholder="Тип кухні"
                    />
                    <button onClick={handleSaveClick}>Зберегти</button>
                </div>
            ) : (
                <div>
                    <h1>{name}</h1>
                    <p><strong>Адреса:</strong> {address}</p>
                    <p><strong>Рейтинг:</strong> {rating} / 5</p>
                    <p><strong>Тип кухні:</strong> {cuisineType}</p>
                    <img src={props.imageUrl} alt={"Зображення ресторану " + name} className="restaurant-image" />
                    <button onClick={handleEditClick}>Редагувати</button>
                </div>
            )}
        </div>
    );
}

export default RestaurantInfo;