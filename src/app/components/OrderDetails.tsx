import Image from "next/image";
import styles from "./OrderDetails.module.css";

export interface OrderItem {
  id: string | number;
  quantity: number;
  item: string;
  price: number;
  total_price: number;
  status: "active" | "canceled";
  imageUrl?: string;
}

interface OrderDetailsProps {
  orderId: string; // Unique order ID for the entire order
  items: OrderItem[]; // List of all items in the order (active and canceled)
  onError?: (error: string) => void; // Error handling callback
}

export default function OrderDetails({
  orderId,
  items = [],
  
}: OrderDetailsProps) {
  const mergedItems = items.reduce<Map<string, OrderItem>>((acc, item) => {
    const existingItem = acc.get(item.item);

    if (existingItem) {
      if (item.status === "canceled") {
        existingItem.quantity -= item.quantity;
        existingItem.total_price -= item.quantity * item.price;

        // If the quantity becomes zero or negative, remove the item
        if (existingItem.quantity <= 0) {
          acc.delete(item.item);
        }
      }
    } else {
      if (item.status === "active") {
        acc.set(item.item, { ...item });
      }
    }

    return acc;
  }, new Map());

  const finalItems = Array.from(mergedItems.values());

  const getImageUrl = (order: OrderItem): string => {
    const imagePath = `/images/${order.item
      .replace(/\s+/g, "_")
      .toLowerCase()}.webp`
    return imagePath;
  };

  const totalPrice = finalItems.reduce(
    (sum, item) => sum + item.total_price,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.orderInfo}>
        <h1 className={styles.orderHeader}>Order Details</h1>
        <p className={styles.orderId}>Order ID: {orderId}</p>
      </div>

      <div className={styles.orderSection}>
        {finalItems.length === 0 ? (
          <div className={styles.emptyState}>
            <Image
              src="/images/default.webp"
              alt="No items added"
              width={200}
              height={200}
              className={styles.emptyImage}
              priority
            />
            <p className={styles.emptyText}>No items in your order.</p>
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              {finalItems.map((item) => (
                <div key={`${item.id}-${item.item}`} className={styles.card}>
                  <Image
                    src={getImageUrl(item)}
                    alt={item.item}
                    width={150}
                    height={150}
                    className={styles.cardImage}
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "/images/default.webp"; // Fallback image
                    }}
                  />
                  <h3 className={styles.cardTitle}>{item.item}</h3>
                  <p className={styles.cardText}>Quantity: {item.quantity}</p>
                  <p className={styles.cardText}>
                    Total: ${item.total_price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className={styles.totalPriceContainer}>
              <p className={styles.totalPriceLabel}>Total Price:</p>
              <span className={styles.totalPriceHighlight}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
