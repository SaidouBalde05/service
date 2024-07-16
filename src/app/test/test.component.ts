import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule, UpperCasePipe, } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,UpperCasePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  constructor(public famille : TestService){

  }

  ngOnInit(): void {
    this.membres = this.famille.membres
  }

  membres: string[] = []
}
