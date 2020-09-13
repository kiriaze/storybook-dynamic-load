import React, { Suspense } from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable'

import Loader from '../../ui/Loader/Loader'

import LazyImage from '../../../utility/Lazy';

const Header = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../../header/Header')), 1000);
    }),
  loading: Loader,
  render: (module, props) => {
    const { Header } = module;
    return <Header {...props} />;
  },
})

const TabGroup = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('../../ui/Tabs/Tabs')), 3000);
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
      setTimeout(() => resolve(import('../../ui/Pagination/Pagination')), 4000);
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
      setTimeout(() => resolve(import('../../ui/Example/Example')), 2000);
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

const Grid = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = () => {
  return (
    <div>
      <Suspense>
        <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
      </Suspense>

      <Suspense>
        <DataBind />
      </Suspense>

      {/* 
        test lazy loading stream of images vs wrapped in suspense?
        note: consider this instead as a complete solution, images/media + components
          https://github.com/twobin/react-lazyload
      */}
      <Grid>
        {[...Array(50).keys()].map(i => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/1000/1000?random=${i}`}
            alt={`Random image ${i}`}
          />
        ))}
      </Grid>

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