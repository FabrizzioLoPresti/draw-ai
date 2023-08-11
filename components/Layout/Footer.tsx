import Link from "next/link";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-orange-800 py-12">
      <div className="max-w-screen-2xl mx-auto text-white px-5 xl:px-0 md:grid md:grid-cols-6 space-y-8 md:space-y-0">
        <div className="col-span-2 space-y-3">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image src="/LogoCat.svg" width={60} height={60} alt="Logo Draw AI" />
            <p>Draw with AI</p>
          </Link>
          <p>
            Mishi AI is a web app that lets you draw and then uses AI to
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