import React from 'react'
import Herosection from '../../../Components/Herosection';

function Brief() {

    const useCases = [
    {
        title: "Commute & Fitness",
        description:
        "You take a 45-minute metro to work, and on the way back you hit the gym. Your new fitness routine also has you carrying your high-protein lunch with you.",
        video: "/videos/locker.mp4"
    },
    {
        title: "After Work Hangouts",
        description:
        "You're going for a movie with your friends but you have your backpack from work or college.",
        video: "/videos/locker.mp4"
    },
    {
        title: "Shopping Burden",
        description:
        "The hassle of managing the load of shopping bags is too much.",
        video: "/videos/locker.mp4"
    },
    {
        title: "Layover in a New City",
        description:
        "Your flight breaks journey in a place you've never been to and you have a long layover.",
        video: "/videos/locker.mp4"
    },
    {
        title: "Cabin Bag Dilemma",
        description:
        "You want to go explore the city but what will you do with your cabin luggage?",
        video: "/videos/locker.mp4"
    },
    {
        title: "Phone Restrictions",
        description:
        "You're visiting a temple to pay your respects and realize they don't allow phones inside.",
        video: "/videos/locker.mp4"
    }
    ];




  return (
    <div>
        {useCases.map((item,index)=><Herosection key={index}
            head={item.title}
            ptag1={item.description}
            buttondesc={"Try Yatigo"}
            videosrc={item.video}
            reverse={index%2!==0}
        />)}
    </div>
  )
}

export default Brief