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

At **Manobikash GUIDE Centre**, we value your trust and are committed to maintaining transparency, fairness, and clarity in all financial transactions. This Refund & Cancellation Policy applies to all academic programs, spoken English courses, and skill-development services offered by our centre.

## 1. General Policy

• All course payments are considered final.
• Once classes begin or learning materials are provided, refunds are limited as per policy.
• By enrolling in a course, you agree to this Refund & Cancellation Policy.

## 2. Refund Eligibility Timeline

Refunds apply only to courses priced above **₹1500** and only if requested within **15 days of admission**.

### Refund Breakdown:

• **0–3 days:** 60% refund
• **4–7 days:** 50% refund
• **8–15 days:** 25% refund
• **After 15 days:** No refund

### Important Notes:

• GST & payment gateway charges are **non-refundable**.
• Refund requests must be emailed to **info@manobikash.in** within the eligible period.
• Refunds (when approved) are processed within **7–10 business days**.

## 3. Refunds May Also Be Considered If:

• Payment was made but access/classes were not provided due to a technical issue.
• Duplicate payment was made.
• Payment was mistakenly sent to a wrong account/UPI ID (must be reported within **3 days** with evidence).

We will assist, but we are not responsible for incorrect transfers made by the payer.

## 4. Non-Refundable Situations

Refunds will **not** be provided for:

• Change of mind
• Personal schedule issues
• Not attending classes after enrollment
• Course not meeting personal expectations
• Slow academic improvement
• Misuse or breach of student conduct
• Fraudulent discount usage
• Payments made during technical glitches or system testing

## 5. Pricing Errors & Technical Glitches

If a course displays incorrect prices (₹0, ₹1, or unintended discounts) due to a system error:

• The enrolment may be cancelled
• Access may be revoked
• No refund or compensation will be issued

## 6. Cancellation Requests

• If you cancel **before classes begin**, a refund may be possible as per timeline rules.
• Once classes or materials are accessed, the refund structure in Section 2 applies.

## 7. Payment Methods Covered

This policy applies to:

• UPI / Bank Transfer
• Razorpay
• Website or offline payments

## 8. Contact for Refund Support

**Manobikash GUIDE Centre**
📧 Email: info@manobikash.in
📍 Address: Patna Bazar, Jugnitala Main Road, Medinipur, West Bengal

## 📌 Final Note

Please review course details and schedules before enrolling.
For any confusion, reach out to us — we’re here to help!

Thank you for choosing **Manobikash Guide Centre**.`;

const TERMS_POLICY_MD = `# 📄 Terms of Service

**Effective Date:** 01 July 2025
**Last Updated:** 01 July 2025

These Terms govern the use of services provided by **Manobikash GUIDE Centre**, including academic classes, spoken English programs, online/offline learning, and related digital content.

By enrolling or accessing our services, you agree to these Terms.

## 1. Eligibility

• Minimum age for enrolment: **13 years**
• Students aged 13–18 must enroll under parental/guardian guidance

## 2. Enrollment & Registration

• Students must provide accurate information during admission.
• Attendance and discipline rules must be followed during classes.
• Misconduct may result in removal without refund.

## 3. Services Offered

We provide access to:

• Academic tuition
• Spoken English training
• Personality development & soft skills
• Career counselling
• Online learning resources (videos, PDFs, tests if applicable)

Services may be modified or updated without prior notice.

## 4. Payments & Refunds

• Fees may be one-time or instalment-based.
• Payment must be made through official channels only.
• Refunds follow the **Refund & Cancellation Policy**.

## 5. Direct/Manual Payments

Payments made through UPI/bank transfer will be verified manually before granting access.

## 6. Student Code of Conduct

Students must:

• Behave respectfully with teachers and peers
• Attend classes regularly
• Avoid misuse of study materials
• Not engage in harassment, bullying, or disruptive behaviour

Violations may lead to suspension or termination **without refund**.

## 7. Learning Disclaimer

Educational outcomes vary by individual effort.
We do not guarantee specific results, rankings, or performance outcomes.

## 8. Intellectual Property

All study materials (videos, notes, PDFs, tests, etc.) belong to **Manobikash Guide Centre**.
Unauthorized sharing or reproduction is strictly prohibited.

## 9. Class Recording & Content Safety

• Some sessions may restrict recording or screenshots to protect learning content.
• No personal screen data is stored — restrictions protect our intellectual property.

## 10. Account Termination

We may suspend or terminate student access for policy violations.
Students may request account deletion via email.

## 11. Limitation of Liability

We are not responsible for:

• Internet problems
• Device issues
• Delays caused by third-party platforms
• External factors beyond our control

## 12. Children's Safety

Students under 18 must use services under adult supervision.

## 13. Updates to Terms

We may update this document periodically.
Your continued use means acceptance of new Terms.

## 14. Contact Us

**Manobikash GUIDE Centre**
Patna Bazar, Jugnitala Main Road, Medinipur, West Bengal
📧 info@manobikash.in

Thank you for being a part of Manobikash Guide Centre.`;

const PRIVACY_POLICY_MD = `# 🔒 Privacy Policy

**Effective Date:** 01 July 2025
**Last Updated:** 01 July 2025

At **Manobikash GUIDE Centre**, your privacy is our priority. This policy explains how we collect, use, and protect your information during academic and skill-development programs.

## 1. What Information We Collect

### A. Personal Information
• Name, phone number, email
• Class, subjects, and preferred schedule

### B. Learning Data
• Attendance
• Performance & improvement reports

### C. Technical Information (if using online resources)
• Device type, IP address, app/website usage

### D. Payment Information
• Payment method, transaction ID
(We **do not** store any bank/UPI credentials)

## 2. How We Use Your Information

• To provide classes and learning materials
• To communicate schedules and updates
• To improve teaching quality
• To verify payments and admissions

## 3. Data Sharing

We do **not** sell your data. Information may be shared only with:

• Teachers & staff (for academic purposes)
• Payment gateways (Razorpay/UPI verification)
• Legal authorities when required

## 4. Data Retention

Your data is stored only as long as needed for academic and administrative purposes.

## 5. Data Security

We use secure systems and restricted access to protect your information.

## 6. Your Rights

You may:

• Request data updates
• Request deletion (where legally possible)
• Opt-out of promotional messages

Contact: **info@manobikash.in**

## 7. Children's Safety

Students under 18 must participate under parental guidance.

## 8. Policy Updates

We may update this policy periodically.
Continued use indicates acceptance.

## 9. Contact Us

**Manobikash GUIDE Centre**
Patna Bazar, Jugnitala Main Road, Medinipur, West Bengal
📧 info@manobikash.in

We are committed to protecting your privacy and providing a safe learning experience.`;

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
