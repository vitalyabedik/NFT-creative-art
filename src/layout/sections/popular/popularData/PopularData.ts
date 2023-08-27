import leoAvatar from '@assets/images/avatars/avatar-leo.webp'
import percyAvatar from '@assets/images/avatars/avatar-percy.webp'
import sqiureAvatar from '@assets/images/avatars/avatar-sqiure.webp'
import waltanAvatar from '@assets/images/avatars/avatar-waltan.webp'
import zackAvatar from '@assets/images/avatars/avatar-zack.webp'
import leoImageWork from '@assets/images/popular/popular-work-leo.webp'
import percyImageWork from '@assets/images/popular/popular-work-percy.webp'
import sqiureImageWork from '@assets/images/popular/popular-work-sqiure.webp'
import waltanImageWork from '@assets/images/popular/popular-work-waltan.webp'
import zackImageWork from '@assets/images/popular/popular-work-zack.webp'

export const PopularData: PopularType[] = [
  {
    id: 1,
    userName: 'Osvaldo Percy',
    avatar: percyAvatar,
    workImage: percyImageWork,
  },
  {
    id: 2,
    userName: 'Ranson Sqiure',
    avatar: sqiureAvatar,
    workImage: sqiureImageWork,
  },
  {
    id: 3,
    userName: 'Sebastian waltan',
    avatar: waltanAvatar,
    workImage: waltanImageWork,
  },
  {
    id: 4,
    userName: 'Abraham Zack',
    avatar: zackAvatar,
    workImage: zackImageWork,
  },
  {
    id: 5,
    userName: 'Cristio leo',
    avatar: leoAvatar,
    workImage: leoImageWork,
  },
]

//types
export type PopularType = {
  id: number
  userName: string
  avatar: string
  workImage: string
}
