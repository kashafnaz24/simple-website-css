import Link from "next/link"


export default function Navbar(){
    return(
      <nav>
        <h2 id="webname">NEXT.js</h2>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/aboutNEXT">ABOUT NEXT.js</Link>
            </li>
          <li>
            <Link href="/portfolio">OUR PORTFOLIO</Link>
            </li>
        </ul>
      </nav>
    )
  }