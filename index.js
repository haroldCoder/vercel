const express = require('express');
const app = express();
const Stripe = require("stripe");
const stripe = new Stripe("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");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
    res.json({"message": "success"});
  try {
    const payment = await stripe.paymentIntents.create({
      amount: 50000,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: 'pm_1LUAJLB1qqz3uOspNs1B5jO4',
      confirm: true,
      setup_future_usage: 'off_session' //confirm the payment at the same time
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