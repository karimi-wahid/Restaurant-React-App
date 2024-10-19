import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='mb-8 mt-20'>
        <div className='flex items-center justify-center gap-8'>
            <a href="http://www.x.com" target='_blank' rel='noopener noreferrer' >
            <FaFacebook size={30} className="hover:opacity-80" />
            </a>
            <a href="http://www.x.com" target='_blank' rel='noopener noreferrer' >
            <FaInstagram size={30} className="hover:opacity-80" />
            </a>
            <a href="http://www.x.com" target='_blank' rel='noopener noreferrer' >
            <FaTwitter size={30} className="hover:opacity-80" />
            </a>
        </div>
        <p className="mt-8 text-center tracking-tighter text-neutral-500">
          &copy;Karimi. All rights reserved
        </p>
    </section>
  )
}

export default Footer