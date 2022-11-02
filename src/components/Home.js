import React, { useState, useEffect } from "react";
import axios from 'axios';
import Movies from "./Movies"
import Series from "./Series"

export default function Home() {
const [movies, setMovies] = useState([{}])
const [links, setlinks] = useState([{}])

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json",
      );
      setMovies(result.data.entries);

        let array=[];
        result.data.entries.forEach(element => {
            array.push(element.images['Poster Art'].url);
            setlinks(array);
         });

    };

    getMovies();
  }, []);


const callMovies = ()=> {
  return (<Movies movies={movies} links={links}/>)
}

let value = "false";
  return (
     <div>
        <div className="flex gap-10 justify-center">
          <button className="btn" onClick={()=> value="true"}> Movies</button>
          <button className="btn" onClick={()=> value="false"}>Series</button>
        </div>
          <div className="flex gap-6 mx-4 flex-wrap justify-center">
          {value="true" ?  <Movies movies={movies} links={links}/> : <></>}
          {value="false" ? <Series movies={movies} links={links}/> : <></> }
         </div>
      </div>
  )
}


