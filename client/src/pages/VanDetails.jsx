import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useEffectCall from "../hooks/useEffectCall.js";

const VanDetails = () => {

    const [van, setVan] = useState(null);
    const params = useParams();

    const data = useEffectCall(`/api/vans/${params.id}`, params.id);

    useEffect(() => {
        if (data?.data?.vans) {
            setVan(data.data?.vans);
        }
        console.log('data', data)
    }, [data])



    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetails;