import iconsSprite from '@assets/images/svg/sprite.svg'

type PropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: PropsType) => {
  const { iconId, width, height, viewBox } = props

  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={viewBox || '0 0 24 24'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
    </svg>
  )
}
