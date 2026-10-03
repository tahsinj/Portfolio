const links = [
  { href: "#work", label: "WORK" },
  { href: "#experience", label: "BACKGROUND" },
  { href: "#toolkit", label: "TOOLKIT" },
  { href: "#honours", label: "HONOURS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="brand" aria-label="Tahsin Jawwad, back to top">
          <span className="brand-mark display notch-sm">TJ</span>
          <span className="brand-text mono">
            <strong>TAHSIN JAWWAD</strong>
            <span>MQF · WATERLOO</span>
          </span>
        </a>
        <nav className="nav" aria-label="Sections">
          {links.map((link, i) => (
            <a key={link.href} href={link.href}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {link.label}
            </a>
          ))}
        </nav>
        <span className="status mono hide-sm">
          <span className="pulse-dot" />
          OPEN TO QUANT &amp; SWE ROLES
        </span>
      </div>
    </header>
  );
}
