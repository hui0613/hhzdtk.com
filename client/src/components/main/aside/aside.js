import tpl from './aside.ejs';
import './aside.scss';
import tools from '../../../utils/tools';
import { HotItem } from './item/item';

class Aside {
  constructor() {
    this.name = 'aside';
    // this.tpl = tpl;
    this.hotItem = new HotItem();
  }
  tpl(data) {
    return tools.tplReplace(tpl(), {
      list: this.hotItem.tpl(data),
    });
  }
}

export { Aside };
