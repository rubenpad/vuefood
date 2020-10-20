import axios from "axios";

const url = "http://localhost:3000";

async function loadData(date) {
  const response = await axios(`${url}/data?date=${String(date)}`, {
    method: "POST"
  });

  return response.data;
}

export default { loadData };
