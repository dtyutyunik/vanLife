import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api.js";

const HostVans = () => {

    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()

    }, []);


    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`visual of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-vans-container">
            <section>
                <h1 className="host-vans-title">Your listed vans</h1>
                <div className="host-vans-list">
                    {
                        vans.length > 0 ? (
                            <section>
                                {hostVansEls}
                            </section>

                        ) : (
                            <h2>Loading...</h2>
                        )
                    }
                </div>
            </section>
        </div>
    );
}
export default HostVans;
