import { ClassesEnums } from '../../utils/enums/ClassesEnums'

export default class PopupController {
  private closeBtn: HTMLButtonElement | null;
  constructor (private container: HTMLElement) {
    this.closeBtn = container.querySelector('.j-popup-close')
    this.init()
  }

  init () {
    this.container.onclick = this.handleContainerClose
    if (this.closeBtn) {
      this.closeBtn.onclick = this.closePopup
    }
  }

    handleContainerClose = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target === this.container) {
        this.closePopup()
      }
    }

    closePopup = () => {
      this.container.classList.remove(ClassesEnums.OPEN)
    }
}
