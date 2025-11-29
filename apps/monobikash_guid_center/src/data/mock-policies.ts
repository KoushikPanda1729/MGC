import type { SerializedEditorState } from "lexical";

// Helper to convert markdown-like text to basic Lexical format
function textToLexical(text: string): SerializedEditorState {
  const lines = text.split("\n");
  const children = [];

  for (const line of lines) {
    if (line.trim() === "") {
      // Empty paragraph for spacing
      children.push({
        children: [],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      });
    } else if (line.startsWith("# ")) {
      // H1
      children.push({
        children: [
          {
            detail: 0,
            format: 1, // bold
            mode: "normal",
            style: "",
            text: line.slice(2),
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "heading",
        tag: "h1",
        version: 1,
      });
    } else if (line.startsWith("## ")) {
      // H2
      children.push({
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: line.slice(3),
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "heading",
        tag: "h2",
        version: 1,
      });
    } else if (line.startsWith("### ")) {
      // H3
      children.push({
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: line.slice(4),
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "heading",
        tag: "h3",
        version: 1,
      });
    } else {
      // Regular paragraph
      children.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: line,
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      });
    }
  }

  return {
    root: {
      children,
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  } as SerializedEditorState;
}

const REFUND_POLICY_MD = `# 💸 Refund & Cancellation Policy

**Effective Date:** 01 July 2025
**Last Updated:** 01 July 2025

At **Manobikash GUIDE Centre** (operator of Young Guru Academy, Talk2Partners, and Mindset Building Club), we value your trust. This Refund & Cancellation Policy ensures fairness, transparency, and ease of understanding.

## 1. General Policy

• All course payments are considered final.
• Once access to any course, service, or feature is activated, full refunds are not provided.
• By completing a purchase, you agree to abide by this policy.

## 2. Refund Eligibility Timeline

Refunds apply only to courses priced above **₹1500** and only if requested within **15 days of admission**.

### Refund Breakdown:

• **0–3 days:** 60% refund
• **4–7 days:** 50% refund
• **8–15 days:** 25% refund
• **After 15 days:** No refund

### Important Notes:

• GST and payment-gateway charges are **non-refundable**.
• Requests must be emailed to **info@bunnieducation.com** within the eligibility period.
• Approved refunds are processed within **7–10 business days**.

## 3. Refunds May Also Be Considered If:

• You paid but did not receive course access due to a technical issue.
• You were charged twice (duplicate payment).
• You accidentally paid to an unauthorized bank account/UPI ID (reported within 3 days with proof).
  - While we assist, we are not responsible for incorrect transfers.
  - You email us within 3 days with:
    • Payment screenshot
    • Transaction ID

## 4. Non-Refundable Situations

Refunds will **not** be provided for:

• Change of mind
• Personal schedule issues
• Not using the service after purchase
• Course not matching expectations
• Slow/no improvement in learning
• Violation of the Code of Conduct
• Suspicious or fraudulent coupon use
• Purchases made during system testing or technical glitches

## 5. Pricing Errors, Glitches & Testing-Time Purchases

• During testing, updates, or technical errors, prices may display incorrectly (₹0, ₹1, unintended discounts).
• Any purchase made due to such errors can be:
  - Cancelled
  - Access revoked
  - Receipts voided without prior notice.
• No refund or compensation is provided for such transactions.

## 6. Cancellation Requests

• If you wish to cancel before course access is activated, email us immediately.
• After access activation, refund eligibility follows Section 2 rules.

## 7. Payment Methods Covered

This policy applies to payments made via:

• Razorpay
• UPI / Bank Transfer
• Stripe
• Website checkout
• Manual/offline payments
• Google Play Billing (if enabled in future)

## 8. ⚠️ Refunds for Apple App Store Purchases

For purchases made through the **Apple App Store**:

• Payments, subscriptions, and refunds are managed directly by Apple.
• As per Apple policy, we cannot issue refunds for in-app purchases.
• To request a refund, visit: [https://reportaproblem.apple.com](https://reportaproblem.apple.com)
• If Apple issues a refund, your access will automatically be disabled.
• We never store or access your Apple payment details.

## 9. Contact for Refund Support

**Manobikash GUIDE Centre**
• 📧 Email: info@bunnieducation.com
• 📍 Address: D-494, Ground Floor, West Vinod Nagar, East Delhi – 110092, India

## 📌 Final Note

• Review course details, syllabus, and features before enrollment.
• For clarity or doubts, contact our support team before payment.

Thank you for choosing us as your learning partner!`;

const TERMS_POLICY_MD = `# 📄 Terms of Service

**Effective Date:** 01 July 2025
**Last Updated:** 01 July 2025

These Terms of Service ("Terms") govern your use of the mobile applications, websites, and services operated by **Manobikash GUIDE Centre**, including Young Guru Academy, Talk2Partners, and Mindset Building Club (collectively, the "Platform").

By accessing or using any part of the Platform, you agree to these Terms. If you do not agree, please discontinue use immediately.

## 1. Eligibility

• Minimum age to use the Platform is **13 years**.
• Users aged 13–18 must use the Platform under parental or guardian supervision.
• If a user below 18 accesses the Platform, such use is deemed to be with parental consent.

## 2. Account Registration

• You must provide accurate and complete information during signup.
• You are responsible for safeguarding your login credentials.
• You are accountable for all activity under your account.

## 3. Services Offered

The Platform provides access to:

• Recorded video lessons, PDFs, quizzes, and tests
• Level assessment and practice tools
• Audio/video calling for learning
• Chat support and community engagement
• Certificates and progress tracking

We may add, update, or discontinue any feature without prior notice.

## 4. Payments and Subscriptions (General)

• Courses may be one-time or subscription-based.
• Payments may be processed through authorized payment gateways such as Razorpay, Stripe, or official UPI/bank channels.
• Only use payment methods officially shared by our team.
• All refunds are governed by our **Refund & Cancellation Policy**.
• Taxes and gateway charges are non-refundable.

### 4A. Apple In-App Purchases (For iOS Users Only)

This clause applies strictly to the iOS version of the app:

• All purchases made inside the iOS app must use Apple's In-App Purchase (IAP) system.
• The Platform does not process, collect, or handle payment information inside the iOS app.
• Refunds, billing issues, and subscription concerns for iOS purchases must be handled through Apple Support, as per Apple's policies.
• When Apple confirms a valid purchase, the corresponding course or plan will be activated automatically.
• External/manual payments (UPI, bank transfer, Razorpay) cannot be used to buy features within the iOS app.

## 5. Manual / Direct Payments (Non-iOS Platforms Only)

• If payment is made outside the app (e.g., UPI, bank transfer, or payment gateway link), access will be activated manually after verification.
• You are responsible for confirming the official payment details before initiating a transfer.

## 6. Code of Conduct

Users must:

• Use the Platform strictly for learning and communication.
• Not post, share, or engage in abusive, harmful, or illegal activities.
• Not impersonate other users or staff.
• Communicate respectfully during audio/video calls.
• Avoid harassment, discrimination, or offensive behavior.

**Violation may result in:**

• Immediate suspension or termination of access
• No refund of any paid fees

## 7. Learning & Result Disclaimer

We do not guarantee any specific improvement, performance outcome, or certification result. Your progress depends on your effort, consistency, and learning practices.

## 8. Intellectual Property

• All content — videos, PDFs, quizzes, course materials, branding, and platform designs — belong exclusively to **Manobikash GUIDE Centre**
• Unauthorized copying, distribution, resale, or reproduction is strictly prohibited.

## 9. Screenshot & Screen Recording Policy

To protect intellectual property and user privacy:

• Screen capture and recording may be restricted or monitored on sensitive areas such as:
  - Video lessons
  - PDF/content screens
  - Level tests and quizzes
  - Audio/video call screens
• On supported devices, screenshots may auto-block or blur.
• No personal visual data is collected — restrictions are solely for content protection.

## 10. Termination of Account

• We may suspend or terminate your account for violating these Terms.
• You may request account deletion by emailing **info@bunnieducation.com**.
• Some data may be retained for compliance or legal purposes.

## 11. Limitation of Liability

• We are not liable for indirect, incidental, or consequential damages.
• We are not responsible for interruptions due to device issues, internet failures, or third-party service disruptions.

## 12. Children's Privacy & Safety

• Platform is intended for users **13 years and above**.
• Users aged 13–18 must use the Platform under parental guidance.
• Accounts found to belong to users under 13 will be deleted promptly.
• Parents are encouraged to supervise minors while they use learning features.

## 13. Updates to These Terms

• We may update these Terms from time to time.
• Continued use after updates indicates acceptance of the revised Terms.

## 14. Privacy Policy

• The Privacy Policy explains how we collect, process, and secure your data.
• The Privacy Policy forms an integral part of these Terms.

## 15. Governing Law & Jurisdiction

• These Terms are governed by the laws of **India**.
• All disputes shall fall under the jurisdiction of the **Karkardooma Court, Delhi (India)**.

## 16. Contact Us

**Manobikash GUIDE Centre**
D-494, Ground Floor, West Vinod Nagar, East Delhi – 110092, India
📧 info@bunnieducation.com

---

By using our Platform, you agree to follow our values of respect, responsibility, and integrity. We are committed to providing a safe, secure, and inclusive learning environment for all learners.`;

const PRIVACY_POLICY_MD = `# 🔒 Privacy Policy

**Effective Date:** 01 July 2025
**Last Updated:** 01 July 2025

Welcome to **Manobikash GUIDE Centre** ("Company," "we," "our," or "us"). Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our official platforms — Young Guru Academy, Talk2Partners, and Mindset Building Club — including their mobile applications, websites, and digital services (collectively, the "Platform").

By using our app, website, or any related service, you agree to the terms outlined below.

## 1. Scope of the Policy

This policy applies to:

• All users — students, teachers, staff, affiliates, and partners.
• Users accessing via mobile apps, websites, or manual/direct payment channels.
• Leads and registrations through advertisements, WhatsApp, or partner campaigns.
• All official brands and digital properties operated by the Company.

## 2. Information We Collect

### A. Personal Information

• Name, photo, gender, age/DOB, mobile number, and email.
• Education, work details, language preferences, and geographic location.
• English proficiency level, free-time availability, and interest preferences.

### B. App Usage Data

• Course access, video watch history, test results, and progress.
• Audio/video call usage and feedback.
• Chat activity, community actions, and attendance records.

### C. Device & Technical Information

• Device model, operating system version, IP address.
• App version, crash logs, performance metrics.

### D. Payment & Transaction Data

• Payment mode, transaction ID, purchase amount, and status.
• Razorpay/Stripe/UPI identifiers (for verification only).
• Tax/GST invoice details, when required by law.

### E. Indirect Sources

• Information from social platforms (Instagram, Facebook, YouTube, WhatsApp, LinkedIn).
• Advertising or referral sources (Google Ads, Meta Ads).
• Calls, emails, WhatsApp chats, manual KYC, or support interactions.

## 3. How We Use Your Information

We use your information to:

• Provide core features such as login, profile, course access, tests, and communication.
• Enable learning partner matching and personalized content.
• Process payments and confirm your course access.
• Improve app performance, fix crashes, and enhance user experience.
• Provide customer support and service-related notifications.

### Manual/Direct Payment Activation

If you pay through UPI/bank transfer, access is activated manually after verifying payment details.

### Post-Course Communication

We may contact you for:

• New offers and discounts
• Referral programs
• Events or demo sessions

You can opt out anytime by replying "STOP" or emailing **info@bunnieducation.com**.

## 4. Legal Grounds for Processing

• Your consent
• Contractual necessity
• Legal compliance
• Legitimate business interests

## 5. Data Sharing & Disclosure

We **DO NOT sell** your personal data. We may share your information with:

### A. Trusted Partners

• Payment processors (Razorpay, Stripe)
• Hosting & analytics (AWS, GCP, Mixpanel)
• SMS/email delivery (MSG91, Firebase)
• Audio/video SDKs (ZegoCloud, Agora)

### B. Internal Teams

• Verified teachers, staff, and support members under confidentiality.

### C. Legal Authorities

• When required for safety, fraud prevention, or legal compliance.

All partners operate under strict confidentiality and data-security controls.

## 6. Data Retention

• Data is retained as long as your account is active.
• Some information (invoices/logs) may be retained as required by law.
• Once deleted, your data cannot be recovered.

## 7. Data Security

• Secure OTP & JWT-based login
• Encrypted databases and communication
• Cloud-level firewalls and access restriction
• Internal access controlled with logs and monitoring

## 8. Screenshot & Screen Recording Privacy

• To protect learning content and user privacy, screen capture and screen recording may be restricted or monitored on sensitive areas such as:
  - Video lessons
  - PDF screens
  - Test/quiz screens
  - Audio/video calling screens
• On supported devices, screenshots may be auto-blocked or blurred.
• No personal screen data is recorded — restrictions are purely for content protection.

## 9. Online Payments & Auto-Activation (Non-iOS Platforms)

• Payments through Razorpay, Stripe, UPI, or bank transfer are processed securely.
• After successful confirmation, course access is automatically activated.
• We do **NOT** store card, wallet, or UPI credentials.
• For failed/duplicate transactions, contact **info@bunnieducation.com**.
• Refunds follow our Refund Policy + payment gateway rules.

## 10. Apple In-App Purchases (iOS Users Only)

This clause applies only to the iOS version of the Platform:

• All purchases made inside the iOS app must use Apple's In-App Purchase system.
• We do **NOT** process or store payment information inside the iOS app.
• Refunds and billing issues for iOS purchases must be handled through Apple Support, as per Apple's policies.
• Once Apple verifies a successful purchase, corresponding course access is unlocked.
• External/manual payments (UPI, Razorpay, bank transfer) cannot be used for unlocking features inside the iOS app.

## 11. Your Rights

You may:

• Access or correct your data
• Withdraw consent for promotions
• Request data deletion (subject to verification)
• Contact us at **info@bunnieducation.com**

## 12. Cookies & Tracking

• Cookies are used for login sessions and preference management.
• Analytics tools (Google Analytics, Mixpanel) help us improve performance.
• We do not use third-party advertising trackers.

## 13. Children's Privacy

• The Platform is intended for users aged **13+**.
• Users aged 13–18 must use the Platform with parental guidance.
• Accounts belonging to children under 13 will be deleted immediately.
• Parents/guardians are encouraged to monitor usage for minors.

## 14. Policy Updates

• This Policy may be updated periodically.
• Major changes will be notified via email or app alerts.

## 15. Contact Us

**Manobikash GUIDE Centre**
D-494, Ground Floor, West Vinod Nagar, East Delhi – 110092, India
📧 info@bunnieducation.com

## 16. Governing Law & Jurisdiction

This Privacy Policy is governed by the laws of **India**, and all disputes fall under the jurisdiction of the **Karkardooma Court, Delhi**.

---

By continuing to use our Platform, you confirm that you have read, understood, and agreed to this Privacy Policy. We are committed to ensuring the confidentiality, integrity, and security of your data at all times.`;

export const MOCK_POLICIES = {
  REFUND: {
    id: "mock-refund-policy",
    type: "REFUND" as const,
    content: JSON.stringify(textToLexical(REFUND_POLICY_MD)),
  },
  TERMS: {
    id: "mock-terms-policy",
    type: "TERMS" as const,
    content: JSON.stringify(textToLexical(TERMS_POLICY_MD)),
  },
  PRIVACY: {
    id: "mock-privacy-policy",
    type: "PRIVACY" as const,
    content: JSON.stringify(textToLexical(PRIVACY_POLICY_MD)),
  },
};
