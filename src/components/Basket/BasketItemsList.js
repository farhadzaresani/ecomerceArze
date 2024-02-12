import BasketItem from "./BaskItem";

const BasketItemsList = ({ data, deletItem, addMoreOfItem }) => {
  return (
    <div className="w-full flex flex-col rounded-t-3xl border-[1px] bg-white mb-2  ">
      {data?.lines?.map((item, i) => {
        return (
          <div key={item.id}>
            <BasketItem
              image={item?.product.product?.productimage_set[0]?.url}
              subsidy={item?.subsidy_status}
              data={item?.product}
              price={item?.total_price}
              id={item?.item}
              shopId={data?.shop_id}
              deletItem={deletItem}
              quantity={item?.quantity}
              addMoreOfItem={addMoreOfItem}
              product_subsidized_price={item?.product_subsidized_price}
              price_net_amount={data?.price_net_amount}
            />
            {i !== data?.lines?.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default BasketItemsList;
