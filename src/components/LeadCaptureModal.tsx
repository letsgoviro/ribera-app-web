import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Mail, Phone, UserRound, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { submitOrganizerLead } from '../services/appwriteData';

type Source = 'hero' | 'pricing' | 'footer';

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
  source: Source;
  language: 'en' | 'sw';
  planHint?: string;
}

const copy = {
  en: {
    title: 'Join Ribera as an Organizer',
    subtitle: 'Tell us a bit about you and we will reach out to help you onboard.',
    fullName: 'Full Name',
    email: 'Work Email',
    phone: 'Phone (Optional)',
    organization: 'Organization (Optional)',
    planInterest: 'Which plan are you interested in?',
    submit: 'Submit Interest',
    submitting: 'Submitting...',
    success: 'Thanks for reaching out! We will contact you shortly.',
    error: 'We could not register your interest. Please try again or contact support.',
    close: 'Close',
  },
  sw: {
    title: 'Jiunge na Ribera kama Mandaaji',
    subtitle: 'Tueleze kidogo kukuhusu na tutawasiliana kukusaidia kuanza.',
    fullName: 'Jina Kamili',
    email: 'Barua Pepe ya Kazi',
    phone: 'Namba ya Simu (Hiari)',
    organization: 'Taasisi (Hiari)',
    planInterest: 'Unavutiwa na mpango upi?',
    submit: 'Tuma Udadisi',
    submitting: 'Inatuma...',
    success: 'Asante kwa kuwasiliana! Tutakupigia haraka iwezekanavyo.',
    error: 'Hatukuweza kusajili udadisi wako. Tafadhali jaribu tena au wasiliana na timu ya msaada.',
    close: 'Funga',
  },
};

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  open,
  onClose,
  source,
  language,
  planHint,
}) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    planInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        planInterest: planHint ?? '',
      });
      setIsSubmitting(false);
    }
  }, [open, planHint]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitOrganizerLead({
        ...formState,
        source,
      });
      toast.success(copy[language].success);
      onClose();
    } catch (error) {
      console.error('Failed to submit organizer lead', error);
      toast.error(copy[language].error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl dark:bg-gray-900"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-1"
            >
              <X size={18} />
              <span className="sr-only">{copy[language].close}</span>
            </button>

            <div className="mb-6 space-y-2 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {copy[language].title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {copy[language].subtitle}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <UserRound size={16} />
                  {copy[language].fullName}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm focus:border-accent-1 focus:outline-none focus:ring-2 focus:ring-accent-1/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Mail size={16} />
                  {copy[language].email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm focus:border-accent-1 focus:outline-none focus:ring-2 focus:ring-accent-1/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Phone size={16} />
                    {copy[language].phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm focus:border-accent-1 focus:outline-none focus:ring-2 focus:ring-accent-1/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Building2 size={16} />
                    {copy[language].organization}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm focus:border-accent-1 focus:outline-none focus:ring-2 focus:ring-accent-1/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {copy[language].planInterest}
                </label>
                <input
                  type="text"
                  name="planInterest"
                  value={formState.planInterest}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm focus:border-accent-1 focus:outline-none focus:ring-2 focus:ring-accent-1/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-accent-1 to-accent-3 px-6 py-4 text-lg font-semibold text-white shadow-xl transition hover:shadow-accent-1/50 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2 size={20} className="animate-spin" />}
                <span>{isSubmitting ? copy[language].submitting : copy[language].submit}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;

