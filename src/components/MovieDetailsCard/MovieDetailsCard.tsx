import Image from "next/image";

export default function Component() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-8 md:flex-row md:gap-12 md:py-12">
      <div className="w-full flex-shrink-0 overflow-hidden rounded-lg md:w-[300px] lg:w-[350px]">
        <Image
          alt="Movie Poster"
          className="h-auto w-full object-cover"
          height="450"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/450",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">Interstellar</h1>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <span>2014</span>
          <span>•</span>
          <span>Directed by Christopher Nolan</span>
        </div>
        <p className="text-lg leading-relaxed">
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity&apos;s survival. They must find a suitable new home for
          humans, as Earth is becoming increasingly uninhabitable.
        </p>
      </div>
    </div>
  );
}
