export function Footer() {
  return (
    <footer className="site-footer mt-8 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} 44th Regiment of Foot. All rights
            reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4"></nav>
      </div>
    </footer>
  );
}
