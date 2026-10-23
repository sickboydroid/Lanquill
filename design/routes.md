# Routes

- `/user`
  - Expects `enroll`
  - Gives all the services paid for
- `/services`
  - Gives all the available services along with their prices
- `/orders/checkout`
  - Accepts `enroll`, `phone`, `password`, `services` he wants to pay for
  - Creates a razorpay order and sends that back to frontend
    - Frontend creates razorpay widget from this
- `/orders/verify`
  - Accepts the strings sent by razorpay
  - Verifies those and sends back ok or failed
  - Unlocks the services
- `/webhooks/razorpay`
  - Unlocks the services if not unlocked already
