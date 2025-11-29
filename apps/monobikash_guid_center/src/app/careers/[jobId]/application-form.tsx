"use client";

import { useState } from "react";
import { Button } from "@t2p-admin/ui/components/button";
import { Input } from "@t2p-admin/ui/components/input";
import { Label } from "@t2p-admin/ui/components/label";
import { Textarea } from "@t2p-admin/ui/components/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@t2p-admin/ui/components/card";
import { toast } from "sonner";
import { Loader2, User, Mail, Phone, Briefcase, Upload, FileText, CheckCircle } from "lucide-react";

interface ApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export default function ApplicationForm({ jobTitle, jobId }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Please upload a file smaller than 5MB",
        });
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
      toast.error("Missing required fields", {
        description: "Please fill in all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    // In a real application, you would send this to your backend API
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("jobId", jobId);
      submitData.append("jobTitle", jobTitle);
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("experience", formData.experience);
      submitData.append("coverLetter", formData.coverLetter);
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Application submitted!", {
        description: "Thank you for applying. We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";

    } catch {
      toast.error("Submission failed", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information Section */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="pl-10"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="pl-10"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information Section */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Professional Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Years of Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-sm font-medium">
              Years of Experience
            </Label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="experience"
                name="experience"
                type="text"
                placeholder="e.g., 2 years"
                className="pl-10"
                value={formData.experience}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-sm font-medium">
              Resume/CV <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <div className="border-2 border-dashed rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col items-center gap-2">
                  {formData.resume ? (
                    <>
                      <CheckCircle className="h-10 w-10 text-primary" />
                      <p className="text-sm font-medium text-primary">
                        {formData.resume.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(formData.resume.size / 1024).toFixed(2)} KB
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <p className="text-sm font-medium">Upload Resume</p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </>
                  )}
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cover Letter Section */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Cover Letter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-sm font-medium">
              Why do you want to join us?
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
              rows={8}
              className="resize-none"
              value={formData.coverLetter}
              onChange={handleInputChange}
            />
            <p className="text-xs text-muted-foreground">
              Share your motivation and what makes you the ideal candidate
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Submit Section */}
      <div className="space-y-4">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 h-5 w-5" />
              Submit Application
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By submitting this form, you agree to our privacy policy and consent to being contacted regarding your application.
        </p>
      </div>
    </form>
  );
}
