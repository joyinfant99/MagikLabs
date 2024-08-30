export default function Footer() {
    return (
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 MagikLabs. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mx-2">About</a>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mx-2">Products</a>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mx-2">Contact</a>
          </div>
        </div>
      </footer>
    );
  }