import Image from "next/image";
import me from "@/public/me.jpg";

const Avatar = () => {
  return (
    <div className="size-40 overflow-hidden rounded-full border-4 border-line print:size-32">
      <Image
        src={me}
        height={320}
        width={320}
        alt="me"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Avatar;
