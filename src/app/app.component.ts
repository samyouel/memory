import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface cards {
  array: {};
}
export interface array {
  id: string;
  path: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('hidden', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('guessed', style({
        opacity: '0%'
      }))
    ])
  ]
})
export class AppComponent {
  title = 'memory';
  // backcover = '../assets/hg.png';
  erstekarte = 0;
  counter = 0;
  current = 0;
  punkte = 0;
  cards =
    [
      {
        id: "0",
        path: "../assets/bandoneon.png",
        state: "hidden"
      },
      {
        id: "1",
        path: "../assets/duetconc.png",
        state: "hidden"
      },
      {
        id: "2",
        path: "../assets/einreihig.png",
        state: "hidden"
      },
      {
        id: "3",
        path: "../assets/englconc.png",
        state: "hidden"
      },
      {
        id: "4",
        path: "../assets/garmon.png",
        state: "hidden"
      },
      {
        id: "5",
        path: "../assets/knopfacc.png",
        state: "hidden"
      },
      {
        id: "6",
        path: "../assets/pianoacc.png",
        state: "hidden"
      },
      {
        id: "7",
        path: "../assets/steirische.png",
        state: "hidden"
      },
      {
        id: "8",
        path: "../assets/wiener.png",
        state: "hidden"
      },
      {
        id: "9",
        path: "../assets/deutscheconc.png",
        state: "hidden"
      },
      {
        id: "10",
        path: "../assets/bandoneon.png",
        state: "hidden"
      },
      {
        id: "11",
        path: "../assets/duetconc.png",
        state: "hidden"
      },
      {
        id: "12",
        path: "../assets/einreihig.png",
        state: "hidden"
      },
      {
        id: "13",
        path: "../assets/englconc.png",
        state: "hidden"
      },
      {
        id: "14",
        path: "../assets/garmon.png",
        state: "hidden"
      },
      {
        id: "15",
        path: "../assets/knopfacc.png",
        state: "hidden"
      },
      {
        id: "16",
        path: "../assets/pianoacc.png",
        state: "hidden"
      },
      {
        id: "17",
        path: "../assets/steirische.png",
        state: "hidden"
      },
      {
        id: "18",
        path: "../assets/wiener.png",
        state: "hidden"
      },
      {
        id: "19",
        path: "../assets/deutscheconc.png",
        state: "hidden"
      }
    ];

  getRandom() {
    for (var lauf = 0; lauf < 10000; lauf++) {
      var zahl1 = Math.floor(Math.random() * 20);
      // 3
      var merke1 = this.cards[zahl1]; // 8
      var zahl2 = Math.floor(Math.random() * 20);  // 7
      this.cards[zahl1] = this.cards[zahl2];
      this.cards[zahl2] = merke1;
    }
  }

  geklickt(event) {
    // console.log(event);
    //trigger cardflip
    var index = this.cards.findIndex((element) => element.id === event.target.id);
    if (this.cards[index].state === "hidden") {
      this.cards[index].state = "flipped";
    } else {
      this.cards[index].state = "hidden";
    }

    //firstcard and secondcard
    this.current = index;
    this.counter++;
    if (this.counter === 1) {
      this.erstekarte = index;
    }
    //strafpunkte
    this.punkte++;

    //hide
    if (this.counter === 2) { this.auswertung() };

  }

  auswertung() {
    //richtig
    if (this.cards[this.erstekarte].path === this.cards[this.current].path) {
      setTimeout(() => {
        this.cards[this.current].state = "guessed";
        this.cards[this.erstekarte].state = "guessed";
        this.counter = 0;
      }, 700);
    }
    else {
      //falsch
      setTimeout(() => {
        this.cards[this.current].state = "hidden";
        this.cards[this.erstekarte].state = "hidden";
        this.counter = 0;
      }, 700);
    }
  }

  ngOnInit() {
    this.getRandom();
  }
}

