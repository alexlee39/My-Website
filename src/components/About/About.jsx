import React from 'react'

const About = () => {
  return (
    <div className="about" id = "about">
    <h4 className = "section-title"> About </h4>
    <p className="about-desc">
            I'm a recent college graduate from UCSD with BS in Computer Engineering. I'm
        currently trying to pursue a career in Software Engineering.
    </p>
    <br/>
    <p className="hobbies"> 
        Besides from just coding, I like playing video games. My top 3 video games currently
        would be League of Legends, Stardew Valley, and Terraria. Some other hobbies including 
        going to the gym as I've been going to the gym and doing bodybuilding for around 2 years
        ever since I went to college and just stuck with it.
    </p>
    <br/>
    <div className="lang-tiers"> My Most Proficient Tech Stack</div>
    <ol className = "langauges-list">
       <li> Java </li> 
       <li> React </li>
       <li> C/C++ </li>
    </ol>

    </div>
  )
}

export default About