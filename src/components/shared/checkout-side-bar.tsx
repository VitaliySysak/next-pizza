import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemsDetails } from "./checkout-items-details";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";

const VAT = 15;
const DELIVERY_PRICE = 250;

interface CheckoutSideBarProps {
  totalAmount: number;
  loading: boolean;
}

export const CheckoutSideBar: React.FC<CheckoutSideBarProps> = ({ totalAmount, loading }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <div className="lg:w-[450px]">
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Total:</span>
          {loading ? <Skeleton className="w-48 h-11 rounded-[10px]" /> : <span className="h-11 text-[34px] font-extrabold">${totalPrice}</span>}
        </div>

        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-300" />
              Cart cost:
            </div>
          }
          value={totalAmount}
          loading={loading}
        />
        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-300" />
              Vat:
            </div>
          }
          value={vatPrice}
          loading={loading}
        />
        <CheckoutItemsDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-300" />
              Delivery:
            </div>
          }
          value={DELIVERY_PRICE}
          loading={loading}
        />

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          Proceed to payment
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
