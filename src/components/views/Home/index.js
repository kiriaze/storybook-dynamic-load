import React, { Suspense } from 'react'
import Loadable from 'react-loadable'

import Loader from '../../ui/Loader/Loader'

const TabGroup = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../../ui/Tabs')), 3000);
    }),
  loading: Loader,
  render: (module, props) => {
    const { Tabs } = module;
    return <Tabs {...props} />;
  },
})

const Pagination = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../../ui/Pagination')), 4000);
    }),
  loading: Loader,
  render: (module, props) => {
    const { Pagination } = module;
    return <Pagination {...props} />;
  },
})

const DataBind = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../../ui/Example')), 2000);
    }),
  loading: Loader,
  render: (module, props) => {
    const { Example } = module;
    return <Example {...props} />;
  },
})

// pagination/tabs example
const data = [
  {
      id: 0,
      title: 'Tab 1',
      content: 'Tab content 1'
  },
  {
      id: 1,
      title: 'Tab 2',
      content: 'Tab content 2'
  },
  {
      id: 2,
      title: 'Tab 3',
      content: 'Tab content 3'
  },
  {
    id: 3,
    title: 'Tab 4',
    content: 'Tab content 4'
  }
]
// 

const Home = () => {
  return (
    <div>

      <Suspense>
        <DataBind />
      </Suspense>

      <Suspense>
        <TabGroup data={data} />
      </Suspense>
      
      <Suspense>
        <Pagination data={data} />
      </Suspense>

    </div>
  )
}

export default Home