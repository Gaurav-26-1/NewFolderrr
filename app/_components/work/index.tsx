import Link from "next/link";
import styles from "./work.module.css";

export default function WorkPage() {
  return (
    <main id="work" className={styles.container}>
         <section id="work" className={styles.container}></section>
              <h2 className={styles.heading}>Work</h2>
      <hr></hr>
      <p className={styles.text}>
        ここでは自分がこれまで制作してきたアプリやサイトを紹介します。各作品のサムネイルや簡単な説明文、GitHub リンクを載せましょう。
      </p>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>作品名 1</h3>
          <p>Next.js を使ったニュースサイト</p>
          <Link href="https://next-chap08-scvx.vercel.app/" className={styles.link}>
            GitHub リポジトリはこちら
          </Link>
        </div>
        <li className={styles.card}>
          <h3>作品名 2</h3>
          <p></p>
          <Link href="" className={styles.link}>
            GitHub リポジトリはこちら
          </Link>
          
        </li>
        {/* 必要に応じてリストを追加 */}
        
      </div>
    </main>
  );
}