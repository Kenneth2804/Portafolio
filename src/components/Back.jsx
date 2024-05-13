import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/back.css"

export default function Back() {
  return (
    <div>
        <Link to={"/"}>
      <h3 className='back'>BACK</h3>
        </Link>
    </div>
  )
}
