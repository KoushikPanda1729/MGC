import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";
import JobDetailsSection from "./job-details-section";
import { notFound } from "next/navigation";
import { jobPostings } from "../job-data";

export async function generateMetadata(props: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  const { jobId } = await props.params;
  const job = jobPostings.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} - Careers`,
    description: job.description,
    openGraph: {
      title: `${job.title} | ${siteConfig.name}`,
      description: job.description,
      type: "website",
      url: `${siteConfig.url}/careers/${jobId}`,
    },
  };
}

export default async function JobDetailsPage(props: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await props.params;
  const job = jobPostings.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  return <JobDetailsSection job={job} />;
}
