import './hero.css'
import profile_img from '../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''/>
      <h1>Hallo, Saya Muhammad Irfan Maulana</h1>
      <p>Web Developer</p>
      <p>Menjadi Programmer Adalah Impian Saya Sejak Masih Di Bangku SMP</p>
      <button>Download CV</button>
    </div>
  )
}

export default Hero
