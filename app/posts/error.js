"use client"

import { useEffect } from "react";

export default  function Error({error, reset}) {
    useEffect (() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h2>Something wrong fetching post segment!</h2>
            <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}