headers = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
};

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  time = [
    ["자율", "통사4", "영어2", "음악", "국어4", "수학", "과탐3"],
    ["한국1", "수학", "체육1", "영어1", "통과1", "통사1", "기가"],
    ["국어1", "수학1", "음악", "영어2", "진로", "동아리", "자율"],
    ["기가", "국어4", "영어1", "통과3", "통과2", "한국1", "통사3"],
    ["국어4", "체육1", "한국1", "수학", "진직", "통과4", "통사2"],
  ];
  day = ["월 ", "화 ", "수 ", "목 ", "금 "];
  try {
    if (msg == "/시험") {
      replier.reply("시험기간은 4/28 ~ 5/3, 범위는 추후 안내");
    }
    if (msg == "/국어") {
      replier.reply(
        "국어1 줌 아이디는 391 099 8995 입니다. \n\n 국어4 줌 아이디는 206 961 9968 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/영어") {
      replier.reply(
        "영어1 줌 아이디는 926 409 6672 입니다. \n\n 영어2 줌 아이디는 665 909 1304 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/수학") {
      replier.reply(
        "수학 줌 아이디는 653 235 1858 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/한국사") {
      replier.reply(
        "한국사 줌 아이디는 975 896 1004 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/통합사회") {
      replier.reply(
        "통사1 줌 아이디는 402 822 9128 입니다. \n\n 통사2 줌 아이디는 227 806 7996 입니다. \n\n 통사3 줌 아이디는 743 437 4739 입니다. \n\n 통사4 줌 아이디는 810 476 1685 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/통합과학") {
      replier.reply(
        "통과1 줌 아이디는 741 396 2064 입니다. \n\n 통과2 줌 아이디는 903 671 6015 입니다.(담임쌤) \n\n 통과3 줌 아이디는 380 813 8540 입니다. \n\n 통과4 줌 아이디는 881 232 3355 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/과탐") {
      replier.reply(
        "과탐 줌 아이디는 631 751 9927 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/음악") {
      replier.reply(
        "음악 줌 아이디는 757 275 0086 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/체육") {
      replier.reply(
        "체육 줌 아이디는 696 676 4316 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/기가") {
      replier.reply(
        "기가 줌 아이디는 511 562 1206 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/진직") {
      replier.reply(
        "진직 줌 아이디는 277 216 2855 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다."
      );
    }
    if (msg == "/창체") {
      replier.reply(
        "창체 줌 아이디는 903 671 6015 입니다. \n\n 비밀번호는 모두 동일하게 220301 입니다. \n (담임쌤) 줌이 없는 경우 담임교사가 별도공지"
      );
    }

    if (msg == "/시간표") {
      for (let i = 0; i < 5; i++) {
        replier.reply(day[i] + time[i]);
      }
    }
    if (msg == "/공지사항") {
      let notice1 = Utils.getWebText(
        "https://duru.sjeduhs.kr/cop/bbs/selectBoardList.do?bbsId=BBSMSTR_000000007621&menuId=MNU_0000000000013304&sso=ok"
      )
        .split("<tbody>")[1]
        .split('<td class="tit">')[1]
        .replace(/(<([^>]+)>)/g, "")
        .replace(/[\n\s]{2,}/g, "\n");

      replier.reply(notice1);
    }
    if (msg == "/급식") {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate() + 1;
      month += 1;
      month = String(month);
      date = String(date);

      if (month.length == 1) {
        month = "0" + month;
      }
      if (date.length == 1) {
        date = "0" + date;
      }
      let total = year + month + date;
      let result = Utils.getWebText(
        "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=4233b93265aa4c9ebdb908ae668dc818&Type=json&plndex=1&pSize=30&ATPT_OFCDC_SC_CODE=I10&SD_SCHUL_CODE=9300177&MLSV_YMD=" +
          total,
        false,
        false
      )
        .split("<body>")[1]
        .split("</body>")[0];
      try {
        calories = result.split('CAL_INFO":"')[1].split('","NTR_INFO')[0];
        result = result
          .split('","ORPLC')[0]
          .split('"DDISH_NM":"')[1]
          .replace(/(<([^>]+)>)/g, "");
        result = result.replace(/amp;/gi, "");
        result = result.replace(/undefined/gi, "");
        result = result.replace(/\./gi, "");
        result = result.replace(/\*/gi, "");

        result = result.trim();
        result = result.replace(/^ +/gm, "");

        result = result.replace(/[0-9]/g, "");
      } catch (e) {
        replier.reply("급식 정보가 없습니다.");
      }

      result += "\n";
      result += "총 ";
      result += calories;
      replier.reply(result);
    }
    if (msg == "/내일 급식") {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate() + 1;
      date += 1; //이건 오늘 일욜이라서 그래요
      month += 1;
      month = String(month);
      date = String(date);

      if (month.length == 1) {
        month = "0" + month;
      }
      if (date.length == 1) {
        date = "0" + date;
      }
      let total = year + month + date;
      let result = Utils.getWebText(
        "https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=4233b93265aa4c9ebdb908ae668dc818&Type=json&plndex=1&pSize=30&ATPT_OFCDC_SC_CODE=I10&SD_SCHUL_CODE=9300177&MLSV_YMD=" +
          total,
        false,
        false
      )
        .split("<body>")[1]
        .split("</body>")[0];
      try {
        calories = result.split('CAL_INFO":"')[1].split('","NTR_INFO')[0];
        result = result
          .split('","ORPLC')[0]
          .split('"DDISH_NM":"')[1]
          .replace(/(<([^>]+)>)/g, "");
        result = result.replace(/amp;/gi, "");
        result = result.replace(/undefined/gi, "");
        result = result.replace(/\./gi, "");
        result = result.replace(/\*/gi, "");

        result = result.trim();
        result = result.replace(/^ +/gm, "");

        result = result.replace(/[0-9]/g, "");
      } catch (e) {
        replier.reply("급식 정보가 없습니다.");
      }

      result += "\n";
      result += "총 ";
      result += calories;
      replier.reply(result);
    }
  } catch (e) {
    replier.reply("잘못 입력하셨습니다.");
  }
}
