import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego</strong>
              <time
                title="06 de Janeiro às 15:03"
                dateTime="2023-01-06 15:03:32"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Cometário</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Likes <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
