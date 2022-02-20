import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: ` <div class="wrapper"
    ><h2>About home delivery</h2>
    <p>We deliver to many or most addresses in the following counties:</p>
    <p
      ><span>New York</span>: Brooklyn,The Bronx,Manhattan, Nassau, Queens, Rockland, Staten Island,
      Suffolk, Westchester</p
    >
    <p
      ><span>New Jersey</span>: Bergen, Burlington, Camden, Essex, Gloucester, Hudson, Mercer,
      Middlesex, Monmouth, Morris, Passaic, Somerset, Union</p
    >
    <p><span>Connecticut</span>: Fairfield</p>
    <p><span>Pennsylvania</span>: Bucks, Chester, Delaware, Montgomery, Philadelphia</p>
    <p><span>Delaware</span>: New Castle</p>
    <p><span>Washington, D.C.</span> Jersey Shore (summer only)</p>
    <p><span>Hamptons</span> (summer only)</p>
    <p
      >Home Delivery Fees: min order - {{ minOrder | currency: 'USD' }}, delivery fees -
      {{ fees | currency: 'USD' }}</p
    >
  </div>`,
  styles: [
    `
      h2 {
        padding: 80px 0 20px;
        text-align: center;
        color: lightsalmon;
      }
      .wrapper {
        width: 900px;
        min-height: 100vh;
        margin: 0 auto;
        padding: 10px 50px;
        background: whitesmoke;
        box-sizing: border-box;
      }
      span {
        color: cornflowerblue;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryComponent {
  minOrder = 30;
  fees = 5.95;
}
