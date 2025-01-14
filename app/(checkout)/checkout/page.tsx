import { CheckoutItemsDetails, Container, Title, WhiteBlock } from "@/src/components/shared";
import { Input } from "@/src/components/ui";
import { Textarea } from "@/src/components/ui/textarea";
import { Package, Percent, Truck } from "lucide-react";

export default function Chekout() {
  return (
    <Container className="mt-5">
      <Title text="Checkout process" className="font-extrabold mb-6 text-[36px]" />

      <div className="flex gap-10">
        {/* Left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">123123123123</WhiteBlock>

          <WhiteBlock title="2. Personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Name" />
              <Input name="lastName" className="text-base" placeholder="LastName" />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Phone number" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <input type="address" className="text-base" placeholder="Enter address..." />
              <Textarea rows={5} className="text-base" placeholder="Comment for order" />
            </div>
          </WhiteBlock>
        </div>

        {/* Right side */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total:</span>
              <span className="text-[34px] font-extrabold">$3000</span>
            </div>

            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Product cost:
                </div>
              }
              value="3000"
            />
            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Tax:
                </div>
              }
              value="300"
            />
            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Delivery:
                </div>
              }
              value="100"
            />
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
