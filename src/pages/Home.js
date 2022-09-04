import { React, useState } from "react";
import "./home.scss";
import DATAJSON from "../data/Foods.json"


function Home() {

    const { searchTerm, setSearchTerm } = useState('');

    return (
        <>

            <div className="container">
                <div className="input-wrapper">
                    <input type="text" placeholder="Search..." onChange={event => { setSearchTerm = (event.target.value) }} />
                </div>

                {DATAJSON.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.food_name.includes(searchTerm)) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="data-wrapper">
                            <div className="data-rows">
                                <div key={key}>
                                    <span>Food: {val.food_name}</span>
                                </div>
                                <div>
                                    <span>Main Meal: {val.main_meal} g</span>
                                </div>
                                <div>
                                    <span>Snack: {val.snack} g</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>


        </>
    );
}

export default Home;