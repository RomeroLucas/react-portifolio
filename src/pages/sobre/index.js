import React, { useState, useEffect } from 'react'
import TextArea from '../../components/textArea'
import {ListGroup, ListItem} from '../../components/listGroup'
import {skills, refs} from '../../data/sobre'


export default function MainSobre() {

return(
    <section>
        <TextArea
        subtitle="Bio"
        text="Comecei minha carreira como estágiario em um curso de informática e idiomas;
        Com diferentes atribuições na área financeira, coordenação e até mesmo em sala de aula,
        onde fui professor substituto e posteriormente efetivado como instrutor de informática.
        O que me capacitou muito para o mercado e me apresentou ao mundo de desenvolvimento WEB,
        onde estou em busca de solidificar minha carreira. Começo a partir desta página a criação do meu portifólio e o inicio de minha carreira como desenvolvedor Front End." />

    <div className="desktop-flex mobile-flex">
        <ListGroup groupTitle="Hábilidades">
            {skills.map(item => {
                return <ListItem dados={item} key={item.key} />
            })}
        </ListGroup>

        <ListGroup groupTitle="Referências">
            {refs.map(item => {
                return <ListItem dados={item} key={item.key} />
            })}
        </ListGroup>
    </div>
    </section>
)
}
