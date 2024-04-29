import { ImGoogle3 } from "react-icons/im";

export default function Footer() {
  return (
    <div className='flex justify-around items-center fixed left-0 bottom-0 w-full h-16 bg-black opacity-80 text-white'>
      <p className='text-center'>Made by Alex Palaversich</p>

        <a className='flex flex-row gap-3' href='https://www.linkedin.com/in/alex-palaversich-066576226/' target='_blank'>
        <p className='flex items-center pr-2'>
          Contact me
        </p>
          <img
            width={20}
            height={20}
            src={'/linkedin.png'}
          />
          Linkedin
          </a>
    </div>

  )
}