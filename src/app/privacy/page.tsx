/* eslint-disable import/no-default-export */

export default function Privacy() {
  return (
    <main>
      <section className="container flex max-w-xl flex-col gap-2 bg-white px-10 py-20 text-sm text-black">
        <h1 className="mt-4 text-3xl">Privacy policy</h1>
        <h2 className="mt-4 text-xl">Privacy and Data Protection Overview</h2>
        <p>
          LexiQuest, developed by FELIX SEBASTIAN (Sole Trader), is an
          application designed to support language learners in expanding and
          refining their vocabulary. This Privacy Policy outlines our commitment
          to protecting your privacy and explains how we collect, use, and
          safeguard your data. We encourage you to review this policy to better
          understand our practices and ensure a secure and transparent
          experience while using LexiQuest.
        </p>
        <h2 className="mt-4 text-xl">Personal information</h2>
        <p>
          LexiQuest does not collect personal information such as contact
          details or payment information. We may automatically collect certain
          technical information about your device and usage, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Referring/exit pages</li>
          <li>Operating system</li>
        </ul>
        <p>
          This information helps us assess your needs to offer relevant products
          or services and to respond to customer support requests effectively.
        </p>
        <h2 className="mt-4 text-xl">Sharing Your Information</h2>
        <p>
          The data we collect may be shared with third-party analytics services
          to enhance and improve the app’s performance and user experience.
        </p>
        <h2 className="mt-4 text-xl">Security</h2>
        <p>
          The security of your data is a priority. Any sensitive information you
          provide, such as credit card details, is encrypted using secure socket
          layer (SSL) technology to ensure safe transmission.
        </p>
        <h2 className="mt-4 text-xl">Delete Your Account</h2>
        <p>
          If you wish to delete your LexiQuest account, you may contact us at
          support@lexiquest.app. Please note that account deletion is permanent,
          and all associated data will be irreversibly removed. After deletion,
          access to your account, services, and any related content will no
          longer be available.
        </p>
        <hr />
        <p>
          For questions about data security or account deletion, please email us
          at support@lexiquest.app. We are committed to maintaining your trust
          by protecting your information and ensuring transparency in our
          privacy practices.
        </p>
      </section>
    </main>
  );
}
