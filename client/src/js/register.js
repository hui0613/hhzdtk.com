// const $ = require("jquery");
import "../scss/base.scss";
import "../scss/common.scss";
import "../scss/login.scss";
import { Register } from "../components/register/register";
import tools from "../utils/tools";
class RegisterIndex {
  constructor() {
    this.$app = document.createElement('div');
    this.$app.setAttribute('id','app')
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    new Register(this.$app).init();
    // $("body").prepend(this.$app);
    tools.append(document.body,this.$app)
  }
}

new RegisterIndex();
