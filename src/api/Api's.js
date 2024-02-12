import axios from "axios";
import { env } from "../../next.config";

const client = axios.create({ baseURL: `${env.domain}` });

const setToken = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

//------------------------------------------------------------------------------------Caregory:
const getCategoryGroups = () =>
  client.get(`/categories/get-list/`).then((response) => response.data);

const getCategoriesId = () =>
  client.get(`/categories/ids/`).then((response) => response.data);

//------------------------------------------------------------------------------------Products:
const getProductList = (filter, price, order, plan, token) =>
  client
    .get(
      `/customers/filter-product/?${filter ? `price=&category=${filter}` : ""}${
        plan ? `&subsidyplan=${plan}` : ""
      }${price?.min ? `&max_price_min=${price?.min}` : ""}${
        price?.max ? `&max_price_max=${price?.max}` : ""
      }${order ? `&ordering=${order}` : ""}`,
      setToken(token)
    )
    .then((response) => response.data);

const getNewestProducts = () =>
  client.get(`/products?newest=true`).then((response) => response.data);

const getProductById = (id, token) =>
  client
    .get(`/products/${id}/`, setToken(token))
    .then((response) => response.data);

const getAllProductById = () =>
  client.get(`/products/`).then((response) => response.data);

const getAllShopProducts = () =>
  client
    .get(`/shops/shop-products/?limit=98`)
    .then((response) => response.data);

const getShopProductById = (id) =>
  id &&
  client.get(`/shops/shop-products/${id}/`).then((response) => response.data);

const getProductBsaketId = (token, shopId) =>
  shopId &&
  client
    .get(`/orders/single-order/?shop_id=${shopId}`, setToken(token))
    .then((response) => response.data);
//------------------------------------------------------------------------------------Suppliers:
const getSuppliersList = () =>
  client.get(`/shops/`).then((response) => response.data);

const getSupplierById = (id) =>
  client
    .get(`/shops/?title=&shop_unique_id=${id}`)
    .then((response) => response.data);
//------------------------------------------------------------------------------------Auth:
const loginWithNumberAndPassword = (value) =>
  client.post(`/accounts/token/`, value).then((response) => response.data);

const checkIsValidPhoneNumber = (value) =>
  client
    .post(`/accounts/existence/`, {
      phone_number: value.phone_number,
    })
    .then((response) => response.data);

const checkPhoneNumberForOtpCode = (value) =>
  client
    .post(`/accounts/get_phone/`, {
      phone_number: value.phone_number,
    })
    .then((response) => response.data);

const verifyOtpCode = (value) =>
  client
    .post(`/accounts/verify_token/customer/`, value)
    .then((response) => response.data);

const checkAuth = (token) =>
  client
    .get(`/accounts/me/`, setToken(token))
    .then((response) => response.data);
//------------------------------------------------------------------------------------Basket:
const getMyBasketData = (token) =>
  client
    .get(`/orders/viewsets/orders/`, setToken(token))
    .then((response) => response.data);

const getSingleBasket = (token, id) =>
  client
    .get(`/orders/order/${id}/delivery time/`, setToken(token))
    .then((response) => response.data);

const addToBasket = (token, itemId, quantity, shopId) =>
  client
    .post(
      `/orders/update/`,
      { item_id: itemId, quantity, shop_id: shopId },
      setToken(token)
    )
    .then((response) => response.data);

const removeFromBasket = (token, itemId, shopId) =>
  client
    .post(
      `/orders/update/`,
      { item_id: itemId, shop_id: shopId, delete: true, quantity: 0 },
      setToken(token)
    )
    .then((response) => response.data);

const deleteWholeBasket = (token, basketId) =>
  client
    .delete(`/orders/viewsets/orders/${basketId}/`, setToken(token))
    .then((response) => response.data);

const orderSetToProgress = (token, basketId) =>
  client
    .put(`/orders/order/${basketId}/payment/`, {}, setToken(token))
    .then((response) => response.data);

const setGiftCode = (token, code) =>
  client
    .post(`/orders/gift/`, { code }, setToken(token))
    .then((response) => response.data);

const startProgress = (token, id) =>
  client
    .put(
      `/orders/status/${id}/`,
      {
        status: "completed list",
      },
      setToken(token)
    )
    .then((response) => response.data);

const updateBasketDeliverdMethod = (token, id, body) =>
  client
    .put(`/orders/order/${id}/delivered/`, body, setToken(token))
    .then((response) => response.data);

const addDateTimeToBasketItem = (token, id, body) =>
  client
    .put(`/orders/order/${id}/delivery time/`, body, setToken(token))
    .then((response) => response.data);

//------------------------------------------------------------------------------------Addresses:
const getAddressDetailFromNeshan = (lat, lng) =>
  axios
    .get(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`, {
      headers: { "api-key": env.NESHAN_KEY },
    })
    .then((response) => response.data);

const getCities = () =>
  client.get(`/accounts/provinces/`).then((response) => response.data);

const getMyAddresses = (token) =>
  client
    .get(`/customers/address/create/`, setToken(token))
    .then((response) => response.data);

const addNewAddress = (token, data) =>
  client
    .post(`/customers/address/create/`, data, setToken(token))
    .then((response) => response.data);
//------------------------------------------------------------------------------------Plans:

const getMySubsidyPlans = (token) =>
  client
    .get(`/orders/viewsets/plans/`, setToken(token))
    .then((response) => response.data);

//------------------------------------------------------------------------------------Orders:
const getMyCurrentOrders = (token) =>
  client
    .get(`/orders/submit-orders/`, setToken(token))
    .then((response) => response.data);

const getMyDeliveredOrders = (token) =>
  client
    .get(`/orders/viewsets/orders/?status=fulfilled`, setToken(token))
    .then((response) => response.data);

const getMyCanceledOrders = (token) =>
  client
    .get(`/orders/viewsets/orders/?status=unfulfilled`, setToken(token))
    .then((response) => response.data);

const getMySingleOrders = (token, id) =>
  client
    .get(`/orders/submit-orders/${id}/`, setToken(token))
    .then((response) => response.data);

//------------------------------------------------------------------------------------Permitions:
const getMyPermitions = (token) =>
  client
    .get(`/orders/permit/`, setToken(token))
    .then((response) => response.data);

const getSinglePermition = (token, id) =>
  client
    .get(`/orders/permit/${id}`, setToken(token))
    .then((response) => response.data);

const setNewPermition = (token, data) =>
  client
    .post(
      `/orders/permit/`,
      {
        file_number: data?.file_number,
        permit_type: data?.permit_type,
        permit_number: data?.permit_number,
        jalali_emission_date: data?.jalali_emission_date,
        type_of_construction: data?.type_of_construction,
        number_of_floors: data?.number_of_floors,
        area: data?.area,
        address: data?.address,
      },
      setToken(token)
    )
    .then((response) => response.data);

export {
  getCategoryGroups,
  getCategoriesId,
  getProductList,
  getProductById,
  getSuppliersList,
  getSupplierById,
  loginWithNumberAndPassword,
  checkIsValidPhoneNumber,
  checkPhoneNumberForOtpCode,
  verifyOtpCode,
  getMyBasketData,
  getSingleBasket,
  addToBasket,
  setGiftCode,
  removeFromBasket,
  orderSetToProgress,
  getMySingleOrders,
  getCities,
  addNewAddress,
  getMyAddresses,
  getNewestProducts,
  getAddressDetailFromNeshan,
  deleteWholeBasket,
  getMySubsidyPlans,
  getMyCurrentOrders,
  getMyDeliveredOrders,
  getMyCanceledOrders,
  getAllShopProducts,
  getShopProductById,
  getProductBsaketId,
  checkAuth,
  getMyPermitions,
  getSinglePermition,
  setNewPermition,
  getAllProductById,
  addDateTimeToBasketItem,
  updateBasketDeliverdMethod,
  startProgress,
};
