import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import packagesData from "@/app/Packages/packages-data";
import Container from "@/components/common/container";
import { playfair } from "@/styles/fonts/fonts";

interface Props {
  params: Promise<{ package: string }>;
}

export default async function PackagePage({ params }: Props) {
  const resolvedParams = await params;
  const key = resolvedParams.package.replace(/\s+/g, "").toLowerCase();
  const pkg = packagesData[key];

  if (!pkg) {
    notFound();
  }

  // Special layout: Excursions uses a dedicated hero + booking-focused grid.
  if (key === "excursions") {
    return (
      <Container>
        <div className="mt-32 w-full">
          <div className=" rounded-lg overflow-hidden w-full max-w-6xl mx-auto   ">
            <div className=" inset-0 flex items-center justify-center">
              <h1
                className={`${playfair.className} text-3xl md:text-5xl text-primary text-center  px-6`}
              >
                {pkg.title}
              </h1>
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg  text-center">
              {pkg.description ||
                "Choose from our curated excursions — half day, full day and bespoke options to explore Sri Lanka."}
            </p>
          </div>

          {/* <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pkg.children &&
              Object.entries(pkg.children).map(([subKey, sub]) => (
                <div
                  key={subKey}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={sub.bannerImage || sub.image || pkg.image}
                      alt={sub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{sub.title}</h3>
                    <p className="text-sm mt-2 text-justify">
                      {sub.description.slice(0, 140)}...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/Packages/${key}/${subKey}`}
                        className="text-primary font-semibold"
                      >
                        View details
                      </Link>
                      <Link
                        href="/ContactUs#excursions"
                        className="bg-primary text-white px-4 py-2 rounded-lg"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}

          <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pkg.children &&
              Object.entries(pkg.children).map(([subKey, sub]) => (
                <Link
                  key={subKey}
                  href={`/Packages/${key}/${subKey}`}
                  className="group block rounded-xl overflow-hidden shadow hover:shadow-lg"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold">{sub.title}</h3>
                    <p className=" text-muted-foreground mt-1">
                      {sub.description.slice(0, 120)}...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    );
  }

  // Special layout for Dream Weddings package
  if (key === "dreamweddings") {
    return (
      <Container>
        <div className="mt-32 w-full">
          <div className=" rounded-lg overflow-hidden w-full max-w-5xl mx-auto">
            <div className=" inset-0  flex items-center justify-center">
              <div
                className={`${playfair.className} text-3xl md:text-5xl text-primary text-center px-6`}
              >
                {pkg.title}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-lg text-justify">{pkg.description}</p>
          </div>

          {/* <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pkg.children &&
              Object.entries(pkg.children).map(([subKey, sub]) => (
                <Link
                  key={subKey}
                  href={`/Packages/${key}/${subKey}`}
                  className="group block rounded-xl overflow-hidden shadow hover:shadow-lg"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={sub.image || pkg.image}
                      alt={sub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold">{sub.title}</h3>
                    <p className="text-sm mt-2">
                      {sub.description.slice(0, 120)}...
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="text-sm text-primary font-semibold">
                        View details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div> */}
          <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pkg.children &&
              Object.entries(pkg.children).map(([subKey, sub]) => (
                <Link
                  key={subKey}
                  href={`/Packages/${key}/${subKey}`}
                  className="group block rounded-xl overflow-hidden shadow hover:shadow-lg"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold">{sub.title}</h3>
                    <p className=" text-muted-foreground mt-1">
                      {sub.description.slice(0, 120)}...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    );
  }

  // Default layout for other packages
  return (
    <div className="p-10 flex flex-col items-center mt-32">
      <h1
        className={`${playfair.className} text-4xl font-medium text-primary mb-5 text-center`}
      >
        {pkg.title}
      </h1>
      <p className=" text-lg  max-w-3xl text-justify">{pkg.description}</p>

      {pkg.children && (
        <div className="w-full max-w-3xl mt-8">
          <h2 className={`${playfair.className} text-2xl font-semibold mb-4 `}>
            Related Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(pkg.children).map(([subKey, sub]) => (
              <Link
                key={subKey}
                href={`/Packages/${key}/${subKey}`}
                className="group block rounded-xl overflow-hidden shadow hover:shadow-lg"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold">{sub.title}</h3>
                  <p className=" text-muted-foreground mt-1">
                    {sub.description.slice(0, 120)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(packagesData).map((pkg) => ({ package: pkg }));
}
