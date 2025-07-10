import SocialLinks from './SocialLinks'
import avatar from '../assets/images/avatar-jessica.jpeg'

export default function ProfileCard() {
  return (
    <div className="bg-primary-800 text-tertiary font-inter flex max-w-327 flex-col items-center rounded-xl p-6 text-center md:min-w-sm">
      <img className="mb-6 max-w-88 rounded-full" src={avatar} alt="Avatar" />
      <h2 className="p-0.5 text-2xl font-semibold">Jessica Randall</h2>
      <p className="text-secondary mb-6 text-sm font-bold">London, United Kingdom</p>
      <blockquote className="mb-6 text-sm font-light">
        <q>Front-end developer and avid reader.</q>
      </blockquote>
      <SocialLinks />
    </div>
  )
}
