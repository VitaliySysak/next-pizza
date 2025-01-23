// "use server";

// import { prisma } from "@/prisma/prisma-client";
// import { CheckoutFormValues } from "../utils";
// import { OrderStatus } from "@prisma/client";
// import { cookies } from "next/headers";
// // import { sendEmail } from "../send-email";
// // import { PayOrderTemplate } from "@/src/components/shared";
// import { createPaymentLink } from "../create-payment-link";

// export async function createOrder(data: CheckoutFormValues) {
//   try {
//     const cookieStore = cookies();
//     const cartToken = cookieStore.get("cartToken")?.value;

//     // If cart token not found return error
//     if (!cartToken) {
//       throw new Error("Cart token not found");
//     }

//     // Search Cart by token
//     const userCart = await prisma.cart.findFirst({
//       include: {
//         user: true,
//         items: {
//           include: {
//             ingredients: true,
//             productItem: {
//               include: {
//                 product: true,
//               },
//             },
//           },
//         },
//       },
//       where: {
//         token: cartToken,
//       },
//     });

//     // If cart not found return error
//     if (!userCart) {
//       throw new Error("Cart is empty");
//     }

//     // If cart is empty return error
//     if (userCart?.totalAmount === 0) {
//       throw new Error("Cart is empty");
//     }

//     // Create order
//     const order = await prisma.order.create({
//       data: {
//         token: cartToken,
//         fullName: data.firstName.concat(" ", data.lastName),
//         email: data.email,
//         phone: data.phone,
//         address: data.address,
//         comment: data.comment,
//         totalAmount: userCart.totalAmount,
//         status: OrderStatus.PENDING,
//         items: JSON.stringify(userCart.items),
//       },
//     });

//     // Clear cart totalAmount
//     await prisma.cart.update({
//       data: {
//         totalAmount: 0,
//       },
//       where: {
//         id: userCart.id,
//       },
//     });

//     // Delete cartItems
//     await prisma.cartItem.deleteMany({
//       where: {
//         cartId: userCart.id,
//       },
//     });

//     // Create payment url
//     const paymentUrl = await createPaymentLink({
//       amount: order.totalAmount,
//       orderId: order.id,
//       description: "Payment for order #" + order.id,
//     });

//     // If payment url not found return error
//     if(!paymentUrl) {
//       throw new Error("Payment data not found")
//     }

//     // Write payment order id
//     await prisma.order.update({
//       where: {
//         id: order.id,
//       },
//       data: {
//         paymentId: order.id
//       },
//     })

//     // Send pay order email
//     // await sendEmail(
//     //   data.email,
//     //   "Next Pizza / Pay order #" + order.id,
//     //   PayOrderTemplate({
//     //     orderId: order.id,
//     //     totalAmount: order.totalAmount,
//     //     paymentUrl,
//     //   })
//     // );

//     return paymentUrl
//   } catch (error) {
//     console.log("Error while execution createOrder:", error);
//   }
// }
