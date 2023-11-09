import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#"> Phones</Link>
            <Link href="#"> Laptops</Link>
            <Link href="#"> Desktops</Link>
            <Link href="#"> Watches</Link>
            <Link href="#"> Tvs</Link>
            <Link href="#"> Accesories</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#"> Contact Us</Link>
            <Link href="#"> Shipping Policy</Link>
            <Link href="#"> Returns & Exchanges</Link>
            <Link href="#"> FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              {" "}
              NextJS Ecommerce Shop is your one-stop shop to shop all your
              relevant optimal quality technological gadgets with 2 years
              waranty.{" "}
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>

          <FooterList>
            <h3 className="text-base font-bold mt-4 mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
