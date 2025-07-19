function toggleMode() {
  const htmlElement = document.querySelector("html")
  htmlElement.classList.toggle("light")

  const button = document.querySelector("#switch button")
  if (htmlElement.classList.contains("light")) {
    button.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
  } else {
    button.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
  }
}
