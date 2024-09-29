import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../layout/language/language.service';
import { register } from 'swiper/element/bundle';
import { environment } from 'src/environments/environment';

register();

@Component({
  selector: 'app-claim-page',
  templateUrl: './claim-page.component.html',
  styleUrls: ['./claim-page.component.css']
})
export class ClaimPageComponent implements OnInit {

  constructor(private languageService: LanguageService) {}
  currentLanguage: string = 'en';
  one = `${environment.baseHref}assets/one.png`;
  two = `${environment.baseHref}assets/two.png`;
  three = `${environment.baseHref}assets/three.png`;

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  breakpoints = {
    320: { slidesPerView: 1 },  // Extra small screens (<= 320px)
    640: { slidesPerView: 2 },  // Small screens (<= 640px)
    768: { slidesPerView: 3 },  // Medium screens (<= 768px)
    1024: { slidesPerView: 4 }  // Large screens (<= 1024px and above)
  };

  partners = [
    {
      logo: `${environment.baseHref}assets/partners-logo/SUM.jpg`,
      number: 'Sum assurance'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/SGL_TravelInsurance.svg`,
      number: 'Securiglobe'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/IA_Financial_Group-Logo.wine.png`,
      number: 'Industrielle Alliance'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/paflogo.svg`,
      number: '1-877-463-2727'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/logo-promutuel.png`,
      number: '1-888 888-1229'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/logo-fr.svg`,
      number: '1-866-464-2424'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/logo-april.svg`,
      number: '1-855-745-1010'
    },
    {
      logo: `${environment.baseHref}assets/partners-logo/lunique-logo-en-2.svg`,
      number: `1-800 463-4800`
    }
  ]

  emergencyContacts = [
    { company: 'Aviva', phone: '1-866-692-8482' },
    { company: 'April', phone: '1-855-745-1010' },
    { company: 'Chubb', phone: '1-800-532-4822' },
    { company: 'La Garantie', phone: '1-888-998-1872' },
    { company: 'L’Unique', phone: '1-800-463-4800' },
    { company: 'Northbridge', phone: '514-843-1111' },
    { company: 'Definity', phone: '1-888-875-8088' },
    { company: 'Optimum', phone: '1-800-361-7653' },
    { company: 'Echelon', phone: '1-888-662-0222' },
    { company: 'Pafco', phone: '1-877-463-2727' },
    { company: 'Intact', phone: '1-866-464-2424' },
    { company: 'Promutuel', phone: '1-888-888-1229' }
  ];

  // FAQ data
  faqsEn = [
    {
      question: 'What is the process for filing an insurance claim?',
      answer: 'To file an insurance claim, first, notify your insurance company about the incident as soon as possible. Fill out a claim form and provide necessary documentation, such as photos, repair estimates, and a detailed description of the loss or damage. Your insurer will then review the claim and may send an adjuster to assess the damage before making a decision.',
      open: false
    },
    {
      question: 'What information do I need to provide when filing a claim?',
      answer: 'You will need to provide details about the incident (date, time, and location), a description of the damage or loss, any relevant documentation (like police reports or repair bills), and proof of ownership or value of the damaged property. For health claims, you may also need medical records and bills.',
      open: false
    },
    {
      question: 'How long does it take to process a claim?',
      answer: 'The processing time can vary based on the complexity of the claim and the insurer’s workload. Simple claims might be processed in a few weeks, while more complex ones can take several months. Your insurance company should provide you with an estimated timeline and updates throughout the process.',
      open: false
    },
    {
      question: 'What types of claims are covered by my policy?',
      answer: 'Coverage varies depending on your policy type and specifics. Common types include property damage, auto accidents, health expenses, and liability claims. Review your policy documents or contact your insurer to understand what is covered and any exclusions that apply.',
      open: false
    },
    {
      question: 'How much will my insurance payout be?',
      answer: 'The payout amount depends on your policy limits, deductibles, and the extent of the damage or loss. Your insurer will evaluate the claim based on the policy terms and coverage limits. You should receive a detailed explanation of how the payout amount was calculated.',
      open: false
    },
    {
      question: 'What happens if my claim is denied?',
      answer: 'If your claim is denied, the insurer should provide a written explanation detailing why. You have the right to appeal the decision by providing additional information or documentation. Review the denial letter for instructions on how to appeal, and consider contacting your insurance company for further clarification.',
      open: false
    },
    {
      question: 'Will filing a claim affect my premium?',
      answer: 'In many cases, filing a claim may lead to higher premiums, as insurers may consider you a higher risk. However, this varies by insurer and claim type. Some policies offer accident forgiveness or other benefits that might mitigate the impact on your premium.',
      open: false
    },
    {
      question: 'Can I make changes to my claim after it has been submitted?',
      answer: 'Yes, you can update or amend your claim if you have new information or documentation. Contact your insurance company to inform them of the changes and provide any additional supporting materials.',
      open: false
    },
    {
      question: 'How do I track the status of my claim?',
      answer: 'You can track your claim status by contacting your insurance company directly or using their online portal if available. Insurers often provide updates via email, phone, or through their website, so make sure to check your communication channels regularly.',
      open: false
    },
    {
      question: 'What should I do if I disagree with the settlement offer?',
      answer: 'If you disagree with the settlement offer, you can negotiate with your insurer by providing additional evidence or documentation to support your case. You can also request a review or appraisal if your policy allows for it. If necessary, you might seek assistance from a public adjuster or legal counsel.',
      open: false
    }
  ];

  faqsFr = [
    {
      question: 'Quel est le processus pour déposer une demande d\'indemnisation d\'assurance ?',
      answer: 'Pour déposer une demande d\'indemnisation, commencez par informer votre compagnie d\'assurance de l\'incident dès que possible. Remplissez un formulaire de demande et fournissez les documents nécessaires, tels que des photos, des devis de réparation, et une description détaillée de la perte ou des dommages. Votre assureur examinera ensuite la demande et pourra envoyer un expert pour évaluer les dommages avant de prendre une décision.',
      open: false
    },
    {
      question: 'Quelles informations dois-je fournir lors de la soumission d\'une demande ?',
      answer: 'Vous devrez fournir des détails sur l\'incident (date, heure et lieu), une description des dommages ou de la perte, toute documentation pertinente (comme des rapports de police ou des factures de réparation), et une preuve de propriété ou de la valeur de la propriété endommagée. Pour les demandes de santé, vous devrez également fournir des dossiers médicaux et des factures.',
      open: false
    },
    {
      question: 'Combien de temps faut-il pour traiter une demande ?',
      answer: 'Le délai de traitement peut varier en fonction de la complexité de la demande et de la charge de travail de l\'assureur. Les demandes simples peuvent être traitées en quelques semaines, tandis que les demandes plus complexes peuvent prendre plusieurs mois. Votre compagnie d\'assurance devrait vous fournir un délai estimé et des mises à jour tout au long du processus.',
      open: false
    },
    {
      question: 'Quels types de demandes sont couverts par ma police ?',
      answer: 'La couverture varie en fonction du type de police et des spécificités. Les types courants comprennent les dommages matériels, les accidents automobiles, les frais de santé et les demandes de responsabilité. Consultez vos documents de police ou contactez votre assureur pour comprendre ce qui est couvert et les exclusions éventuelles.',
      open: false
    },
    {
      question: 'Quel sera le montant de mon indemnisation ?',
      answer: 'Le montant de l\'indemnisation dépend des limites de votre police, des franchises et de l\'étendue des dommages ou de la perte. Votre assureur évaluera la demande en fonction des conditions de la police et des limites de couverture. Vous devriez recevoir une explication détaillée de la manière dont le montant de l\'indemnisation a été calculé.',
      open: false
    },
    {
      question: 'Que se passe-t-il si ma demande est rejetée ?',
      answer: 'Si votre demande est rejetée, l\'assureur devrait fournir une explication écrite détaillant les raisons du rejet. Vous avez le droit de faire appel de la décision en fournissant des informations ou des documents supplémentaires. Consultez la lettre de rejet pour obtenir des instructions sur la procédure de recours, et envisagez de contacter votre compagnie d\'assurance pour des clarifications supplémentaires.',
      open: false
    },
    {
      question: 'Le dépôt d\'une demande affectera-t-il ma prime ?',
      answer: 'Dans de nombreux cas, le dépôt d\'une demande peut entraîner une augmentation des primes, car les assureurs peuvent vous considérer comme un risque plus élevé. Cependant, cela varie selon l\'assureur et le type de demande. Certaines polices offrent des avantages comme la protection contre les accidents qui peuvent atténuer l\'impact sur votre prime.',
      open: false
    },
    {
      question: 'Puis-je modifier ma demande après l\'avoir soumise ?',
      answer: 'Oui, vous pouvez mettre à jour ou modifier votre demande si vous avez de nouvelles informations ou documents. Contactez votre compagnie d\'assurance pour les informer des changements et fournir tout matériel de soutien supplémentaire.',
      open: false
    },
    {
      question: 'Comment suivre l\'état de ma demande ?',
      answer: 'Vous pouvez suivre l\'état de votre demande en contactant directement votre compagnie d\'assurance ou en utilisant leur portail en ligne si disponible. Les assureurs fournissent souvent des mises à jour par courriel, téléphone ou via leur site Web, donc assurez-vous de vérifier régulièrement vos canaux de communication.',
      open: false
    },
    {
      question: 'Que dois-je faire si je ne suis pas d\'accord avec l\'offre de règlement ?',
      answer: 'Si vous n\'êtes pas d\'accord avec l\'offre de règlement, vous pouvez négocier avec votre assureur en fournissant des preuves ou des documents supplémentaires pour soutenir votre cas. Vous pouvez également demander une révision ou une évaluation si votre police le permet. Si nécessaire, vous pourriez demander l\'aide d\'un expert en sinistres ou de conseils juridiques.',
      open: false
    }
  ];

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
  // Toggle FAQ answer visibility
  toggleAnswer(faq: any) {
    faq.open = !faq.open;
  }
}
