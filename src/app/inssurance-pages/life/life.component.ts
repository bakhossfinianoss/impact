import { Component } from '@angular/core';
import { Content } from '../inssurance-class';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/layout/language/language.service';
import { PersonalService } from '../personal-inssurance/personal.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent {

  constructor(private route: ActivatedRoute,
    private languageService: LanguageService,
    private personalService: PersonalService
  ) {}

  currentLanguage: string = 'en';
  currentContent: string = 'car';
  selected: string = '';
  openAccordions: { [key: string]: boolean } = {};
  individualData: any;
  isEditing: boolean = false;
  cancelEdit: string = 'Edit';
  isEditable: boolean = false;
  addedObjectIndices: number[] = [];
  content!: Content;
  isLoading = false;

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
    this.isLoading = true;
    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;

      this.personalService.getPersonalContent(this.currentLanguage, 'life-financial')
      .pipe(
        map((res: any) => {
          return res.map((item:any) => {
            if (item && item.text) {
              try {
                item.text = JSON.parse(item.text);
              } catch (error) {
                console.error('Error parsing text for item:', item, error);
              }
            }
            return item;
          });
        })
      )
      .subscribe(
        res => {
          this.isLoading = false;
          this.individualData = res;
        }
      );


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

  addNewObject() {
    this.individualData.middleObj.push({
      title: 'New Title',
      description: 'New Description'
    });
    this.addedObjectIndices.push(this.individualData.middleObj.length - 1);  // Track the index of the new object
    this.isEditing = true;
    this.cancelEdit = 'Cancel';
    this.isEditable = true;
  }

  formatText(text: string): string {
    text = text.replace(/([a-zA-ZÀ-ÿ\s-]+:)/g, (match) => {
      if (match.includes('-')) {
        return '<strong>' + match + '</strong>';
      }else if (match.includes(`'`)) {
        return '<strong>' + match + '</strong>';
      }
      return match;
    });

    return text.replace(/([a-zA-ZÀ-ÿ\s]+:)/g, '<strong>$1</strong>');
  }

  toggleEdit() {
    if (this.isEditing) {
      this.individualData = JSON.parse(JSON.stringify(this.individualData));
      this.addedObjectIndices = [];
    } else {
      this.individualData = JSON.parse(JSON.stringify(this.individualData));
    }

    this.isEditing = !this.isEditing;
    this.cancelEdit = this.isEditing ? 'Cancel' : 'Edit';
    this.isEditable = this.isEditing;
  }

  saveContent(subCategory: string, itemId: number) {
    this.isLoading = true;
    const dataItem = this.individualData.find((item: any) => item.id === itemId);

    if (!dataItem) {
      console.error('Item not found');
      return;
    }

    dataItem.text.middleObj = dataItem.text.middleObj.filter((item: any) => {
      const isNotEmpty = item.title.trim() !== '' || item.description.trim() !== '';
      return isNotEmpty;
    });

    dataItem.text.header.description = dataItem.text.header.description.replace(/\n/g, '<br>');

    dataItem.text.middleObj.forEach((item: any) => {
      item.description = item.description.replace(/\n/g, '<br>');
      item.title = item.title.replace(/\n/g, '<br>');
    });

    this.addedObjectIndices = [];

    this.isEditing = false;
    this.cancelEdit = 'Edit';
    this.isEditable = false;

    let cContentToStr = JSON.stringify(dataItem.text);

    this.personalService.updatePersonalContent(this.currentLanguage, 'life-financial', subCategory, cContentToStr)
      .subscribe(response => {
        this.isLoading = false;
        console.log('Update successful for item:', response);
      }, error => {
        console.error('Error updating content for item:', error);
      });
  }

}
