import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Button from "../../../Components/Button";

export function Prices() {
  return (

    <section className="flex flex-col space-y-6 justify-center items-center">


        <h1 className="text-3xl md:text-6xl">
            Smart Lockers near you
        </h1>



      <PointerHighlight>
        <p className="mt-8 text-xl px-3 py-2 sm:text-2xl md:text-3xl font-semibold leading-relaxed md:px-6 md:py-4 rounded-md text-center">
          <span className="text-[#006400] text-2xl sm:text-3xl font-bold">&#8377;</span> 20 for 12 hrs,&nbsp;
          <span className="text-[#006400] text-2xl sm:text-3xl font-bold">&#8377;</span> 30 for 24 hrs.
          <br/>
          <span className="text-gray-700">Pay via UPI or Card.</span>
        </p>
      </PointerHighlight>

      <p className="mt-6 text-base text-center sm:text-lg md:text-xl font-medium text-gray-600">
        <span className="italic">
          No more carrying extra weight — stash, pay, and roam free.
        </span>
      </p>

      <Button detail={"Find a locker"}/>
      <Button detail={"How to use"}/>


    </section>
  );
}
