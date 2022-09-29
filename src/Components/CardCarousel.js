import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import "./CardCarousel.css"
import { Carrousel } from './Carrousel'
export const CardCarousel = () => {
  const words = ["U","YOUR FRIENDS","YOUR FAMILY"]
  const [word,setWord] = useState(words[0])
  useEffect(()=>{
    setTimeout(()=>{
     setWord(words[
      words.indexOf(word) + 1 < words.length
        ? words.indexOf(word) + 1
        : 0
    ])
    },1000)
  },[word])
  return (
    <div className="content-two">
        <Card className="card">
            <CardBody>
                <CardTitle tag="h1" >
                     RECIPE 4 {word}
                </CardTitle>
                <Carrousel/>
            </CardBody>
        </Card>
    </div>
  )
}
