import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../Components/Loading'


export const Error = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/')
    }
    ,3000)
  },[navigate])
  return(
   <div>
     <Loading/>
   </div>
  )
}
