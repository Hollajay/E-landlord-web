import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import '../styles/bounce.css'

interface FaqProps {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}
export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<FaqProps[]>([
    {
      id: 1,
      question: "How to sign up?",
      answer:
        "To sign up, download the E-Landlord app and click on the Sign Up button. Fill in your details and verify your email. Once completed, you can start exploring available rentals.",
      open: false,
    },
    {
      id: 2,
      question: "Can I save rentals?",
      answer:
        "Yes, you can save your favorite rentals by clicking the Save button on the property details page. These saved rentals will be accessible from your user profile. This feature helps you keep track of your preferred options.",
      open: false,
    },
    {
      id: 3,
      question: "What payment methods accepted?",
      answer:
        "The E-Landlord app accepts various payment methods, including credit/debit cards and bank transfers. You can link your bank account or use your wallet for seamless transactions. Ensure your payment method is verified for smooth processing.",
      open: false,
    },
    {
      id: 4,
      question: "How to contact landlord?",
      answer:
        "You can contact the landlord directly through the app using the chat or call button on the property details page. This allows for instant communication regarding any inquiries. Make sure to check the landlord's availability.",
      open: false,
    },
    {
      id: 5,
      question: "What if I have issues?",
      answer:
        "If you encounter any issues, please reach out to our support team through the 'Contact' section in the app. We are here to assist you with any problems you may face. Your satisfaction is our priority.",
      open: false,
    },
  ]);

  const handleClick = (id: number) => {
    setOpenFaq((prevFaq) =>
      prevFaq.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="px-6 py-10 space-y-7">
      <div>
        <h1 className="md:text-4xl text-3xl font-bold text-[#ff9d02]">FAQs</h1>
        <p className="text-lg text-[#006A71]">
          Find answers to common questions about using the E-Landlord app
          effortlessly
        </p>
      </div>

      <div className="flex-col flex gap-8">
        {openFaq.map((data, index) => (
         <div
         key={index}
         className={
           data.open
             ? "bg-[#006A71] shadow-3xs rounded-lg py-4 px-4 transition-all duration-500"
             : "shadow-3xs rounded-lg py-4 px-4 transition-all duration-500"
         }
       >
         <div
           onClick={() => handleClick(data.id)}
           className="flex justify-between items-center cursor-pointer"
         >
           <p className={data.open ? "font-bold text-[#ff9d02]" : "font-semibold text-[#006A71]"}>
             {data.question}
           </p>
           <button type="button">{data.open ? <FaMinus  color="#ff9d02"/> : <FaPlus color="#ff9d02"/>}</button>
         </div>
       
         <div className={`bounce-transition ${data.open ? "open" : "closed"}`}>
           <p className="text-sm font-medium mt-2 text-[#9ACBD0]">
             {data.answer}
           </p>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};
