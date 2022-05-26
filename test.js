const FS = FileStream;
const 없 = " 없음^^";
let 요일 = ["월 :", "화 :", "수 :", "목 :", "금 :"];
let 수행 = "";
function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (msg == "!수행평가추가") {
    var path = "sdcard/test/" + room + ".txt";
    if (!FileStream.read(path)) FileStream.write(path, "{}");
  }

  msg = msg.replace(/ /g, "");
  if (msg.startsWith(".추가") || msg.startsWith(".삭제")) {
    if (msg.split(".").length != 4) return;
    let 변경요일 = msg.split(".")[2];
    let 변경과목 = msg.split(".")[3];
    if (변경요일.indexOf("요일") != -1) {
      변경요일 = 변경요일.replace("요일", "");
    }
    if (변경요일.length != 1 || 변경과목.length != 2) return;
    if (msg.startsWith(".추가")) {
      for (i = 0; i < 5; i++) {
        if (
          요일[i].startsWith(변경요일) &&
          변경과목.length == 2 &&
          FS.read(path + 요일[i]).indexOf(변경과목) == -1
        ) {
          FS.append(path + 요일[i], " " + 변경과목);
          replier.reply(
            요일[i].split(" ")[0] + "요일에 " + 변경과목 + "이(가) 추가된 것"
          );
        }
      }
    }
    if (msg.startsWith(".삭제")) {
      for (i = 0; i < 5; i++) {
        if (
          요일[i].startsWith(변경요일) &&
          FS.read(path + 요일[i]).indexOf(변경과목) != -1
        ) {
          FS.write(
            path + 요일[i],
            FS.read(path + 요일[i]).replace(" " + 변경과목, "")
          );
          replier.reply(
            요일[i].split(" ")[0] + "요일에 " + 변경과목 + "이(가) 삭제된 것"
          );
        }
      }
    }
  }
  if (msg == "반응할 명령어") {
    for (i = 0; i < 5; i++) {
      if (
        FS.read(path + 요일[i]) == null ||
        FS.read(path + 요일[i]) == 요일[i]
      ) {
        수행 = 수행 + 요일[i] + 없 + "\n";
      } else {
        수행 = 수행 + FS.read(path + 요일[i]) + "\n";
      }
    }
    replier.reply(수행 + "오우;;;");
    수행 = "";
  }
  if (msg == ".초기화") {
    for (i = 0; i < 5; i++) {
      FS.write(path + 요일[i], 요일[i]);
    }
    replier.reply("펑");
  }
}
