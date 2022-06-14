function Footer() {
  return (
    <footer className="page-footer blue-grey lighten-2 ">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
