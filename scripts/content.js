const wxRead = document.querySelector("#routerView");

if (wxRead) {
  wxRead.style.display = 'flex'
  const app_content = wxRead.querySelector('.app_content')
  app_content.style.flex = '1'
  app_content.style.maxWidth = '100%'

  wxRead.querySelector('.readerControls').style.display = 'none'
  wxRead.querySelector('.readerBottomBar').style.display = 'flex'
  wxRead.querySelector('.readerBottomBar').style.width = '400px'
  wxRead.querySelector('.readerBottomBar').style.right = '0'
  wxRead.querySelector('.readerChapterContent ').style.marginLeft = '10px'
  wxRead.querySelector('.readerChapterContent ').style.marginRight = '10px'
  // 修正微信读书页面布局
  document.addEventListener('click', () => {
    wxRead.querySelector('.readerControls').style.display = 'none'
    wxRead.querySelector('.readerBottomBar').style.display = 'flex'
    wxRead.querySelector('.readerBottomBar').style.width = '400px'
    wxRead.querySelector('.readerBottomBar').style.right = '0'
    setTimeout(() => {
      wxRead.querySelector('.readerChapterContent ').style.marginLeft = '10px'
      wxRead.querySelector('.readerChapterContent ').style.marginRight = '10px'
    }, 2000)
  })
  let ht = `
  <div style="width: 1200px;height: 100%;">
  <iframe id="iframe1" name="iframe1" style="width:1200px;height:100%;position:fixed;top:0" src="https://www.markji.com/">
  </div>`

  wxRead.insertAdjacentHTML('afterbegin', ht)
}