import * as handlebars from "handlebars";
import * as gridHtml from "../html/grid.html";

export class Grid {

    private templateFunction: HandlebarsTemplateDelegate;

    constructor() {
        this.templateFunction = handlebars.compile(gridHtml);
    }

    private bindData = (data: string[]): string => {
        return this.templateFunction(data);
    }

}
