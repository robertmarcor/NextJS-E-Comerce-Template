import React from "react";

export default function ShippingReturnsPage() {
  const contactEmail = "support@thiswebsite.com";

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Frakt & Retur</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fraktpolicy</h2>
          <p>
            Vi streber etter å behandle og sende alle bestillinger så raskt som mulig. Når
            bestillingen din er plassert, vennligst tillat 1–2 virkedager for behandling.
          </p>
          <p>
            <strong>Estimert leveringstid:</strong> Levering tar vanligvis mellom{" "}
            <strong>4 til 12 virkedager</strong>
            etter behandling, avhengig av din lokasjon. Merk at dette er estimater, og faktiske
            leveringstider kan variere på grunn av forsinkelser hos transportøren eller andre
            uforutsette omstendigheter.
          </p>
          <p>Fraktkostnader beregnes i kassen basert på din destinasjon.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Retur- og refusjonspolicy
          </h2>
          <p>På grunn av produktets natur aksepterer vi ikke returer.</p>
          <p>
            Din tilfredshet er imidlertid viktig for oss. Hvis produktet ditt ankommer ødelagt eller
            skadet, vennligst kontakt oss umiddelbart (innen 48 timer etter mottak av bestillingen)
            på
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              {" "}
              {contactEmail}{" "}
            </a>
            med ditt ordrenummer og fotografisk dokumentasjon av skaden.
          </p>
          <p>
            Etter verifisering vil vi utstede full refusjon for den skadede varen. Vi tilbyr ikke
            refusjon av andre grunner enn skade som har oppstått under frakt.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Spørsmål?</h2>
          <p>
            Hvis du har spørsmål angående vår frakt- eller returpolicy, ikke nøl med å kontakte oss
            på{" "}
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
