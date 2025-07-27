import {Card} from "../components/Card"
import {useEffect  } from "react"

export const MovieList= ({ title }) => { 

  useEffect(() => {

    document.title = `${title}/Cinemate`
  
  })

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>

      </section>
    </main>
  )
}
