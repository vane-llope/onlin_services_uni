import { createStore } from 'vuex'

export default createStore({
  state: {
    services: [
      { id: 1, name: "melicode",pname:"صحت کد ملی", img: "identity.png" },
      { id: 2, name: "wordCounter",pname:"شمارش کلمات", img: "typo.png" },
      { id: 3, name: "date",pname:"نمایش تاریخ", img: "Calendar.png" },
      { id: 4, name: "bankcalculation",pname:"محاسبه ی افزایش یا کاهش درصد حقوق،  ", img: "perspective.png" },
      { id: 5, name: "passwordGenerator",pname:"تولید پسورد تصادفی", img: "lock.png" },
      { id: 6, name: "numToLetter",pname:"تبدیل عدد به حروف", img: "NL.png" },
      { id: 7, name: "numberShifting",pname:"تبدیل اعدادانگلیسی و فارسی", img: "EtP.png" },
      { id: 8, name: "MBI",pname:"شاخص توده ی بدنی (MBI)", img: "wight.png" },
      { id: 9, name: "BMR",pname:"محاسبه آنلاین کالری مورد نیاز روزانه بدن (BMR)", img: "BMR.png" },
      { id: 10, name: "rial",pname:"تبدیل به ریال و تومان", img: "rial.png" },
    ],

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
