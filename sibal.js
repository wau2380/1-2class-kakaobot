function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (msg == "!회원가입") {
    var player = { name: sender, lvl: 0, exp: 0, maxexp: 100 }; //여기 아주 귀여운 객체가 있네요.
    //이 객체를 한번 json형식으로 저장해 볼겁니다.
    var finalplayer = JSON.stringify(player); //이제 json형식으로 저장할 준비가 다 되었습니다!!!
    FileStream.write("/sdcard/" + sender + ".json", finalplayer); //이러면 json형식으로 저장한 것이 됩니다. 전 파일 이름을 보낸 사람으로 했어요. 이제 읽어올까요?
  }
  if (msg == "!내정보") {
    var me = JSON.parse(FileStream.read("/sdcard/" + sender + ".json")); //json파일을 불러왔어요. 내정보를 표시해 봅시다. 이 json은 객체이니 객체불러오듯이 쓰면 되요.(저의 강좌인 객체 참고)
    replier.reply(
      "이름 : " +
        me.name +
        "\n레벨 : " +
        me.lvl +
        "\n경험치 (" +
        me.exp +
        "/" +
        me.maxexp +
        ")"
    ); //이렇게 내정보를 불러오시면 됩니다.
  }
}
