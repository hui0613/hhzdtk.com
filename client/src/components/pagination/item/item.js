import tpl from "./item.ejs";
import "./item.scss";
import tools from "../../../utils/tools";

class PageItem {
  constructor() {
    this.name = "pageItem";
  }
  tpl(data) {
    let list = "";
    // 获取当前页
    let curPage = tools.getUrlQueryValue("page") || 1,
      pageTotal = Math.ceil(data / 10),
      currPageClass = "";
    // console.log(curPage);
    if (pageTotal === 1) {
      return "";
    }
    if (curPage > 1) {
      list += `<li><a href="./index.html?page=${
        curPage - 1
      }"><i class="icon icon-pre"></i></li>`;
    }
    if (pageTotal <= 10) {
      // alert("demo");
      // 如果总页数小于10页，则显示全部的分页按钮

      for (let i = 0; i < pageTotal; i++) {
        if (i + 1 === curPage) {
          currPageClass = "isCur";
        } else {
          currPageClass = "";
        }
        list += tools.tplReplace(tpl(), {
          num: i + 1,
          isCur: currPageClass,
        });
      }
      // console.log(list);
    } else {
      // 分页数大于10，掩藏一部分按钮

      if (curPage <= 4) {
        for (let i = 0; i <= 3; i++) {
          if (i + 1 === curPage) {
            currPageClass = "isCur";
          } else {
            currPageClass = "";
          }
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: currPageClass,
          });
        }
        list += "<li>...</li>";
        for (let i = pageTotal - 3; i < pageTotal; i++) {
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: "",
          });
        }
      } else if (curPage > 4 && curPage < pageTotal - 3) {
        for (let i = 0; i < 3; i++) {
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: "",
          });
        }
        list += "<li>...</li>";
        list += tools.tplReplace(tpl(), {
          num: curPage,
          isCur: "isCur",
        });
        // console.log(list);
        list += "<li>...</li>";
        for (let i = pageTotal - 2; i < pageTotal; i++) {
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: "",
          });
        }
      } else if (curPage >= pageTotal - 3) {
        for (let i = 0; i < 3; i++) {
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: "",
          });
        }
        list += "<li>...</li>";
        for (let i = pageTotal - 3; i < pageTotal; i++) {
          if (i + 1 === curPage) {
            currPageClass = "isCur";
          } else {
            currPageClass = "";
          }
          list += tools.tplReplace(tpl(), {
            num: i + 1,
            isCur: currPageClass,
          });
        }
      }
    }
    if (curPage < pageTotal) {
      list += `<li><a href="./index.html?page=${
        parseInt(curPage) + 1
      }"><i class="icon icon-next"></i></li>`;
    }
    // console.log(list);
    return list;
  }
}

export { PageItem };
