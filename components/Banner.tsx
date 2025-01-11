import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-96">
      <Image
        src="/images/banner.jpg"
        alt="Construction Site Banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Construction Site</h1>
        <p className="text-lg mt-2">
          Building the future, one project at a time.
        </p>
      </div>
    </div>
  );
};

export default Banner;
