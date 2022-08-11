const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;
    if (email.value === `` || password.value === ``) {
      return alert(`Всі поля повинні бути заповнені!`);
    }
    let elem = ` Email: ${email.value}, Password: ${password.value}`;
    console.log(elem);
    event.currentTarget.reset();
}
