import mock from "mockjs";
const baseUrl = "http://localhost:3000/";

mock.mock(`${baseUrl}list`, () => {
  const result = {
    code: 200,
    msg: "OK",
    data: ["111", "222", "333"],
  };
  return result;
});
