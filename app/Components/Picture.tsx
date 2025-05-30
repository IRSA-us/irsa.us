import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  override?: boolean;
  unoptimized?: boolean;
  priority?: boolean;
}

const Picture = ({
  src,
  alt,
  className = "",
  override = false,
  unoptimized = false,
  priority = false,
}: Props) => {
  const defaultClassName = "w-full lg:w-7/10 h-auto";
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={0}
      className={`rounded-[8px] shadow-[0_0_5px_white] ${
        !override && defaultClassName
      } ${className}`}
      unoptimized={unoptimized}
      priority={priority}
    />
  );
};

export default Picture;
