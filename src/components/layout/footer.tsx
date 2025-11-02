import footerlinks1, {
  footerlinks2,
  footerlinks3,
} from "@/data/footer/footer-links";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiTripadvisor } from "react-icons/si";
export default function Footer() {
  return (
    <footer
      className="w-full bg- mt-auto relative
            max-w-[1500px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-10
            px-6"
    >
      <div className="flex flex-col gap-5 md:gap-0 ">
        <div className="flex lg:flex-row lg:justify-between items-center flex-col">
          <div className="flex flex-col">
            <div className="relative mb-">
              <Image src="/assets/Logo.png" alt="" width={200} height={200} />
            </div>
            <div className="flex flex-row absolute mt-32 gap-3 hover:cursor-pointer">
              <Instagram size={20} strokeWidth={2.5} />
              <Facebook size={20} strokeWidth={2.5} />
              <Youtube size={20} strokeWidth={2.5} />
              <Linkedin className="" strokeWidth={2.5} size={20} />
              <SiTripadvisor className="" size={20} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-60 gap-5 lg:mt-16 hover:cursor-pointer font-medium ">
            <div className="flex flex-col md:text-end text-center ">
              {footerlinks1.map((item) => (
                <div
                  className="hover:text-primary hover:underline"
                  key={item.id}
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:text-end text-center">
              {footerlinks2.map((item) => (
                <div
                  className="hover:text-primary hover:underline"
                  key={item.id}
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:text-end text-center ">
              {footerlinks3.map((item) => (
                <div
                  key={item.id}
                  className="hover:text-primary hover:underline"
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          © {new Date().getFullYear()} serandibgo.com
        </div>
      </div>
    </footer>
  );
}
