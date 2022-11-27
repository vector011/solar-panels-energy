export default {
  form: {
    buttons: {
      send: 'Send',
      success: 'Your message was successfully sent.',
      error: 'Send again',
    },
    fields: {
      name: 'name',
      surname: 'surname',
      email: 'e-mail',
      phone: 'phone',
      message: 'your message',
    },
    error: 'Your message could not be sent.',
  },

  panel: {
    title: '{{size}} panel',

    size: {
      big: 'Large',
      small: 'Small',
    },
    image: {
      alt: '{{size}} photovoltaic panel',
    },
  },

  popup: {
    title: 'Request to send a price offer',
    subject: 'Request for proposal',
    addition: 'Small panel: ${smallValue}x, Large panel: ${bigValue}x',
  },

  counter: {
    decrement: 'Decrease',
    increment: 'Increase',
  },
}
