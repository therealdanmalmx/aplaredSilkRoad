import { Input } from "@base-ui/react";
import { LuFishSymbol } from "react-icons/lu";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className='min-h-96 w-full h-full bg-chart-5 p-12'>
      <div className='flex justify-between gap-4 items-start flex-col md:flex-row'>
        <section>
          <h4 className='italic text-xl font-bold'>Aplared Silk Road</h4>
          <p className=''>The road to hapiness leads through Aplared</p>
        </section>
        <section>
          <h4 className='italic text-xl font-bold'>Our Newsletter</h4>
          <Input
            id='fieldgroup-email'
            type='email'
            placeholder='name@example.com'
            className='border p-2 border-primary w-full md:w-60 rounded-md max-w-72'
          />
          <Button
            className='p-5 w-full md:w-28 mt-2 md:mt-0 md:ml-2'
            type='submit'>
            Submit
          </Button>
        </section>
        <section>
          <h4 className='italic text-xl font-bold'>Our Promise</h4>
          <p className='max-w-96'>
            We will always have your favourite silk products in storage. Or get
            it for you. From Aplared.{" "}
          </p>
        </section>
      </div>
      <section className='flex flex-row justify-center items-center w-full pt-8 px-4 sm:px-6'>
        <hr className='w-full text-primary' />
        <LuFishSymbol className='mx-5 text-primary text-6xl' />
        <hr className='w-full text-primary' />
      </section>
      <section>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Aplared Silk Road. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
