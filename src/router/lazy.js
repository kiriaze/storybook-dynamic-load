// wrap views/pages in lazyload
// import React from 'react'
import Loader from '../components/ui/Loader/Loader'
import Loadable from 'react-loadable'

export const Home = Loadable({
  loader: () => import('../components/views/Home'),
  loading: Loader
})

export const About = Loadable({
  // loader: () => import('../components/views/About'),
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../components/views/About')), 3000);
    }),
  loading: Loader
})

export const Posts = Loadable({
  // loader: () => import('../components/views/Posts'),
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../components/views/Posts')), 3000);
    }),
  loading: Loader
})