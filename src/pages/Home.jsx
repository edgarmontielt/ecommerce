import React from 'react'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import Slider from '../components/Home/SliderOfferts'

export default function Home() {
  return (
    <main>
      <Banner />
      <Slider />
      <Categories />
    </main>
  )
}
