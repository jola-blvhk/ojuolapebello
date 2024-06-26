import Script from "next/script";

const CalendlyForm = ({ type }: { type?: string }) => {
  const username = "awujoolabello";
  const showDetails: number = 0;
  const showCookies: number = 0;

  return (
    <>
      <div
        className="calendly-inline-widget w-screen h-screen"
        data-url={`https://calendly.com/${username}${
          type ? `/${type}` : ""
        }?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
      ></div>

      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

export default CalendlyForm;


