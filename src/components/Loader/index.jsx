// запрос на сервер занимает некоторое время,
// поэтому нам нужен этот компонент
import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './Loader.scss'

export const Loader = () => {
  return (
    <Container>
      <Grid container>
        <Grid container alignItems={'center'} direction={'column'}>
          <div class="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  )
}