
import Image from "next/image"
export default function portfolio(){
    return(
        <div id="portfolio">
            <div id="portfolio_text">
                <h1>our journey with cashing</h1>
                <p>Frontend performance can be hard to get right. Even in highly optimized apps, the most common 
                    culprit by far is client-server waterfalls. When introducing Next.js App,
                    we knew we wanted to solve this issue. To do that, we needed to 
                    move client-server REST fetches to the server using React Server Components 
                    in a single roundtrip. This meant the server had to sometimes be dynamic,
                    sacrificing the great initial loading performance of Jamstack. We built
                    partial prerendering to solve this tradeoff and have the best of both worlds.

                </p>
            </div>
            <div id="Aimage">
            <Image
            src="/next.logo.png" 
            alt="image" 
            width={900}
            height={800}
             priority 
            id="sideimage"
            />
        
            
            </div>
        </div>
    )
}