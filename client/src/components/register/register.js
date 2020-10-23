import tpl from './register.ejs'
import './register.scss'
import tools from "../../utils/tools";

class Register {
    constructor(el) {
      this.name = "register";
      this.$el = el;
    }
    init() {
      this.render();
    }
    render() {
      tools.append(this.$el,tools.tplReplace(tpl(),{}))
    }
  }
  
  export { Register };