import React from 'react';

export default function Series({series, linksSeries}) {


  return (

  series.map((serie, index) => {
  
    if(serie.programType = "series"){

  return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={linksSeries[index]} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {serie.title}
      
    </h2>
    <p>{serie.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{serie.programType}</div> 
      <div className="badge badge-outline">{serie.releaseYear}</div>
    </div>
  </div>
</div>
          )
  }
  })

  )
}
