import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import packagesData from "@/app/Packages/packages-data";
import Container from "@/components/common/container";
import ReadMoreModal from "@/components/packages/ReadMoreModal";
import { Flag } from "lucide-react";
import { SiTripadvisor } from "react-icons/si";

interface Props {
  params: Promise<{ package: string; sub: string }>;
}

export default async function SubPackagePage({ params }: Props) {
  const resolved = await params;
  const pkgKey = resolved.package.replace(/\s+/g, "").toLowerCase();
  const subKey = resolved.sub.replace(/\s+/g, "").toLowerCase();

  const pkg = packagesData[pkgKey];
  if (!pkg) notFound();

  const sub = pkg.children?.[subKey];
  if (!sub) notFound();

  return (
    // <div className="p-10 flex flex-col items-center mt-40">
    //   <h1 className="text-4xl font-bold text-primary mb-5">{sub.title}</h1>
    //   <Image
    //     width={200}
    //     height={200}
    //     src={sub.image}
    //     alt={sub.title}
    //     className="rounded-2xl w-full max-w-2xl shadow-lg"
    //   />
    //   <p className="mt-5 text-lg text-center max-w-3xl">{sub.description}</p>

    //   <div className="mt-8">
    //     <Link href={`/Packages/${pkgKey}`} className="text-primary underline">
    //       ← Back to {pkg.title}
    //     </Link>
    //   </div>
    // </div>
    <Container>
      <div className="mt-44">
        <div className="flex flex-col mb-5">
          <div className="text-4xl font-bold  mb-5 flex">{sub.title}</div>
          <div className="rounded-2xl bg-primary text-white p-2 flex w-36 text-center justify-center ">
            Most Popular
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex">
            <Image
              width={700}
              height={400}
              src={sub.image}
              alt={sub.title}
              className="rounded  shadow-lg"
            />
          </div>
          <div className="flex  flex-col gap-5">
            <Image
              width={400}
              height={300}
              src={sub.image2}
              alt={sub.title}
              className="rounded  shadow-lg"
            />
            <Image
              width={400}
              height={300}
              src={sub.image3}
              alt={sub.title}
              className="rounded  shadow-lg"
            />
          </div>
          <div className="flex  flex-col gap-5">
            <Image
              width={400}
              height={300}
              src={sub.image4}
              alt={sub.title}
              className="rounded  shadow-lg"
            />
            <Image
              width={400}
              height={300}
              src={sub.image5}
              alt={sub.title}
              className="rounded  shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 text-lg font-medium mt-5 flex flex-col">
            <div>{sub.description}</div>
            <ReadMoreModal
              title={sub.title}
              description={sub.description2}
              images={[sub.image]}
            />
          </div>
          <div className="flex w-1/2 justify-center pt-10 flex-col gap-5 items-center">
            <Link
              href="/ContactUs#faq-section"
              className="bg-primary2 p-5 rounded-xl w-96 text-center font-medium text-white flex flex-row gap-5 justify-center"
            >
              <Flag />
              Contact Us
            </Link>{" "}
            <Link
              href=""
              className="bg-[#00EB5B] p-5 rounded-xl font-semibold flex flex-row gap-1 justify-center text-center w-96 items-center"
            >
              {" "}
              <SiTripadvisor
                size={30}
                className="flex text-2xl text-center text-[#002B11]  "
              />{" "}
              Tripadvisor{" "}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  const params: Array<{ package: string; sub: string }> = [];

  Object.entries(packagesData).forEach(([pkgKey, pkg]) => {
    if (pkg.children) {
      Object.keys(pkg.children).forEach((subKey) => {
        params.push({ package: pkgKey, sub: subKey });
      });
    }
  });

  return params;
}
