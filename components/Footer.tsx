export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mono">
        <span>© {new Date().getFullYear()} TAHSIN JAWWAD</span>
        <span>WATERLOO, ON</span>
        <a className="text-link" href="#top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
