import tpl from './index.ejs';
import './index.scss';
import tools from '../../utils/tools';

class Err {
  constructor(errorData) {
    this.name = 'error';
    this.errorData = errorData;
  }
  tpl() {
    return tools.tplReplace(tpl(), {
      errorData: this.errorData,
    });
  }
}

export { Err };
