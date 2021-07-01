import request from "utils/request";

class HomeApi {
  async getList() {
    const res = await request.get("list");
    return res;
  }
}

export default new HomeApi();
