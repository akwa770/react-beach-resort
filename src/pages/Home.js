import React from 'react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import Services from '../components/Services/Services'
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms'
import Button from '../components/Hero/StyledHero'

const Home = () => {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 299$">
                    <Link to="/" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <Button>hello</Button>

        </React.Fragment>
        )
}

export default Home;

