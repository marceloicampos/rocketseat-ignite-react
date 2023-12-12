import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import postStyles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    // (props) essa props vem do app.jsx
    // vamos desestruturar o retorno de props e incluir apenas o que queremos buscar

    // Estado no React são variáveis que queremos que o componente monitore
    const [comments, setComments] = useState([])
    // comentários, função de novos comentários com estado inicial de array vazio
    const [newCommentText, setNewCommentText] = useState('')
    // novo texto de comentários, função de novos textos de comentários com estado inicial de string vazia

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm 'hs'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        // quando der submit no form, pegue todos comentários e adicione ao array um novo comentário
        setNewCommentText('')
        // após faça com que o novo comentário fique vazio
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        // pegue o valor da textarea e faça novo comentário
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse Campo é obrigatório')
    }

    function deleteComment(commentToDelete) {
        // console.log(`Deletar comentário: ${comment}`)

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        // imutabilidade, onda as variáveis não sofrem mutação, nunca alteramos uma variável na memória, faremos a criação de um novo valor
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.trim().length === 0

    return (
        <article className={postStyles.post}>
            <header>
                <div className={postStyles.author}>
                    <Avatar hasBorder src={author.avatarUrl} alt="user avatar" />
                    <div className={postStyles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.job}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={postStyles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }
                    if (line.type === 'link') {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    } else if (line.type === 'tag') {
                        return (
                            <span key={line.content}>
                                <a href="#">{line.content}</a>
                            </span>
                        )
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={postStyles.commentForm}>
                <strong>Deixei seu Feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={postStyles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={index}
                            avatar_comment={'https://github.com/jakeliny.png'}
                            author_comment={'Jakeliny Gracielly'}
                            post_comment={comment}
                            likes_comment={'34'}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
