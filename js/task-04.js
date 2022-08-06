const counter = {
    value: 0,
    increment() {
        console.log(`increment -> this`, this);
        this.value += 1;
    },
    decrement() {
        console.log(`decrement -> this`, this);
        this.value -= 1;
     }
};

const decrementBtn = document.querySelector(`#counter`).firstElementChild;
const incrementBtn = document.querySelector(`#counter`).lastElementChild;
const counterValue = document.querySelector(`#value`);

decrementBtn.addEventListener(`click`, function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener(`click`, function () {
  counter.increment();
  counterValue.textContent = counter.value;
});