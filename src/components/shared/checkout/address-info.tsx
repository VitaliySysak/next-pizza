import React from "react";
import { cn } from "@/src/lib/utils";
import { WhiteBlock } from "../white-block";
import { Textarea } from "../../ui/textarea";

interface Props {
  className?: string;
}

export const AddressInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address">
      <div className="flex flex-col gap-5">
        <input type="address" className="text-base" placeholder="Enter address..." />
        <Textarea rows={5} className="text-base" placeholder="Comment for order" />
      </div>
    </WhiteBlock>
  );
};
