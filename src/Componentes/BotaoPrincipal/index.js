import styles from "./BotaoPrincipal.module.css"

const BotaoPrincipal = ({ children,lg }) => {
    return (
        <button
            className={`
                ${styles.botaoPrincipal}
                ${styles[lg]}
            `}
        >
            {children}
        </button>
    )
}

export default BotaoPrincipal