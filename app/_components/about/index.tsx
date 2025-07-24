import Image from "next/image";
import styles from "./about.module.css";

export default function About(){
    return (
        <section id="about" className={styles.container}>
<main id="About" className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <hr></hr>
            <p>
             こんにちは、ガウラブです。
下にある本を使って勉強しながら、このウェブサイトを作りました。
この本でNext.jsやウェブ開発の基本を学びました。

今後もこの知識を活かして、より良いウェブサイトを作成していきたいと思います。
            </p>
            </main>
            <section>
                <div className = {styles.introCard}>
                    <div className={styles.introImageWrapper}>
                <Image
                src="/images/about1.jpg"
                alt="About Image"
                width={300}
                height={280}
                  />
                    </div>
                </div> 
            </section>
        </section>
    );
}