import Logo from '../assets/Logo.png';


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img 
            alt='logo'
            src={Logo}
          />
          <p className='my-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
 
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Lorem Ipsum</p>
          <p className='my-5'>Lorem Ipsum</p>
          <p className='my-5'>Lorem Ipsum</p>
          <p>Ullamcorper vivamus</p>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Lorem Ipsum</p>
          <p>(82) 010 - 1234 - 6789</p>
        </div>

        <div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer