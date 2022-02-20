import React from 'react'
import { Routes, Route } from 'react-router-dom'


import { HomePage } from './pages/home-page.jsx'
import { LandingApp } from './pages/landing-app.jsx'
import { LandingDetails } from './pages/landing-details.jsx'


import { AppHeader } from './cmps/app-header.jsx'

export class RootCmp extends React.Component {

  render() {
    return (
      <>
        <AppHeader />

        <Routes>
          <Route element={<LandingDetails />} path="/landing/:landingId" />
          <Route element={<LandingApp />} path="/landing" />
          <Route element={<HomePage />} path="/" />
        </Routes>
      </>
    )
  }
}
