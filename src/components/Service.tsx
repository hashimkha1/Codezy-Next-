import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web Development",
    description:
      "Our Website design is always responsiveand the kind of Website layout we design,Proudly reflects the nature of your Business.",
    link: "/",
  },
  {
    title: "Mobile App Development",
    description:
    "Our specialty both Native & Hybrid Mobile Apps,Augmented Reality, Enterprise Mobility & more,For IOS, Android & Windows.",
    link: "/",
  },
  {
    title: "Custom ERP system",
    description:
      "We have vast experience in designing multiple ERP products including CRM,Delivery Management System, Warehouse Management System,Financials, Project Management, Payroll, Inventory, ERP Integration with eCommerce Store.",
    link: "/",
  },
  {
    title: "E-Commerce Development",
    description:
      "Our team develops eCommerce Stores with high level customizations, Theme Development, Module Development, API Integration, Payment Gateway Integration by using Laravel (PHP), Ruby on Rails, Woocommerce. ReactJS, AngularJS.",
    link: "/",
  },
  {
    title: "Quality Assurance & Finishing Projects",
    description:
      "Many clients come to us with incomplete apps which we finish off for them. If you have an app which needs completion then bring it to us, so it could be done within the deadlines. You will not need to worry about the quality.",
    link: "/",
  },
  {
    title: "UI/UX",
    description:
      "Save time and money by allowing us to build unique interactive features that will take your UI/UX design experience to a whole new level.",
    link: "/",
  },
];
