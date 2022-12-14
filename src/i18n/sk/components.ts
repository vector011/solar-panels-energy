export default {
  form: {
    buttons: {
      send: 'Odoslať',
      success: 'Vaša správa bola úspešne odoslaná.',
      error: 'Odoslať znovu',
    },
    fields: {
      name: 'meno',
      surname: 'priezvisko',
      email: 'e-mail',
      phone: 'telefón',
      message: 'vaša správa',
    },
    error: 'Vašu správu sa nepodarilo odoslať.',
  },

  panel: {
    title: '{{size}} panel',

    size: {
      big: 'Väčší',
      small: 'Menší',
    },
    image: {
      alt: '{{size}} fotovoltaický panel',
    },
  },

  popup: {
    title: 'Požiadavka na zaslanie cenovej ponuky',
    subject: 'Žiadosť o návrh',
    addition: 'Menší panel: ${smallValue}x, Väčší panel: ${bigValue}x',
  },

  counter: {
    decrement: 'Ubrať',
    increment: 'Pridať',
  },
}
