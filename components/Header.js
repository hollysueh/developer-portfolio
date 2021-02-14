import Link from 'next/link'

const linkStyle = {
  margin: 10,
  padding: 10,
  color: 'rgb(139, 103, 103)',
  'font-weight': '100',
  'font-size': 'x-large',
  color: ' rgba(47, 79, 79)',
  'background-color': 'rgb(230, 221, 213)'
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LTH6TCY0E"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0LTH6TCY0E');
    </script>
  </div>
)

export default Header