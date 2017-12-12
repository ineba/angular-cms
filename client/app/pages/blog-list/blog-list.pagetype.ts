import { Property, PageType } from './../../cms/core/decorators';
import { Elements } from './../../cms/core/form-elements';

@PageType({
    displayName: "Blog List Page Type",
    description: "This is blog list page type"
})
export class BlogList {
    @Property({
        displayName: "This is Title",
        displayType: Elements.Input
    })
    title: string;
    content: string;
}