import { Injectable, ComponentRef, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CmsPropertyFactory, UIHint, ContentTypeProperty, ISelectionFactory } from '@angular-cms/core';
import { SelectProperty } from './select-property';

export abstract class SelectPropertyFactory extends CmsPropertyFactory {
    constructor(propertyUIHint: string, injector: Injector) {
        super(propertyUIHint, injector);
    }

    createPropertyComponent(property: ContentTypeProperty, formGroup: FormGroup): ComponentRef<any> {
        const propertyComponent = this.createDefaultCmsPropertyComponent(property, formGroup);

        if (propertyComponent.instance instanceof SelectProperty) {
            const selectFactory = <ISelectionFactory>(this.injector.get(property.metadata.selectionFactory));
            (<SelectProperty>propertyComponent.instance).selectItems = selectFactory.GetSelections();
        }

        return propertyComponent;
    }
}

@Injectable()
export class DropdownPropertyFactory extends SelectPropertyFactory {
    constructor(injector: Injector) {
        super(UIHint.Dropdown, injector);
    }
}

@Injectable()
export class CheckboxPropertyFactory extends SelectPropertyFactory {
    constructor(injector: Injector) {
        super(UIHint.Checkbox, injector);
    }
}