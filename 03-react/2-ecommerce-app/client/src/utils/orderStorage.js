const ORDERS_STORAGE_KEY = "techshelf-orders";

export function getOrders() {
  try {
    const storedOrders = localStorage.getItem(
      ORDERS_STORAGE_KEY,
    );

    return storedOrders ? JSON.parse(storedOrders) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  const orders = getOrders();

  const updatedOrders = [
    ...orders,
    order,
  ];

  localStorage.setItem(
    ORDERS_STORAGE_KEY,
    JSON.stringify(updatedOrders),
  );

  return order;
}

export function getOrderByNumber(orderNumber) {
  const orders = getOrders();

  return (
    orders.find(
      (order) => order.orderNumber === orderNumber,
    ) ?? null
  );
}