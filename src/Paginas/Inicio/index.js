import Banner from 'Componentes/Banner'
import Post from 'Componentes/Post'
import Posts from 'json/posts.json'
import './Inicio.css'

const Inicio = () => {
    return (
            <ul className='posts'>
                {Posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Post post={post} />
                        </li>
                    )
                })}
            </ul>
    )
}

export default Inicio