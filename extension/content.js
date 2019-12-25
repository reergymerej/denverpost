setTimeout(() => {
  document.querySelector('.modal-scrollable').remove()
  document.querySelector('.connext-modal-backdrop').remove()
  document.querySelector('.modal-open').style.overflow = 'auto'
  document.querySelector('.blurry-text').className =
  document.querySelector('.blurry-text').className.replace(/blurry-text/, '')


  const decode = (str) => {
    const { length } = str
    let out = ''
    for (let i = 0; i < length; i++) {
      const shouldDecode = (/[a-z]/i).test(str[i])
      if (shouldDecode) {
        const code = str.charCodeAt(i)
        const shifted = code - 1
        out = `${out}${String.fromCharCode(shifted)}`
      } else {
        out = `${out}${str[i]}`
      }
    }
    return out
  }


  document.querySelectorAll('.body-copy p, .body-copy h3').forEach(p => {
    p.innerText = decode(p.innerText)
  })
}, 5000)
