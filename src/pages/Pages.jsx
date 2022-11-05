/* eslint-disable no-restricted-globals */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="searched/:search" element={<Searched />} />
        <Route path="recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
