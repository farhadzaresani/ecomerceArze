import DeliveryItem from "./DeliveryItem";
import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";
import { currentAddress } from "@/store/reducers/addressReducer";

const BasketDelivery = ({ data, selectHowToPay, setSelectHowToPay }) => {
  const token = getCookie("access");
  const addreses = useSelector(currentAddress);

  return (
    <div>
      <DeliveryItem
        data={data}
        address={addreses}
        selectHowToPay={selectHowToPay}
        setSelectHowToPay={setSelectHowToPay}
        storeName={data?.lines?.product?.shop?.title}
        storeAddress={data?.lines?.product?.shop?.primary_address}
        id={data?.lines?.product?.shop?.shop_unique_id}
        key={data?.lines?.item}
      />
    </div>
  );
};

export default BasketDelivery;
