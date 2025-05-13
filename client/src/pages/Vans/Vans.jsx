import React, { useState, useEffect } from 'react';
import useEffectCall from '../../hooks/useEffectCall.js';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api.js';


const Vans = () => {
    const { data, loading, error } = useEffectCall('/api/vans');

    const [searchParams, setSearchParams] = useSearchParams();
    console.log('searchParams', searchParams.toString());
    const typeFilter = searchParams.get("type");
    // const [vans, setVans] = useState([]);

    // useEffect(()=>{
    //     const loadVans=async ()=>{
    //         const data = await getVans();
    //         setVans(data)
    //         console.log('data', data);
    //     }
    //     loadVans();
    // },[])

    if (loading) return <h1 aria-live="polite">Loading vans...</h1>;
    if (error) return <h1 aria-live="assertive" style={{ color: 'red' }}>Error: {error}</h1>;

    const displayedVans = typeFilter ? data.vans.filter(van => van.type === typeFilter) : data.vans;

    const vanElements = displayedVans.map(van => (

        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type:typeFilter }} >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div >

    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({ type: "rugged" })}
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : null}`}
                >Rugged</button>
                <button onClick={() => setSearchParams({ type: "luxury" })}
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : null}`}
                >Luxury</button>
                <button onClick={() => setSearchParams({ type: "simple" })}
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' : null}`}
                >Simple</button>
                {typeFilter ? <button onClick={() => setSearchParams({})}
                    className="van-type clear-filters"
                >clear</button> : null}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
export default Vans;