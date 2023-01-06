import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/style.css'
import { Container } from "react-bootstrap"

const Privacidade = () => {
        return (
                <>
                        <Header />
                        <Container>
                                <div className='container-other'>
                                        <h2><span>Política Privacidade</span></h2>
                                        <hr />
                                        <p className='sobre'><span>A sua privacidade é importante para nós. É política da Clio respeitar a sua
                                                privacidade em relação a qualquer informação sua que possamos coletar no site <a
                                                        href="https://clio.vercel.app">Clio</a>, e outros sites que possuímos e operamos.</span></p>
                                        <p className='sobre'><span>Solicitamos informações pessoais apenas quando realmente precisamos delas para
                                                lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
                                                informamos por que estamos coletando e como será usado.</span></p>
                                        <p className='sobre'><span>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o
                                                serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar
                                                perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</span></p>
                                        <p className='sobre'><span>Não compartilhamos informações de identificação pessoal publicamente ou com
                                                terceiros, exceto quando exigido por lei.</span></p>
                                        <p className='sobre'><span>O nosso site pode ter links para sites externos que não são operados por nós.
                                                Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar
                                                responsabilidade por suas respectivas&nbsp;</span> políticas de privacidade<span
                                                >.</span></p>
                                        <p className='sobre'><span>Você é livre para recusar a nossa solicitação de informações pessoais,
                                                entendendo que talvez não possamos fornecer alguns dos serviços desejados.</span></p>
                                        <p className='sobre'><span>O uso continuado de nosso site será considerado como aceitação de nossas
                                                práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
                                                dados do usuário e informações pessoais, entre em contacto connosco.</span></p>
                                        <p className='sobre'><span>
                                        </span></p>
                                        <hr />
                                        <h3 className='sobre-sub'><span>Compromisso do Usuário</span></h3>
                                        <p className='sobre'><span>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que
                                                a Clio oferece no site e com caráter enunciativo, mas não limitativo:</span></p>
                                        <ul>
                                                <li className='li-marc'><span> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé
                                                        a à ordem pública;</span></li>
                                                <li className='li-marc'><span> Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
                                                        ERROR ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos
                                                        humanos;</span></li>
                                                <li className='li-marc'><span> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares)
                                                        da Clio, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer
                                                        outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
                                                </li>
                                        </ul>
                                        <hr />
                                        <div className="more">
                                                <h3><span>Mais informações</span></h3>
                                                <p><span><em>Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver
                                                        algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso
                                                        interaja com um dos recursos que você usa em nosso site.</em></span></p>
                                        </div>
                                </div>
                        </Container>
                        <Footer />
                </>
        )
}

export default Privacidade