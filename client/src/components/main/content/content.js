import contentTpl from "./content.ejs";
import "./content.scss";

import { BlogPost } from "./blogPost/index";
import { Pagination } from "../../pagination/index";
import { Detail } from "./blogDetail/detail";
import tools from "../../../utils/tools";

class Content {
  constructor() {
    this.name = "content";
    this.blogPost = new BlogPost();
    this.detail = new Detail();
    this.pagination = new Pagination();
  }
  tpl(pageStr,data,count) {
    switch (pageStr) {
      case "index":
        return tools.tplReplace(contentTpl(),{
          content: this.blogPost.tpl(data),
          pagination: this.pagination.tpl(count),
        });
      case "detail":
        return tools.tplReplace(contentTpl(),{
          content: this.detail.tpl(data),
          pagination: "",
        });
    }
  }
}

export { Content };
