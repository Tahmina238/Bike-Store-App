import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="w-full">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[600px] relative">
            <Image
              src="https://www.reillycycleworks.com/cdn/shop/files/t325_banner_desktop.jpg?v=1712103117&width=1420"
              alt="About Us Banner"
              layout="fill"
              className="object-contain rounded-md"
            />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              About Us
            </h1>

            <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed">
              <span className="font-semibold text-primary">
                Our Bike Store{" "}
              </span>
              — Our commitment to innovation drives every aspect of our design
              and engineering process, ensuring that every ebike we create
              delivers an extraordinary experience for all riders. At Aventon,
              we are shaping the future of ebikes, and redefining adventure with
              every ride. Your ultimate destination for premium bikes and
              cycling accessories. Our mission is to deliver high-quality bikes
              that suit all kinds of riders — whether you are a daily commuter,
              mountain explorer, or casual cruiser.
            </p>

            <div className="bg-base-200 rounded-lg p-6 mt-10 text-center shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Our Mission:
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                To inspire adventures, both big & small, in all terrains of
                life. No matter what we look like now, a year from now, or a
                decade from now, this is what keeps us moving forward. To become
                the go-to hub for all things cycling — building a community
                where people feel inspired to ride more and explore the world on
                two wheels.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
