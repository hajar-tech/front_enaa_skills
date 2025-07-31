import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-rendu',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './rendu.component.html',
  styleUrl: './rendu.component.css'
})
export class RenduComponent {

  isModalVisible = false;
  urls: string[] = [];
  newUrl = '';
  message = '';
  likeBrief = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.resetForm();
  }

  addUrl() {
    if (this.newUrl.trim()) {
      this.urls.push(this.newUrl.trim());
      this.newUrl = '';
    }
  }

  removeUrl(index: number) {
    this.urls.splice(index, 1);
  }

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', { like: this.likeBrief, urls: this.urls, message: this.message });
    this.closeModal();
    alert('Rendu envoyé !');
  }

  resetForm() {
    this.urls = [];
    this.newUrl = '';
    this.message = '';
    this.likeBrief = false;
  }

}
