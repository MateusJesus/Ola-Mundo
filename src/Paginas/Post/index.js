import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "Componentes/PostModelo"
import Markdown from "react-markdown"
import "./Post.css"

const Post = () => {
    const param = useParams()
    const postFind = posts.find((post) => {
        return post.id == param.id
    })
    return (
        <PostModelo fotoCapa={`/assets/posts/${postFind.id}/capa.png`} titulo={postFind.titulo}>
            <div className="post-markdown-container">
                <Markdown>
                    {postFind.texto}
                </Markdown>
            </div>
        </PostModelo>
    )
}

export default Post