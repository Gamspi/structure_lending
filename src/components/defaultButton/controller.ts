import { ClassesEnums } from '../../utils/enums/ClassesEnums'

export default class DefaultButton {
  private setTimeoutId: ReturnType<typeof setTimeout> | undefined
  constructor (private button: HTMLButtonElement) {
    button.addEventListener('click', this.handleClick)
  }

    handleClick =() => {
      if (this.setTimeoutId) clearTimeout(this.setTimeoutId)
      this.button.classList.add(ClassesEnums.CLICK)
      this.setTimeoutId = setTimeout(() => {
        this.button.classList.remove(ClassesEnums.CLICK)
      }, 150)
    }
}
