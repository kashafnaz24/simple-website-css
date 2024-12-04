

import Image from "next/image"
 export default function aboutNEXT(){
    return(
        <div id="about">
            <div id="about_text">
                <h1>What&apos;s is Next.js?</h1>
                 <p id="next_mean">Everything you need to build great products on the web.</p>
                 <p id="aboutpara">Next.js is a React framework for building full-stack
                    web applications. You use React Componentsto build user interfaces, and Next.js for additional
                    features and optimizations.

                    Under the hood, Next.js also abstracts and automatically configures tooling
                    needed for React, like bundling, compiling, and more. This allows you to 
                    focus on building your application instead of spending time with configuration.

                    Whether you&apos;re an individual developer or part of a larger team, Next.js can
                    help you build interactive, dynamic, and fast React applications.
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