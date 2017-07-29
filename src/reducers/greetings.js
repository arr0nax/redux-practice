const greetings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GREETING':
      return [
        {
          greeting: action.text
        }
      ]
    default:
      return [
        {
          greeting: "hello"
        }
      ]

  }
}

export default greetings
