import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
import { MatDialog } from '@angular/material/dialog';
import { DynamicPopupComponent } from '../dynamic-popup/dynamic-popup.component';
import { LanguageService } from '../layout/language/language.service';
import { SubmitClaimComponent } from '../submit-claim/submit-claim.component';

register();

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, AfterViewInit {
  currentLanguage: string = 'en';

  constructor(public dialog: MatDialog,
    private languageService: LanguageService
  ) {}

  faStar = faStar
  faStarHalfStroke = faStarHalfStroke;
  currentIndex = 0;
  transformStyle = `translateX(0%)`;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('constructionVideoPlayer') constructionVideoPlayer!: ElementRef;

  automobile = `${environment.baseHref}assets/svg/automobile.svg`;
  condo = `${environment.baseHref}assets/svg/condo.svg`;
  home = `${environment.baseHref}assets/svg/home.svg`;
  tenant = `${environment.baseHref}assets/svg/tenant.svg`;
  commercialAuto = `${environment.baseHref}assets/svg/commercial-auto.svg`;
  lifeInsurrance = `${environment.baseHref}assets/svg/life-insurrance.svg`;
  commerce = `${environment.baseHref}assets/svg/commerce.svg`;
  moto = `${environment.baseHref}assets/svg/moto.svg`;

  cardBreakpoints = {
    320: { slidesPerView: 1 },  // Extra small screens (<= 320px)
    640: { slidesPerView: 2 },  // Small screens (<= 640px)
    768: { slidesPerView: 2 },  // Medium screens (<= 768px)
    1024: { slidesPerView: 3 }  // Large screens (<= 1024px and above)
  };

  breakpoints = {
    320: { slidesPerView: 1 },  // Extra small screens (<= 320px)
    640: { slidesPerView: 2 },  // Small screens (<= 640px)
    768: { slidesPerView: 3 },  // Medium screens (<= 768px)
    1024: { slidesPerView: 4 }  // Large screens (<= 1024px and above)
  };

  ngOnInit(): void {
    setInterval(() => {
      this.showNextCard();
    }, 3000);

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.muted = true;
    video.loop = true;
    video.play().catch(error => {
      console.error('Error attempting to play video:', error);
    });

    const constructionVideoPlayer: HTMLVideoElement = this.constructionVideoPlayer.nativeElement;
    constructionVideoPlayer.muted = true;
    constructionVideoPlayer.loop = true;
    constructionVideoPlayer.play().catch(error => {
      console.error('Error attempting to play video:', error);
    });

  }

  cards = [
    {
      name: 'Isabella M',
      username: '@username',
      review: 'It is easy to find coverage that meets our needs, and the price is very competitive. I am satisfied with my experience, so I recommend Impact!'
    },
    {
      name: 'Marcel Manoukian',
      username: '★★★★☆',
      review: 'I was looking for a new home insurance plan and after doing some research I found out about Impactco. I reached out to them and they were very responsive, which is what I needed in a business. The price they gave me was also better than anyone else I contacted.'
    },
    {
      name: 'Ferdynand',
      username: '★★★★★',
      review: "I've been with Impactco for a few years now. I don't have kids or anything, so I feel like that might be why the rates are better than most other places I called. But the customer service is really great too, they really take care of you if you have any problems. They are always willing to help me out too!"
    },
    {
      name: 'John Doe',
      username: '@johndoe',
      review: 'Amazing service, highly recommend it to anyone looking for great customer support and competitive prices.'
    },
    {
      name: 'Jane Smith',
      username: '@janesmith',
      review: 'A wonderful experience from start to finish. The team was very helpful and responsive.'
    }
  ];

  cardsFr = [
        {
          name: 'Isabella M',
          username: '@username',
          review: 'Il est facile de trouver une protection qui corresponde à nos besoins, et le prix est très compétitif. Je suis satisfaite de mon expérience, donc je recommande Impact!'
    },
    {
          name: 'Marcel Manoukian',
          username: '★★★★☆',
          review: "Je cherchais un nouveau plan d'assurance habitation et après avoir fait quelques recherches, j'ai découvert Impactco. Je les ai contactés et ils ont été très réactifs, ce qui est ce dont j'avais besoin dans une entreprise. Le prix qu'ils m'ont donné était également meilleur que celui de tous les autres que j'ai contactés."
    },
    {
          name: 'Ferdynand',
          username: '★★★★★',
          review: "Je suis avec Impactco depuis quelques années maintenant. Je n'ai pas d'enfants ni rien, donc je pense que c'est peut-être pour cela que les tarifs sont meilleurs que dans la plupart des autres endroits que j'ai appelés. Mais le service client est vraiment excellent aussi, ils prennent vraiment soin de vous si vous avez des problèmes. Ils sont toujours prêts à m'aider aussi!"
    },
    {
          name: 'John Doe',
          username: '@johndoe',
          review: "Service incroyable, je le recommande vivement à tous ceux qui recherchent un excellent support client et des prix compétitifs."
    },
    {
          name: 'Jane Smith',
          username: '@janesmith',
          review: "Une expérience merveilleuse du début à la fin. L'équipe a été très serviable et réactive."
    }
  ]

  partners = [
    {
      logo: 'assets/partners-logo/SUM.jpg',
      name: 'Sum assurance'
    },
    {
      logo: 'assets/partners-logo/SGL_TravelInsurance.svg',
      name: 'Securiglobe'
    },
    {
      logo: 'assets/partners-logo/IA_Financial_Group-Logo.wine.png',
      name: 'Industrielle Alliance'
    },
    {
      logo: 'assets/partners-logo/paflogo.svg',
      name: 'PAFCO'
    },
    {
      logo: 'assets/partners-logo/logo-promutuel.png',
      name: 'Promutuel assurance'
    },
    {
      logo: 'assets/partners-logo/logo-fr.svg',
      name: 'Intact insurance'
    },
    {
      logo: 'assets/partners-logo/logo-april.svg',
      name: 'April'
    },
    {
      logo: 'assets/partners-logo/lunique-logo-en-2.svg',
      name: `L'unique`
    }
  ]

  showNextCard(): void {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.transformStyle = `translateX(-${this.currentIndex * 100 / 3}%)`;
  }

  myRenewal() {
    const dialogRef = this.dialog.open(DynamicPopupComponent, {
      data: { /* data can be passed here */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  submitClaim() {
    const dialogRef = this.dialog.open(SubmitClaimComponent, {
      data: { /* data can be passed here */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
