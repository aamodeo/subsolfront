import axios from "./axios";

const api = {};

api.register = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/register`;
  return axios.post(url, body);
};

api.login = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`;
  return axios.post(url, body);
};

api.editUser = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/edit`;
  return axios.patch(url, body);
};

api.editProfile = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/edit-profile`;
  return axios.patch(url, body);
};

api.createProduct = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/product/create`;
  return axios.post(url, body);
};

api.getAllProduct = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/product/get-all-products-user`;
  return axios.post(url, body);
};

api.getAllProductByID = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/product/get-all-products-id`;
  return axios.post(url, body);
};

api.subscribe = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/subscribe/create`;
  return axios.post(url, body);
};

api.getUserSubscribe = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/subscribe/get-subscription`;
  return axios.post(url, body);
};

api.getUserSubscribeAll = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/subscribe/get-subscription-all`;
  return axios.post(url, body);
};

api.delteSubscription = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/subscribe/delete-subscription`;
  return axios.post(url, body);
};

api.editProduct = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/product/edit-product`;
  return axios.post(url, body);
};

api.fetchTransaction = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/history/get-transactions-all-product`;
  return axios.post(url, body);
};

api.fetchTransactionAll = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/history/get-transactions-all`;
  return axios.post(url, body);
};

api.createTransaction = function (body) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/history/create`;
  return axios.post(url, body);
};

export default api;
