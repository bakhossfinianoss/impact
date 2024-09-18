import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/layout/language/language.service';
import { PersonalService } from './personal.service';
import { Content } from '../inssurance-class';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'src/app/back-office/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-insurrance',
  templateUrl: './personal-insurrance.component.html',
  styleUrls: ['./personal-insurrance.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInsurranceComponent implements OnInit, OnDestroy  {

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
    private subscriptions: Subscription = new Subscription();

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
          const tag = params.get('tag');
          if(tag) {
            this.showContent(tag);
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

    getLangAndData() {
      this.isLoading = true;
      const languageSub = this.languageService.currentLanguage$.subscribe(language => {
        this.languageService.loadTranslations(language);
        this.currentLanguage = language;

        const contentSub = this.personalService.getPersonalContent(this.currentLanguage, 'individual')
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

        this.subscriptions.add(contentSub);
      });
        this.subscriptions.add(languageSub);
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

      const saveSub = this.personalService.updatePersonalContent(this.currentLanguage, 'individual', subCategory, dataItem.originalText)
        .subscribe( () => {
          this.getLangAndData();
        }, error => {
          console.error('Error updating content for item:', error);
        });

        this.subscriptions.add(saveSub);
    }

    ngOnDestroy() {
      this.subscriptions.unsubscribe();
    }
}


