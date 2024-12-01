import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "Componentes/PostModelo"
import Markdown from "react-markdown"
import "./Post.css"
import styles from "./Post.module.css"
import NaoEncontrada from "Paginas/NaoEncontrada"
import PaginaPadrao from "Paginas/PaginaPadrao"
import PostCard from "Componentes/PostCard"

const Post = () => {
    const param = useParams()
    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(param.id))
        .slice(0, 4)

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <Markdown>
                                {post.texto}
                            </Markdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>
                        <ul className='posts'>
                            {
                                postsRecomendados.map((post) => {
                                    return (
                                        <li key={post.id}>
                                            <PostCard post={post} />
                                        </li>
                                    )
                                })}
                        </ul>
                    </PostModelo>
                }>
                </Route>
            </Route>
        </Routes>
    )
}

export default Post