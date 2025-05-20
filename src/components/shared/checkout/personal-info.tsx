import React from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "../checkout-form";

interface Props {
  loading: boolean;
  className?: string;
}

export const PersonalInfo: React.FC<Props> = ({ loading, className }) => {
  return (
    <WhiteBlock title="2. Personal data" className={loading ? "opacity-40 pointer-events-none" : ""}>
        <div className="grid md:grid-cols-2 gap-5">
          <FormInput  name="firstName" className="text-base" placeholder="First Name" />
          <FormInput  name="lastName" className="text-base" placeholder="Last Name" />
          <FormInput  name="email" className="text-base" placeholder="Email" />
          <FormInput  name="phone" className="text-base" placeholder="Phone" />
        </div>
    </WhiteBlock>
  );
};
