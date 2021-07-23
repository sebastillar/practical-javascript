// const precioOriginal = 100;
// const descuento = 15;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
//     const InputDiscount = document.getElementById("InputDiscount");
//     const discountValue = InputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resultPrice = document.getElementById("ResultPrice");
//     resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento
// }

const coupons = [{
        name: "black_friday",
        discount: 15,
    },
    {
        name: "san_valentine",
        discount: 30,
    },
    {
        name: "secret_code",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const couponValue = InputDiscount.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}