interface LearnMoreProps {
  title: string;
  description: string;
  links: Array<{
    url: string;
    text: string;
    description: string;
  }>;
}

export function LearnMore({ title, description, links }: LearnMoreProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>

      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-md hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-blue-600 group-hover:text-blue-700 mb-1 flex items-center">
                  {link.text}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
