import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BMI Rechner neue Version';
  ergebnis: string = '';
  spektrum: string = '';
  bmiResultValid: boolean = false;

  bmiRechner() {
    let rueckmeldung: number = 0;
    let groesse: any = (<HTMLInputElement>document.getElementById("groesse")).value;
    if (groesse < 80 || groesse > 225) {
      rueckmeldung++;
    }
    let gewicht: any = (<HTMLInputElement>document.getElementById("gewicht")).value;
    console.log(gewicht)
    if (gewicht < 30 || gewicht > 200) {
      rueckmeldung++;
    }
    let quadrierteGroesse = groesse * groesse;
    let res: number = 10000 * (gewicht / quadrierteGroesse);

    switch (true) {
      case res <= 17:
        this.spektrum = 'Sie haben extremes Untergewicht!';
        break;

      case res <= 19.5:
        this.spektrum = 'Sie haben Untergewicht!';
        break;

      case res < 25:
        this.spektrum = 'Sie haben Normalgewicht!';
        break;

      case res < 31:
        this.spektrum = 'Sie haben Übergewicht!';
        break;

      case res < 36:
        this.spektrum = 'Sie haben Adipositas Grad 1!';
        break;

      case res < 41:
        this.spektrum = 'Sie haben Adipositas Grad 2!';
        break;

      case 41 > res:
        this.spektrum = 'Sie haben Adipositas Grad 3!';
        break;

      default:
        this.spektrum = 'default'
    }

    let outPut = (res.toString()).slice(0, 2)
    this.ergebnis = 'Sie haben einen BMI Wert von: ' + outPut;
    this.bmiResultValid = true;
    if (rueckmeldung != 0) {
      outPut = 'Bitte korrigieren Sie die obenstehenden Angaben!';
      this.ergebnis = outPut;
    }

  }

}
