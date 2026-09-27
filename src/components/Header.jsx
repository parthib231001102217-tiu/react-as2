function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Parthib University home">
        <span className="wordmark-mark" aria-hidden="true">N</span>
        <span>Parthib <span className="wordmark-light">University</span></span>
      </a>
      <div className="header-note">
        <span className="status-dot" aria-hidden="true" />
        <span>Student community</span>
      </div>
    </header>
  )
}

export default Header