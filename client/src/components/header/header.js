import tpl from './header.ejs';
import './header.scss';
import { Logo } from './logo/logo';
import { Search } from './search/search';
import tools from '../../utils/tools';

class Header {
  constructor(el) {
    this.name = 'header';
    this.$el = el;
    this.logo = new Logo();
    this.search = new Search();
  }
  async init() {
    await this.render();
    this.bindEvent();
  }
  async render() {
    await tools.append(
      this.$el,
      tools.tplReplace(tpl(), {
        logo: this.logo.tpl(),
        search: this.search.tpl(),
      })
    );
  }
  bindEvent() {
    let mbSearch = document.getElementById('mb_search');
    let smSearch = document.getElementById('sm_search_box');
    let mbMenu = document.getElementById('mbile_menu');
    var mask = document.getElementById('mask');
    //console.log(smSearch);
    mbSearch.onclick = function () {
      tools.controlAnimation(smSearch, 'showSearch', 'hideSearch');
    };
    mbMenu.onclick = function () {
      if (
        tools.hasClassName(aside, 'hideAsideDrawer') ||
        aside.className == ''
      ) {
        tools.removeClass(aside, 'hideAsideDrawer');
        aside.className += 'showAsideDrawer';
        mask.style.display = 'block';
      } else if (tools.hasClassName(aside, 'showAsideDrawer')) {
        tools.removeClass(aside, 'showAsideDrawer');
        aside.className += 'hideAsideDrawer';
        mask.style.display = 'none';
      }
    };

    // 点击抽屉以外的区域关闭抽屉;
    mask.onclick = function () {
      tools.removeClass(aside, 'showAsideDrawer');
      aside.className += 'hideAsideDrawer';
      mask.style.display = 'none';
      // removeClass(aside, "hideAsideDrawer");
    };
    let headerSearch = document.querySelector('#header_search');
    tools.bindEvent(headerSearch, 'keydown', (e) => {
      // e.preventDefault();
      if (e.keyCode == 13) {
        // 按下回车
        e.preventDefault();
        window.location = 'https://blog.jkdev.cn/index.php/search/mysql/';
      }
    });
  }
}

export { Header };
