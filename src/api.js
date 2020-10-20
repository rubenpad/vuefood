import axios from "axios";

const url = "http://localhost:3000";

async function loadData(date) {
  const response = await axios(`${url}/data?date=${String(date)}`, {
    method: "POST"
  });

  return response.data;
}

async function getBuyers() {
  const response = await axios(`${url}/buyers`);
  return response.data;
}

async function getBuyerHistory(buyerId) {
  const response = await axios(`${url}/buyers/${buyerId}`);
  return response.data;
}

export default { loadData, getBuyers, getBuyerHistory };
