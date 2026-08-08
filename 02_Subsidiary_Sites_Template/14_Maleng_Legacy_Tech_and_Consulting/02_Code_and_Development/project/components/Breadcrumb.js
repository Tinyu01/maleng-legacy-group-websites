import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

export default function Breadcrumb({ items }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {/* Home link - always first */}
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1 text-gray-400 hover:text-highlight transition-colors"
          >
            <FaHome className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        
        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <FaChevronRight className="w-3 h-3 text-gray-500" />
              {isLast ? (
                <span className="text-highlight font-medium">{item.label}</span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-gray-400 hover:text-highlight transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}