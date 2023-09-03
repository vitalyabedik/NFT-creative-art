import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [changeBackground, setChangeBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1 ? setChangeBackground(true) : setChangeBackground(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return changeBackground
}
