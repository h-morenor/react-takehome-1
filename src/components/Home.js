import React, { useState, useEffect } from "react";
import axios from 'axios';
import Movies from "./Movies"
import Series from "./Series"

export default function Home() {
const [movies, setMovies] = useState([{}])
const [series, setSeries] = useState([{}])
const [links, setlinks] = useState([{}])
const [linksSeries, setlinksSeries] = useState([{}])


  useEffect(() => {
    const getMovies = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json",
      );

        let listItems = result.data.entries;
      

        let array=[];
        let arrayMovies =[]
        listItems.forEach(element => {
          
          if(element.programType === "movie"){
            
            array.push(element.images['Poster Art'].url);
            setlinks(array);
            arrayMovies.push(element)
           // console.log(arrayMovies.push(element))
          }
          
          setMovies(arrayMovies);
         });

         let array2=[];
         let arraySeries =[]
        
          listItems.forEach(element => {
          if(element.programType === "series"){
            array2.push(element.images['Poster Art'].url);
            setlinksSeries(array2);
            arraySeries.push(element)
          }
          setSeries(arraySeries);
         });
    };

    getMovies();
  }, []);


const callMovies = ()=> {
  return (<Movies movies={movies} links={links}/>)
}

let value = "movies";


if(value==="movies") {
  return (
     <div>
        <div className="flex gap-10 justify-center">
          <button className="btn" onClick={()=> value="movies"}> Movies</button>
          <button className="btn" onClick={()=> value="series"}>Series</button>
        </div>
          <div className="flex gap-6 mx-4 flex-wrap justify-center">
          <Movies movies={movies} links={links}/>
          </div>
      </div>
    )
  }

if(value==="series") {
  return (
     <div>
        <div className="flex gap-10 justify-center">
          <button className="btn" onClick={()=> value="movies"}> Movies</button>
          <button className="btn" onClick={()=> value="series"}>Series</button>
        </div>
          <div className="flex gap-6 mx-4 flex-wrap justify-center">
          <Series series={series} linksSeries={linksSeries}/>
          </div>
      </div>
    )
  }


}

/*
{value==="series" ? <Series series={series} linksSeries={linksSeries}/> : <></>}

<div className="flex gap-6 mx-4 flex-wrap justify-center">
          {value="true" ?  <Movies movies={movies} links={links}/> : <></>}
          {value="false" ? <Series movies={movies} links={links}/> : <></> }
         </div>*/
