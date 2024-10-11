import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
import { MatDialog } from '@angular/material/dialog';
import { DynamicPopupComponent } from '../dynamic-popup/dynamic-popup.component';
import { LanguageService } from '../layout/language/language.service';
import { SubmitClaimComponent } from '../submit-claim/submit-claim.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IntersectionObserverService } from '../intersection-observer.service';
import { ResizeService } from '../resize-service.service';
import { Subscription, fromEvent, map, throttleTime } from 'rxjs';

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

export class HomeContentComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(public dialog: MatDialog,
    private languageService: LanguageService,
    private intersectionObserverService: IntersectionObserverService,
    private resizeService: ResizeService
  ) {}

  currentLanguage: string = 'en';
  showSmallLogo = false;
  faStar = faStar
  faStarHalfStroke = faStarHalfStroke;
  currentIndex = 0;
  transformStyle = `translateX(0%)`;
  lastScrollTop = 0;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('constructionVideoPlayer') constructionVideoPlayer!: ElementRef;
  @ViewChild('bigLogo', { static: true }) bigLogo!: ElementRef;
  isVisible = true; // Control the animation state
  isMobile: boolean = false;
  scaleValue: number = 1;
  scrollSubscription!: Subscription;

  automobile = `${environment.baseHref}assets/svg/automobile.svg`;
  condo = `${environment.baseHref}assets/svg/condo.svg`;
  home = `${environment.baseHref}assets/svg/home.svg`;
  tenant = `${environment.baseHref}assets/svg/tenant.svg`;
  commercialAuto = `${environment.baseHref}assets/svg/commercial-auto.svg`;
  lifeInsurrance = `${environment.baseHref}assets/svg/life-insurrance.svg`;
  commerce = `${environment.baseHref}assets/svg/commerce.svg`;
  moto = `${environment.baseHref}assets/svg/moto.svg`;
  bigLogoImg = `${environment.baseHref}assets/ImpactInsurance_Logo4-300x110.png`;
  mainVideo = `${environment.baseHref}assets/home-video.mp4`;
  claimVideo = `${environment.baseHref}assets/Construction_Insurance.mp4`;

  cardBreakpoints = {
    320: { slidesPerView: 1 },  // Extra small screens (<= 320px)
    640: { slidesPerView: 2 },  // Small screens (<= 640px)
    768: { slidesPerView: 2 },  // Medium screens (<= 768px)
    1024: { slidesPerView: 3 }  // Large screens (<= 1024px and above)
  };

  ngOnInit(): void {
    setInterval(() => {
      this.showNextCard();
    }, 3000);

    this.languageService.currentLanguage$.subscribe(language => {
      this.languageService.loadTranslations(language);
      this.currentLanguage = language;
    });

    this.getSize();
    this.scrollZoomOut();
  }

  getSize() {
    this.resizeService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  scrollZoomOut() {
       this.scrollSubscription = fromEvent(window, 'scroll')
       .pipe(
         throttleTime(50),  // Throttle to improve performance (adjust time as needed)
         map(() => window.pageYOffset),  // Get the scroll position
         map((scrollPosition) => {
           // Calculate the new scale based on scroll position
           let newScale = 1 - scrollPosition / 1000;  // Adjust the divisor for zoom rate
           return newScale < 0.5 ? 0.5 : newScale;  // Limit the minimum zoom-out scale to 0.5
         })
       )
       .subscribe((newScale) => {
         this.scaleValue = newScale;  // Update the scale value based on scroll
       });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  onVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.intersectionObserverService.notifyVisibilityChange(false);
    } else {
      this.intersectionObserverService.notifyVisibilityChange(true);
    }
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

    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.removeAttribute('controls'); // Ensure controls are removed
    }
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
      review: 'I was looking for a new home insurance plan and after doing some research I found out about Impactco. I reached out to them and they were very responsive, which is what I needed in a business.'
    },
    {
      name: 'Ferdynand',
      username: '★★★★★',
      review: "I've been with Impactco for a few years now. I don't have kids or anything, so I feel like that might be why the rates are better than most other places I called. But the customer service is really great too, they really take care of you if you have any problems."
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
          review: "Je cherchais un nouveau plan d'assurance habitation et après avoir fait quelques recherches, j'ai découvert Impactco. Je les ai contactés et ils ont été très réactifs, ce qui est ce dont j'avais besoin dans une entreprise."
    },
    {
          name: 'Ferdynand',
          username: '★★★★★',
          review: "Je suis avec Impactco depuis quelques années maintenant. Je n'ai pas d'enfants ni rien, donc je pense que c'est peut-être pour cela que les tarifs sont meilleurs que dans la plupart des autres endroits que j'ai appelés. Mais le service client est vraiment excellent aussi, ils prennent vraiment soin de vous si vous avez des problèmes."
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

  faqsAutomobileEn = [
    {
      question: 'What is automobile insurance in Quebec?',
      answer: 'Automobile insurance in Quebec is mandatory for all drivers. It includes basic coverage from the Société de l’assurance automobile du Québec (SAAQ) for personal injury and medical care, and additional options for property damage and liability, available through private insurers.',
      open: false
    },
    {
      question: 'How do I get the best home insurance in Quebec?',
      answer: 'The “best” home insurance in Quebec is a subjective phrase, considering that everyone will have different needs. Getting better home insurance may mean enhancing your coverage to ensure everything you own is sufficiently protected from exposures. Consider endorsements like flood or earthquake insurance. If you’re looking for affordability, your best bet is to work with a brokerage like ImpactCo to find competitive rates that are unparalleled in the insurance sphere.',
      open: false
    },
    {
      question: 'Is it required to have condo insurance in Quebec?',
      answer: 'No, but there are some situations where a condo corporation may require you to possess condo insurance before they’ll allow you to sign any contract, or if you have a mortgage. Most of the time, condo insurance is only recommended.',
      open: false
    },
    {
      question: 'Why is it important to have tenant insurance in Quebec?',
      answer: 'Because it will cover your personal property if disaster strikes. Too few people know how expensive their property can be cumulatively and if something happens, such as a fire or a storm event, they’d be left on the hook to pay the costs out-of-pocket. Tenant insurance saves you from that responsibility.',
      open: false
    },
    {
      question: 'What is the process for filing an insurance claim?',
      answer: 'To file an insurance claim, first, notify your insurance company about the incident as soon as possible. Fill out a claim form and provide necessary documentation, such as photos, repair estimates, and a detailed description of the loss or damage. Your insurer will then review the claim and may send an adjuster to assess the damage before making a decision.',
      open: false
    }
  ];

  faqsAutomobileFr = [
    {
      question: "Qu'est-ce que l'assurance automobile au Québec ?",
      answer: "L'assurance automobile au Québec est une couverture obligatoire pour tous les conducteurs, qui inclut une assurance de base fournie par la Société de l'assurance automobile du Québec (SAAQ) pour les dommages corporels et les soins médicaux, ainsi que des options pour les dommages matériels et la responsabilité civile, disponible via des assureurs privés.",
      open: false
    },
    {
      question: 'Comment obtenir la meilleure assurance habitation au Québec ?',
      answer: "La « meilleure » assurance habitation au Québec est une expression subjective, considérant que chacun aura des besoins différents. Obtenir une meilleure assurance habitation peut signifier améliorer votre couverture pour vous assurer que tout ce que vous possédez est suffisamment protégé contre les risques. Envisagez des avenants comme une assurance contre les inondations ou les tremblements de terre. Si vous recherchez un prix abordable, votre meilleur pari est de travailler avec une maison de courtage comme Impact Assurance pour trouver des tarifs compétitifs sans précédent dans le domaine de l'assurance.",
      open: false
    },
    {
      question: 'Est-il obligatoire d\'avoir une assurance condo au Québec ?',
      answer: "Non, mais il existe certaines situations où une association de copropriétaires peut exiger que vous possédiez une assurance copropriété avant de vous permettre de signer un contrat, ou si vous avez une hypothèque. La plupart du temps, l'assurance copropriété est seulement recommandée.",
      open: false
    },
    {
      question: 'Pourquoi est-il important d\'avoir une assurance locataire au Québec ?',
      answer: "Parce qu'il couvrira vos biens personnels en cas de catastrophe. Trop peu de gens savent à quel point leur propriété peut coûter de manière cumulative et si quelque chose se produit, comme un incendie ou une tempête, ils seraient obligés de payer les coûts de leur poche. L'assurance locataire vous évite cette responsabilité.",
      open: false
    },
    {
      question: 'Quel est le processus pour déposer une demande d\'indemnisation d\'assurance ?',
      answer: "Pour déposer une demande d'indemnisation, commencez par informer votre compagnie d'assurance de l'incident dès que possible. Remplissez un formulaire de demande et fournissez les documents nécessaires, tels que des photos, des devis de réparation, et une description détaillée de la perte ou des dommages. Votre assureur examinera ensuite la demande et pourra envoyer un expert pour évaluer les dommages avant de prendre une décision.",
      open: false
    }
  ];

  toggleAnswer(faq: any) {
    faq.open = !faq.open;
  }

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

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
