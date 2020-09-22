import tpl from './avatar.ejs';
import './avatar.scss';
import tools from '../../../utils/tools';

class Avatar {
  constructor() {
    this.name = 'avatar';
  }
  tpl(data) {
    return tools.tplReplace(tpl(), {
      avatar: data.web_avatar,
      name: data.web_name,
      motton: data.web_motton,
    });
  }
}

export { Avatar };
