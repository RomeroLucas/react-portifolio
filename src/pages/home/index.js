import {CardArea, Card} from '../../components/card'
import TextArea from '../../components/textArea'
import './mainHome.css'

export default function Home(props) {
        return (
            <section>
                <TextArea 
                subtitle="Frontend Developer"
                text="Seja bem vindo ao meu portal; Este site é dedicado a apresentar meus trabalhos ao meu público funcionando como um portifólio, totalmente interativo, com meios de contato direto para que seus desejos sejam atendidos. Veja a seguir alguns exemplos do que posso oferecer.
                "
                />

                <CardArea>
                    <Card title="Sites" img="sitesCards.gif" />
                    <Card title="Marketing Digital" img="marketingCards.gif" />
                    <Card title="Jogos" img="jogosCards.gif" />
                    <Card title="Outros" img="outrosCards.gif" />
                </CardArea>
            </section>
        )
}