import { IndexSpecialistsController } from './indexSpecialists/controller';

(() => {
  document.querySelectorAll('.j-index-specialist')
    .forEach(block => {
      new IndexSpecialistsController(block as HTMLSelectElement)
    })
})()
