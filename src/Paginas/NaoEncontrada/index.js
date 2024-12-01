import BotaoPrincipal from 'Componentes/BotaoPrincipal'
import styles from './NaoEncontrada.module.css'
import imagemCachorro from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

const NaoEncontrada = () => {
    const navegar = useNavigate()
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Pagina não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div onClick={()=>navegar(-1)} className={styles.botaoContainer}>
                    <BotaoPrincipal lg="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={imagemCachorro}
                    alt='Cachorrinho confuso, usando roupa de humano e óculos.'
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NaoEncontrada