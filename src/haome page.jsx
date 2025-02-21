import React from 'react'
import Slider from './website/home/slider'
import About from './website/home/about us'
import Course from './website/home/course'
import Founder from './website/home/founder'
import Blog from './website/home/blog'
import Branch from './website/home/branch'
export default function haomepage() {
  return (
    <div>
      <Slider/>
      <About/>
        <Course/>
        <Founder/>
        <Blog/>
        <Branch/>
    </div>
  )
}
