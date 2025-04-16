import React from "react";

export default function TermsOfServicePage() {
  const companyName = "Brand Name";
  const websiteUrl = "https://thiswebsite.com";
  const effectiveDate = new Date().toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const contactEmail = "support@thiswebsite.com";

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Tjeneste- og Kjøpsvilkår
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            <strong>Gjeldende fra:</strong> {effectiveDate}
          </p>

          <p>
            Velkommen til {companyName}! Disse vilkårene gjelder for din bruk av vår nettside på{" "}
            {websiteUrl} og for kjøp av produkter derfra. Vennligst les vilkårene nøye før du
            handler.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Aksept av vilkår</h2>
          <p>
            Ved å bruke Nettstedet eller handle hos oss, bekrefter du at du har lest, forstått og
            akseptert disse vilkårene.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            2. Produkter og tilgjengelighet
          </h2>
          <p>
            {companyName} tilbyr premium hudpleieprodukter. Vi forbeholder oss retten til å endre
            eller trekke tilbake produkter uten forvarsel. Alle priser er i NOK og inkluderer MVA,
            med mindre annet er oppgitt.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            3. Bestilling og betaling
          </h2>
          <p>
            Ved å legge inn en bestilling, bekrefter du at du er over 18 år og juridisk i stand til
            å inngå avtaler. Betaling skjer via sikker tredjeparts betalingsløsning. Vi lagrer ikke
            betalingsinformasjon.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Frakt og levering</h2>
          <p>
            Vi sender bestillinger innen 1–3 virkedager. Leveringstid varierer basert på
            leveringsadresse og valgt fraktmetode. Se vår Frakt & Retur-side for mer informasjon.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            5. Angrerett og retur
          </h2>
          <p>
            Du har rett til å angre kjøpet innen 14 dager etter mottak, i henhold til
            angrerettloven. Produktet må returneres ubrukt og i original emballasje. Returkostnader
            dekkes av kjøper.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Reklamasjon</h2>
          <p>
            Ved feil eller mangler gjelder forbrukerkjøpsloven. Ta kontakt innen rimelig tid etter
            at du oppdaget feilen.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            7. Immaterielle rettigheter
          </h2>
          <p>
            Alt innhold på {websiteUrl} tilhører {companyName} og er beskyttet av opphavsrett.
            Uautorisert bruk er ikke tillatt.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            8. Ansvarsbegrensning
          </h2>
          <p>
            {companyName} er ikke ansvarlig for indirekte tap som følge av bruk eller manglende
            tilgang til nettstedet eller produkter, med mindre annet følger av ufravikelig
            lovgivning.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            9. Endringer i vilkår
          </h2>
          <p>
            Vi kan oppdatere disse vilkårene ved behov. Endringer trer i kraft når de publiseres på
            nettstedet. Vi anbefaler at du leser vilkårene jevnlig.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            10. Gjeldende lov og tvister
          </h2>
          <p>
            Vilkårene er underlagt norsk lov. Eventuelle tvister søkes løst i minnelighet, og hvis
            nødvendig, behandles av norske domstoler.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Kontakt oss</h2>
          <p>
            Ved spørsmål, kontakt oss på{" "}
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
