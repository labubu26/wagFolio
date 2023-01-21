const message = {
  vn: {
    msg1: `Khách hàng là một Công ty kinh doanh bất động sản ở Hồ Chí
      Minh.<br />
      Sau khi chúng tôi hoàn thiện và đưa vào sử dụng phần mềm
      quản lý nhân sự cho công ty thì Khối Đầu tư có đưa nhu cầu
      về phần mềm Quản lý dự án cho Khối mình dùng, thay thế phần
      mềm quản lý dự án hiện tại.`,
    msg2: `Lý do phần lớn là nằm vào quy trình báo cáo cồng kềnh, tài
      liệu phân bổ khắp nơi, cứ mỗi lần báo cáo tổng quan là
      Trưởng dự án sẽ thu thập và tổng hợp các báo cáo của cấp
      dưới rồi gửi lên lại cho Giám đốc Khối. Và cứ như thế nhân
      lên với rất nhiều nhóm dự án khác nhau, báo cáo chồng chất,
      không thống nhất, dẫn đến sai sót, mà nếu có gặp vấn đề xảy
      ra ở gia đoạn dự án nào thì phải khi đến có báo cáo tổng thì
      người trưởng dự án mới nhận được thông báo nên sẽ không có
      giải pháp kịp thời.<br /><br />
      Mục tiêu của chúng tôi là để những người quản lý và cả nhóm
      dự án có chung một tầm nhìn về trạng thái, tiến độ, nguồn
      lực của dự án. Bên cạnh có yếu tố quan trọng không kém là
      import file làm việc ở phần mềm hiện tại khách đang dùng vào
      phần mềm mới, đòi hỏi giao diện không quá phức tạp như phần
      mềm cũ và đảm bảo được đủ những tính năng cho việc quản lý
      dự án.`,
    msg3: `Là thành viên UX duy nhất của nhóm vào thời điểm khởi đầu,
      tôi chịu trách nhiệm thiết kế và thử nghiệm toàn bộ trải
      nghiệm, từ ý tưởng, tương tác, thiết kế trực quan và sản
      phẩm cuối cùng.<br />
      <br />
      • Giao diện Gantt - Quản lý tiến độ về bản chất có khá nhiều
      thông tin để hiển thị, nhưng không phải lúc nào cũng cần để
      ngoài UI chính, nên việc quyết định hiển thị và ẩn những cột
      dữ liệu và sắp xếp các công cụ là thử thách.
      <br />
      • Bên cạnh việc quản lý tiến độ làm việc, ứng dụng cần đáp
      ứng được việc xem tiến độ thanh toán (ứng với từng công việc
      - nếu có).
      <br />
      • Thời gian để hoàn thành dự án khá chặt, với nhu cầu cấp
      thiết, khách hàng muốn được trải nghiệm sau mỗi tính năng
      được hoàn thiện 80-90%.
      <br />
      • Việc thể hiện UI UX cần được rõ ràng, trực quan, lược bỏ
      những thao tác rườm ra khi nhân viên nhận việc và cập nhật
      tiến độ.
      <br />`,
    msg4: `• Giao diện Gantt - Lúc đầu team mình dự sẽ không vẽ lại UI
      gantt thể hiện tất cả công việc, vì bên development đã tận
      dụng được một open source hỗ trợ việc thể hiện gantt khá
      mượt nên mình tập trung xây dựng phần khung xương design
      system cho toàn bộ thiết kế cũng như thu thập các yêu cầu về
      tính năng và phỏng vấn người dùng về những bất cập/thuận lợi
      trong khi sài phần mềm hiện tại.
      <br /><br />
      - Nhưng sau sprint đầu release phần gantt thì team mình đã
      quyết định đầu tư tối ưu cho giao diện Gantt này:
      <br />
      + Về không gian, team đã loại bỏ hết những phần không cần
      thiết ở page này như: footer, title, giảm margin và padding,
      hỗ trợ xem full màn hình.
      <br />
      + Vì vừa muốn mục đích xem tổng quan nhưng vẫn có thể chọn
      một công việc nào đó để xem chi tiết nên team đã chọn phương
      án xem nhanh công việc bằng panel phía bên phải đi vào,
      scale gantt lại.
      <br /><br />
      • Từ việc thử nghiệm ý tưởng, team mình cũng học được cách
      có thể cải thiện thiết kế ban đầu của mình. Nhờ sau mỗi lần
      hoàn thiện tính năng và có sự phản hồi nhanh chóng của các
      anh chị nhân viên bên khách hàng, team mình đã cải thiện
      được nhiều thứ như cử chỉ và làm cho các tương tác trở nên
      đơn giản và tự nhiên hơn, như việc tự động cập nhật trạng
      thái công việc “Hoàn thành” khi nhân viên kéo thanh tiến độ
      lên 100%.
      <br />
      • Tiến độ thanh toán: ý tưởng ban đầu thì team mình dự định
      sẽ làm phần này tách riêng so với tiến độ công việc, ưu điểm
      của việc tách này có thể dễ dàng cho technical xử lý, nhưng
      lại có vẻ khó dùng cho người dùng khi phải chuyển qua lại 2
      page, về tính chất có thể khác nhau nhưng tiến độ thanh toán
      đôi lúc sẽ liên quan đến một nhóm công việc. Cùng lúc đó
      team development báo đã hoàn toàn tự chủ được gantt open
      source nên team đã quyết định gộp chung cả Tiến độ công việc
      và Tiến độ thanh toán (Hợp đồng) vào chung một view Gantt,
      dĩ nhiên để người dùng không quá rối thì mặc định gantt chỉ
      hiện những công việc và có chỗ bật tắt để xem cả hợp đồng.
      😉
      <br /><br />
      💡 Giải pháp về UIUX thường đơn giản và dễ làm, nhưng để tìm
      ra được giải pháp vốn dĩ đơn giản đó, đòi hỏi người làm sản
      phẩm phải biết đặt mình vào vị trí người khác, và có sự tinh
      tế nhạy bén, sâu sắc. Sự thấu cảm là điều mà bài học nào về
      UX cũng nói ra rả, nhưng để áp dụng vào sản phẩm thì chỉ có
      customers và users thực sự dạy cho chúng ta. Hơn hết, người
      làm sản phẩm là người phải có chất liệu cuộc sống.
      <br> <br>`,
    btnText: "View in English",
  },
  en: {
    msg1: `The client is a Real Estate company in Ho Chi Minh City.
    After we complete and put into use Human Resources Management (HRM) software for the company, the Investment Department has put the need for Project Management software for our Department to use, replacing the current project management software.
    `,
    msg2: ` The reason is largely in the cumbersome reporting process, documents are distributed everywhere.
    When the overview report is coming, the Project Leader will collect and synthesize the reports of subordinates and then send them back to the Director.
    And so on multiplying with many different project groups, the report is piled up, inconsistent, leading to errors, if there is a problem occurring at any project stage,
    it must be when the total report is presented that the project leader will receive a notification so there will be no timely solutions.
    <br> <br>
    Our goal is for the managers and the whole project team could have on the same page regarding the state, progress, and resources of the project. Besides,
    there is an equally important factor in the import file working in the current software the client is using into the new software,
    which requires the interface is not too complicated as the old software and ensures enough features for project management.
    `,
    msg3: `As the only UX member of the team at the beginning, I was responsible for designing and testing the entire experience,
    from concept, interaction, visual design, and final product.
    <br> <br>
    • The Gantt - Progress Manager UI in essence has quite a lot of information to display, but it is not always necessary to leave outside the main UI,
    so deciding to display and hide data columns and organize tools is challenging.
    <br>
    • In addition to managing the progress of work, the application needs to meet the view of payment progress (corresponding to each job - if any).
    <br>
    • The time to complete the project is quite tight, with urgent needs, customers want to experience after each feature is completed 80-90%.
    <br>
    •The UI UX expression needs to be clear, intuitive,
    remove the cumbersome operations when employees take the job and update the progress.
    <br> <br>
    `,
    msg4: `• Gantt Interface - At first my team planned not to redraw gantt UI that shows all the work,
    because the Development team has taken advantage of an open source that supports gantt's performance quite smoothly,
    so I focus on building the design system skeleton for the entire design as well as collecting features requirements
    and interviewing users about inadequacies/advantages. While the current software.
    <br> <br>
      - But after the first sprint released the gantt part, my team decided to invest optimally in this Gantt interface:
      <br>
        + About space, the team has removed all unnecessary parts on this page such as: footer, title,
        reduced margin and padding, support full screen viewing.
      <br>
        +Because we just want to see the overview but can still choose a certain job to see the details,
        the team chose the option to quickly view the work by entering the right panel, scale the gantt to the left.
      <br><br>
      From experimenting with ideas, our team also learned how we could improve our original design.
      Thanks to each feature improvement and quick feedback from the customer's staff, our team has improved many things like gestures and made interactions simpler and more natural,
      such as automatically updating the job status "Completed" when the employee pulls the progress bar to 100%.
      <br> <br>
      Payment Progress: the initial idea that my team intends to do this part separate from the Working Progress,
      the advantages of this separation can be easy for technical processing, but it seems difficult for users to switch back and forth 2 pages,
      in nature may be different but the payment schedule will sometimes involve a group of jobs. At the same time,
      the development team reported that gantt open source was completely autonomous,
      so the team decided to combine both Work Progress and Payment Progress (Contract) into the same Gantt view, of course so that users are not too confused,
      by default gantt only shows the work and has room to turn on and off to see the whole contract. 😉
      <br> <br>
      💡UIUX solutions are often simple and easy to do, but to find that inherently simple solution,
      it requires product makers to know how to put themselves in other people's shoes, and have a sharp, profound flair.
      Empathy is something that every UX lesson says, but to apply it to products, only customers and users really teach us.
      Above all, the person who makes the product is the person who must have the material of life.
      <br><br>
    `,
    btnText: "View in Vietnamese",
  },
};

let showEnglishParagraph1 = true;
let showEnglishParagraph2 = true;
let showEnglishParagraph3 = true;

function switchTextParagraph1() {
  document.getElementById("msg1").innerHTML = showEnglishParagraph1
    ? message.en.msg1
    : message.vn.msg1;
  document.getElementById("msg2").innerHTML = showEnglishParagraph1
    ? message.en.msg2
    : message.vn.msg2;
  document.getElementById("btn1").innerHTML = showEnglishParagraph1
    ? message.en.btnText
    : message.vn.btnText;
}

function switchTextParagraph2() {
  document.getElementById("msg3").innerHTML = showEnglishParagraph2
    ? message.en.msg3
    : message.vn.msg3;
  document.getElementById("btn2").innerHTML = showEnglishParagraph2
    ? message.en.btnText
    : message.vn.btnText;
}

function switchTextParagraph3() {
  document.getElementById("msg4").innerHTML = showEnglishParagraph3
    ? message.en.msg4
    : message.vn.msg4;
  document.getElementById("btn3").innerHTML = showEnglishParagraph3
    ? message.en.btnText
    : message.vn.btnText;
}

switchTextParagraph1();
switchTextParagraph2();
switchTextParagraph3();

function onClickSwitchTextParagraph1() {
  showEnglishParagraph1 = !showEnglishParagraph1;
  switchTextParagraph1();
}

function onClickSwitchTextParagraph2() {
  showEnglishParagraph2 = !showEnglishParagraph2;
  switchTextParagraph2();
}

function onClickSwitchTextParagraph3() {
  showEnglishParagraph3 = !showEnglishParagraph3;
  switchTextParagraph3();
}
