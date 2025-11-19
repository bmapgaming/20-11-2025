const text ="Kính gửi quý thầy cô.Em là Nguyễn Đoàn Gia Bảo, học sinh lớp 12A1, Trường THPT Chu Văn An A. Nhân ngày Nhà giáo Việt Nam 20/11, em xin kính chúc quý thầy cô một ngày lễ thật vui vẻ, ấm áp và trọn vẹn bên những người thân yêu và học trò.Trên hành trình đèn sách kéo dài hơn một thập kỷ, em vô cùng biết ơn sự tận tâm nâng đỡ, truyền thụ kho tàng kiến thức của thầy cô. Thầy cô chính là những ngọn hải đăng đã soi sáng, dẫn đường để chúng em có thể vững vàng bước đi đến ngày hôm nay.Mười hai năm trôi qua thật nhanh. Em vẫn còn nguyên vẹn những kỷ niệm về những ngày thầy cô miệt mài đồng hành, kiên nhẫn kèm cặp và chỉ dẫn chúng em từng câu chữ, từng dạng bài tập phức tạp. Mới đó thôi mà chúng em – những học sinh cuối cấp, sắp phải tạm biệt mái trường thân thương này, tạm chia xa thầy cô để mở cánh cửa bước vào những chân trời mới – nơi khát vọng và hoài bão đang chờ đợi.Những ký ức ấy sẽ mãi là vết son rực rỡ trong quãng đời học trò, là kim chỉ nam để chúng em tiếp tục vững bước trên con đường tương lai.Em xin gửi lời cảm ơn sâu sắc nhất đến các thầy, các cô – những người lái đò vĩ đại với đôi tay in hằn bụi phấn và cả những lo toan. Thầy cô đã, đang và sẽ luôn nỗ lực chèo lái để đưa chúng em đến bến bờ tri thức – nơi chúng em sẽ được chạm gần hơn đến những ước mơ và đam mê của chính mình.Em xin chân thành cảm ơn!";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

