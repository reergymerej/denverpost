export const decode = (str) => {
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

export default decode
