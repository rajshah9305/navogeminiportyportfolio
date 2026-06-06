import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="ft-copy">© {new Date().getFullYear()} Raj Systems. All rights reserved.</div>
      <div className="ft-links">
        <Link href="#" className="interactive">GitHub</Link>
        <Link href="#" className="interactive">LinkedIn</Link>
        <Link href="#" className="interactive">Twitter</Link>
      </div>
    </footer>
  );
}
