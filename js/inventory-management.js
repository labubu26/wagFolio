const message = {
  vn: {
    msg1: `Khách hàng hiện đã có nhiều năm kinh nghiệm trong việc kinh
        doanh cho thuê/giữ hàng trong kho lạnh, nhưng suốt thời gian
        đó việc lưu trữ nhập/xuất chỉ dùng những giấy tờ hoàn toàn
        truyền thống và chưa sử dụng những phần mềm quản lý kho lạnh
        chuyên dụng nào, nên anh đã tìm đến công ty và với nhu cầu
        muốn xây dựng một hệ thống phần mềm quản lý kho lạnh cho
        riêng mình và tiến sau đó có thể phát triển tiếp/liên kết
        với phần mềm bán hàng, quản lý công nợ.
        <br />`,
    msg2: `Khó khăn lớn nhất của dự án này có lẽ là về timeline khá
        chặt, khi bên khách hàng họ bắt đầu xây dựng kho bãi từ
        trước đó và dần đến ngày hoàn thiện. Nên sản phẩm cần phải
        được ready sớm cho đội ngũ nhân viên đi vào triển khai hoạt
        động sớm nhất có thể.
        <br /><br />
        Cho phép chủ kho cấu hình hệ thống kho bãi như thiết kế 2D
        trực quan sinh động. Cho phép khách hàng biết rõ tình trạng
        xuất nhập tồn của mình. Hỗ trợ đa nền tảng mobile, web. Mở
        rộng kết nối với các modules khác như Quản Lý Bán Hàng, Quản
        Lý Công Nợ.
        <br />`,
    msg3: `Về việc cho phép chủ kho cấu hình hệ thống kho bãi như thiết
        kế 2D trực quan sinh động, team product mình đã nghĩ ngay
        tới việc sử dụng công nghệ cho phép user có thể vẽ, tạo hình
        thể hiện những khu vực kho, bãi được sử dụng. Từ đó, nhân
        viên có thể cập nhật trực tiếp trên màn hình sơ đồ kho để
        đồng bộ /cập nhật tình trạng kho chứa để cho cả hệ thống
        cùng có cái nhìn trực quan trong thời gian thực và chủ kho
        có thể xem được báo cáo tổng quan kho hàng bất cứ lúc nào.
        <br /><br />
        Giao diện trực quan, hỗ trợ cảnh báo ngưỡng lưu kho an toàn
        theo từng sản phẩm. Hỗ trợ nhiều loại tìm kiếm, xuất báo cáo
        đa dạng. Cung cấp thông tin một cách tức thời về tình hình
        hàng hóa hiện tại trong kho theo thời gian thực.
        <br />`,
    btnText: "View in English",
  },
  en: {
    msg1: `The client has many years of experience in the rental/storage business in cold storage,
    but during that time the import/export storage uses only completely traditional documents
    and does not use any specialized cold storage management software, so he has come to the company and with the
    need to build a warehouse management software system.
    Cold for yourself and move forward can then develop/link to sales software, debt management.
    `,
    msg2: `The biggest challenge of this project is probably about the timeline quite tight,
    when the customer side they started building warehouses before and gradually to the completion date.
    Therefore, the product needs to be ready soon for the staff to go into operation as soon as possible.
    <br> <br>
    Allows warehouse owners to configure the warehouse system as a vivid visual 2D design.
    Allow customers to know their import and export status clearly.
    Support cross-platform mobile, web.
    Expand connection with other modules such as Sales Management, Debt Management.
    `,
    msg3: `In terms of allowing warehouse owners to configure warehousing systems such as vivid visual 2D design,
    my team product immediately thought about using technology that allows users to draw and shape the warehouse areas used.
    From there, employees can update directly on the warehouse diagram screen to sync /update the status of the warehouse
    so that the whole system has a visual view in real time and the warehouse owner can see the inventory overview report at any time.
    <br> <br>
    Intuitive interface, supports warning of safe storage thresholds according to each product. Supports a variety of searches and reports.
    Provide immediate information about the current situation of goods in warehouses in real time.
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
  document.getElementById("btn1").innerHTML = showEnglishParagraph1
    ? message.en.btnText
    : message.vn.btnText;
}

function switchTextParagraph2() {
  document.getElementById("msg2").innerHTML = showEnglishParagraph2
    ? message.en.msg2
    : message.vn.msg2;
  document.getElementById("btn2").innerHTML = showEnglishParagraph2
    ? message.en.btnText
    : message.vn.btnText;
}

function switchTextParagraph3() {
  document.getElementById("msg3").innerHTML = showEnglishParagraph3
    ? message.en.msg3
    : message.vn.msg3;
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
