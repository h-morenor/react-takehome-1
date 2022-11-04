import React from 'react';

export default function Movies({movies, links}) {

  return (

  movies.map((movie, index) => {
  
    if(movie.programType = "movies"){
    //console.log(index)
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={links[index]} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {movie.title}
      
    </h2>
    <p>{movie.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{movie.programType}</div> 
      <div className="badge badge-outline">{movie.releaseYear}</div>
    </div>
  </div>
</div>
          )
  }
  })

  )
}


