document.querySelector('#search').addEventListener('click', getFetch)

function getFetch(){
  const characterChoice = document.querySelector('input').value
  console.log(characterChoice)
  const url = `https://bojack-api.herokuapp.com/api/${characterChoice}`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

      document.querySelector('#name').innerText = data.name

      .catch(err => {
          console.log(`error ${err}`)
      });
}