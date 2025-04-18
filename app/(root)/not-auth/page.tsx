import { InfoBlock } from "@/src/components/shared";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Access forbiden"
        text="This page could see only authorized users"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
