import './Banner.css'
import minhaFoto from 'assets/minha_foto.png'
import circuloColorido from 'assets/circulo_colorido.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='apresentacao'>
                <h1 className='titulo'>Olá, Mundo!</h1>
                <p className='paragrafo'>Boas vindas ao meu espaço pessoal! Eu sou Mateus de Jesus, aluno da escola de Front-end da Alura. Aqui compartilho meus conhecimentos de react :)</p>
            </div>
            <div className='imagens'>
                <img 
                    className='circuloColorido'
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className='minhaFoto'
                    src='https://github.com/MateusJesus.png'
                    alt='Foto de Mateus'
                />
            </div>
        </div>
    )
}

export default Banner