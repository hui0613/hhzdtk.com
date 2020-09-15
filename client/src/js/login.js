// const $ = require("jquery");
import "../scss/base.scss";
import "../scss/common.scss";
import "../scss/login.scss";
import { Login } from "../components/login/login";
import tools from "../utils/tools";
class LoginIndex {
  constructor() {
    this.$app = document.createElement('div');
    this.$app.setAttribute('id','app')
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    new Login(this.$app).init();
    // $("body").prepend(this.$app);
    tools.append(document.body,this.$app)
  }
}

new LoginIndex();
