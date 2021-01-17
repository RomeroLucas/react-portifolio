import React, { Component } from 'react'
import TextArea from '../../components/textArea'
import {ListGroup, ListItem} from '../../components/listGroup'

const skills = [
    {icon: 'htmlIcon.png', skill : 'HTML5', exp : '2 anos', key : 1},
    {icon: 'cssIcon.png', skill : 'CSS3', exp : '2 anos', key : 2},
    {icon: 'jsIcon.png', skill : 'JavaScript', exp : '1.5 anos', key : 3},
    {icon: 'phpIcon.png', skill : 'PHP', exp : '8 meses', key : 4},
    {icon: 'sqlIcon.png', skill : 'MySQL', exp : '8 meses', key : 5},
    {icon: 'reactIcon.png', skill : 'ReactJS', exp : '6 meses', key : 6},
    {icon: 'jsonIcon.png', skill : 'JSON', exp : '8 meses', key : 7}
]
const refs = [
    {icon: 'htmlIcon.png', skill : 'HTML5', exp : '2 anos',  key : 1},
    {icon: 'htmlIcon.png', skill : 'HTML5', exp : '2 anos',  key : 2},
    {icon: 'htmlIcon.png', skill : 'HTML5', exp : '2 anos',  key : 3},
    {icon: 'htmlIcon.png', skill : 'HTML5', exp : '2 anos',  key : 4}
]

export default class MainSobre extends Component {
    render() {
        return(
            <section>
                <TextArea
                subtitle="Bio"
                text="Comecei minha carreira como estágiario em um curso de informática e idiomas; Com diferentes atribuições na área financeira, coordenação e até mesmo em sala de aula, onde fui professor substituto e posteriormente efetivado como instrutor de informática. O que me capacitou muito para o mercado e me apresentou ao mundo de desenvolvimento WEB, onde estou em busca de solidificar minha carreira. Começo a partir desta página a criação do meu portifólio e o inicio de minha carreira como desenvolvedor Front End." />

            <div className="desktop-flex mobile-flex">
                <ListGroup groupTitle="Hábilidades">
                    {skills.map(item => {
                        return <ListItem dados={item} />
                    })}

                    {/* <ListItem icon="htmlIcon.png" skills="HTML5" exp="2 anos" />
                    <ListItem icon="cssIcon.png" skills="CSS3" exp="2 anos"/>
                    <ListItem icon="jsIcon.png" skills="JavaScript" exp="2 anos" />
                    <ListItem icon="phpIcon.png" skills="PHP" exp="1 anos" />
                    <ListItem icon="sqlIcon.png" skills="MySQL" exp="1 anos" />
                    <ListItem icon="reactIcon.png" skills="ReactJS" exp="6 meses" />
                    <ListItem icon="jsonIcon.png" skills="JSON" exp="6 meses" /> */}
                </ListGroup>

                <ListGroup groupTitle="Referências">
                    {refs.map(item => {
                        return <ListItem dados={item} />
                    })}
                </ListGroup>
            </div>
            </section>
        )
    }
}