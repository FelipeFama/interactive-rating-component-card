const submitBtn = document.getElementById('submit');
const mainContainer = document.getElementById('body');
const buttons = document.querySelectorAll('.button');

let number;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    number = button.innerHTML;
  });
});

const submitted = () => {
  const htmlText = `
    <section class="card">
    <div class="text-thank-you">
     <img src="./images/illustration-thank-you.svg" alt="thank you" />
          <p>You selected ${number} out of 5</p>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don't hesitate to get in touch!
          </p>
        </div>
    </section>`;

  mainContainer.innerHTML = htmlText;
}

submitBtn.addEventListener('click', () => {
  if (number > 0) {
    submitted()
    console.log('oi')
  } else {
    mainContainer.innerHTML = '<h4 class="rating">Kindly leave a rating.</h4>';
    console.log('nao')
    window.location.reload();
  }
})
