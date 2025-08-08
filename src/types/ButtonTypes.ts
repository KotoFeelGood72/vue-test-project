export interface ButtonTypes {
  text: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
  loading: boolean
  theme: 'primary' | 'secondary'
}
