import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    // event登録,コールバック処理
    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.hoverSection.addEventListener('click', onClick);
  }

  unsubscribe() {
    console.log('unsubscribe');
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onMouseMove(ev: MouseEvent) {
  console.log('onMouseMove', ev);
}

function onClick(ev: MouseEvent) {
  console.log('onClick', ev);
}
