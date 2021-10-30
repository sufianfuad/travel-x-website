import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTourOffer.css';
const AddTourOffer = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/tourOffers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset()
                }
            })
    };

    return (
        <div className="add-tourOffers">
            <h2 className="text-center pb-3">Please Add Your <br />
                Favorite Tour Place</h2>
            <div className="form-container container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                    <textarea {...register("description")} placeholder="description" />

                    <input type="number" {...register("TourCost")} placeholder="TourCost" />
                    <input type="text" {...register("rating")} placeholder="rating" />

                    <input {...register("image")} placeholder="image url" />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddTourOffer;