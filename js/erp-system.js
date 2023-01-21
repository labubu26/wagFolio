const message = {
  vn: {
    msg1: `Trước khi xây dựng một dự án Product in-house về phần mềm
        quản trị nguồn lực doanh nghiệp (ERP), team mình đã có kinh
        nghiệm trước đó build from scratch (xây dựng từ đầu) cho một
        khách hàng kinh doan bất động sản một phần mềm ERP bao gồm
        (Intranet, CRM, HRM, Quy trình động, Quản lý việc, và những
        dự án vệ tinh khác). Từ đó, Team product đã cùng PMs, POs
        xây dựng lại ý tưởng và product road map cho một sản phẩm
        ERP độc lập và có danh sách thứ tự ưu tiên cho từng tháng
        cần thực hiện. Việc làm này giúp sản phẩm có thể thích ứng
        phù hợp theo tình hình kinh doanh / nguồn lực, cũng như vẫn
        đáp ứng tối thiểu các outcome đề ra ban đầu.
        <br /><br />`,
    msg2: `Ở case study này mình sẽ chia sẻ về một trong những bài học
        và kết quả team mình đạt được trong giai đoạn đầu xây dựng
        hệ thống quản trị nhân sự (HRM).
        <br />`,
    msg3: `Trong quá trình xây dựng hệ thống HRM, team mình đã làm
        phỏng vấn người dùng và chia thành nhiều đợt, cho từng tính
        năng và cũng tham khảo nhiều phần mềm hiện có, phân tích
        những paintpoint, touchpoint khi người dùng thao tác và trải
        nghiệm trên đó.
        <br />
        Từ đó, đưa ra được những giải pháp về công nghệ cũng như
        trải nghiệm cho người dùng khi sử dụng tính năng đó.
        <br /><br />
        Thêm vào đó, cũng không ít lần team đối mặt với những lựa
        chọn giữa Technical, Business và Design.
        <br />`,
    msg4: `Trong quá trình triển khai thiết kế, đã có nhiều issue xảy
        ra và bị conflicts (xung đột) với công nghệ (technical
        side). Team đã ngồi lại và nhiều lần đong đếm nên theo hướng
        nào mà phù hợp cho phía kỹ thuật mà không ảnh hưởng quá
        nhiều đến user, và việc đánh đổi những khía cạnh đó, mà kết
        quả là team đã cho ra được một sản phẩm Bảng tính lương nhân
        viên một cách rất “cool”, thật sự sản phẩm khi đến tay người
        sử dụng, họ đã say “oh, wao” - việc tính lương hằng tháng
        diễn ra hoàn toàn trên phần mềm, nhanh hơn và trực quan hơn
        rất nhiều so với việc sử dụng excel và tổng hợp từ nhiều
        nguồn mới ra được bảng lương chính.
        <br />`,
    btnText: "View in English",
  },
  en: {
    msg1: `Before building a Product in-house project about Enterprise Resource Management software (ERP),
     our team had previous experience building from scratch for a real estate client - an ERP software included (Intranet, CRM, HRM, Dynamic Processes, Task Management, and other satellite projects).
     Since then, Team product has worked with PMs, POs to rebuild the idea and product road map for an independent ERP product and have a priority list for each month to be implemented.
     This helps the product to be able to adapt appropriately according to the business situation / resource, as well as still meet the initial outcomes.
     <br><br>
    `,
    msg2: `In this case study, I will share about one of the lessons and results my team achieved in the first phase of building a Human Resource Management system (HRM).
    <br>
    `,
    msg3: `In the process of building the HRM system, my team has interviewed users and divided into several times,
    for each feature and also refer to many existing software, analyzing paintpoints, touchpoints when users manipulate and experience on it.
    <br> <br>
    From there, come up with solutions about technology as well as experience for users when using that feature.
    <br> <br>
    In addition, many times the team faced the choice between technical, business and design.
    <br> <br>
    `,

    msg4: `In the process of implementing the design, there have been many issues that have occurred and are conflicted with the technical side.
    The team has sat down and repeatedly measured which direction is suitable for the technical side without affecting the user too much,
    and in the trade-off of those aspects, which resulted in the team having produced a product of the employee payroll in a very "cool" way.
    <br> <br>
    In fact, when the product reaches the user, they have drunk "oh, wao" - the monthly payroll takes place entirely on the software,
    much faster and more intuitive than using excel and synthesizing from many new sources to the main payroll.
    <br> <br>
    `,
    btnText: "Xem Tiếng Việt",
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
