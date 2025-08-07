export interface AvatarSingleImgProps {
  src: string
  alt: string
}

export interface ProfileCardTypes {
  name: string
  description: string
  image: AvatarSingleImgProps | null
}
