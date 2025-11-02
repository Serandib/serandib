import Container from "@/components/common/container";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <Container>
      <div className="mt-40 font-bold text-4xl">
        <div>
          {/* <div className="font-bold text-4xl">
            Welcome to <span className="text-primary">Serendib</span>
            <span className="text-primary2">Go</span>{" "}
          </div> */}
          <div className="font-bold  md:text-3xl text-xl mt-5">
            Our <span className="text-primary2">Story</span>{" "}
          </div>
          <div className="font-medium md:text-xl text-lg mt-5 text-justify">
            At <span className="font-bold">SerendibGo</span>, we believe travel
            has the power to transform lives not just for travelers, but for
            communities, wildlife, and the environment. As a responsible
            destination management company, we are committed to creating
            meaningful journeys that protect Sri Lanka’s natural heritage,
            celebrate local culture, and empower the communities that make this
            island so extraordinary. Every experience we design is carefully
            curated with sustainability in mind. From partnering with
            eco-friendly accommodations and supporting local artisans to
            promoting ethical wildlife encounters and low-impact travel
            practices, we ensure that your journey contributes positively to Sri
            Lanka’s future. With a team of experienced travel experts and local
            guides, we craft bespoke tours that reflect your passions while
            honoring the land we call home. When you travel with SerendibGo, you
            are not just exploring Sri Lanka you are helping preserve its
            beauty, uplift its people, and support responsible tourism
            initiatives that make a lasting difference. Travel with purpose.
            Experience with heart. At SerendibGo, we take you from dreams to
            memories.
          </div>
        </div>
        <div className="  flex md:flex-row flex-col mt-10">
          {/* <div className="flex">
            <Image
              src="/assets/Images/UpgradePage/2.jpg"
              alt=""
              width={200}
              height={200}
            />
          </div> */}
          <div className="flex flex-col">
            <div className="font-bold md:text-3xl text-xl mt-10">
              Our <span className="text-primary">Mission</span>
            </div>
            <ul className="list-disc list-inside md:text-xl text-lg font-medium mt-5 space-y-2">
              <li>
                To design authentic, meaningful, and personalized travel
                experiences that showcase the true essence of Sri Lanka.
              </li>
              <li>
                To ensure exceptional service through responsible tourism
                practices, innovation, and local expertise.
              </li>
              <li>
                To enrich the lives of travelers while uplifting local
                communities and preserving natural and cultural heritage.
              </li>
              <li>
                To deliver journeys that go beyond sightseeing — offering
                emotion, adventure, and unforgettable moments at every step.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div className="md:text-3xl text-xl font-extrabold mt-10">Vision</div>
          <div className="md:text-xl text-lg font-medium mt-5">
            &quot; To be Sri Lanka’s most trusted and transformative travel
            partner, creating unforgettable journeys that celebrate culture,
            nature, and human connection turning every traveler’s dream into
            timeless memories. &quot;
          </div>
        </div>
        <div>
          <div className="md:text-3xl text-xl font-bold mt-10 ">
            Sustainability
          </div>
          <div className="md:text-xl text-lg font-medium mt-5 text-justify">
            At SerendibGo, we believe that travel is not just about exploring
            new destinations, but about nurturing the planet and people who make
            those journeys meaningful. Our commitment to sustainability and
            responsible tourism is deeply rooted in our philosophy of creating
            travel experiences that protect the environment, empower local
            communities, and preserve Sri Lanka’s cultural heritage for future
            generations. We view tourism as a powerful force for positive
            change, and every journey we curate is designed with purpose,
            consciousness, and long-term responsibility. Environmental
            conservation is at the heart of our operations. Sri Lanka is blessed
            with extraordinary biodiversity, from lush rainforests to thriving
            marine life, and we are dedicated to safeguarding these precious
            ecosystems. We actively promote eco-friendly practices such as
            reducing plastic waste, supporting responsible wildlife tourism, and
            partnering with accommodations and service providers that follow
            sustainable environmental standards. Our guests are encouraged to
            travel mindfully, respecting the fragile balance of nature and
            leaving behind nothing but footprints. SerendibGo is equally
            passionate about uplifting local communities and protecting cultural
            traditions. We believe that tourism should directly enrich the lives
            of the people who welcome travelers to their homeland. That is why
            we collaborate with local guides, family-run establishments, and
            community-based tourism initiatives to ensure that the economic
            benefits of travel remain within rural and indigenous communities.
            Through immersive cultural experiences, we help preserve age-old
            traditions, crafts, and customs while creating meaningful exchanges
            between travelers and locals.
          </div>
          <div className="flex md:flex-row flex-col mt-10">
            <div className="flex-1">
              <Image
                src="/assets/Images/UpgradePage/2.jpg"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="md:text-xl text-lg font-medium md:text-end text-justify flex-1/2 mt-5">
              We are also committed to preserving Sri Lanka’s spiritual and
              historical legacy by promoting responsible visitation to religious
              sites, temples, and heritage locations. Our tours are designed to
              foster cultural understanding and encourage travelers to engage
              respectfully with local customs. By creating awareness and
              promoting responsible behaviors, we ensure that Sri Lanka’s
              cultural treasures are cherished and protected rather than
              commercialized or exploited. At SerendibGo, sustainability is not
              an option it is a promise. We continually strive to innovate and
              implement practices that reduce our environmental footprint,
              support ethical tourism models, and contribute to community
              development. Our goal is to redefine travel as a transformative
              force that brings joy to the traveler while protecting the natural
              and cultural treasures of Sri Lanka. When you travel with
              SerendibGo, you become a part of this mission helping us create a
              future where travel inspires protection, connection, and lasting
              positive impact.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
