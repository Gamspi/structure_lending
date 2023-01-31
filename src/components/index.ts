import DefaultButton from './defaultButton/controller'
import PopupController from './popup/controller';

(() => {
  document.querySelectorAll('.j-default-button').forEach(elem => {
    new DefaultButton(elem as HTMLButtonElement)
  })
  document.querySelectorAll('.j-popup').forEach(elem => {
    new PopupController(elem as HTMLButtonElement)
  })
})()
