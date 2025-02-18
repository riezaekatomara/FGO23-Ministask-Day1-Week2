const cart = [
  { name: "Item 1", price: 200000 },
  { name: "Item 2", price: 300000 },
  { name: "Item 3", price: 150000 },
];

async function calculateTotalPrice(cart) {
  return new Promise((resolve, reject) => {
    try {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      resolve(total);
    } catch (error) {
      reject(error);
    }
  });
}

function calculateDiscount(total) {
  return new Promise((resolve, reject) => {
    try {
      let discount = 0;
      if (total >= 500000 && total <= 1000000) {
        discount = total * 0.05;
      } else if (total > 1000000) {
        discount = total * 0.1;
      }
      resolve(discount);
    } catch (error) {
      reject(error);
    }
  });
}

async function calculateFinalPrice(cart) {
  try {
    const total = await calculateTotalPrice(cart);
    console.log(`Total Harga Sebelum Diskon: Rp. ${total}`);
    const discount = await calculateDiscount(total);
    console.log(`Diskon: Rp. ${discount}`);
    const finalPrice = total - discount;
    console.log(`Total Harga Setelah Diskon: Rp. ${finalPrice}`);
  } catch (error) {
    console.error("Terjadi Kesalahan:", error);
  }
}

calculateFinalPrice(cart);
