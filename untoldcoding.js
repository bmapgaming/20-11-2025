const text =
  "Kính gửi quý thầy cô. Em là Nguyễn Đoàn Gia Bảo, hiện đang là học sinh lớp 12A1 Trường THPT Chu Văn An A. Nhân ngày 20/11 em xin chúc thầy cô có một ngày Nhà giáo Việt Nam thật vui vẻ và trọn vẹn ạ. Trên hành trình đèn sách dài hơn 1 thập kỉ, em rất biết ơn thầy cô vì đã hết sức nâng đỡ, truyền thụ kiến thức cho em và là người soi sáng, dẫn đường cho em đi đến ngày hôm nay.12 năm thế mà trôi qua nhanh thật ạ.Em vẫn nhớ những ngày mà thầy cô đã đồng hành để kèm cặp và chỉ em từng câu, từng dạng bài tập khó. Mới đó thôi mà chúng em, những học sinh cuối cấp đã sắp phải xa trường, chia tay thầy cô để đến với những vùng đất mới - vùng đất của hy vọng và ước mơ. Những ký ức ấy sẽ luôn là vết son của tuổi học trò, là kim chỉ nam để em tiếp tục vững bước trên con đường tương lai. Em rất cảm ơn sự giúp đỡ của các thầy, các cô - những người lái đò tay in hằn bụi phấn đã, đang và sẽ luôn nỗ lực để đưa chúng em đến với bến bờ của con chữ - nơi mà chúng em sẽ được đến gần hơn với những ước mơ, những đam mê của chính mình. Em xin chân thành cảm ơn ạ!";

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
