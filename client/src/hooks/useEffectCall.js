import React, { useState, useEffect } from 'react';

const useEffectCall = (api) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        let isMounted = true;

        fetch(api).then(res => {
            if (!res.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            return res.json()
        }).then(data => {
            if (isMounted) {
                console.log('internal data', data)
                setData(data);
                setLoading(false);
            }
        }).catch((err) => {
            if (isMounted) {
                setLoading(false);
                setError(err.message);
            }
        }
        )

        return () => { isMounted = false; }
    }, [])


    return { data, loading, error };
}

export default useEffectCall;