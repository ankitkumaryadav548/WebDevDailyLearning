
// api - https://jsonplaceholder.typicode.com/users


"use client";

import { useState } from "react";

function Searchbox() {
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search..."
            />

            <p>You are searching for: {search}</p>
        </>
    );
}

export default Searchbox;    