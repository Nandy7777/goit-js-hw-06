const input = document.querySelector(`#name-input`);
const nameLabel = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    if (input.value === ``) {
        return nameLabel.textContent = `Anonymous`;
    } else nameLabel.textContent = event.currentTarget.value;
}