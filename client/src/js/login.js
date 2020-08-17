const $ = require("jquery");
import "../scss/base.scss";
import "../scss/common.scss";
import "../scss/login.scss";
import { Login } from "../components/login/login";
class LoginIndex {
  constructor() {
    this.$app = $("<div id='app'>");
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    new Login(this.$app).init();
    $("body").prepend(this.$app);
  }
}

new LoginIndex();
