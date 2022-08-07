const express = require('express');
const app = express();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KDe8IB1qqz3uOspSqBs3qsaIehItIOlNnQMVayeVwcojS8rYoAHg3yPH7MsXoHOLO2YCI1Lz1hnwq3uMbQmNxL100xb84zMOC");

const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {

  try {
    const payment = await stripe.paymentIntents.create({
      amount: 50000,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: 'pm_1LUAJLB1qqz3uOspNs1B5jO4',
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
})