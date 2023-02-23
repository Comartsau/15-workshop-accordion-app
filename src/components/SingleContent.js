import React, { useState } from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";


function SingleContent({title,description}) {
    const [showcontent,setShowContent] = useState(false)
  return (
    <article className='content'>
        <header>
            <h4>{title}</h4>
            <button onClick={()=> setShowContent(!showcontent)} className='btn'>{showcontent ? <AiFillMinusCircle /> : <AiFillPlusCircle/> }</button>
        </header>
        {showcontent && <p>{description}</p>}
    </article>
  )
}

export default SingleContent