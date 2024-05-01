import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
    const label = document.createElement('label')
    label.className = 'donate-form__input-label'
    label.textContent = 'Введите сумму в $'
    const input = document.createElement('input')
    input.className = 'donate-form__donate-input'
    input.name = 'amount'
    input.type = 'number'
    input.max = '100'
    input.min = '1'
    input.required = 'true'
    label.appendChild(input)

    const button = document.createElement('button')
    button.disabled = true
    button.className = 'donate-form__submit-button'
    button.type = 'submit'
    button.textContent = 'Задонатить'

    //
    this.$rootElement.append(label, button)

    //
    this.$input = input
    this.$button = button

    // 
    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
    // ...
  }

  get isValid() {
    const valueTypeNumber = Number(this.state.amount)
    return valueTypeNumber >= 1 && valueTypeNumber <= 100


  }

  handleInput(event) {
    // console.log(event.target.value)
    this.state.amount = event.target.value

    // console.log(this.isValid)
    this.$button.disabled = !this.isValid
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid) {
      // console.log(this.state.amount)
      this.props.onSubmit(Number(this.state.amount))
      this.state.amount = ''
      this.$input.value = ''

    }

  }

}
