import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/layout/language/language.service';
import { PersonalService } from './personal.service';

@Component({
  selector: 'app-personal-insurrance',
  templateUrl: './personal-insurrance.component.html',
  styleUrls: ['./personal-insurrance.component.css']
})
export class PersonalInsurranceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private languageService: LanguageService,
    private personalService: PersonalService
  ) {}
  currentLanguage: string = 'en';
  currentContent: string = 'CAR';
  selected: string = '';
  openAccordions: { [key: string]: boolean } = {};
  individualData: any;
  isEditing: boolean = false;
  cancelEdit: string = 'Edit';
  isEditable: boolean = false;
  addedObjectIndices: number[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const tag = params.get('tag');
        if(tag) {
          this.showContent(tag);
        }
    });
    this.getLangAndData();
  }

  getLangAndData() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;

      this.personalService.getPersonalContent(this.currentLanguage,'individual').subscribe(
        res => {
          this.individualData = res;
        }
      )
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  showContent(contentId: string) {
    this.selected = contentId;
    this.currentContent = contentId;
  }

  toggleAccordion(accordionId: string) {
    this.openAccordions[accordionId] = !this.openAccordions[accordionId];
  }

  isOpen(accordionId: string): boolean {
    return this.openAccordions[accordionId];
  }

  isLoggedIn() {
    return false;
  }

   content =
    {
      header: {
          title: `Le grand avantage de souscrire à une police d'assurance pour les propriétaires d'entreprise au Québec...`,
          description: `Le grand avantage de souscrire à une police d'assurance pour les propriétaires d'entreprise au Québec,
            par opposition à l'achat de chaque couverture individuellement,
             est qu'une BOP est généralement vendue pour une prime inférieure au coût total de chaque couverture individuelle réunie...`
      },
      middleObj : [
        {
          title: 'Assurance AUTO',
          description: `Tout propriétaire de véhicule automobile au Qc doit avoir au minimum une assurance responsabilité civile afin de couvrir les dommages causés par votre faute à une autre personne. Souvent appelez assurance ‘’ d’un bord’’ (chapitre A).

          L’assurance privée optionnelle (Chapitre B) couvre les dommages causés à votre véhicule par une collision dont vous êtes responsable. Elle peut couvrir aussi le feu, vol et vandalisme.`
        },
        {
          title: `Assurance MOTOL'assurance moto au Québec est essentielle pour les propriétaires de motocyclettes,
          offrant une protection contre les risques spécifiques associés à la conduite de motos. Voici les points clés à connaître :`,
          description: `Assurance responsabilité civile : Obligatoire comme pour les voitures, elle couvre les dommages corporels et matériels causés à autrui lors d'un accident où vous êtes responsable.Assurance collision : Également facultative,
           elle couvre les dommages à votre moto résultant d'une collision avec un autre véhicule ou un objet fixe, quel que soit le responsable de l'accident.`
        }
      ],
      others: [{}]
     };

    originalContent = this.content;

    addNewObject() {
      this.content.middleObj.push({
        title: 'New Title',
        description: 'New Description'
      });
      this.addedObjectIndices.push(this.content.middleObj.length - 1);  // Track the index of the new object
      this.isEditing = true;
      this.cancelEdit = 'Cancel';
      this.isEditable = true;
    }

    toggleEdit() {
      if (this.isEditing) {
        // The user is canceling the edit, revert the content
        this.content = JSON.parse(JSON.stringify(this.originalContent));

        // Remove all objects that were added during the current edit session
        this.addedObjectIndices = [];  // Clear the tracking array
      } else {
        // The user is starting to edit, make a deep copy of the original content
        this.originalContent = JSON.parse(JSON.stringify(this.content));
      }

      this.isEditing = !this.isEditing;
      this.cancelEdit = this.isEditing ? 'Cancel' : 'Edit';
      this.isEditable = this.isEditing;
    }

    saveContent() {
      // Filter out any objects where both title and description are empty
      this.content.middleObj = this.content.middleObj.filter(item => {
        const isNotEmpty = item.title.trim() !== '' || item.description.trim() !== '';
        console.log(isNotEmpty)
        return isNotEmpty;
      });

      // Clear the addedObjectIndices after saving (if this logic is still needed for other operations)
      this.addedObjectIndices = [];

      // Exit editing mode
      this.isEditing = false;
      this.cancelEdit = 'Edit';
      this.isEditable = false;
      console.log(this.content);

    }

}


