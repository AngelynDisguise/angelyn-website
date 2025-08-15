import Navigation from './components/Navigation'
import Profile from './components/Profile'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <Navigation />
        <Profile />
      </div>
    </main>
  )
}