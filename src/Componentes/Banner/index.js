import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Mateus de Jesus, aluno da escola de Front-end da Alura. Aqui compartilho meus conhecimentos de ReactJS :)</p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src='https://github.com/MateusJesus.png'
                    alt='Foto de Mateus'
                />
            </div>
        </div>
    )
}

export default Banner