import { ClassesEnums } from '../../../../utils/enums/ClassesEnums'

export class IndexSpecialistsController {
    private readonly button: HTMLButtonElement | null;
    private readonly popup: HTMLElement | null;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelector('.j-index-specialist-button')
      this.popup = this.container.querySelector('.j-index-specialists-popup')
      this.initButton()
    }

    initButton () {
      if (this.button) {
        this.button.onclick = () => {
          this.handleOpen()
        }
      }
    }

    handleOpen = () => {
      if (this.popup) this.popup.classList.add(ClassesEnums.OPEN)
    }
}
