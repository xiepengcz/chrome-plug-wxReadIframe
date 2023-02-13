window.onload = (event) => {
  console.log("完成");
  // 微信读书版
  if (location.origin.includes("weread.qq.com")) {
    const wxRead = document.querySelector("#app");
    if (wxRead) {
      wxRead.style.marginLeft = "1000px";
      // wxRead.querySelector(".readerControls").style.display = "none";
      // wxRead.querySelector(".readerBottomBar").style.display = "flex";
      // wxRead.querySelector(".readerBottomBar").style.width = "400px";
      // wxRead.querySelector(".readerBottomBar").style.right = "0";
      // wxRead.querySelector(".readerChapterContent ").style.marginLeft = "10px";
      // wxRead.querySelector(".readerChapterContent ").style.marginRight = "10px";
      // // 修正微信读书页面布局
      // document.addEventListener("click", () => {
      //   wxRead.querySelector(".readerControls").style.display = "none";
      //   wxRead.querySelector(".readerBottomBar").style.display = "flex";
      //   wxRead.querySelector(".readerBottomBar").style.width = "400px";
      //   wxRead.querySelector(".readerBottomBar").style.right = "0";
      //   setTimeout(() => {
      //     wxRead.querySelector(".readerChapterContent ").style.marginLeft =
      //       "10px";
      //     wxRead.querySelector(".readerChapterContent ").style.marginRight =
      //       "10px";
      //   }, 2000);
      // });
      let rdUlr = localStorage.getItem("rdUrl") || "https://www.markji.com";
      let ht = `
  <div style="width: 1000px;height: 100%;position:fixed;top:0;left:0;display:flex;flex-direction: column;">
    <div style="display:flex">
    <input type="text" id="url" style="flex:1" placeholder="请输入要展示的url"><button style="padding:0 10px;background:red" id="confirm">确 定</button>
    </div>
  <iframe id="iframe1" name="iframe1" style="width:1000px;height:100%;position:fixed;top:20px" src="${rdUlr}">
  </div>`;

      document.querySelector("body").insertAdjacentHTML("afterbegin", ht);

      let input = document.querySelector("#url");
      input.value = rdUlr;
      let btn = document.querySelector("#confirm");
      btn.onclick = function () {
        if (!input.value) return;
        document.querySelector("#iframe1").src = input.value;
        localStorage.setItem("rdUrl", input.value);
      };
      document.querySelector(".readerControls").style.left = "68%";
      document.querySelector(".readerCatalog").style.marginLeft = "100px";
    }
  }
  // 极客时间专栏版
  else if (location.origin.includes("time.geekbang.org")) {
    const jkRead = document.querySelector("#app");
    jkRead.style.marginLeft = "1100px";
    jkRead.style.position = "relative";
    jkRead.style.height = "100vh";
    setTimeout(() => {
      if (jkRead) {
        let rdUlr = localStorage.getItem("rdUrl") || "https://www.markji.com";
        let ht = `
      <div style="height: 90vh;width: 1100px;position: fixed;top: 0;left: 0;z-index: 999;">
        <div style="display:flex">
        <input type="text" id="url" style="flex:1" placeholder="请输入要展示的url"><button style="padding:0 10px;background:red" id="confirm">确 定</button>
        </div>
      <iframe id="iframe1" name="iframe1" style="width:1100px;height:100%;position:fixed;top:20px" src="${rdUlr}">
      </div>`;
        jkRead.insertAdjacentHTML("afterbegin", ht);
        let input = document.querySelector("#url");
        input.value = rdUlr;
        let btn = document.querySelector("#confirm");
        btn.onclick = function () {
          if (!input.value) return;
          document.querySelector("#iframe1").src = input.value;
          localStorage.setItem("rdUrl", input.value);
        };
      }
    }, 2000);
  }
};
