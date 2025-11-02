import Container from "@/components/common/container";
import Image from "next/image";
import { MailIcon, MapPin, PhoneCall } from "lucide-react";
export default function UpgradingPage() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center lg:bg-[length:28%] md:bg-[length:40%] bg-[length:70%]"
      style={{ backgroundImage: "url('/assets/Images/UpgradePage/Map.png')" }}
    >
      <Container>
        <div className="">
          <div className="lg:flex flex-row absolute gap-[900px] mt-5 hidden ">
            <div className="flex flex-col gap-5  ">
              <Image
                src="/assets//Images/UpgradePage/10.jpg"
                alt="Logo"
                width={200}
                height={300}
                className="object-contain flex rounded-2xl"
              />
              <Image
                src="/assets//Images/UpgradePage/31.png"
                alt="Logo"
                width={200}
                height={300}
                className="object-contain flex rounded-2xl"
              />
              <Image
                src="/assets//Images/UpgradePage/7.png"
                alt="Logo"
                width={200}
                height={300}
                className="object-contain flex rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/assets//Images/UpgradePage/15.png"
                alt="Logo"
                width={200}
                height={300}
                className="object-contain flex rounded-2xl"
              />
              <Image
                src="/assets//Images/UpgradePage/56.png"
                alt="Logo"
                width={200}
                height={100}
                className="object-contain flex rounded-2xl"
              />
              <Image
                src="/assets//Images/UpgradePage/2.jpg"
                alt="Logo"
                width={220}
                height={100}
                className="object-contain flex rounded-2xl"
              />
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center justify-center ">
              <div className="relative w-50 h-30 lg:w-62 lg:h-44">
                <Image
                  src="/assets/Logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Text directly under the logo */}
              <div className="text-xl font-semibold text-center lg:mt-28 md:mt-25 mt-20 lg:text-3xl text-gray-950 md:text-3xl absolute ">
                From Dreams to Memories
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-6 text-4xl font-bold lg:text-7xl md:text-6xl">
              <div className="flex text-primary2">In the Process of</div>
              <div className="flex text-primary">Upgrading ...</div>
            </div>

            <div className="items-center justify-center mt-10 text-xl font-medium text-center lg:text-4xl md:text-3xl lg:leading-12 md:leading-10">
              We’re here to help <br /> you plan your <br /> dream holiday in{" "}
              <br />{" "}
              <span className="text-primary lg:text-6xl text-4xl font-extrabold">
                Sri Lanka.
              </span>
            </div>

            <div className="flex flex-row gap-5 justify-center mt-10 items-center">
              <PhoneCall className=" lg:h-12 lg:w-12 h-8 w-8 flex" />
              <div className="flex flex-col">
              <div className="lg:text-3xl text-xl flex items-center">
                +94 11 2 580 623
              </div>
              <div className="lg:text-3xl text-xl flex items-center">
                +94 77 7 930 796
              </div>
              </div>
            </div>

            <div className="flex flex-row gap-5 justify-center mt-5">
              <MailIcon className="lg:h-12 lg:w-12 h-8 w-8 flex" />
              <div className="lg:text-3xl text-xl  flex items-center">
                info@serendibgo.com
              </div>
            </div>

            <div className="flex flex-row lg:gap-5 gap-3 items-center mt-5 justify-center ">
              <MapPin className=" lg:h-12 lg:w-12 h-8 w-8 flex " />
              <div className="lg:text-3xl text-l  flex flex-col items-center  ">
                <div className="flex items-center text-center">
                  No 220A 1/1,Bauddhaloka Mawatha,{" "}
                </div>
                <div className="flex"> Colombo 07, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
