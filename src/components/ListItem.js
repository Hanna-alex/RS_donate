import { Component } from '../core/Component';
// import { App } from './App'
import { getDateFormat } from '../core/utils/date'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: getDateFormat(new Date()),
      amount: props.amount,
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.id = this.state.id

    // ...
    this.$rootElement.textContent = `${this.state.date} - $`

    const amount = document.createElement('b')
    amount.textContent = this.state.amount

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-button'
    deleteBtn.textContent = 'Удалить'

    deleteBtn.addEventListener('click', () => {
      this.deleteListItem()
      this.$rootElement.remove()
    })

    this.$rootElement.append(amount, deleteBtn)
  }

  deleteListItem() {
    this.props.onClickDelete(this.state.id)
  }
}
