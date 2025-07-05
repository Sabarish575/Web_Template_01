import React from 'react';
import MobileLockerGrid from './MobileGrid';
import UseCase from './usecase';
import {
  ShieldCheck,
  QrCode,
  Wallet,
  Clock,
  MapPin,
  PhoneCall
} from 'lucide-react';

function CTA1() {
  const iconMap = {
    ShieldCheck,
    QrCode,
    Wallet,
    Clock,
    MapPin,
    PhoneCall
  };

  const advantages = [
    {
      title: 'Safe',
      description: 'Tamper-proof lockers under CCTV surveillance zones',
      icon: 'ShieldCheck'
    },
    {
      title: 'Simple Pricing',
      description: 'Flat rates of ₹20 / ₹30 with no hidden charges',
      icon: 'Wallet'
    },
    {
      title: 'Human Support',
      description: 'Call or WhatsApp our support team anytime for help',
      icon: 'PhoneCall'
    }
  ];

  return (
    <section className="w-full flex flex-col items-center gap-4 p-4">
      <h1 className="text-4xl md:text-5xl mb-8 text-center">
        Mobile Locker
      </h1>


        <div className='flex flex-col w-full md:flex-row'>
            <div className="w-full md:w-1/2 flex justify-center">
                <MobileLockerGrid />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                {advantages.map((element, index) => (
                <UseCase
                    key={index}
                    Icon={iconMap[element.icon]}
                    title={element.title}
                    desc={element.description}
                />
                ))}
            </div>
        </div>
    </section>
  );
}

export default CTA1;
