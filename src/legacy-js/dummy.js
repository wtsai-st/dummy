import ko from 'knockout';

export class DummyModel {
    displayText = ko.observable('hello knockout!');
    changeText = () => this.displayText('hello knockout! updated!');
}
