export default {
    register: {
        email: 'user@mail.com',
        password: '1234',
        firstName: ' marcos ',
        lastName: ' aquino ',
        announcer: false,
        description: 'loren Ipsun dot dolor',
        phone: '1234567890',
        address: {
            state: 'AN',
            cep: '5700000',
            city: 'anyCity',
            number: 'anyBumber',
            street: 'anyMore',
        },
    },

    registerError: {
        email: 'user@mail.com',
        password: '1234',
        firstName: ' marcos ',
        lastName: ' aquino ',
        announcer: true,
        seller: false,
        phone: '123456789',
        address: {
            state: 'AN',
            cep: '5700000',
            city: 'anyCity',
            number: 'anyBumber',
            street: 'anyMore',
        },
    },

    registerResponse: {
        firstName: 'Marcos',
        lastName: 'Aquino',
        email: 'user@mail.com',
        phone: '1234567890',
        description: 'loren Ipsun dot dolor',
        announcer: false,
    },
    registerResponseError: {
        firstName: 'Marcos',
        lastName: 'Aquino',
        email: 'user@mail.com',
        announcer: true,
    },

    login: {
        email: 'user@mail.com',
        password: '1234',
    },

    loginError: {
        email: 'user@mail.com',
        password: '12345',
    },

    loginError2: {
        email: 'use@mail.com',
        password: '1234',
    },

    updade: {
        lastName: ' f. de Aquino ',
    },
};
