import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-list-briefs',
  imports: [],
  templateUrl: './list-briefs.component.html',
  styleUrl: './list-briefs.component.css'
})
export class ListBriefsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const sidebar = document.getElementById('sidebar')!;
    const toggleBtn = document.getElementById('toggleBtn')!;
    const toggleIcon = document.getElementById('toggleIcon')!;

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      toggleIcon.classList.toggle('fa-chevron-left');
      toggleIcon.classList.toggle('fa-chevron-right');
    });
  }


}
