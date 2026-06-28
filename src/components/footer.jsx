import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h1 className="brand text-xl font-bold flex text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
              E.Com
            </h1>

            <p className="mt-4 text-slate-400">
              Discover quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-slate-400">
              <Link to="/" className="flex items-center  mb-2">
                Home
              </Link>
              <Link className=" flex items-center mb-2" to="/products">
                All Products
              </Link>
              <Link to="/cart" className=" flex items-center mb-2">
                Cart
              </Link>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>

            <ul className="space-y-2 text-slate-400">
              <Link
                className=" flex items-center mb-2"
                to="/Category/Electronics"
              >
                Electronics
              </Link>
              <Link className=" flex items-center mb-2" to="/Category/Fashion">
                Fashion
              </Link>
              <Link className=" flex items-center mb-2" to="/Category/Footwear">
                Footwear
              </Link>
              <Link
                className=" flex items-center mb-2"
                to="/Category/Home%20%26%20Kitchen"
              >
                Home & Kitchen
              </Link>
              <Link
                className=" flex items-center mb-2"
                to="/Category/Sports%20%26%20Fitness"
              >
                Sports & Fitness
              </Link>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>

            <ul className="space-y-2 text-slate-400">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-500">
          © 2026 E.Com. Built with {" "}
          <a
            href="https://codelabs-by-kumarsai.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>
              <span
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  marginRight: "5px",
                  color: "#dc3545",
                }}
              >
                {"{"}
              </span>
              <span
                className="brand-name-1"
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  color: "#ffffff",
                }}
              >
                Code
              </span>
              <span
                className="brand-name-2 text-danger"
                style={{
                  color: "#dc3545",
                  fontSize: "larger",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  textDecorationColor: "#dc3545",
                  textUnderlineOffset: "3px",
                }}
              >
                Labs
              </span>
              <span
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  marginLeft: "5px",
                  color: "#dc3545",
                }}
              >
                {"}"}
              </span>
            </em>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
