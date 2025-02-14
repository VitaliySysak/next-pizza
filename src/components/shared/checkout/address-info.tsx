import React from "react";
import { WhiteBlock } from "../white-block";
import { FormTextarea } from "../checkout-form";
import { FormInput } from '../checkout-form';

interface Props {
  className?: string;
}

export const AddressInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address">
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Enter address..." />
        <FormTextarea name="comment" rows={5} className="text-base" placeholder="Comment for order" />
      </div>
    </WhiteBlock>
  );
};
