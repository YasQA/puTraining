import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appToggleText]',
  exportAs: 'appToggleText'
})

export class ToggleTextDirective{
  limit = 100;
  isContentToggled: boolean;
  isToggleRequired: boolean;
  initialContent: string;
  content: string;

  constructor() {}

  @Input() set appToggleText(content: string) {
    this.content = content;
    if (this.content.length > this.limit) {
      this.isToggleRequired = true;
      this.initialContent = this.content;
      this.content = this.formatContent(this.content);
    }
  }

  formatContent(content: string) {
    return `${content.substr(0, this.limit-1)}`;
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.initialContent : this.formatContent(this.content);
  }

}
