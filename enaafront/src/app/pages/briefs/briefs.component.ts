import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

export interface Brief{
  id: number;
  title: string;
  description : string;
  dateLimit : string;
}
@Component({
  selector: 'app-briefs',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './briefs.component.html',
  styleUrl: './briefs.component.css'
})
export class BriefsComponent implements OnInit{

  private apiUrl = '';

  public briefs : Brief[] = [];

  isAddBriefModalVisible: boolean = false;

  public isLoading : boolean = false;

  public newBriefTitle : string = '';
  public newBriefDescription : string ='';
  public newBriefDateLimite : string= '';


  constructor(private Http : HttpClient) {}


  ngOnInit() {
    this.fetchBriefs();
  }

  fetchBriefs() : void {
    this.isLoading = true;
    this.Http.get<Brief[]>(`${this.apiUrl}/briefs`).subscribe({
      next : (data) =>{
        this.briefs = data;
        this.isLoading= false;
      },
      error : (err)=>{
        console.error("Erreur lors de la récupération des briefs", err);
        this.isLoading = false;
      }
    });
  }

  openAddBriefModal(): void {
    this.isAddBriefModalVisible = true;
    this.newBriefTitle = '';
    this.newBriefDescription = '';

    // Calcul de la date limite : 7 jours à partir de maintenant
    const today = new Date();
    const deadlineDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    // Formatage de la date en 'YYYY-MM-DD' pour l'input type="date"
    const year = deadlineDate.getFullYear();
    const month = ('0' + (deadlineDate.getMonth() + 1)).slice(-2);
    const day = ('0' + deadlineDate.getDate()).slice(-2);
    this.newBriefDateLimite = `${year}-${month}-${day}`;
  }


  closeAddBriefModal(): void {
    this.isAddBriefModalVisible = false;
  }



  addNewBrief(): void {
    // Vérification basique des champs requis
    if (!this.newBriefTitle || !this.newBriefDescription || this.newBriefDateLimite) {
      console.error("Le titre et la description et la date sont requis.");
      return;
    }

    this.isLoading = true;
    // Crée un objet pour l'envoi des données (sans l'image)
    const newBriefData = {
      title: this.newBriefTitle,
      description: this.newBriefDescription,
      dateLimit: this.newBriefDescription
    };

    // Envoie la requête POST au backend
    this.Http.post<Brief>(`${this.apiUrl}/postbrief`, newBriefData).subscribe({
      next: (newBrief) => {
        // Ajoute le nouveau brief à la liste et ferme le modal
        this.briefs.push(newBrief);
        this.closeAddBriefModal();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout du brief", err);
        this.isLoading = false;
      }
    });
  }
}
