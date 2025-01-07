import { Container, Title, ProductImage, GroupVariants } from "@/shared/components/features";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import React from "react";

async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl}/>
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium, mollitia reiciendis, perspiciatis
            architecto officiis, debitis saepe aperiam nostrum velit quasi magnam! Vero tenetur optio eius cumque, ut molestiae
            eligendi?
          </p>

          <GroupVariants
            items={[
              {
                name: "Small",
                value: "1",
              },
              {
                name: "Meddium",
                value: "2",
              },
              {
                name: "Large",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
