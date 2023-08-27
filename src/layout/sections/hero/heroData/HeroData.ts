import heroImage from '@assets/images/hero/hero.webp'

export const HeroData: HeroType = {
  price: 0.24,
  moneyType: 'ETH',
  endingTime: '03:24:56',
  backgroundImage: heroImage,
  stats: [
    { id: 1, type: 'Art work', value: 8.9 },
    { id: 2, type: 'Artist', value: 65 },
    { id: 3, type: 'Collection', value: 87 },
  ],
}

// types
type StatType = {
  id: number
  type: string
  value: number
}

export type HeroType = {
  price: number
  moneyType: string
  endingTime: string
  backgroundImage: string
  stats: StatType[]
}
