import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progress:number = 30;
  @Input('btnClass') btnClass:string = 'btn-primary';
  @Output('valor') valorSalida:EventEmitter<number> = new EventEmitter();

  constructor() { }

  changeValue(value:number){
    if(this.progress >=100 && value > 0){
      this.valorSalida.emit(100);
      return this.progress = 100;
    }
    
    if(this.progress <= 0 && value < 0){
      this.valorSalida.emit(0);
      return this.progress = 0;
    }
      
    this.valorSalida.emit(this.progress + value);
    return this.progress = this.progress + value; 
      
  }

  onChange(value:number){
    if(value >= 100){
      this.progress = 100;
    }else if(value <= 0){
      this.progress = 0;
    }else{
      this.progress = value;
    }
    this.valorSalida.emit(this.progress);
  }
}
