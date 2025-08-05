import {Component, OnInit} from '@angular/core';
import {Competence, CompService} from '../../core/comprtence/comp.service';
import {NgForOf} from '@angular/common';
import {data} from 'autoprefixer';
import * as console from 'node:console';

@Component({
  selector: 'app-competence',
  imports: [
    NgForOf
  ],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent implements OnInit{

  competences : Competence[] = [];
  constructor(private compService : CompService) {
  }



  getAllComp():void {
     this.compService.getCompetence().subscribe({
      next : (data) => {
        this.competences = data;
      },
       error : err => {console.log("competence not found !", err)}
    })
  }

  ngOnInit(): void {

    this.getAllComp();
  }

}
