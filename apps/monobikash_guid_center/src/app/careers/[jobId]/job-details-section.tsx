"use client";

import { useState } from "react";
import { Button } from "@t2p-admin/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@t2p-admin/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@t2p-admin/ui/components/tabs";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Building2,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import ApplicationForm from "./application-form";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

interface JobDetailsSectionProps {
  job: JobPosting;
}

export default function JobDetailsSection({ job }: JobDetailsSectionProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      {/* Hero Section with Job Header */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button - Right Aligned */}
          <div className="flex justify-end mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-sm font-medium hover:bg-background hover:border-primary/50 transition-all group shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Jobs
            </Link>
          </div>

          {/* Job Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {job.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {job.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Layout with Left Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Job Info Only */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                {/* Job Details Card */}
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Job Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Department */}
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Department
                        </p>
                        <p className="font-semibold">{job.department}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Location
                        </p>
                        <p className="font-semibold">{job.location}</p>
                      </div>
                    </div>

                    {/* Job Type */}
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Job Type
                        </p>
                        <p className="font-semibold">{job.type}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Content Area with Tabs on Top */}
            <div className="flex-1 min-w-0">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                {/* Tabs at Top */}
                <TabsList className="w-full h-auto bg-transparent border-0 p-0 mb-6">
                  <TabsTrigger
                    value="overview"
                    className="flex-1 px-4 py-3 rounded-none border-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    <span className="font-medium">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="apply"
                    className="flex-1 px-4 py-3 rounded-none border-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    <span className="font-medium">Application</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0 space-y-6">
                  {/* Responsibilities Card */}
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          Key Responsibilities
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Qualifications Card */}
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          Required Qualifications
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {job.qualifications.map((qualification, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {qualification}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* About Company Card */}
                  <Card className="bg-secondary/20 border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          About Young Guru Academy
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Young Guru Academy is a leading educational institution
                        empowering over 50,000 students across India with
                        quality education. We are committed to helping students
                        improve their English language skills and achieve their
                        career goals.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Join our team of passionate educators and professionals
                        who are dedicated to making a difference in students&apos;
                        lives. We offer a supportive work environment,
                        opportunities for professional growth, and the chance to
                        be part of a mission that transforms lives.
                      </p>

                      {/* Why Join Us Section */}
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-semibold text-lg mb-4">
                          Why Join Us?
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Impact at Scale</p>
                              <p className="text-sm text-muted-foreground">
                                Reach 50,000+ students
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Career Growth</p>
                              <p className="text-sm text-muted-foreground">
                                Learning & development
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Collaborative Team</p>
                              <p className="text-sm text-muted-foreground">
                                Work with passionate people
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Work-Life Balance</p>
                              <p className="text-sm text-muted-foreground">
                                Flexible environment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA at bottom of overview */}
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold">Ready to Apply?</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Join our team and make a difference in the lives of
                          thousands of students. Click below to submit your
                          application.
                        </p>
                        <Button
                          size="lg"
                          className="mt-4"
                          onClick={() => setActiveTab("apply")}
                        >
                          Apply for this Position
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="apply" className="mt-0">
                  <Card className="shadow-lg">
                    <CardHeader className="bg-secondary/20">
                      <CardTitle className="text-2xl">
                        Apply for {job.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Fill out the form below and we&apos;ll get back to you within
                        2-3 business days
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ApplicationForm jobTitle={job.title} jobId={job.id} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
