import styles from './Post.module.css'

const Post = ({post}) => {
    return(
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`assets/posts/${post.id}/capa.png`}
            />
            <h1 className={styles.titulo}>
                {post.titulo}
            </h1>
            <button className={styles.botaoLer}>
                ler
            </button>
        </div>
    )
}

export default Post 