import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {


  protected title = 'Welocome to Modern Angular';

  protected isDisabled = false;

  protected onClick(){
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  };

  //o signal é um wrapper em torno de um valor que notifica os consumidores interessados quando esse valor muda.
  //Signal graváveis - fornecem um API para atualizar seus valores diretamente. Você cria sinais graváveis chamando o signal com o valor inicial do sinal
  protected count = signal(0);

  //O sinal computado representa estado derivado e retorna um valor
  protected doubleCount = computed(() => this.count() * 2);

  //Os efeitos reagem a mudança de estado, executam efeitos colaterais
  //E não retornam valores
  private readonly countLog = effect(() => {
    console.log('Count changed: ', this.count());
  })

  // getDoubleCount(){
  //   console.log('getDoubleCount called');
  //   return this.count() * 2;
  // }

  protected increateCounter(){
    //count = count + 1
    this.count.update(value => value + 1);
  }

  protected decreaseCounter(){
    this.count.update(value => value - 1);
  }

  protected restCounter(){
    this.count.set(0);
  }

}
