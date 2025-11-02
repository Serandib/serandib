import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import packagesData from "@/app/Packages/packages-data";

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

  return (
    <div className="p-10 flex flex-col items-center mt-40">
      <h1 className="text-4xl font-bold text-primary mb-5 font-[Raleway]">{pkg.title}</h1>
      {/* <Image
        width={200}
        height={200}
        src={pkg.image}
        alt={pkg.title}
        className="rounded-2xl w-full max-w-2xl shadow-lg"
      /> */}
      <p className="mt-5 text-lg text-center max-w-3xl">{pkg.description}</p>

      {pkg.children && (
        <div className="w-full max-w-3xl mt-8">
          <h2 className="text-2xl font-semibold mb-4 ">Related Tours</h2>
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
                  <p className="text-sm text-muted-foreground mt-1">
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
