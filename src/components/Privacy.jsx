import Footer from "./Footer";

function Privacy() {
  return (
    <>
      <style>{`
        .privacy-policy .page {
          max-width: 50vw;
          margin: 0 auto;
          text-align: left;
          margin-bottom: 150px;
        }
        .privacy-policy .footer {
          width: 100vw;
          bottom: 0;
          position: fixed;
        }
      `}</style>

      <div className="privacy-policy">
        <div className="page">
          <h1 className="page-title">Privacy Policy</h1>
          <p>
            This policy applies to all information collected or submitted on
            museumistic.app and any apps for iPhone, MacOS, or other platforms
            published by Erik Kelly.
          </p>

          <h2 id="information-we-collect">User Identifiers</h2>

          <p>
            Our app uses app-specific user identifiers provided by Apple to
            associate comments with the users who create them. These identifiers
            are:
          </p>

          <div>
            <ul>
              <li>
                Unique to our app and cannot be used to identify you in other
                apps or services.
              </li>
              <li>
                Not your actual Apple ID or any personally identifiable
                information.
              </li>
              <li>
                Only used to link your comments to your user account within our
                app.
              </li>
              <li>
                Never shared with third parties or used for tracking across
                other apps or websites.
              </li>
            </ul>
          </div>

          <p>
            When you leave a comment in our app, we store this app-specific
            identifier with your comment so that:
          </p>

          <div>
            <ul>
              <li>You can see which comments you've made.</li>
              <li>You can edit or delete your own comments.</li>
              <li>
                We can display your chosen username alongside your comments.
              </li>
            </ul>
          </div>

          <p>
            This identifier contains no personal information about you and is
            designed with privacy in mind. It simply allows our app to recognize
            you as the same user when you return to the app, even across
            different devices logged into your Apple account.
          </p>

          <h2 id="information-we-collect-other">Other Notes</h2>

          <div>
            <ul>
              <li>
                The museumistic app does ask to use your location for the sole
                purpose of determining your distance from chosen artworks and/or
                galleries. Sharing your location is optional, and no location
                information is stored.
              </li>
              <li>
                The museumistic app will ask for access to your photo library if
                you're trying to download images of artworks. It is only for the
                purpose of saving artwork images that this is required.
              </li>
            </ul>
          </div>

          <h2 id="california-online-privacy-protection-act-compliance">
            California Online Privacy Protection Act Compliance
          </h2>

          <p>
            We comply with the California Online Privacy Protection Act. We
            therefore will not distribute your personal information to outside
            parties without your consent.
          </p>

          <h2 id="childrens-online-privacy-protection-act-compliance">
            Children’s Online Privacy Protection Act Compliance
          </h2>

          <p>
            We never collect or maintain information at our website from those
            we actually know are under 13, and no part of our website is
            structured to attract anyone under 13.
          </p>

          <h2 id="information-for-european-union-customers">
            Information for European Union Customers
          </h2>

          <p>
            By using our products and providing your information, you authorize
            us to collect, use, and store your information outside of the
            European Union.
          </p>

          <h2 id="international-transfers-of-information">
            International Transfers of Information
          </h2>

          <p>
            Information may be processed, stored, and used outside of the
            country in which you are located. Data privacy laws vary across
            jurisdictions, and different laws may be applicable to your data
            depending on where it is processed, stored, or used.
          </p>

          <h2 id="your-consent">Your Consent</h2>

          <p>By using our site or apps, you consent to our privacy policy.</p>

          <h2 id="contacting-us">Contacting Us</h2>

          <p>
            If you have questions regarding this privacy policy, you may email
            mail@museumistic.app.
          </p>

          <h2 id="changes-to-this-policy">Changes to this policy</h2>

          <p>
            If we decide to change our privacy policy, we will post those
            changes on this page. Summary of changes so far:
          </p>

          <ul>
            <li>May 28, 2024 - First published.</li>
          </ul>

          <p>
            This privacy policy was adapted from{" "}
            <a href="https://overcast.fm/privacy">
              Overcast.fm’s Privacy Policy
            </a>
            . Thank you to Marco Arment for allowing this.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Privacy;
