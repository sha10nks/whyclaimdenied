import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - WhyClaimDenied</title>
        <meta name="description" content="Terms of use for WhyClaimDenied. Please read these simple guidelines before using our informational website." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Terms of Use</h1>
        
        <p>
          Welcome to WhyClaimDenied. We’ll keep this plain and readable. By using the site, you agree to the terms below.
        </p>

        <h2>Information Only</h2>
        <p>
          WhyClaimDenied is an educational website about insurance claim denials in the United States. It’s not an insurance company, a law firm, a medical provider, or a government agency.
        </p>
        <p>
          The content here is general information. It isn’t legal advice, medical advice, or professional insurance advice. If you need guidance for your situation, talk to a qualified professional before you act.
        </p>

        <p>
          Here’s the key point: we can explain how things often work, but we can’t tell you what will happen in your claim.
        </p>

        <h2>Your Responsibility</h2>
        <p>
          You’re responsible for how you use what you read here. Decisions about treatment, repairs, deadlines, appeals, or legal action can have serious consequences. Don’t rely on a single article as your only source.
        </p>

        <p>
          You should read your actual policy and denial letter. Those documents control your claim. If a deadline or requirement matters, verify it with official sources or a professional.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          Use the site in a normal, respectful way. Don’t try to break it, interfere with it, or overload it. Don’t use automated tools to scrape large parts of the site.
        </p>

        <p>
          You’re welcome to share links and talk about what you found helpful. If you quote us, keep it short and keep it accurate.
        </p>

        <h2>Accuracy and Updates</h2>
        <p>
          We work hard to keep pages accurate and current, but we can’t promise every detail will always be up to date. Laws change. Regulations change. Insurer practices and plan documents change.
        </p>

        <p>
          Sometimes the right answer depends on facts we can’t see: your state, your plan type, what was submitted, what was missing, and what was said on the phone. Use this site as a starting point, then confirm the details that apply to you.
        </p>

        <h2>Copyright and Fair Use</h2>
        <p>
          You’re welcome to share links to our pages. You can also quote short excerpts with clear credit.
        </p>

        <p>
          Don’t copy full articles, scrape the site, or repost our content as your own work. We put real time into researching and writing it.
        </p>

        <h2>External Links</h2>
        <p>
          Some pages link to other websites for convenience, like government resources or industry references. We don’t control those sites, and we can’t guarantee they’ll stay accurate, available, or secure.
        </p>

        <h2>Ads and Third Parties</h2>
        <p>
          The site may display ads. Third-party services involved in advertising or analytics may collect information through cookies or similar technologies. For details, read our Privacy Policy.
        </p>

        <p>
          Ads don’t create a relationship between you and an advertiser, and they don’t change the meaning of anything we publish.
        </p>

        <h2>No Guarantees</h2>
        <p>
          We don’t guarantee outcomes. Reading this site doesn’t improve or reduce the chance of a denial, approval, settlement, appeal win, or reimbursement. It’s information, not a promise.
        </p>

        <h2>Site Availability</h2>
        <p>
          We try to keep the site online and working, but we can’t guarantee uninterrupted access. Pages may change, move, or be removed.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the extent allowed by law, WhyClaimDenied isn’t liable for losses or damages that result from using the site or relying on its content.
        </p>

        <h2>Governing Jurisdiction</h2>
        <p>
          These terms are governed by the laws of the United States, without regard to conflict of law rules.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. If you keep using the site after an update, you’re agreeing to the revised terms.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Terms;
