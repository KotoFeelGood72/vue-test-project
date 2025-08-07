export interface ButtonTypes {
  text: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
  onClick: () => void
  loading: boolean
  theme: 'primary' | 'secondary'
}
