import React from 'react'
import Main from '../../Main/Main'
import Row from '../../components/Row/Row'
import requests from '../../api'

export default function Home() {
  return (
    <div>
        <Main />   
        <Row rowId='1' title='Up Comming' fetchURL={requests.requestUpcoming}/>
        <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/>     
        <Row rowId='3' title='Honor' fetchURL={requests.requestHorror}/>     
        <Row rowId='4' title='Trending' fetchURL={requests.requestTrending}/>     
        <Row rowId='5' title='Top Rate' fetchURL={requests.requestTopRated}/>     

    </div>
  )
}
