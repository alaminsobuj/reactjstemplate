import React from 'react'

export default function Client(clientprops) {
         const {imageurl,imagename}=clientprops;
 return (
    <>
       
        <div  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={imageurl} className="img-fluid" alt={imagename} />
        </div>
    </>
  )
}
