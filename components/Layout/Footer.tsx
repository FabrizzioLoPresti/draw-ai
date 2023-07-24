import Link from "next/link";
import { PaintBrushIcon } from "@heroicons/react/24/outline";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto text-white px-5 xl:px-0 md:grid md:grid-cols-6 space-y-8 md:space-y-0">
        <div className="col-span-2 space-y-3">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <PaintBrushIcon className="w-10 h-10" />
            <p>Draw with AI</p>
          </Link>
          <p>
            Draw with AI is a web app that lets you draw and then uses AI to
            generate a new image based on your drawing.
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold">Products</h3>
          <div className="flex flex-col">
            <Link href="/draw">Draw</Link>
            <Link href="/train">Train</Link>
            <Link href="/discover">Discover</Link>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold">Resources</h3>
          <div className="flex flex-col">
            <Link href="/blog">Blog</Link>
            <Link href="/prompt-template">Prompt Template</Link>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold">Need help?</h3>
          <div className="flex flex-col">
            <Link href="/">Email-us</Link>
            <Link href="/">Discord</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold">Others</h3>
          <div className="flex flex-col">
            <Link href="/about">About Us</Link>
            <Link href="/terms-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;