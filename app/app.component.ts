import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <!--<div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>-->

    <h2>Template Form</h2>

    <template-form></template-form>

    <h2>Reactive form</h2>

    <reactive-form></reactive-form>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}