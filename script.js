const btn = document.querySelector(".btn")
const coupon = document.querySelector(".getcoupon")

btn.addEventListener("click", (e) => { //แอดการดักจับอีเว้น
    coupon.select()  //เมื่อเราทำการทำการกดคัดลอกมันจะเลือกข้อความ
    coupon.setSelectionRange(0, 999) //เป็นการเลือกช่วงของข้อมูลที่เราจะ copy
    navigator.clipboard.writeText(coupon.value) //เป็นการนำข้อความ copy ไปที่ คีย์บอร์ด
    btn.textContent = "คัดลอกแล้ว" //เปลี่ยนเนื้อหา
    setTimeout(() => {
        btn.textContent = "คัดลอก" //ดีเลย์เวลา 3 วินาที
    }, 3000);
})