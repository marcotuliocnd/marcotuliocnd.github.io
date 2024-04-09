const onClickContactButton = (event) => {
  if (event) {
    event.preventDefault()
  }

  window.open('https://wa.me/5534998725002', '_blank').focus()
}

const downloadResume = (event) => {
  if (event) {
    event.preventDefault()
  }

  window.open('./assets/Marco Tulio Candeo - Resume.pdf', '_blank').focus()
}
