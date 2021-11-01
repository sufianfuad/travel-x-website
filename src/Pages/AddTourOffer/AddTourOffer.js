import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTourOffer.css';
const AddTourOffer = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://sleepy-basin-98132.herokuapp.com/tourOffers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };

    return (
        <div className="addTourOffers-container">
            <h2 className="text-center pb-3 heading">Please Add Your <br />
                Favorite Tour Place</h2>
            <div className="form-container container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                    <textarea {...register("description")} placeholder="description" />

                    <input type="number" {...register("TourCost")} placeholder="TourCost" />
                    <input type="text" {...register("rating")} placeholder="rating(1.2k+rating)" />

                    <input {...register("image")} placeholder="paste img url from image.js file" />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddTourOffer;