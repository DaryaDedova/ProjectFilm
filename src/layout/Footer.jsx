function Footer(){
    return <footer className="page-footer blue-grey">
    <div className="footer-copyright blue-grey">
      <div className="container">
      © {new Date().getFullYear} Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
}

export { Footer }