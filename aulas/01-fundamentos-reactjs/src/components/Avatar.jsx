import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
    // const hasBorder = props.hasBorder !== false
    // PODEMOS USAR COM ARGUMENTO props COMO NO EXEMPLO ACIMA

    // OU USAR A DESESTRUTURAÇÃO NO JAVASCRIPT COMO NO EXEMPLO ABAIXO
    // const user = {name: "Marcelo", job: Web Developer}
    // podemos chamar com user.name (que mostrará Marcelo)
    // e podemos chamar com user.job (que mostrará Web Developer)
    // ou
    // const user = {name: "Marcelo", job: Web Developer}
    // const { name, job } = user;
    // onde o name recebe Marcelo e job recebe Web Developer

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatarWithOutBorder}
            src={src}
            alt="avatar do usuário"
        />
    )
}
