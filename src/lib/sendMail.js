import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOrderEmail = async ({
  email,
  name,
  orderId,
  totalAmount,
}) => {
  await transporter.sendMail({
    from: `"Hero Kidzz" <${process.env.EMAIL}>`,
    to: email,
    subject: "Order Confirmed 🎉",
    html: `
      <h1>Thank You ${name}</h1>
      <p>Your order has been confirmed.</p>

      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Total:</b> ৳${totalAmount}</p>
    `,
  });
};