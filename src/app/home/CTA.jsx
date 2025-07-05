import React from 'react';
import Card from './Card';

function CTA() {
  const userdata = [
    {
      target: 23456,
      desc: 'Customer Service',
    },
    {
      target: 20,
      desc: 'Country',
    },
    {
      target: 2,
      desc: 'Cities',
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {userdata.map((element, index) => (
          <Card key={index} target={element.target} desc={element.desc} />
        ))}
      </div>
    </section>
  );
}

export default CTA;
