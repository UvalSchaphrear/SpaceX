import React from 'react'
import { useNavigate } from 'react-router-dom'

import HomePageImage from '../assest/imgs/homepage.jpg'

export const HomePage = () => {

    const navigate = useNavigate()

    return <section className="home-page" onClick={() => navigate.push("/landing")}>
        <img src={HomePageImage} alt="" />
    </section>
}