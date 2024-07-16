import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-deux',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deux.component.html',
  styleUrl: './deux.component.scss'
})
export class DeuxComponent implements OnInit {
  
  constructor(public deux : TestService){
    
  }

  ngOnInit(): void {
    this.membres = this.deux.membres
    
  }

  membres: string[] = []

}
