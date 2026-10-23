# Database

## users

```yaml
user:
  enrollment: string
  phone: string
  password: string
  services: [{ serviceId: Service, priceAtPurchase: number }]
```

## services

```yaml
Service:
  name: string
  price: number
  icon: string
```

## orders

- Make sure to pass timestamp at the end

```yaml
Order:
    user: user
    items: [{ serviceId: Service, priceAtPurchase: number }]
    totalAmount: number
    status: ['PENDING'(def), 'PAID', 'FAILED', 'REFUNDED']
    razorpayOrderId: { type: String, required: true },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
```
