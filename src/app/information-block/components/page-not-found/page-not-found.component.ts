import { Component } from '@angular/core';

@Component({
  template: `<div class="wrapper"
    ><p>Oops! It seems page you are looking for doesn't exist</p></div
  >`,
  styles: [
    `
      .wrapper {
        min-height: 100vh;
        width: 900px;
        margin: 0 auto;
        padding: 10px 50px;
        box-sizing: border-box;
        background: whitesmoke;
      }

      p {
        padding: 80px 0 20px;
        font-size: 20px;
        color: lightsalmon;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
