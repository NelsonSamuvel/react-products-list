const Cart = () => {
  return (
    <section className="my-12"> 
      <div className="box bg-white p-6 pb-12 shadow-md  rounded-md">
        <h2 className="h2 text-rose-700">Your Cart (0)</h2>
        <img src="assets/svg/empty-cart.svg" alt="" className="mx-auto mt-12 w-[200px]" />
        <p className="text-center text-stone-500 font-semibold">Your Added Items will appear here</p>
      </div>
    </section>
  );
};

export default Cart;
