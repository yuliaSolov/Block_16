const timmy = {
  refills: [25, 10, 20],
  hasSubscription: true,
  hasCoupon: false,
};

const sarah = {
  refills: [15, 20, 25, 30],
  hasSubscription: false,
  hasCoupon: true,
};

const rocky = {
  refills: [30, 40, 25, 35],
  hasSubscription: true,
  hasCoupon: true,
};

function calculateRefillTotal(refills) {
  return refills.reduce((total, refill) => total + refill, 0);
}

function calculateFinalAmount(refills, hasSubscription, hasCoupon) {
  let total = calculateRefillTotal(refills);

  if (hasSubscription) {
    total *= 0.75;
  }

  if (hasCoupon) {
    total -= 10;
  }

  return total;
}

function logGrandTotal(customer) {
  const finalAmount = calculateFinalAmount(
    customer.refills,
    customer.hasSubscription,
    customer.hasCoupon
  );
  console.log(`Your grand total is $${finalAmount}.`);
}
