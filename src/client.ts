
// polyfills
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';

// *********** the root component *****************
@Component({
  selector: 'app-root',
  template: `
      <h1>
          {{title}}
      </h1>
  `,
})
class AppComponent {
  title = 'app works!';
}


// *********** our top level module *****************
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
class AppModule { }


// *********** start the client side app *****************
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function () {
      console.log('Angular bootstrapped!!!');
    });
