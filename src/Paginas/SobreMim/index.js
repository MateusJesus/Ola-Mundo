import PostModelo from "Componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import style from "./SobreMim.module.css"

const SobreMim = () => {
    return (
        <main>
            <PostModelo
                titulo='Sobre Mim'
                fotoCapa={fotoCapa}
            >
                <h3 className={style.subtitulo}>Olá, me chamo Mateus!</h3>
                <img
                    src='https://github.com/MateusJesus.png'
                    className={style.fotoSobreMim}
                />
                <p className={style.paragrafo}>
                    Oi, tudo bem? Eu sou aluno da escola de Front-end na Alura e estou feliz de te ver por aqui.
                </p>
                <p className={style.paragrafo}>
                    Já trabalhei como Motion Designer, e atualmente estou em transição para o campo de Programação Front-End. Possuo uma sólida base em desenvolvimento web e um entendimento básico de programação Back-End. Tenho trabalhado como freelancer durante 6 meses. Minhas especialidades por enquanto são HTML, CSS e Javascript.
                </p>
                <p className={style.paragrafo}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat massa nec nulla bibendum porttitor. Sed commodo ac enim at condimentum. Sed porta nulla risus, ac vehicula sem rutrum id. Nunc at leo eget erat consequat gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget erat sed risus convallis volutpat. Fusce eget velit vel tellus posuere malesuada et non diam. Ut sagittis, elit vitae mattis iaculis, ex sapien rutrum orci, ullamcorper bibendum ante arcu ut ante. Maecenas augue lacus, posuere et eros a, pharetra ultrices nunc. Praesent id pulvinar diam.
                </p>
                <p className={style.paragrafo}>

                    Nullam vulputate ipsum sit amet faucibus fermentum. Nam dignissim mi odio, nec semper ligula finibus nec. Aenean a elit faucibus, aliquam nisi sed, auctor nulla. Donec imperdiet neque at dui maximus pharetra. Proin a venenatis lectus. Pellentesque fringilla ex at viverra eleifend. Vestibulum semper est et elementum hendrerit. Praesent imperdiet posuere pretium. Nam et ante nec lorem bibendum condimentum. Duis fermentum accumsan auctor. Pellentesque ac orci ipsum. Donec orci massa, facilisis in elementum pellentesque, tempor nec velit.
                </p>
                <p className={style.paragrafo}>

                    Morbi pellentesque at velit sit amet congue. Praesent convallis magna eu ligula tincidunt rutrum. Nam id ornare nibh, eget iaculis augue. Sed viverra lorem et finibus tempor. Pellentesque ipsum lectus, ultrices a eleifend vel, hendrerit at turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer varius lacinia ullamcorper. Duis interdum pellentesque sem. Ut ac elit ex. Proin massa magna, feugiat quis sagittis quis, porttitor luctus odio. Etiam ac nunc volutpat, varius tortor vel, tempor ligula. Praesent blandit nunc eu magna tempus, at accumsan libero finibus. Praesent ut enim at neque imperdiet lobortis id non erat. Duis eu enim vitae massa blandit imperdiet. In pulvinar quam ac lorem condimentum tempor. Morbi cursus dolor ut lectus dictum, tincidunt aliquam turpis pretium.
                </p>
            </PostModelo>
        </main>
    )
}

export default SobreMim