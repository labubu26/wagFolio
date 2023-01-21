const message = {
  vn: {
    msg1: `Vào một ngày hè tháng 7, một anh founder trẻ 9x có liên hệ
        với team product mình và đưa ý tưởng về nhu cầu làm một
        website thương mại điện tử về mảng kinh doanh và phân phối
        phụ tùng cơ giới.`,
    msg2: `Về mảng bán phụ tùng online này, bản thân mình chưa thấy
        nhìu trang hỗ trợ bán những sản phẩm đặc thù và dễ tìm kiếm
        cho thợ máy. Hiện tại ngoài thị trường vẫn vận hành theo
        cách là người dùng cần gì thì ra hẳn tiệm chuyên bán đồ nghề
        phụ tùng hỏi và mô tả sản phẩm mình cần cho người bán. Nhưng
        trường hợp những người thợ chưa lành nghề hay nhà mình có
        kho bãi có một chiếc xe nâng, chẳng may bị hư bánh xe nhỏ,
        thì việc có một trang mạng chuyên bán phụ tùng và phục vụ
        việc tìm kiếm dễ dàng cho họ chẳng phải rất tiết kiệm thời
        gian mà lại happy hơn nữa 😊
        <br /><br />
        Được gặp 1 khách hàng hiểu rõ với phân khúc khách hàng,
        customer insights cũng như chiến lược kinh doanh rõ ràng, đó
        là điều mà team mình cảm thấy may mắn suốt thời gian cộng
        tác với anh. Nhờ vậy, team đã tạo dựng information
        architecture đặc trưng riêng theo customers’ behaviours,
        cũng như hệ thống visualize nhận diện dành riêng cho phân
        khúc khách hàng là các anh thợ kỹ sư, lành nghề và cả những
        khách hàng mong muốn được tự sửa chữa những chi tiết nhỏ một
        cách nhanh chóng trong thời đại công nghệ 4.0 này.
        <br />`,
    msg3: `Một trong những khó khăn khi bước vào thiết kế flowchart cho
        tính năng chính yếu của sản phẩm này là Tìm kiếm, mục tiêu
        phải đảm bảo làm sao cho những người không phải là thợ lành
        nghề hay những người đọc tài liệu kỹ thuật cũng có thể tìm
        kiếm được đúng sản phẩm mà họ cần một cách nhanh chóng và
        thuận tiện nhất.
        <br />`,
    msg4: `Để xây một tính năng tìm kiếm theo tài liệu trực quan nhưng
        lại không quá phức tạp cho người dùng, team product đã
        reserch và thử nghiệm nhiều idea và đã quyết định theo hướng
        sau:
        <br /><br />
        Vì một tài liệu kỹ thuật có rất nhiều chi tiết kỹ thuật,
        nhưng không phải hệ thống lúc nào cũng hỗ trợ bán đầy đủ các
        loại đó, phải có cách để cho người admin cài đặt được, và
        chỉ ra được những phần (sản phẩm) mà hệ thống có cho người
        dùng thấy.
        <br /><br />
        Nếu chúng ta quen thuộc hay từng sử dụng những công cụ chỉnh
        sửa / ghi chú như paint tool (window), figma, AI,... thì
        những công cụ đó có thể cho phép ta vẽ, chỉnh sửa, tô màu
        những hình thù cơ bản như vuông, tròn hay thậm chí là
        pentool có thể giúp tuỳ ý tạo ra những vùng chọn mà mình
        muốn.
        <br /><br />
        Thì giải pháp ở đây của team mình là phát triển một tính
        năng tương tự cho người quản trị hệ thống có thể upload hình
        ảnh tài liệu chi tiết kỹ thuật lên và vẽ/khoanh vào những
        chi tiết kỹ thuật có sản phẩm mà hệ thống cung cấp, và gắn
        link những sản phẩm có sẵn trong hệ thống vào chi vùng chọn
        đó. Ở giao diện người dùng khi truy cập vào một tài liệu của
        bộ phận kỹ thuật nào, khi rê hoặc nhấn chọn vào vùng được
        highlight thì sẽ hiện những sản phẩm/ tài liệu theo vùng
        chọn đó.
        <br /><br />
        Những chi tiết kỹ thuật đều được phân cấp theo thứ thự cha con (cây thư mục). Để rõ hơn, ví dụ như hệ thống bán phụ tùng cho xe nâng,
        thì trước tiên cần tạo một tài liệu là “Xe nâng loại ACB”,
        sau đó tải hình ảnh tài liệu kỹ thuật về xe nâng đó lên hệ thống và mình có thể highlight vào những bộ phận có sản phẩm được bày bán trên sàn,
        chi tiết hơn nữa mỗi bộ phận của xe như: cầu lái, cầu trước, cầu phanh,.. đều có những chi tiết con.
        Thì khi đó, người quản trị cứ việc tạo thêm những hình ảnh chi tiết cho những bộ phận bên trong,
        đánh dấu và link với những sản phẩm đã được khai báo trong hệ thống.
        <br /><br />
        Như vậy, nếu người dùng là một thợ thông thường, không rành
        về chi tiết máy, thì hoàn toàn có thể lên hệ thống tìm kiếm
        và gõ tên loại xe nâng, rồi từ hình ảnh trực quan của tài
        liệu dẫn người dùng tới chi tiết mà họ đang tìm kiếm để mua,
        mà không mất quá nhiều thời gian so với những phương thức
        cũ.
        <br /><br />`,
    btnText: "View in English",
  },
  en: {
    msg1: `One summer day in July,
    a young 9x founder contacted our product team and gave an idea about the need to make an E-commerce website for the business and distribution of motorized parts.
    `,
    msg2: `Regarding this online parts sales, I myself have not seen many support pages selling specific and easy-to-find products for mechanics.
    Currently, in addition to the market still operates in the way that users need what the user needs,
    the shop specializes in selling spare parts and describes the product they need to the seller.
    But if the amateur workers or a man when their home has a warehouse with a forklift - unfortunately damaged small wheels,
    then having a website that sells spare parts and serves the search easy for them is not very time-saving but also happier ;)
    <br> <br>
    Meeting a customer who understands the customer segment,
    customer insights as well as a clear business strategy,
    is what my team feels fortunate during the time working with him.
    As a result, the team has built a unique information architecture according to customers' behaviors,
    as well as an identification visualization system specifically for the customer segment, which are engineers, skilled workers,
    and also customers who want to repair small details quickly in this era of technology 4.0.
    `,
    msg3: `One of the difficulties of entering the flowchart design for the main feature of this product is Product (parts) Search,
    the goal is to ensure that non-skilled workers or those who read technical documents can also find the right product they need quickly and conveniently.
    `,
    msg4: `To build a document-driven search feature that is intuitive but not too complicated for users,
    the product team has reserched and tested many ideas and decided in the following direction:
    <br> <br>
    • Since a technical document has a lot of technical details, but the system doesn't always support selling all of those types,
    there must be a way for the admin to install, and show what parts (products) the system has shown the user.
    <br> <br>
    • If we are familiar with or have ever used editing tools / notes such as paint tool (window), figma, AI,... These tools can allow us to draw,
    edit, color basic shapes such as square, round, or even pentool that can help us create the selections we want.
    <br> <br>
    • The solution here of our team is to develop a similar feature for the system administrator to upload detailed technical documents
    and draw/fold into the technical details of the product that the system provides and link the products available in the system to that select area.
    In the user interface when accessing a document of any technical department, when dribbling or clicking on the highlighted area,
    the products/documents by that selection will show the products/documents according to that selection.
    <br> <br>
    • The technical details are all decentralized by father-son (directory tree). To be clear, for example,
    the system of selling parts for forklifts, we first need to create a document called "ACB forklift",
    then upload the image of technical documents about that forklift to the system and I can highlight the parts with the product sold on the floor,
    more details of each part of the car such as: steering wheel, front bridge, brake bridge,.. They all have your details.
    At that time, the administrator just creates more detailed images for the internal parts,
    marking and linking to the products that have been declared in the system.
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
