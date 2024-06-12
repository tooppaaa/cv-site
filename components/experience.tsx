import { Timeline, TimelineItem } from "@/components/ui/timeline";

const Experience = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem
          title="Engineering Manager"
          duration="janv. 2022 - aujourd'hui / 2 an 6 mois @ Nantes, France"
          subtitle="Cegid"
          text={
            <>
              <p className="mb-2 font-semibold">Innovation studio</p>
              <ul className="list-disc pl-4">
                <li>
                  Promotion de la culture de l&apos;innovation à travers
                  l&apos;nimation d&apos;atelier de génération d&apos;idées
                </li>
                <li>Prototypage et expérimentation</li>
                <li>
                  Architecture, partage, validation de système pour passation à
                  la R&D
                </li>
              </ul>
              <p className="mt-2 font-semibold">Réalisation</p>
              <ul className="list-disc pl-4">
                <li>
                  Mise à jour automatique des mises à jour de convention
                  collective grâce à l&apos;IA dans les produits de paie
                </li>
                <li>
                  Mise à disposition d&apos;un GPTs interne pour le groupe
                </li>
              </ul>
              <p className="mt-2 font-semibold">Management</p>
              <ul className="list-disc pl-4">
                <li>
                  Gestion d&apos;une équipe de 2 data scientists, 1 développeur
                  full-stack
                </li>
              </ul>
              <p className="mt-2 font-semibold">Mentorat</p>
              <ul className="list-disc pl-4">
                <li>
                  Accompagnement des CTOs des 3 promotions du Cegid Data Lab à
                  Station F sur les problématiques de leur rôle (architecture,
                  fonctionalité, développement, organisation des équipes...)
                </li>
                <li>Animation de communauté CTOs</li>
              </ul>
            </>
          }
        />
        <TimelineItem
          title="Architecte frontend"
          duration="janv. 2020 - déc. 2021 / 2 ans @ Nantes, France"
          subtitle="Talentsoft"
          text={
            <ul className="list-disc pl-4">
              <li>
                Mise en place du design system et de sa promotion au sein des
                développeurs, responsables produits
              </li>
              <li>Mise en place de communauté frontend et design system</li>
              <li>
                Définition et partage de la vision technique, des bonnes
                pratiques, des outils
              </li>
              <li>Mise en accessibilité de certains modules</li>
              <li>Mentorat et formation</li>
            </ul>
          }
        />
        <TimelineItem
          title="Développeur logiciel"
          duration="juil. 2016 - janv. 2020 / 3 ans 7 mois @ Courbevoie / Domicile (Nantes)"
          subtitle="Enablon"
          text={
            <ul className="list-disc pl-4">
              <li>
                Définition et implémentation d&apos;interfaces et expériences
                utilisateurs, collaboration UI/UX designer (US)
              </li>
              <li>Migration de composants jQuery vers React.JS</li>
              <li>
                Mise en place de processus, documentations et lignes directrices
                pour les développeurs web
              </li>
              <li>
                Analyses et décisions d’architecture, choix de frameworks,
                librairies, technologies
              </li>
              <li>
                Amélioration continue de la plateforme, correction de bugs
              </li>
              <li>Mise en place de tests unitaires, tests d&apos;interfaces</li>
            </ul>
          }
        />
        <TimelineItem
          title="Développeur logiciel"
          duration="oct. 2013 - juil. 2016 / 2 ans 10 mois @ Hemel Hempstead, Royaume-Uni"
          subtitle="Solition IT "
          text={
            <ul className="list-disc pl-4">
              <li>
                Création, déploiement, intégration continue d’un site de support
                client. Application web (Angular 1/React); API .Net
              </li>
              <li>
                Remaniement du site web de l&apos;entreprise. Multi-langues,
                design adapté
              </li>
              <li>
                Définition, création et déploiement en tant que PWA d&apos;une
                application mobile pour différents hôpitaux
              </li>
              <li>
                Définition, implémentation et test de nouveaux modules pour le
                système d&apos;information du département de radiologie des
                hôpitaux
              </li>
              <li>Résolution de bugs et améliorations générales</li>
              <li>Remaniement de l&apos;interface utilisateur</li>
            </ul>
          }
        />
        <TimelineItem
          title="Stagiaire développeur logiciel"
          duration="mars 2013 - août 2013 / 6 mois @ Toulouse, France"
          subtitle="Airbus"
          text={
            <ul className="list-disc pl-4">
              <li>
                Amélioration d&apos;une solution, étude de l&apos;existant et de
                son contexte
              </li>
              <li>
                Faisabilité et propositions techniques, développement en ASP
                .NET et SQL Server, tests et validation
              </li>
            </ul>
          }
        />
        <TimelineItem
          title="Assistant ingénieur"
          duration="vacances 2011 - 2012 / 4 mois @ Saint-Louis, France"
          subtitle="AMES (AIRCRAFT MAINTENANCE ENGINEERING SERVICES)"
          text={
            <ul className="list-disc pl-4">
              <li>
                Développement d&apos;applications Java, modification d&apos;un
                site web sous Joomla
              </li>
              <li>
                Génération automatique et export de documents de maintenance
                d&apos;avions et publication sur un site web
              </li>
            </ul>
          }
        />
      </Timeline>
    </div>
  );
};

export default Experience;
