import React from 'react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import RoomsContainer from '../Containers/RoomsContainer'

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 299$">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )

}

export default Rooms;
