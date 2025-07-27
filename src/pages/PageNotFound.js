import PageNotImage from "../assets/pagenotfound.png"
import { Link } from "react-router-dom"  
import { Button } from "../components/Button"
import {useEffect } from "react" 

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found/Cinemate`;
  
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
      <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
      <img className=" rounded max-w-lg" src = { PageNotImage} alt="404 Page Not Found"></img>

      </div>
      
      <div className="flex justify-center my-4">
      <Link to="/">
      <Button>Back to Cinemate</Button>
      </Link>
      </div>
      

      </section>
    </main>
  )
}
