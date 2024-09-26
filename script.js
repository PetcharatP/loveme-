document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.querySelector(".yes-btn");
    const noButton = document.querySelector(".no-btn");
  
    // เมื่อคลิกปุ่ม "Yes" จะปรากฏข้อความ
    yesButton.addEventListener("click", () => {
      alert("I Love you too");
    });
  
    // เมื่อคลิกปุ่ม "No" จะขยับปุ่มไปเรื่อยๆ ในตำแหน่งใหม่แบบสุ่ม
    noButton.addEventListener("click", () => {
      const wrapper = document.querySelector(".wrapper");
      const wrapperWidth = wrapper.offsetWidth;
      const wrapperHeight = wrapper.offsetHeight;
  
      // คำนวณตำแหน่งใหม่ของปุ่ม "No"
      const randomX = Math.floor(Math.random() * (wrapperWidth - noButton.offsetWidth));
      const randomY = Math.floor(Math.random() * (wrapperHeight - noButton.offsetHeight));
  
      // ตั้งค่าตำแหน่งใหม่ให้ปุ่ม "No"
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    });
  });
  