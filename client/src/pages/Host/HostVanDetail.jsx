import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, } from "react-router-dom";
import { useParams } from "react-router-dom";
import useEffectCall from "../../hooks/useEffectCall.js";


const HostVanDetail = () => {

    const [currentVan, setCurrentVan] = useState(null);

    const { id } = useParams();
    const data = useEffectCall(`/api/host/vans/${id}`, id);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {

        if (data?.data?.vans[0]) {
            setCurrentVan(data.data?.vans[0]);
        }
    }
        , [data])


    if (!currentVan) {
        return <h1>Loading...</h1>
    }


    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )

}
export default HostVanDetail;
