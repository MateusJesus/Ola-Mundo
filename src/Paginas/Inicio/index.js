import PostCard from 'Componentes/PostCard'
import Posts from 'json/posts.json'
import './Inicio.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <ul className='posts'>
            {Posts.map((post) => {
                return (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Inicio