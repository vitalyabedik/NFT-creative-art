import { Header } from '@layout/header'
import { Hero, Popular } from '@layout/sections'
import { Amazing } from '@layout/sections/amazing/Amazing'
import { Best } from '@layout/sections/best'

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Amazing />
      <Best />
      <Popular />
    </div>
  )
}
