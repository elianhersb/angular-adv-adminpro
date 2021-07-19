import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  title1:string = 'Ventas';
  labels1:string[] =['Descarga de venta', 'Historia de ventas', 'Correo de ventas'];
  data1 = [
    [500, 400, 100]
  ];
}
