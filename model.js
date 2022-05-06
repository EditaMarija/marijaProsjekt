let Tomobj = {navn: 'Tom', alder: 30 };
let Jerryobj = {navn: 'Jerry', alder: 20 };

let listeAvMennesker = [Tomobj, Jerryobj];

let listeAvFolk =[
                {
                navn: 'Tom', 
                alder: 30, 
                },
                {
                navn: 'Jerry',
                alder: 20, 
                },
            ]

const model ={
    currentPage: '',
    velkomsttekst: 'Velkommen',
    view: '',
    loggedInUser: '',
    feilmeldingLogin: '',

    login:{
        passord: '',
        brukernavn: '',
    },

    newuser:{
        passord: '',
        navn: '',
        brukernavn: '',
    },

    users:[
        {
            navn: 'Tom',
            passord: '123',
            brukernavn: 'tom@mail.no'
        },
        {
            navn: 'Jerry',
            passord: '456',
            brukernavn: 'jerry@mail.no'
        },
        {
            navn: 'Marija',
            passord: '789',
            brukernavn: 'marija@mail.no'
        },
    ],
}