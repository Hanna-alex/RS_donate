import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    // ...

    const heading = document.createElement('h1')
    heading.textContent = `${props.title}`
    heading.className = 'total-amount'

    const totalSum = document.createElement('span')
    totalSum.textContent = this.state.total
    heading.appendChild(totalSum)

    this.$rootElement.appendChild(heading)
    this.$total = totalSum
    // ...

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    // ...
    this.donateList = donateList; // сохраняем ссылку на donateList
    // console.log('this.donateList', donateList)
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount: amount, onClickDelete: this.onItemDelete.bind(this) }); // Создание нового экземпляра класса ListItem

    this.state.donates.push(item); // Добавление экземпляра в массив donates
    this.donateList.addItem(item); // Добавление элемента в список

    this.state.total += amount; // Обновление общей суммы
    this.$total.textContent = this.state.total; // Обновление отображения общей суммы

    console.log('app', this)

  }

  onItemDelete(elemId) {
    const id = elemId
    // console.log('elemDel', this.state.donates)

    for (let i = 0; i < this.state.donates.length; i++) {

      if (this.state.donates[i].state.id === id) {

        console.log(this.state.donates[i].props.amount)

        this.state.total -= this.state.donates[i].props.amount

        this.$total.textContent = this.state.total

        this.state.donates.splice(i, 1)
      }

    }

  }

}

