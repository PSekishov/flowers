import styles from './Footer.module.css';

const Footer = () => {


  return (


    <footer className={styles.footer}>
      <div className="container mt-auto text-white-50">
        <p className={styles.footer_colontitul}>Developer React &copy;  <a href="https://getbootstrap.com/" className="text-mate"> Paul Sekishov</a>, by <a href="https://twitter.com/mdo" className="text-mate">@mdo</a>.</p>
      </div>
    </footer>

  );

};

export default Footer;