const mongoose = require("mongoose"); //import thu vien
const sinhvienSchema = new mongoose.Schema({
  id: {
    //ten truong du lieu
    type: String, //kieu du lieu
    required: true, //bat buoc phai nhap
  },
  name: {
    type: String,
    required: true,
  },
});
const sinhvien = mongoose.model("student", sinhvienSchema); //tao model
module.exports = sinhvien; //export module sinh vien
