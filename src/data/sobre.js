let date = new Date().getFullYear()

export const skills = [
    {icon: 'htmlIcon.png', skill : 'HTML5', comp : `${date - 2019} anos`, key : 1},
    {icon: 'cssIcon.png', skill : 'CSS3', comp : `${date - 2018} anos`, key : 2},
    {icon: 'jsIcon.png', skill : 'JavaScript', comp : `${date - 2019} anos`, key : 3},
    {icon: 'phpIcon.png', skill : 'PHP', comp : `${date - 2020} anos`, key : 4},
    {icon: 'sqlIcon.png', skill : 'MySQL', comp : `${date - 2020} anos`, key : 5},
    {icon: 'reactIcon.png', skill : 'ReactJS', comp : `${date - 2020} anos`, key : 6},
    {icon: 'jsonIcon.png', skill : 'JSON', comp : `${date - 2020} anos`, key : 7}
    ]


export const refs = [
    {
        icon: 'aluraIcon.png',
        skill : 'Alura',
        comp : `2 certificados`,
        titulo: '',
        inst: '',
        dur: '',
        certs: [
            require(`../assets/img/certs/alura/marketing.jpg`).default, 
            require(`../assets/img/certs/alura/programacao.jpg`).default
        ],
        key : 1
    },
    {
        icon: 'recodeIcon.png',
        skill : 'Recode', 
        comp : `3 certificados`,
        titulo: 'Certificado de Conclusão',
        inst: 'Recode Pro',
        dur: '540h',
        certs: [
            require(`../assets/img/certs/recode/conclusao.jpg`).default, 
            require(`../assets/img/certs/recode/colaborativo.png`).default, 
            require(`../assets/img/certs/recode/nerd.png`).default
        ],  
        key : 2
    },
    {
        icon: 'sololearnIcon.png', 
        skill : 'SoloLearn', 
        comp : `6 certificados`,
        titulo: '',
        inst: '',
        dur: '',
        certs: [
            require(`../assets/img/certs/sololearn/react.jpg`).default, 
            require(`../assets/img/certs/sololearn/js.jpg`).default,
            require(`../assets/img/certs/sololearn/php.jpg`).default,
            require(`../assets/img/certs/sololearn/sql.jpg`).default,
            require(`../assets/img/certs/sololearn/css.jpg`).default,
            require(`../assets/img/certs/sololearn/html.jpg`).default
        ],  
        key : 3
    }
]