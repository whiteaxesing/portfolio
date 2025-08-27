import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Francisco González for your next software project. Full-stack development, database optimization, and system migrations.',
};

export default function ContactPage() {
  return <ContactForm />;
}
