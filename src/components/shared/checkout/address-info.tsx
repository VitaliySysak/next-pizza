import React from "react";
import { WhiteBlock } from "../white-block";
import { FormTextarea } from "../checkout-form";
import { FormInput } from "../checkout-form";

interface Props {
  loading: boolean;
  className?: string;
}

export const AddressInfo: React.FC<Props> = ({ loading, className }) => {
  return (
    <WhiteBlock title="3. Delivery address" className={loading ? "opacity-40 pointer-events-none" : ""}>
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Enter address..." />
        <FormTextarea name="comment" rows={5} className="text-base" placeholder="Comment for order" />
      </div>
    </WhiteBlock>
  );
};
