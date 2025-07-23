export default function ContactSection() {
  const contacts = [
    { label: "Email", value: "alan.ngo96@outlook.com", href: "mailto:alan.ngo96@outlook.com" },
    { label: "LinkedIn", value: "linkedin.com/in/ango96", href: "https://www.linkedin.com/in/ango96/" },
  ];

  return (
    <section id="contact" className="w-full bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500">
      <div className="max-w-5xl mx-auto rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact & Links</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          {contacts.map(({ label, value, href }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="font-semibold min-w-[80px]">{label}:</span>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
