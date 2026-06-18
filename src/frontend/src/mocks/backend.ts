import type { backendInterface, Inquiry } from "../backend";

const inquiries: Inquiry[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    company: "Vital Green Foods",
    message: "Interested in partnership and distribution opportunities.",
    timestamp: BigInt(Date.now() - 3600000),
  },
  {
    name: "Jane Smith",
    email: "jane@ecogreens.com",
    company: "Eco Greens Ltd",
    message: "Do you offer wholesale pricing for bulk purchases?",
    timestamp: BigInt(Date.now() - 7200000),
  }
];

export const mockBackend: backendInterface = {
  async getAllInquiries(): Promise<Inquiry[]> {
    return inquiries;
  },
  async submitInquiry(name: string, email: string, company: string, message: string): Promise<void> {
    inquiries.push({
      name,
      email,
      company,
      message,
      timestamp: BigInt(Date.now()),
    });
  }
};
