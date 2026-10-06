function generateOrderNumber() {
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  return `TGS-${randomNumber}`;
}

export function createOrder({
  userId,
  formData,
  cartItems,
  delivery,
  selectedPayment,
  subtotal,
  taxes = 0,
  discount = 0,
}) {
  const shipping = delivery?.price ?? 0;
  const total = Math.max(0, subtotal + taxes + shipping - discount);

  return {
    orderNumber: generateOrderNumber(),

    // User who placed this order
    userId,

    customer: {
      fullName: formData.fullName,
      address: formData.address,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zipCode: formData.zipCode,
      additionalInformation: formData.additionalInformation,
      sameAsBilling: formData.sameAsBilling,
    },

    // Product snapshot
    items: cartItems.map((item) => ({
      productId: item.productId,
      productName: item.product.name,
      productImage: item.product.images?.[0] ?? null,
      quantity: item.quantity,
      price: item.product.price,
      selectedColor: item.selectedColor ?? null,
      selectedVariants: item.selectedVariants ?? {},
    })),

    delivery: {
      method: delivery?.id ?? null,
      price: shipping,
      estimatedDays: delivery?.estimatedDays ?? null,
    },

    payment: {
      method: selectedPayment,
    },

    pricing: {
      subtotal,
      taxes,
      shipping,
      discount,
      total,
    },

    status: "pending",
    createdAt: new Date().toISOString(),
  };
}