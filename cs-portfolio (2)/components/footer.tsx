export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {currentYear} Joshua Muli. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-2">Designed and built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
