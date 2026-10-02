export const invoiceTemplate = ({
  name,
  email,
  orderId,
  totalAmount,
  items,
}) => {
  return `
    <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb">

      <div style="background:#ff7a18;padding:30px;text-align:center;color:#fff">
        <h1 style="margin:0">Hero Kidzz</h1>
        <p style="margin-top:10px">Invoice & Order Confirmation</p>
      </div>

      <div style="padding:30px">
        <h2>Thank You For Your Order 🎉</h2>

        <p>Hello <strong>${name}</strong>,</p>

        <p>Your order has been successfully placed.</p>

        <table width="100%" cellspacing="0" cellpadding="10" style="border-collapse:collapse;margin:20px 0">
          <tr>
            <td style="border:1px solid #ddd"><strong>Invoice No</strong></td>
            <td style="border:1px solid #ddd">HKZ-${orderId}</td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd"><strong>Email</strong></td>
            <td style="border:1px solid #ddd">${email}</td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd"><strong>Date</strong></td>
            <td style="border:1px solid #ddd">${new Date().toLocaleDateString()}</td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd"><strong>Status</strong></td>
            <td style="border:1px solid #ddd">Pending</td>
          </tr>
        </table>

        <h3>Order Items</h3>

        <table width="100%" cellspacing="0" cellpadding="10" style="border-collapse:collapse">
          <thead>
            <tr style="background:#f3f4f6">
              <th style="border:1px solid #ddd">Product</th>
              <th style="border:1px solid #ddd">Qty</th>
              <th style="border:1px solid #ddd">Price</th>
              <th style="border:1px solid #ddd">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            ${items
              .map(
                (item) => `
                  <tr>
                    <td style="border:1px solid #ddd">${item.title}</td>
                    <td style="border:1px solid #ddd;text-align:center">${item.quentity}</td>
                    <td style="border:1px solid #ddd;text-align:right">৳${item.cardPrice}</td>
                    <td style="border:1px solid #ddd;text-align:right">
                      ৳${item.cardPrice * item.quentity}
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>

        <div style="margin-top:20px;text-align:right">
          <h2>Total: ৳${totalAmount}</h2>
        </div>

        <div style="margin-top:25px;padding:15px;background:#f9fafb;border-left:4px solid #ff7a18">
          Thank you for shopping with Hero Kidzz ❤️
        </div>
      </div>

      <div style="background:#111827;color:#fff;text-align:center;padding:20px">
        © ${new Date().getFullYear()} Hero Kidzz. All Rights Reserved.
      </div>
    </div>
  `;
};