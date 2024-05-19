import { Main } from './styles'

import Header from '../../components/cabecalho'
import Footer from '../../components/rodape'

import iconFilter from "/arrow-down-wide-short-solid.svg"
import iconDocument from "/file-lines-regular.svg"

export default function Transparencia() {
    return(
        <>
            <Header/>
            <Main>
                <h2>TRANSPARÊNCIA</h2>
                <div className='filtro'>
                    <button>
                        <img src={iconFilter} alt="" className='icon'/>
                        <span>FILTRAR</span>
                    </button>
                </div>
                <section>
                    <div className='card'>
                        <div>
                            <p>ATA CASA</p>
                        </div>
                        <p>MAI 2024</p>
                        <img src={iconDocument} alt="" className='icon'/>
                        
                        <button>DOWNLOAD</button>
                    </div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>  
                </section>
            </Main>
            <Footer/>
        </>
    )
}