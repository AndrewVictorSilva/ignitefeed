import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/MaykBrito.png" />
          <div className={styles.authorInfo}>
            <strong>Mayk Brito</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="06 de Janeiro às 15:03" dateTime="2023-01-06 15:03:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          nulla.
        </p>
        <p>
          <a href="#">Lorem ipsum dolor sit.</a>
        </p>
        <p>
          <a href="">#Lorem</a> <a href="">#ipsum</a> <a href="">#dolor</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea placeholder="Deixe um comentário!" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
