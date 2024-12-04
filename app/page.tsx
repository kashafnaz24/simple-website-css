  /* eslint-disable react/no-unescaped-entities */
  import Image from "next/image"
  import Link from "next/link"
  export default function hello (){
      return(
          <div id="home">
          <div id="homeSide">
  
          <h1 id="hello">
              Hello! Next.js
          </h1>
          <p id="homepara">
              NEXT.js is a Framwork of React and React is a library
          </p>
          <Link href="/aboutNEXT">
                <button id="aboutBtn">
                  about NEXT.js
               </button>   
          </Link>
  
          <Link href="/portfolio">
               <button id="portfolioBtn">
                our portfolio
              </button>
          </Link>
           </div>
  
          <div id="image">
          <Image
          src="/next.logo.png" 
          alt="image" 
          width={300}
          height={200}
          priority 
          />
          
          </div>
          </div>
      )
  }