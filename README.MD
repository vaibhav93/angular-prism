# angular-prism

## Installation

To install this library, run:

```bash
$ npm install angular-prism --save
```

## Usage


```bash
$ npm install angular-prism
```
configure your System.config
```javascript
System.config({
  defaultJSExtensions: true,
  map: {
    "angular2": "node_modules/angular2",
    "rxjs": "node_modules/rxjs",
    ...
    "prismjs": "node_modules/prismjs"
    "angular-prism" : "node_modules/angular-prism/dist"
  },
  packages: {        
    'app': {
      main : './main.ts',
      defaultJSExtensions : 'ts'
    },
    'prism' : {
      defaultExtension : 'js'
    },
    'angular-prism' : {
      main : './angular-prism.js',
      defaultExtension : 'js'
    }
  }
});
```
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Import prism core */
import 'prism/prism';

/* Import the language you need to highlight */
import 'prism/components/prism-typescript';

import { PrismComponent } from 'angular-prism';

@NgModule({
  declarations: [
    AppComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<prism-block [code]="code" [language]="'typescript'"></prism-block>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Vaibhav Bansal](mailto:vaibhavbansal1993@gmail.com)
