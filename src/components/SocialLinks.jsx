export default function SocialLinks() {
  const links = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ]

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="bg-primary-700 hover:bg-secondary hover:text-primary-900 active:bg-secondary active:text-primary-900 flex justify-center rounded-lg p-3 text-sm font-semibold transition"
            href={link.url}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
