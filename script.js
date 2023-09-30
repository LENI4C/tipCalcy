const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

const calculateBill = () => {
    let bill = Number(billInput.value)
    let tipValue = Number(tipInput.value / 100)
    let totalValue = ((bill * tipValue) + bill) / Number(numberOfPeopleDiv.innerText) 
    perPersonTotalDiv.innerText = `$${totalValue.toLocaleString("en-US")}`
}

const increasePeople = () => {
    numberOfPeopleDiv.innerText++
    calculateBill()
}

const decreasePeople = () => {
    if (numberOfPeopleDiv.innerText <= 1) {
        return
    }
    numberOfPeopleDiv.innerText--
    calculateBill()
}