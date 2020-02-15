module.exports = {
  validateEmail (email) {
    const re = /^(([^<>()[\].,:\s@']+(\.[^<>()[\].,:\s@']+)*)|('.+'))@(([^<>()[\].,:\s@']+\.)+[^<>()[\].,:\s@']{2,})$/i

    if (!re.test(email)) {
      return false
    }
  },

  validateCpf (cpf) {
    if (cpf.length !== 11) {
      return false
    }
  },

  validatePostalCode (postalCode) {
    const parts = postalCode.split('-')

    if (parts.length !== 2) {
      return false
    }

    const [region, sector] = parts

    if (region.length !== 5 || sector.length !== 3) {
      return false
    }
  }
}