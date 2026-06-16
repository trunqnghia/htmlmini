// Đảm bảo mã nguồn JavaScript chỉ thực thi khi cây DOM đã được tải hoàn chỉnh
document.addEventListener("DOMContentLoaded", () => {
  console.log("⚡ [Hệ thống] Hệ thống HTML Head Checklist đã sẵn sàng hoạt động!");

  // Lấy tất cả các thẻ card có khả năng tương tác kiểm tra trạng thái
  const checklistCards = document.querySelectorAll(".checklist-card");

  // Đăng ký sự kiện click cho từng thẻ card để người dùng đánh dấu hoàn thành bài học
  checklistCards.forEach(card => {
    card.addEventListener("click", () => {
      // Bật/tắt class 'completed' để đổi màu sắc giao diện tương ứng
      card.classList.toggle("completed");
      
      const cardTitle = card.querySelector("h3").innerText;
      const isDone = card.classList.contains("completed");

      if (isDone) {
        console.log(`✅ Đã hoàn thành học phần cấu hình: ${cardTitle}`);
      } else {
        console.log(`🔄 Đã hoàn tác học phần cấu hình: ${cardTitle}`);
      }
    });
  });
});
