import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    // ...
    const headingList = document.createElement('h2')
    headingList.className = 'donates-container__title'
    headingList.textContent = 'Список донатов'

    const containerList = document.createElement('div')
    containerList.className = 'donates-container__donates'

    this.$rootElement.append(headingList, containerList)

    //
    this.$listContainer = containerList
    // ...
  }

  addItem(item) {
    // ...
    this.$listContainer.appendChild(item.$rootElement)

  }

  deleteItem(item) {
    item.$rootElement.remove()
  }
}
