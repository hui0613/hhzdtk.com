import tpl from "./waterfall.ejs";
import "./waterfall.scss";

import tools from "../../utils/tools";

import { Item } from "./item/item";

class WaterFall {
  constructor(el,fn) {
    this.name = "waterfall";
    this.$el = el;
    this.imgData = [];
    this.fn = fn;

    this.COLUMN_WIDTH = 180;
    this.GAP_WIDTH = 10;
    this.columnCount = 0;
    this.columnHeight = [];
    this.checkHeihgt = [];

    this.item = new Item();
  }
  async init() {
    await this.getDatas();
    this.resetColumn();
    this.resetColumnHeight();
    this.bindEvent();
  }
  resetColumn() {
    this.columnCount = Math.max(
      2,
      parseInt(document.body.offsetWidth / (this.COLUMN_WIDTH + this.GAP_WIDTH))
    );
  }

  resetColumnHeight() {
    this.columnHeight = new Array(this.columnCount).fill(0);
  }

  getAllHeight() {
    let tempBox = document.createElement("div");
    tempBox.innerHTML = tools.tplReplace(tpl(),{
      list: this.item.tpl(this.imgData),
    });
    let imgBox = tempBox.querySelectorAll(".img-box");
    this.checkHeihgt = new Array(imgBox.length).fill(false);

    for (let i = 0; i < imgBox.length; i++) {
      let img = imgBox[i].querySelector("img");
      this.setBoxHeight(imgBox[i],i);
    }
    this.isReadyRender(imgBox);
  }

  setBoxHeight(imgBox,index) {
    let img = imgBox.querySelector("img");
    img.onload = () => {
      imgBox.setAttribute(
        "height",
        Math.floor((img.height / img.width) * this.COLUMN_WIDTH)
      );
      this.checkHeihgt[index] = true;
    };

    img.onerror = () => {
      imgBox.setAttribute("height",250);
      this.checkHeihgt[index] = true;
    };
  }

  isReadyRender(imgList) {
    let seft = this;
    let checkAllHasHeight = () => {
      if (this.checkHeihgt.indexOf(false) == -1) {
        clearTimeout(timer);
        this.setPosition(imgList);
      } else {
        // console.log(this.checkHeihgt.indexOf(false));
        setTimeout(checkAllHasHeight,40);
      }
    };
    let timer = setTimeout(checkAllHasHeight,40);
  }

  setPosition(imgList) {
    for (let i = 0; i < imgList.length; i++) {
      let minHeight = Math.min(...this.columnHeight);
      let minHeightIndex = this.columnHeight.indexOf(minHeight);
      console.log(this.columnHeight)
      if (i > this.columnCount - 1) {

        imgList[i].style.top = minHeight + "px";
        console.log(imgList[i].style.top)
      } else {
        imgList[i].style.top = minHeight + "px";
      }
      imgList[i].style.left =
        minHeightIndex * (this.COLUMN_WIDTH + this.GAP_WIDTH) + "px";

      //   console.log(imgList[i].getAttribute("height"));
      this.columnHeight[minHeightIndex] +=
        parseInt(imgList[i].getAttribute("height")) + this.GAP_WIDTH + 70;
    }
    document.querySelector("#app").style.height =
      Math.max(...this.columnHeight) + 150 + "px";
    document.querySelector("#app").style.width =
      (this.COLUMN_WIDTH + this.GAP_WIDTH) * this.columnCount + "px";
    this.setWaterFall(imgList);
  }

  setWaterFall(imgList) {
    this.$el.append(imgList);
  }
  bindEvent() {
    window.addEventListener(
      "resize",
      tools.debounce(this,this.resetPositon,500)
    );
    // window.addEventListener(
    //   "scroll",
    //   tools.throttle(this, this.handelScroll, 500)
    // );
  }

  resetPositon() {
    this.resetColumn();
    this.resetColumnHeight();
    this.setPosition(document.querySelectorAll(".img-box"));
  }

  async handelScroll() {
    if (
      this.getClient().height + this.getScrollTop() >=
      Math.min(...this.columnHeight)
    ) {
      await this.getDatas();
    }
  }

  async getDatas() {
    await this.fn.apply(this);
    // console.log(this.imgData);
    this.getAllHeight();
  }

  getClient() {
    return {
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      height:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
    };
  }
  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
}

export { WaterFall };
