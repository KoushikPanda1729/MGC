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

const REFUND_POLICY_MD = `# Refund & Cancellation Policy

**Effective Date:** January 1, 2025
**Last Updated:** November 30, 2025

---

## Overview

At Manobikash Guide Centre, we are committed to transparency and fairness in all our transactions. This policy outlines the terms and conditions for refunds and cancellations for our in-person educational services.

---

## Refund Eligibility

### Timeline-Based Refunds

Refunds are available **only for courses priced above ₹1,500** and must be requested within **15 days of enrollment**.

| Days Since Enrollment | Refund Percentage |
|-----------------------|-------------------|
| 0-3 days              | 60%              |
| 4-7 days              | 50%              |
| 8-15 days             | 25%              |
| After 15 days         | No refund        |

### Important Conditions

- GST charges are **non-refundable**
- Refund requests must be submitted in person at our center or via email to **dash.jyotirmoy1987@gmail.com**
- Approved refunds are processed within **7-10 business days**
- All course payments are considered final once classes begin

---

## Special Refund Cases

Refunds may be considered in the following situations:

- Payment made but classes not provided due to unforeseen circumstances
- Duplicate payment occurred
- Payment error (must be reported within 3 days with proof)

**Note:** We will assist with resolution, but are not responsible for incorrect payments made by the student.

---

## Non-Refundable Situations

Refunds will **NOT** be provided for:

- Change of mind after enrollment
- Personal schedule conflicts
- Non-attendance after enrollment
- Course not meeting personal expectations
- Slow academic progress
- Violation of student conduct policies
- Fraudulent discount usage

---

## Cancellation Policy

- Cancellations **before classes begin** may be eligible for refunds per the timeline above
- Once classes start, the standard refund structure applies
- Cancellation requests must be submitted in writing (in person or via email)

---

## Payment Methods

This policy applies to all payment methods:

- Cash payments at the center
- UPI / Bank Transfer
- Online Payment (when available)

---

## Contact Us

For refund inquiries or support:

**Manobikash Guide Centre**
📍 Rangamati (Near - High school), Mitra- Compound (Near -Hotel Deblok), Abash (Near Shitola Temple), Medinipur, West Bengal
📧 dash.jyotirmoy1987@gmail.com
📞 +91 9735836582

---

*Please review all course details and schedules carefully before enrolling. Visit our center or contact us if you have any questions.*`;

const TERMS_POLICY_MD = `# Terms of Service

**Effective Date:** January 1, 2025
**Last Updated:** November 30, 2025

---

## Agreement to Terms

By enrolling in classes at Manobikash Guide Centre, you agree to be bound by these Terms of Service. Please read them carefully.

---

## Eligibility

- Minimum age for enrollment: **13 years**
- Students aged 13-18 must enroll under parental or guardian supervision
- Accurate information must be provided during registration

---

## Services Offered

We provide the following in-person educational services:

- **Academic Tuition** - Classes 5-12 (WBBSE & WBCHSE)
- **Spoken English Training** - All proficiency levels
- **Skill Development Programs** - Personality development and soft skills
- **Career Counseling** - Guidance and planning
- **Study Materials** - Notes, worksheets, and practice tests

**Note:** Services and schedules may be modified to improve quality and accommodate student needs.

---

## Payment Terms

- Fees may be one-time or installment-based
- Payments can be made at the center in cash or via UPI/bank transfer
- All refunds are subject to our Refund & Cancellation Policy
- Payment confirmation is required before class attendance

### Payment Verification

For UPI/bank transfers, please show payment confirmation at the center for verification.

---

## Student Code of Conduct

All students must:

- Treat teachers and peers with respect
- Attend classes regularly and punctually
- Bring required books and materials to class
- Not share or distribute study materials without permission
- Avoid disruptive behavior, harassment, or bullying
- Follow all center rules and guidelines
- Maintain cleanliness in classrooms

**Violations may result in suspension or termination without refund.**

---

## Academic Disclaimer

- Educational outcomes depend on individual effort and dedication
- We do not guarantee specific results, rankings, or examination scores
- Progress varies by student and is influenced by multiple factors including attendance and practice

---

## Intellectual Property

All study materials including notes, worksheets, tests, and other content provided by **Manobikash Guide Centre** are for personal educational use only.

- Unauthorized sharing, reproduction, or distribution is strictly prohibited
- Materials remain the property of the center
- Violations may result in termination of enrollment

---

## Attendance Policy

- Regular attendance is mandatory for academic progress
- Students must inform the center in advance for planned absences
- Excessive absences may affect continuation in the program
- Make-up classes are subject to teacher availability

---

## Safety & Conduct

- Students must follow all safety guidelines at the center
- Parents/guardians are responsible for student drop-off and pick-up
- The center is not responsible for personal belongings
- Any damage to center property must be compensated

---

## Account Termination

We reserve the right to:

- Suspend or terminate enrollment for policy violations
- Remove students who engage in misconduct
- Cancel enrollment for fraudulent activities or non-payment

Students may request withdrawal by contacting us in person or via email.

---

## Limitation of Liability

Manobikash Guide Centre is not responsible for:

- Personal injuries occurring outside center premises
- Lost or stolen personal belongings
- Delays or cancellations due to unforeseen circumstances
- External factors beyond our control

---

## Children's Safety

Students under 18 must be dropped off and picked up by parents/guardians. We prioritize a safe learning environment for all students.

---

## Changes to Terms

We may update these Terms of Service periodically. Continued enrollment after changes indicates acceptance of the new terms.

---

## Contact Information

**Manobikash Guide Centre**
📍 Rangamati (Near - High school), Mitra- Compound (Near -Hotel Deblok), Abash (Near Shitola Temple), Medinipur, West Bengal
📧 dash.jyotirmoy1987@gmail.com
📞 +91 9735836582

**Center Hours:** Monday to Saturday, 8:00 AM - 8:00 PM

---

*Thank you for being part of Manobikash Guide Centre. We are committed to your educational success.*`;

const PRIVACY_POLICY_MD = `# Privacy Policy

**Effective Date:** January 1, 2025
**Last Updated:** November 30, 2025

---

## Our Commitment

At Manobikash Guide Centre, your privacy is our priority. This Privacy Policy explains how we collect, use, protect, and handle your personal information at our educational center.

---

## Information We Collect

### Personal Information

- Full name and date of birth
- Phone number and email address
- Residential address
- Parent/guardian contact information (for students under 18)
- Class/grade level and subjects of interest
- Previous academic records (if provided)

### Academic Data

- Attendance records
- Test scores and assessments
- Assignment submissions and grades
- Progress reports and feedback
- Class participation notes

### Payment Information

- Payment method used (cash, UPI, bank transfer)
- Fee payment records and receipts
- Transaction dates and amounts

**Important:** We do **NOT** store bank account details, card numbers, or UPI credentials.

---

## How We Use Your Information

We use collected information to:

- Provide in-person educational services and study materials
- Communicate class schedules, updates, and announcements
- Track attendance and academic progress
- Prepare progress reports for parents/guardians
- Improve teaching quality and course content
- Verify fee payments and manage enrollments
- Contact parents/guardians regarding student performance

---

## Data Sharing

We **DO NOT** sell or rent your personal information to third parties.

Information may be shared only with:

- **Teachers & Staff** - For academic and administrative purposes
- **Parents/Guardians** - Progress reports and important updates
- **Legal Authorities** - When required by law

---

## Data Security

We implement security measures to protect your information:

- Secure storage of physical records in locked cabinets
- Restricted access to student files
- Staff training on data protection and confidentiality
- Regular review of security practices

We maintain confidentiality of all student records and personal information.

---

## Data Retention

Your personal information is retained for:

- Duration of enrollment plus 2 years for academic records
- As required by educational regulations
- Legal and administrative requirements

You may request data deletion after this period, subject to legal obligations.

---

## Your Rights

You have the right to:

- **Access** your personal data and academic records
- **Update** incorrect or outdated information
- **Request copies** of progress reports and assessments
- **Opt-out** of promotional communications
- **Request deletion** of data (where legally permissible)

To exercise these rights, visit our center or contact us at **dash.jyotirmoy1987@gmail.com**

---

## Children's Privacy

For students under 18:

- Parents/guardians must provide consent during enrollment
- Parents/guardians have access to all student records
- We communicate important updates to parents/guardians
- Parents/guardians are responsible for accuracy of provided information

---

## Photography & Video

Occasionally, we may take photographs or videos during classes or events for:

- Internal documentation
- Promotional materials (with prior consent)
- Progress tracking

Parents/guardians can opt-out of having their child photographed by informing us in writing.

---

## Third-Party Services

We do not share student information with third-party services or websites. All educational activities are conducted in-person at our center.

---

## Policy Updates

We may update this Privacy Policy periodically to reflect changes in:

- Our practices
- Legal requirements
- Educational standards

Continued enrollment after updates indicates acceptance of the revised policy. We will notify parents/guardians of significant changes.

---

## Contact Us

For privacy-related questions or concerns:

**Manobikash Guide Centre**
📍 Rangamati (Near - High school), Mitra- Compound (Near -Hotel Deblok), Abash (Near Shitola Temple), Medinipur, West Bengal
📧 dash.jyotirmoy1987@gmail.com
📞 +91 9735836582

**Visit us:** Monday to Saturday, 8:00 AM - 8:00 PM

---

*We are committed to protecting your privacy and providing a safe learning environment for all students.*`;

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
