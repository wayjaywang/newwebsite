import Link from 'next/link';

const Header = () => {
  return (
    <header className="md:sticky md:top-16">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">
        <Link href="/">Felix Wang</Link>
      </h1>
    </header>
  );
};

export default Header; 