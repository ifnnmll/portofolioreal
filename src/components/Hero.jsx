import './hero.css'
import profile_img from '../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''/>
      <h1>Hallo, Saya Muhammad Irfan Maulana</h1>
      <p>Web Developer</p>
      <p>Menjadi Programmer Adalah Impian Saya Sejak Masih Di Bangku SMP</p>
      <div className='hero-action'>
      <div className='hero-connect'>Connect With Me</div>
      <div className='hero-resume'>my resume</div>
      </div>
    </div>
  )
}

export default Hero
