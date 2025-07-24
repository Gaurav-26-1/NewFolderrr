

import Image from "next/image";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <main id="profile" className={styles.container}>
      <section id="Profile" className={styles.container}></section>
      <h2 className={styles.heading}>Profile</h2>
      <hr></hr>
       <section className={styles.introSection}>
        <h3 className={styles.subHeading}>自己紹介 (Introduction)</h3>
        <div className={styles.introCard}>
          <div className={styles.introImageWrapper}>
            <Image
              src="/images/gaurav.jpg" // replace this with your actual image
              alt="プロフィール写真"
              width={180}
              height={180}
              className={styles.introImage}
            />
            </div>
            <div className={styles.introDetails}>
      <p className={styles.name}><strong>名前 :</strong>ラナ　ガウラブ </p>
      <p className={styles.age}><strong>年齢 :</strong> 25歳</p>
      <p className={styles.country}><strong>出身:</strong> ネパール</p>
    </div>
        <p className={styles.introText}>
          はじめまして！私はフロントエンドエンジニアとして、UI/UXデザインに情熱を持って取り組んでいます。
          新しい技術を学ぶことや、美しいデザインをコードで再現することが好きです。
          趣味も開発に活かせるよう意識しながら日々過ごしています。
        </p>
        </div>
      </section>
      {/* 省略：プロフィール本人情報セクション */}
      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味 (Hobby)</h3>
        <ul className={styles.hobbyList}>
          <li className={styles.card}>
            <Image
              src="/images/view2.jpg"
              alt="写真撮影"
              width={600}
              height={300}
              className={styles.hobbyImage}
            />
            <p>写真撮影：自然風景や街並みを撮影し、Instagramで発信</p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/game.jpg"
              alt="ゲーム"
              width={600}
              height={300}
              className={styles.hobbyImage}
            />
            <p>ゲーム：友達とゲームをするのが大好きです。気分転換になり、時間があるときはいつも一緒に遊んでいます。</p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/book.jpg"
              alt="読書"
              width={600}
              height={300}
              className={styles.hobbyImage}
            />
            <p>読書：私はさまざまなことをより深く理解するために、本を読むのが好きです。詳しく知ることで、知識が広がります。</p>
          </li>
          <li className={styles.card}>
            <Image
              src="/images/cafe.jpg"
              alt="カフェ巡り"
              width={600}
              height={300}
              className={styles.hobbyImage}
            />
            <p>カフェ巡り：体調が優れない時やリフレッシュが必要な時は、カフェに行って気分をリセットしています。</p>
          </li>
        </ul>
      </section>
    </main>
);
}
