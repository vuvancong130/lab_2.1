//b1: import du lieu
const express = require("express"); //thu vien tao server
const mongoose = require("mongoose"); //thu vien ket noi csdl
const newLocal = "./sinhvienModel";
const sinhvien = require(newLocal); //import module sinh vien
//b2: tao doi tuong server
const app = express();
app.set("view engine", "ejs");
//b3: ket noi voi csdl
mongoose
  .connect("mongodb://localhost:27017/AND103", {
    useNewUrlParser: true, //cho phep phan tich cu phap url
    useUnifiedTopology: true, //xac minh ket noi voi csdl
  })
  .then(() => {
    //ket qua tra ve sau khi ket noi csdl
    console.log("ket noi thanh cong voi Mongodb");
  })
  .catch((err) => {
    //truong hop loi thi in ra loi
    console.error(err);
  });
//b4:dinh nghia request
//khi ung dung android doc dulieu theo duong dan http://localhost:3000/sinhvien
//thi phai tra ve file json
app.get("/sinhvien", async (req, res) => {
  //su dung phuong thuc GET du lieu voi duong dan /sinhvien
  //thuc hien lay du lieu tu database
  try {
    const sinhviens = await sinhvien.find(); //doc du lieu tu csdl: select * from sinhvien
    // res.json(sinhviens); //tra ve ket qua bang file json
    res.render("students", { sinhviens: sinhviens });
    console.log(sinhviens); //in ra ket qua trong man hinh console
  } catch (err) {
    console.error(err);
  }
});
//b5- khoi dong server
const PORT = process.env.PORT || 3000; //su dung cong 3000 cho ung dung
app.listen(PORT, () => {
  //khoi dong server
  console.log("Server dang chay o cong 3000");
});
