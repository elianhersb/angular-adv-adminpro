import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval,  Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  public subscribeInterval: Subscription; 
  constructor() { 
    
    this.subscribeInterval  = this.retornaInertvalo().subscribe( console.log )
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor=> console.log(valor),
    //   error=> console.log(error),
    //   () => console.log('terminado')
    // )
    
  }

 

  retornaInertvalo(){
    return interval(500)
            .pipe(
              take(10),
              map(valor=> valor + 1),
              filter(valor => (valor%2 == 0)? true: false ),
            )
  }

  retornaObservable(){
    let i = -1;
    return new Observable( observer =>{

      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);

        if(i == 4){
          clearInterval(intervalo);
          observer.complete();
        } 

        if(i==2){
          observer.error('error');
        }

        
      },1000);

    });

     
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscribeInterval.unsubscribe(); 
  }

}
