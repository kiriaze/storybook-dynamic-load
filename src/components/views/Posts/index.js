import React from 'react'
import styled from 'styled-components'

import LazyImage from '../../../utility/LazyImage';

const Grid = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Posts = () => {
  return (
    <div>
      <h1>posts</h1>
      <Grid>
        {[...Array(50).keys()].map(i => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/1000/1000?random=${i}`}
            alt={`Random image ${i}`}
          />
        ))}
      </Grid>
    </div>
  )
}

export default Posts