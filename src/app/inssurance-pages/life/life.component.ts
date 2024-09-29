import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Content } from '../inssurance-class';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/layout/language/language.service';
import { PersonalService } from '../personal-inssurance/personal.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'src/app/back-office/login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LifeComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
    private languageService: LanguageService,
    private personalService: PersonalService,
    private sanitizer: DomSanitizer,
    private loginService: LoginService
  ) {}

  currentLanguage: string = 'en';
  currentContent: string = 'car';
  selected: string = '';
  individualData: any;
  isEditing: boolean = false;
  cancelEdit: string = 'Edit';
  isEditable: boolean = false;
  content!: Content;
  isLoading = false;
  editorConfig: any;
  isMenuOpen: boolean = false;
  selectedLabel: string = 'Life_Insurance';
  img = `${environment.baseHref}assets/ImpactInsurance_Logo4-300x110.png`;
  topImg = `${environment.baseHref}assets/top-image.png`;

  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const tag = params.get('tag');
        if(tag) {
          this.showContent(tag);
          this.selected = tag;
          this.getSelected();
        }
    });
    this.getLangAndData();

    this.editorConfig = {
      plugins: 'lists link image paste wordcount table textcolor color searchreplace',
      toolbar: 'undo redo | blocks | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | searchreplace',
      height: 800,
      menubar: false,
      color_map: [
        "0883a6", "Blue",
        "cee8f2", "Light Blue",
        "555454", "Dark Gray",
        "4b4f58", "Medium Gray",
        "d3d3d3", "Light Gray",
        "f37e2a", "Orange",
        "808080", "Gray",
        "000000", "Black"
      ]
    };
  }

  getSelected() {
    const contentMapping: Record<string, string> = {
      'life': 'Life_Insurance',
      'universal': 'Universal_life_insurance',
      'long': 'Long_term_care_insurance',
      'disability': 'Disability_insurance',
      'registered': 'Registered_Retirement_Savings_Plan',
      'tax': 'Tax_free_Saving_Account',
      'education': 'Registered_Education_Savings_plan'
    };

    const selected = this.selected;
    const selectedLabel = Object.keys(contentMapping).find(key => key === selected);
    if (selectedLabel) {
      const value = contentMapping[selectedLabel];
      this.selectedLabel = value;
    }
  }

  getLangAndData() {
    this.isLoading = true;
    const lang = this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;

      const getData = this.personalService.getPersonalContent(this.currentLanguage, 'life-financial')
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          if (Array.isArray(res) && res.length > 0) {
                this.individualData = res.map(item => {
                  return {
                    ...item,
                    originalText: item.text,
                    text: this.sanitizer.bypassSecurityTrustHtml(item.text)
                  };
                });
            }
        },
        error => {
          this.isLoading = false;
          console.error('Error fetching data', error);
        }
      );

      this.subscriptions.add(getData);
    });
      this.subscriptions.add(lang)
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  showContent(contentId: string) {
    this.selected = contentId;
    this.currentContent = contentId;
  }

  isLoggedIn(): boolean {
    const token = this.loginService.getToken();
    if (token) {
      return true;
    }
    return false;
  }

  toggleEdit() {
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

    this.isEditing = false;
    this.cancelEdit = 'Edit';
    this.isEditable = false;

    const addData = this.personalService.updatePersonalContent(this.currentLanguage, 'life-financial', subCategory, dataItem.originalText)
      .subscribe( () => {
        this.getLangAndData();
      }, error => {
        console.error('Error updating content for item:', error);
      });

      this.subscriptions.add(addData);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showContentMobile(contentId: string, label: string) {
    this.selected = contentId;
    this.currentContent = contentId;
    this.selectedLabel = label;
    this.isMenuOpen = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
