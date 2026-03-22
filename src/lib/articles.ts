export interface Article {
  id: number;
  slug: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: string;
  emoji: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'sap-s4hana-2026-tendances',
    titleFr: 'SAP S/4HANA 2026 : Les grandes tendances à surveiller',
    titleEn: 'SAP S/4HANA 2026: Key Trends to Watch',
    excerptFr: "L'année 2026 marque un tournant pour l'écosystème SAP avec l'IA générative embarquée, la clean core strategy et la montée en puissance de SAP BTP.",
    excerptEn: "2026 marks a turning point for the SAP ecosystem with embedded generative AI, clean core strategy and the rise of SAP BTP.",
    contentFr: `2026 s'annonce comme une année charnière pour les entreprises utilisant SAP. Les grandes évolutions technologiques portées par SAP redéfinissent la manière dont les organisations pilotent leurs opérations.

## L'IA générative au cœur de SAP

SAP Joule, l'assistant IA générative de SAP, est désormais disponible dans la quasi-totalité des modules S/4HANA. Les cas d'usage se multiplient : génération automatique de rapports financiers, recommandations d'achat en langage naturel, détection proactive des anomalies comptables.

En 2026, SAP annonce l'extension de Joule aux processus RH (SuccessFactors) et à la gestion de la chaîne d'approvisionnement (IBP), ouvrant la voie à une automatisation encore plus poussée.

## Clean Core : la stratégie incontournable

La stratégie "Clean Core" de SAP devient un impératif pour les entreprises souhaitant migrer vers S/4HANA Cloud. L'objectif : réduire les customisations non standards pour faciliter les mises à jour continues et l'adoption des nouvelles fonctionnalités.

Cette approche change profondément la manière dont les intégrateurs SAP travaillent, favorisant les extensions via SAP BTP plutôt que les modifications directes du code standard.

## SAP BTP : la plateforme centrale

SAP Business Technology Platform (BTP) s'impose comme la colonne vertébrale des architectures SAP modernes. Elle permet de connecter SAP à des systèmes tiers, de déployer des extensions métier sans toucher au core, et d'orchestrer des workflows complexes.

## Conclusion

Les entreprises qui anticipent ces évolutions en 2026 prendront une longueur d'avance. La clé : adopter une approche progressive, en commençant par auditer son paysage SAP actuel avant d'engager toute transformation.`,
    contentEn: `2026 is shaping up to be a pivotal year for SAP users. The major technological evolutions driven by SAP are redefining how organizations manage their operations.

## Generative AI at the Heart of SAP

SAP Joule, SAP's generative AI assistant, is now available across virtually all S/4HANA modules. Use cases are multiplying: automatic financial report generation, natural language purchasing recommendations, proactive anomaly detection.

## Clean Core: The Essential Strategy

SAP's "Clean Core" strategy is becoming imperative for companies looking to migrate to S/4HANA Cloud. The goal: reduce non-standard customizations to facilitate continuous updates and adoption of new features.

## SAP BTP: The Central Platform

SAP Business Technology Platform (BTP) is establishing itself as the backbone of modern SAP architectures, enabling connection to third-party systems and deployment of business extensions without touching the core.

## Conclusion

Companies that anticipate these developments in 2026 will gain a competitive edge. The key: adopt a progressive approach, starting with an audit of the current SAP landscape before engaging in any transformation.`,
    category: 'Innovation', categoryEn: 'Innovation',
    date: '2026-01-15', readTime: '5 min', emoji: '🚀',
  },
  {
    id: 2,
    slug: 'migration-ecc-s4hana-2027-deadline',
    titleFr: 'Migration ECC vers S/4HANA : la deadline 2027 approche',
    titleEn: 'ECC to S/4HANA Migration: The 2027 Deadline is Approaching',
    excerptFr: "SAP met fin au support mainstream de SAP ECC en 2027. Ce que les entreprises doivent savoir et comment se préparer efficacement.",
    excerptEn: "SAP is ending mainstream support for SAP ECC in 2027. What companies need to know and how to prepare effectively.",
    contentFr: `La fin du support mainstream de SAP ECC 6.0 est prévue pour le 31 décembre 2027. Cette échéance, longtemps repoussée, est désormais ferme. Les entreprises encore sur ECC doivent agir maintenant.

## Ce que signifie la fin du support

À partir de 2028, SAP ne fournira plus de correctifs de sécurité ni de nouvelles fonctionnalités pour ECC. Les entreprises pourront souscrire à un support étendu payant, mais à un coût significativement plus élevé.

Les risques pour les entreprises non migrées :
- Vulnérabilités de sécurité non corrigées
- Incompatibilité croissante avec les nouvelles versions des systèmes d'exploitation et bases de données
- Impossibilité d'accéder aux nouvelles fonctionnalités SAP (IA, BTP, etc.)

## Les options disponibles

### Option 1 : Migration Greenfield
Réimplémentation complète sur S/4HANA. Plus long et coûteux, mais permet une remise à plat des processus et l'adoption des meilleures pratiques SAP.

### Option 2 : Migration Brownfield
Conversion technique du système ECC existant vers S/4HANA. Plus rapide, préserve l'historique des données, mais conserve les customisations existantes.

### Option 3 : Selective Data Transition
Approche hybride permettant de combiner migration technique et réorganisation partielle des processus.

## Par où commencer ?

La première étape est systématiquement un audit du paysage SAP existant : inventaire des modules actifs, des customisations, des interfaces et du volume de données. C'est cet audit qui déterminera la stratégie de migration la plus adaptée.

## Conclusion

Avec 2027 en ligne de mire, le temps presse. Les projets de migration S/4HANA durent en moyenne 12 à 24 mois. Les entreprises qui n'ont pas encore démarré leur réflexion doivent agir sans tarder.`,
    contentEn: `The end of mainstream support for SAP ECC 6.0 is scheduled for December 31, 2027. This long-delayed deadline is now firm. Companies still on ECC must act now.

## What End of Support Means

From 2028, SAP will no longer provide security patches or new features for ECC. Companies can subscribe to extended paid support, but at significantly higher costs.

## Available Options

### Option 1: Greenfield Migration
Complete reimplementation on S/4HANA. Longer and more costly, but allows process redesign and adoption of SAP best practices.

### Option 2: Brownfield Migration
Technical conversion of the existing ECC system to S/4HANA. Faster, preserves data history, but retains existing customizations.

### Option 3: Selective Data Transition
Hybrid approach combining technical migration with partial process reorganization.

## Conclusion

With 2027 in sight, time is pressing. S/4HANA migration projects average 12 to 24 months. Companies that haven't started planning must act without delay.`,
    category: 'Migration', categoryEn: 'Migration',
    date: '2026-01-08', readTime: '6 min', emoji: '☁️',
  },
  {
    id: 3,
    slug: 'sap-joule-ia-generative-2026',
    titleFr: 'SAP Joule : l\'IA générative qui transforme l\'ERP en 2026',
    titleEn: 'SAP Joule: The Generative AI Transforming ERP in 2026',
    excerptFr: "SAP Joule s'impose comme l'assistant IA de référence pour les utilisateurs SAP. Tour d'horizon des fonctionnalités et des cas d'usage concrets en 2026.",
    excerptEn: "SAP Joule is establishing itself as the go-to AI assistant for SAP users. Overview of features and concrete use cases in 2026.",
    contentFr: `SAP Joule, lancé en 2023, a atteint en 2026 une maturité qui en fait un véritable game-changer pour les utilisateurs SAP. Disponible dans plus de 80% des flux de travail S/4HANA, il redéfinit l'interaction homme-machine dans l'ERP.

## Qu'est-ce que SAP Joule ?

SAP Joule est un assistant IA générative intégré nativement à toutes les applications SAP. Contrairement aux chatbots génériques, Joule a accès au contexte métier de l'utilisateur : ses données SAP, son rôle, ses processus habituels.

## Cas d'usage 2026 les plus impactants

### Finance
- Génération de rapports de clôture en langage naturel
- Explication automatique des écarts budgétaires
- Proposition de contre-passations en cas d'anomalie détectée

### Achats & Supply Chain
- Suggestions d'optimisation des commandes fournisseurs
- Analyse automatique des délais de livraison
- Identification proactive des risques de rupture

### RH (SuccessFactors)
- Rédaction automatique de fiches de poste
- Analyse des risques de départ collaborateurs
- Recommandations de formation personnalisées

## Les limites à connaître

Joule n'est pas infaillible. La qualité de ses réponses dépend directement de la qualité des données maîtres SAP. Une donnée mal renseignée génère une recommandation incorrecte.

## Conclusion

SAP Joule représente la convergence entre l'ERP traditionnel et l'IA générative. Les entreprises qui l'adoptent dès maintenant bâtissent un avantage compétitif durable.`,
    contentEn: `SAP Joule, launched in 2023, reached maturity in 2026 making it a true game-changer for SAP users. Available in more than 80% of S/4HANA workflows, it redefines human-machine interaction in ERP.

## What is SAP Joule?

SAP Joule is a generative AI assistant natively integrated into all SAP applications. Unlike generic chatbots, Joule has access to the user's business context: their SAP data, role, and usual processes.

## Most Impactful 2026 Use Cases

### Finance
- Natural language closing report generation
- Automatic budget variance explanations
- Reversal proposals when anomalies are detected

### Procurement & Supply Chain
- Supplier order optimization suggestions
- Automatic delivery time analysis
- Proactive stockout risk identification

## Conclusion

SAP Joule represents the convergence of traditional ERP and generative AI. Companies adopting it now are building a lasting competitive advantage.`,
    category: 'Intelligence Artificielle', categoryEn: 'Artificial Intelligence',
    date: '2025-12-20', readTime: '7 min', emoji: '🤖',
  },
  {
    id: 4,
    slug: 'optimisation-couts-sap-landscape-2026',
    titleFr: 'Optimiser les coûts de son landscape SAP en 2026',
    titleEn: 'Optimizing SAP Landscape Costs in 2026',
    excerptFr: "Face à la hausse des coûts SAP, les entreprises cherchent à rationaliser leur landscape. Stratégies et bonnes pratiques pour réduire les coûts sans sacrifier la performance.",
    excerptEn: "Facing rising SAP costs, companies are looking to rationalize their landscape. Strategies and best practices to reduce costs without sacrificing performance.",
    contentFr: `Les coûts liés aux licences et à l'infrastructure SAP ont sensiblement augmenté ces dernières années. Face à cette réalité, de nombreuses DSI cherchent à optimiser leur landscape sans compromettre la continuité opérationnelle.

## Comprendre la structure des coûts SAP

Les coûts d'un landscape SAP se décomposent en trois grandes catégories :
- **Licences** : coût des utilisateurs nommés et des modules activés
- **Infrastructure** : serveurs, bases de données HANA, stockage
- **Opérations** : maintenance, support, évolutions

## Stratégies d'optimisation en 2026

### 1. Audit des licences
Un audit régulier des licences permet d'identifier les utilisateurs inactifs, les modules suractivés et les opportunités de reclassement vers des types de licences moins coûteux. En pratique, les entreprises récupèrent en moyenne 15 à 25% de licences inutilisées.

### 2. Rationalisation des systèmes
De nombreuses entreprises maintiennent des paysages SAP complexes avec des dizaines de systèmes. La consolidation de ces systèmes réduit les coûts d'infrastructure et de maintenance tout en simplifiant les interfaces.

### 3. Passage au cloud
Le modèle SaaS de SAP S/4HANA Cloud transforme les coûts fixes en coûts variables, offrant une meilleure prévisibilité budgétaire et éliminant les coûts d'infrastructure on-premise.

### 4. Réduction des interfaces personnalisées
Chaque interface personnalisée a un coût de maintenance. L'adoption des API standard SAP et des connecteurs BTP réduit significativement ce poste.

## Visibilité sur le landscape

Un problème fréquent : les DSI manquent de visibilité sur leur propre landscape SAP. Quels systèmes sont réellement utilisés ? Quelles interfaces sont actives ? Quels processus génèrent le plus de coûts ?

Des outils de gouvernance du landscape, comme Clean Core, permettent d'obtenir cette visibilité et d'identifier les optimisations prioritaires.

## Conclusion

L'optimisation des coûts SAP n'est pas un projet one-shot. C'est un processus continu qui nécessite une visibilité permanente sur le landscape et une gouvernance rigoureuse.`,
    contentEn: `SAP license and infrastructure costs have risen significantly in recent years. Faced with this reality, many IT departments are looking to optimize their landscape without compromising operational continuity.

## Understanding SAP Cost Structure

SAP landscape costs break down into three main categories:
- **Licenses**: named user costs and activated modules
- **Infrastructure**: servers, HANA databases, storage
- **Operations**: maintenance, support, developments

## 2026 Optimization Strategies

### 1. License Audit
Regular license audits identify inactive users, over-activated modules, and reclassification opportunities. In practice, companies recover an average of 15-25% of unused licenses.

### 2. System Rationalization
Many companies maintain complex SAP landscapes with dozens of systems. Consolidating these systems reduces infrastructure and maintenance costs while simplifying interfaces.

### 3. Move to Cloud
SAP S/4HANA Cloud's SaaS model transforms fixed costs into variable costs, offering better budget predictability.

### 4. Landscape Visibility
A common problem: IT departments lack visibility into their own SAP landscape. Governance tools allow obtaining this visibility and identifying priority optimizations.

## Conclusion

SAP cost optimization is not a one-shot project. It's a continuous process requiring permanent landscape visibility and rigorous governance.`,
    category: 'Innovation', categoryEn: 'Innovation',
    date: '2025-12-05', readTime: '7 min', emoji: '💡',
  },
  {
    id: 5,
    slug: 'sap-btp-integration-2026',
    titleFr: 'SAP BTP : la plateforme d\'intégration incontournable en 2026',
    titleEn: 'SAP BTP: The Essential Integration Platform in 2026',
    excerptFr: "SAP Business Technology Platform s'impose comme le hub d'intégration central des architectures SAP modernes. Pourquoi et comment l'adopter.",
    excerptEn: "SAP Business Technology Platform is establishing itself as the central integration hub of modern SAP architectures. Why and how to adopt it.",
    contentFr: `SAP BTP (Business Technology Platform) est devenu en 2026 la pierre angulaire des architectures SAP modernes. Plateforme cloud multi-environnement, elle permet d'étendre SAP, d'intégrer des systèmes tiers et de développer de nouvelles applications métier.

## Qu'est-ce que SAP BTP ?

SAP BTP est une plateforme unifiée qui regroupe plusieurs services clés :
- **Integration Suite** : intégration d'applications et de données
- **Extension Suite** : développement d'extensions métier
- **Data & Analytics** : SAP Analytics Cloud, SAP HANA Cloud
- **AI Services** : services d'intelligence artificielle et de machine learning

## Pourquoi SAP BTP est stratégique en 2026

La stratégie Clean Core de SAP pousse les entreprises à ne plus modifier le code standard SAP, mais à développer leurs extensions sur BTP. Cela permet de rester sur des versions S/4HANA à jour et de bénéficier des nouvelles fonctionnalités sans requalification.

## Cas d'usage prioritaires

### Intégration système
BTP Integration Suite permet de connecter SAP à n'importe quel système tiers (Salesforce, Microsoft 365, systèmes legacy) via des connecteurs prébuilt ou des API personnalisées.

### Extensions métier
Développement d'applications Fiori personnalisées, de workflows approbation, de portails fournisseurs — tout en gardant le core S/4HANA intact.

### Automatisation
Combiné à SAP Build Process Automation, BTP permet d'automatiser des processus métier complexes sans développement ABAP traditionnel.

## Conclusion

SAP BTP n'est plus une option — c'est le socle sur lequel se construisent les architectures SAP de demain. Les entreprises qui investissent aujourd'hui dans sa maîtrise se dotent d'un avantage compétitif durable.`,
    contentEn: `SAP BTP (Business Technology Platform) has become in 2026 the cornerstone of modern SAP architectures. A multi-environment cloud platform, it enables extending SAP, integrating third-party systems, and developing new business applications.

## What is SAP BTP?

SAP BTP is a unified platform grouping several key services:
- **Integration Suite**: application and data integration
- **Extension Suite**: business extension development
- **Data & Analytics**: SAP Analytics Cloud, SAP HANA Cloud
- **AI Services**: artificial intelligence and machine learning services

## Priority Use Cases

### System Integration
BTP Integration Suite connects SAP to any third-party system (Salesforce, Microsoft 365, legacy systems) via prebuilt connectors or custom APIs.

### Business Extensions
Development of custom Fiori applications, approval workflows, supplier portals — while keeping the S/4HANA core intact.

## Conclusion

SAP BTP is no longer optional — it's the foundation on which tomorrow's SAP architectures are built. Companies investing today in mastering it are building a lasting competitive advantage.`,
    category: 'Innovation', categoryEn: 'Innovation',
    date: '2025-11-18', readTime: '6 min', emoji: '🔗',
  },
  {
    id: 6,
    slug: 'clean-core-strategy-sap-2026',
    titleFr: 'Clean Core SAP : stratégie et mise en œuvre en 2026',
    titleEn: 'SAP Clean Core: Strategy and Implementation in 2026',
    excerptFr: "La stratégie Clean Core de SAP redéfinit la manière dont les entreprises personnalisent leur ERP. Principes, enjeux et étapes de mise en œuvre.",
    excerptEn: "SAP's Clean Core strategy is redefining how companies customize their ERP. Principles, challenges, and implementation steps.",
    contentFr: `La stratégie Clean Core est l'une des orientations les plus importantes de SAP pour les années à venir. Elle vise à simplifier les landscapes SAP en réduisant les customisations non standards, facilitant ainsi les migrations et les mises à jour continues.

## Définition du Clean Core

Un système SAP "clean core" est un système dans lequel :
- Le code standard SAP n'est pas modifié
- Les customisations sont limitées aux paramètrages standards (Customizing)
- Les extensions sont développées en dehors du core, sur SAP BTP
- Les intégrations utilisent des API standardisées

## Pourquoi c'est important

Les entreprises avec un core SAP fortement customisé font face à des défis croissants :
- Migrations vers S/4HANA longues et coûteuses
- Impossibilité d'adopter rapidement les nouvelles fonctionnalités
- Risques de régression à chaque mise à jour
- Dépendance forte vis-à-vis de quelques experts techniques

## Comment évaluer son niveau de clean core

SAP fournit des outils comme le Cloud Readiness Check et le Custom Code Migration App pour évaluer l'état du core et identifier les customisations à traiter.

Le score ABAP Cloud Developer (ACD) est devenu un indicateur de référence : il mesure le pourcentage de code custom compatible avec les standards SAP BTP.

## Les étapes de la mise en œuvre

1. **Audit** : inventaire complet des objets custom (programmes Z, tables Z, BAdIs, user-exits)
2. **Priorisation** : classification par criticité métier et complexité technique
3. **Refactoring** : migration des extensions critiques vers SAP BTP
4. **Dépréciation** : suppression ou désactivation des objets non utilisés
5. **Gouvernance** : mise en place de règles pour éviter la re-contamination du core

## Conclusion

Le Clean Core n'est pas une contrainte mais une opportunité. Les entreprises qui l'adoptent bénéficient d'une plus grande agilité, de cycles de mise à jour plus courts et d'une capacité accrue à innover sur SAP.`,
    contentEn: `The Clean Core strategy is one of SAP's most important orientations for coming years. It aims to simplify SAP landscapes by reducing non-standard customizations, facilitating migrations and continuous updates.

## Clean Core Definition

A "clean core" SAP system is one where:
- Standard SAP code is not modified
- Customizations are limited to standard configuration
- Extensions are developed outside the core, on SAP BTP
- Integrations use standardized APIs

## Why It Matters

Companies with heavily customized SAP cores face growing challenges: long and costly S/4HANA migrations, inability to rapidly adopt new features, regression risks with every update.

## Implementation Steps

1. **Audit**: complete inventory of custom objects
2. **Prioritization**: classification by business criticality and technical complexity
3. **Refactoring**: migration of critical extensions to SAP BTP
4. **Deprecation**: removal or deactivation of unused objects
5. **Governance**: rules to prevent core re-contamination

## Conclusion

Clean Core is not a constraint but an opportunity. Companies adopting it benefit from greater agility, shorter update cycles, and increased capacity to innovate on SAP.`,
    category: 'Migration', categoryEn: 'Migration',
    date: '2025-11-02', readTime: '8 min', emoji: '🧹',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}