import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'Componentes/BotaoPrincipal'

const PostCard = ({post}) => {
    return(
        <Link to={`/post/${post.id}`}>
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
            />
            <h1 className={styles.titulo}>
                {post.titulo}
            </h1>
            <BotaoPrincipal>
                ler
            </BotaoPrincipal>
        </div>
        
        </Link>
    )
}

export default PostCard 