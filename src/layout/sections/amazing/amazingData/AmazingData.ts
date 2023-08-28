import chargeImage from '@assets/images/amazing/amazing-charge-2.webp'
import cyberpunkImage from '@assets/images/amazing/amazing-cyberpunk-1.webp'
import surgeonImage from '@assets/images/amazing/amazing-surgeon-3.webp'

export const AmazingData: AmazingCardType[] = [
  {
    id: 1,
    title: 'Cyberpunk Cocomo',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: cyberpunkImage,
  },
  {
    id: 2,
    title: 'Charge, Qi tiao yu',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: chargeImage,
  },
  {
    id: 3,
    title: 'Surgeon, Josh Rife',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: surgeonImage,
  },
]

// types
export type AmazingCardType = {
  id: number
  title: string
  price: number
  moneyType: string
  endingTime: string
  backgroundImage: string
}
