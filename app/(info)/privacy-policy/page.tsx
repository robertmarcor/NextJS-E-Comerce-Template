import React from "react";

export default function PrivacyPolicyPage() {
  const companyName = "Brand Name";
  const websiteUrl = "https://thiswebsite.com";
  const dpoEmail = "privacy@thiswebsite.com";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Personvernerklæring
      </h1>

      <p className="text-base md:text-lg leading-relaxed">
        {companyName} er behandlingsansvarlig for behandlingen av personopplysninger som beskrevet i
        denne personvernerklæringen. I denne personvernerklæringen forklarer vi hva slags
        personopplysninger vi lagrer og hvordan vi behandler de. Denne personvernerklæringen gjelder
        for:{" "}
        <a
          href={websiteUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer">
          {websiteUrl}
        </a>
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Personopplysninger vi samler inn og behandler
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Vi behandler følgende kategorier av personopplysninger:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
          <li>
            <strong>Grunnleggende informasjon:</strong> navn, fødselsdato
          </li>
          <li>
            <strong>Kontaktinformasjon:</strong> adresse, telefonnummer, epostadresse
          </li>
          <li>
            <strong>Konto og profilinformasjon:</strong> Innstillinger, preferanser
          </li>
          <li>
            <strong>Betalingsinformasjon:</strong> Transaksjonsinformasjon, betalingsmiddel
          </li>
          <li>
            <strong>Kundehistorikk og kundeengasjement:</strong> bestillings- og
            leveringsopplysninger, handlekurvbevegelser, rabattkoder, lojalitetsprograminformasjon
          </li>
          <li>
            <strong>Kundeaktivitet:</strong> lese- og handlingshistorikk fra app, nettsider eller
            elektronisk kommunikasjon vi sender ut. Samt teknisk informasjon om enhetene du bruker.
          </li>
          <li>
            <strong>Cookies:</strong> se vår informasjon om cookies her:{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Cookies
            </a>{" "}
            {/* TODO: Update this link */}
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Hvordan vi bruker personopplysningene
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
          <li>
            <strong>Levering av tjeneste/avtaleinngåelse:</strong> Nødvendig for å oppfylle en
            avtale med deg.
          </li>
          <li>
            <strong>Administrasjon av kundeforhold:</strong> Kundeservice, klagebehandling og
            feilretting.
          </li>
          <li>
            <strong>Analyse og forbedring:</strong> Utvikling og forbedring av tjenester basert på
            analyse av personopplysninger.
          </li>
          <li>
            <strong>Tilpasset brukeropplevelse:</strong> Tilpasse kommunikasjon og opplevelse etter
            ditt forhold til oss.
          </li>
          <li>
            <strong>Salg og markedsføring:</strong> Epost og annen kommunikasjon basert på
            berettiget interesse og eventuelt samtykke.
          </li>
          <li>
            <strong>Systemovervåking og feilretting:</strong> Lagring og behandling for å sikre
            drift og rette feil.
          </li>
          <li>
            <strong>Sikkerhet og kriminalitet:</strong> Forebygge svindel og kriminelle handlinger.
          </li>
          <li>
            <strong>Rettslige forpliktelser:</strong> F.eks. bokføringslovens krav til oppbevaring.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Dine rettigheter
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Dersom du ønsker å utøve noen av dine rettigheter, ta kontakt med oss på{" "}
          <a
            href={`mailto:${dpoEmail}`}
            className="text-blue-600 dark:text-blue-400 hover:underline">
            {dpoEmail}
          </a>
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
          <li>
            <strong>Rett til innsyn:</strong> Få en kopi av alle opplysninger vi behandler om deg.
          </li>
          <li>
            <strong>Rett til korrigering:</strong> Be om retting av feilaktige eller misvisende
            opplysninger.
          </li>
          <li>
            <strong>Rett til sletting:</strong> Be om sletting av dine opplysninger uten ugrunnet
            opphold.
          </li>
          <li>
            <strong>Begrensning av behandling:</strong> Be oss begrense behandlingen i visse
            situasjoner.
          </li>
          <li>
            <strong>Protestere:</strong> Du kan protestere mot behandling basert på
            interesseavveining.
          </li>
          <li>
            <strong>Dataportabilitet:</strong> Få utlevert personopplysninger i maskinlesbart
            format.
          </li>
          <li>
            <strong>Klage:</strong> Du kan klage til Datatilsynet dersom du mener vi bryter reglene.
          </li>
        </ul>
      </section>
    </div>
  );
}
