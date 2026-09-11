import { Input } from "@base-ui/react";
import { LuFishSymbol } from "react-icons/lu";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className='min-h-80 w-full h-full bg-chart-5 p-12'>
      <div className='flex justify-between gap-8 md:gap-4 items-start flex-col md:flex-row'>
        <section>
          <h4 className='italic text-xl font-bold'>Aplared Silk Road</h4>
          <p>The road to hapiness leads through Aplared.</p>
        </section>
        <section>
          <h4 className='italic text-xl font-bold mb-2 flex-1'>
            Our Newsletter
          </h4>
          <Input
            id='fieldgroup-email'
            type='email'
            placeholder='name@example.com'
            className='p-2 bg-input outline-none w-full xl:w-60 rounded-md'
          />
          <Button
            className='p-5 w-full max-w-60 2xl:w-28 mt-2 2xl:mt-0 2xl:ml-2 cursor-pointer'
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
      <section className='flex flex-col md:flex-row md:gap-2'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Aplared Silk Road. All rights
          reserved.
        </p>
        <a href='#' className='text-sm'>
          Privacy Policy
        </a>
      </section>
    </footer>
  );
};

export default Footer;
