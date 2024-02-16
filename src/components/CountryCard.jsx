import React from "react";

function CountryCard({ country, onSelect }) {
    const handleClick = () => {
        onSelect(country);
    };
    return (
        <div
            className=" w-40 h-24 rounded-md flex justify-center items-center"
            onClick={handleClick}
        >
            <p className="uppercase text-xl text-stone-800  font-mono">{country}</p>
        </div>
    );
}

export default CountryCard;
