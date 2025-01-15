import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemsDetails } from "./checkout-items-details";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button } from "../ui";

const VAT = 15;
const DELIVERY_PRICE = 250;

interface CheckoutSideBarProps {
  totalAmount: number;
}

export const CheckoutSideBar: React.FC<CheckoutSideBarProps> = ({ totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <div className="w-[450px]">
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Total:</span>
          <span className="text-[34px] font-extrabold">${totalPrice}</span>
        </div>

        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-300" />
              Cart cost:
            </div>
          }
          value={totalAmount}
        />
        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-300" />
              Vat:
            </div>
          }
          value={vatPrice}
        />
        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-300" />
              Delivery:
            </div>
          }
          value={DELIVERY_PRICE}
        />

        <Button
          type="submit"
          // disabled={!totalAmount || submitting}
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          Proceed to payment
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
