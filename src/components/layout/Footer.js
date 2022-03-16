import styles from '../../styles/Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.l_footer}>
        <section className={styles.author}>Made by <a href='https://www.github.com/allbertuu'>Alberto Albuquerque</a></section>
      </div>
    </footer>
  );
}

export default Footer