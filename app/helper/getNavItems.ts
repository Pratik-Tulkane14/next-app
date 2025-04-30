import axios from "axios";
const getNavItems = async () => {
  try {
    const res = await axios.get(`/api/navitems`);
    return res.data
  } catch (e) {
    console.log(e);
  }
};
export default getNavItems;
