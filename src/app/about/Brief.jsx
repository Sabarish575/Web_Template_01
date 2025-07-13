import React from 'react'
import Herosection from '../../../Components/Herosection';

function Brief() {

const useCases = [
  {
    title: "Daily Routine Needs",
    description:
      "Carrying essentials during your daily commute, including food, gear, or personal items, can be inconvenient without proper storage.",
    video: "/videos/demo.mp4"
  },
  {
    title: "Unexpected Plans",
    description:
      "Spontaneous meetups or activities can be hard to enjoy when you're burdened with bags from work or college.",
    video: "/videos/demo.mp4"
  },
  {
    title: "Heavy Loads",
    description:
      "Managing multiple bags after shopping or errands can be physically exhausting and stressful.",
    video: "/videos/demo.mp4"
  },
  {
    title: "Transit Wait Times",
    description:
      "Long layovers or travel delays in unfamiliar places often leave you with luggage and nowhere to go.",
    video: "/videos/demo.mp4"
  },
  {
    title: "Exploring Freely",
    description:
      "Touring a city or attending events is more enjoyable without dragging a suitcase or heavy backpack.",
    video: "/videos/demo.mp4"
  },
  {
    title: "Restricted Areas",
    description:
      "Some venues or locations restrict carrying phones or other personal items, which can be inconvenient without a secure storage option.",
    video: "/videos/demo.mp4"
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