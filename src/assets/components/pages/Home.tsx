import React from 'react'
import Hero from '../Hero'
import Perks from '../Perks'
import Authentication from "../Authentication";

const Home = () => {
    return (
        <div>
            <Hero />
            <Perks />
            <Authentication />
        </div>
    )
}

export default Home